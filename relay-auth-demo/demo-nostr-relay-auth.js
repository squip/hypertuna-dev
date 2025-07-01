// demo-relay-auth.js 

const WebSocket = require('ws');
const http = require('http');
const crypto = require('crypto');
const url = require('url');
const fs = require('fs');
const path = require('path');
const qrcode = require('qrcode-terminal');
const { parse } = require('querystring');
const secp256k1 = require('noble-secp256k1');

const PORT = 8080;
const SECRET = 'demo_shared_secret';
const relayPrivKey = secp256k1.utils.randomPrivateKey();
const relayPubKey = Buffer.from(secp256k1.getPublicKey(relayPrivKey, true)).toString('hex').substring(2);

const allowlist = {};
const qrSessions = {};
const pendingChallenges = {};

function sha256(data) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

function normalizeIp(ip) {
  if (ip === '::1') return '127.0.0.1';
  if (ip.startsWith('::ffff:')) return ip.replace('::ffff:', '');
  return ip;
}

function get24Subnet(ip) {
  const normalized = normalizeIp(ip);
  return normalized.split('.').slice(0, 3).join('.');
}

function createToken(pubkey) {
  return sha256(SECRET + pubkey);
}

function extractTokenFromReq(req) {
  const parsed = url.parse(req.url, true);
  return parsed.query.token || '';
}

function isAuthorized(token, ip) {
  for (const pubkey in allowlist) {
    const entry = allowlist[pubkey];
    if (entry.token === token) {
      return pubkey;
    }
  }
  return null;
}

function aesDecrypt(keyBuffer, ciphertext, ivB64) {
  const iv = Buffer.from(ivB64, 'base64');
  const decipher = crypto.createDecipheriv('aes-256-cbc', keyBuffer, iv);
  let decrypted = decipher.update(ciphertext, 'base64', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

const server = http.createServer();
const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws, req, pubkey) => {
  console.log(`[RELAY] ✅ Authorized connection for pubkey: ${pubkey}`);
  ws.send(JSON.stringify(["NOTICE", `Welcome ${pubkey}`]));
  ws.on('message', msg => {
    try {
      const data = JSON.parse(msg);
      if (Array.isArray(data) && data[0] === 'REQ') {
        ws.send(JSON.stringify(["EVENT", "🎉 Mock event from relay"]));
      } else {
        ws.send(JSON.stringify(["NOTICE", "Only REQ messages allowed."]));
      }
    } catch {
      ws.send(JSON.stringify(["NOTICE", "Invalid message format."]));
    }
  });
});

server.on('upgrade', (req, socket, head) => {
  const ip = normalizeIp(req.socket.remoteAddress);
  const token = extractTokenFromReq(req);
  const pubkey = isAuthorized(token, ip);
  if (!pubkey) {
    socket.write('HTTP/1.1 403 Forbidden\r\n\r\n');
    return socket.destroy();
  }
  wss.handleUpgrade(req, socket, head, (ws) => wss.emit('connection', ws, req, pubkey));
});

server.on('request', async (req, res) => {
  const parsed = url.parse(req.url, true);
  const pathname = parsed.pathname;

  if (req.method === 'GET' && pathname === '/') {
    const html = fs.readFileSync(path.join(__dirname, 'public', 'auth.html'));
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end(html);
  }

  if (req.method === 'POST' && pathname === '/begin-auth') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const { pubkey } = parse(body);
      const challenge = crypto.randomBytes(16).toString('hex');
      pendingChallenges[pubkey] = challenge;
      console.log(`[BEGIN AUTH] Challenge for pubkey ${pubkey}: ${challenge}`);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ challenge, relayPubKey }));
    });
    return;
  }

  if (req.method === 'POST' && pathname === '/verify-ownership') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      const { pubkey, ciphertext, iv } = JSON.parse(body);
      const challenge = pendingChallenges[pubkey];
      console.log(`[VERIFY] Incoming data for pubkey: ${pubkey}`);
      console.log('  Challenge:', challenge);
      console.log('  Ciphertext:', ciphertext);
      console.log('  IV:', iv);

      if (!challenge) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'No challenge found.' }));
      }

      // Get shared secret (this returns a Uint8Array)
      const shared = await secp256k1.getSharedSecret(relayPrivKey, '02' + pubkey, true);
      // Use the same key derivation as the client - slice from index 1 to 33
      const keyBuffer = Buffer.from(shared.slice(1, 33));
      console.log('  Server shared key (hex):', keyBuffer.toString('hex'));

      try {
        const decrypted = aesDecrypt(keyBuffer, ciphertext, iv);
        console.log('  Decrypted:', decrypted);
        if (decrypted === challenge) {
          const token = createToken(pubkey);
          allowlist[pubkey] = {
            token
          };

          delete pendingChallenges[pubkey];
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ token }));
        } else {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ error: 'Challenge mismatch.' }));
        }
      } catch (e) {
        console.error('[DECRYPTION ERROR]', e);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Decryption error.' }));
      }
    });
    return;
  }

  if (req.method === 'POST' && pathname === '/start-session') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const { pubkey } = parse(body);
      const sessionId = crypto.randomBytes(8).toString('hex');
      const desktopIp = normalizeIp(req.socket.remoteAddress);
      qrSessions[sessionId] = { pubkey, desktop_ip: desktopIp };
      const qrUrl = `http://localhost:${PORT}/authorize?session=${sessionId}`;
      qrcode.generate(qrUrl, { small: true });
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ sessionId, qrUrl }));
    });
    return;
  }

  if (req.method === 'GET' && pathname === '/authorize') {
    const session = qrSessions[parsed.query.session];
    if (!session) return res.end('Invalid or expired session.');
    const entry = allowlist[session.pubkey];
    if (entry) {
      // Mobile IP authorized
    }
    return res.end('✅ Mobile IP authorized.');
  }

  res.writeHead(404);
  res.end('Not found');
});

server.listen(PORT, () => {
  console.log(`[RELAY] 🚀 Relay listening on http://localhost:${PORT}`);
  console.log(`[RELAY] 🛡️  relayPubKey: ${relayPubKey}`);
});
