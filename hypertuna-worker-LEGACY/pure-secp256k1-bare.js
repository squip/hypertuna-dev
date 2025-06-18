/**
 * pure-secp256k1-bare-fixed.js
 * Fixed implementation with proper BIP340 Y-coordinate handling
 */

import crypto from 'bare-crypto';

// secp256k1 curve parameters
const CURVE = {
  p: 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,
  n: 0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,
  Gx: 0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,
  Gy: 0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,
  a: 0n,
  b: 7n
};

// Modular arithmetic
const mod = (n, m = CURVE.p) => ((n % m) + m) % m;

const modInverse = (a, m = CURVE.p) => {
  let [old_r, r] = [a, m];
  let [old_s, s] = [1n, 0n];
  
  while (r !== 0n) {
    const quotient = old_r / r;
    [old_r, r] = [r, old_r - quotient * r];
    [old_s, s] = [s, old_s - quotient * s];
  }
  
  if (old_r !== 1n) throw new Error('No modular inverse');
  return mod(old_s, m);
};

const modPow = (base, exp, m) => {
  let result = 1n;
  base = mod(base, m);
  while (exp > 0n) {
    if (exp & 1n) result = mod(result * base, m);
    exp >>= 1n;
    base = mod(base * base, m);
  }
  return result;
};

// Point operations
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.infinity = x === null && y === null;
  }
  
  static ZERO = new Point(null, null);
  
  isZero() {
    return this.infinity;
  }
  
  equals(other) {
    if (this.isZero() && other.isZero()) return true;
    if (this.isZero() || other.isZero()) return false;
    return this.x === other.x && this.y === other.y;
  }
  
  negate() {
    if (this.isZero()) return this;
    return new Point(this.x, mod(-this.y));
  }
  
  double() {
    if (this.isZero()) return this;
    
    const { x, y } = this;
    const s = mod(3n * x * x * modInverse(2n * y));
    const x3 = mod(s * s - 2n * x);
    const y3 = mod(s * (x - x3) - y);
    
    return new Point(x3, y3);
  }
  
  add(other) {
    if (this.isZero()) return other;
    if (other.isZero()) return this;
    if (this.equals(other)) return this.double();
    if (this.x === other.x) return Point.ZERO;
    
    const dx = mod(other.x - this.x);
    const dy = mod(other.y - this.y);
    const s = mod(dy * modInverse(dx));
    const x3 = mod(s * s - this.x - other.x);
    const y3 = mod(s * (this.x - x3) - this.y);
    
    return new Point(x3, y3);
  }
  
  multiply(k) {
    if (k === 0n) return Point.ZERO;
    if (k === 1n) return this;
    
    let result = Point.ZERO;
    let base = this;
    
    while (k > 0n) {
      if (k & 1n) result = result.add(base);
      base = base.double();
      k >>= 1n;
    }
    
    return result;
  }
}

// Generator point
const G = new Point(CURVE.Gx, CURVE.Gy);

// Helper functions
function bytesToBigInt(bytes) {
  let result = 0n;
  for (const byte of bytes) {
    result = (result << 8n) | BigInt(byte);
  }
  return result;
}

function bigIntToBytes(num, length = 32) {
  const bytes = new Uint8Array(length);
  let temp = num;
  for (let i = length - 1; i >= 0; i--) {
    bytes[i] = Number(temp & 0xffn);
    temp >>= 8n;
  }
  return bytes;
}

function concatBytes(...arrays) {
  const totalLength = arrays.reduce((acc, arr) => acc + arr.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const arr of arrays) {
    result.set(arr, offset);
    offset += arr.length;
  }
  return result;
}

// BIP340 tagged hash
function taggedHash(tag, ...data) {
  const tagHash = crypto.createHash('sha256').update(tag).digest();
  return crypto.createHash('sha256')
    .update(tagHash)
    .update(tagHash)
    .update(concatBytes(...data))
    .digest();
}

// Lift x to point
function liftX(x) {
  if (x >= CURVE.p) return null;
  
  const y2 = mod(x * x * x + CURVE.b);
  const y = modPow(y2, (CURVE.p + 1n) / 4n, CURVE.p);
  
  if (mod(y * y) !== y2) return null;
  
  // Always return the even y
  return new Point(x, y % 2n === 0n ? y : CURVE.p - y);
}

// Main exports with Noble-compatible API
const nobleSecp256k1 = {
  utils: {
    randomPrivateKey: () => {
      let privKey;
      do {
        privKey = crypto.randomBytes(32);
        const k = bytesToBigInt(privKey);
        if (k > 0n && k < CURVE.n) return privKey;
      } while (true);
    },
    
    sha256: (data) => {
      return crypto.createHash('sha256').update(data).digest();
    },
    
    bytesToHex: (bytes) => {
      return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
    },
    
    hexToBytes: (hex) => {
      const bytes = new Uint8Array(hex.length / 2);
      for (let i = 0; i < bytes.length; i++) {
        bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
      }
      return bytes;
    }
  },
  
  getPublicKey: (privateKey, compressed = true) => {
    const privBytes = typeof privateKey === 'string' 
      ? nobleSecp256k1.utils.hexToBytes(privateKey)
      : privateKey;
    
    const k = bytesToBigInt(privBytes);
    if (k === 0n || k >= CURVE.n) {
      throw new Error('Invalid private key');
    }
    
    const point = G.multiply(k);
    const xBytes = bigIntToBytes(point.x);
    
    if (compressed) {
      const prefix = point.y % 2n === 0n ? 0x02 : 0x03;
      return concatBytes(new Uint8Array([prefix]), xBytes);
    } else {
      const yBytes = bigIntToBytes(point.y);
      return concatBytes(new Uint8Array([0x04]), xBytes, yBytes);
    }
  },
  
  schnorr: {
    sign: async (messageHash, privateKey) => {
      const privBytes = typeof privateKey === 'string' 
        ? nobleSecp256k1.utils.hexToBytes(privateKey)
        : privateKey;
      const msgBytes = typeof messageHash === 'string' 
        ? nobleSecp256k1.utils.hexToBytes(messageHash)
        : messageHash;
      
      const d = bytesToBigInt(privBytes);
      if (d === 0n || d >= CURVE.n) {
        throw new Error('Invalid private key');
      }
      
      // Get public key point
      const P = G.multiply(d);
      
      // BIP340: Use the private key negated if the public key y is odd
      const d_ = P.y % 2n === 0n ? d : CURVE.n - d;
      
      // Generate deterministic nonce
      const aux = crypto.randomBytes(32);
      const t = d_ ^ bytesToBigInt(taggedHash('BIP0340/aux', aux));
      const rand = taggedHash('BIP0340/nonce', bigIntToBytes(t), bigIntToBytes(P.x), msgBytes);
      const k_ = mod(bytesToBigInt(rand), CURVE.n);
      
      if (k_ === 0n) {
        throw new Error('Failure to generate nonce');
      }
      
      // R = k'⋅G
      const R = G.multiply(k_);
      
      // BIP340: Use k negated if R.y is odd
      const k = R.y % 2n === 0n ? k_ : CURVE.n - k_;
      
      // e = int(hash(R.x || P.x || m)) mod n
      const e = mod(
        bytesToBigInt(taggedHash('BIP0340/challenge', bigIntToBytes(R.x), bigIntToBytes(P.x), msgBytes)),
        CURVE.n
      );
      
      // s = (k + ed') mod n
      const s = mod(k + e * d_, CURVE.n);
      
      // Signature: R.x || s
      return concatBytes(bigIntToBytes(R.x), bigIntToBytes(s));
    },
    
    verify: async (signature, messageHash, publicKey) => {
      try {
        const sigBytes = typeof signature === 'string' 
          ? nobleSecp256k1.utils.hexToBytes(signature)
          : signature;
        const msgBytes = typeof messageHash === 'string' 
          ? nobleSecp256k1.utils.hexToBytes(messageHash)
          : messageHash;
        const pubBytes = typeof publicKey === 'string' 
          ? nobleSecp256k1.utils.hexToBytes(publicKey)
          : publicKey;
        
        if (sigBytes.length !== 64) return false;
        
        const r = bytesToBigInt(sigBytes.slice(0, 32));
        const s = bytesToBigInt(sigBytes.slice(32, 64));
        
        if (r >= CURVE.p || s >= CURVE.n) return false;
        
        // Extract public key x-coordinate
        let Px;
        if (pubBytes.length === 32) {
          Px = bytesToBigInt(pubBytes);
        } else if (pubBytes.length === 33 && (pubBytes[0] === 0x02 || pubBytes[0] === 0x03)) {
          Px = bytesToBigInt(pubBytes.slice(1));
        } else {
          return false;
        }
        
        // Lift x to point P
        const P = liftX(Px);
        if (!P) return false;
        
        // e = int(hash(r || P.x || m)) mod n
        const e = mod(
          bytesToBigInt(taggedHash('BIP0340/challenge', bigIntToBytes(r), bigIntToBytes(P.x), msgBytes)),
          CURVE.n
        );
        
        // R = s⋅G - e⋅P
        const sG = G.multiply(s);
        const eP = P.multiply(e);
        const R = sG.add(eP.negate());
        
        // Verification: R ≠ ∞ ∧ R.y is even ∧ R.x = r
        if (R.isZero() || R.y % 2n !== 0n || R.x !== r) {
          return false;
        }
        
        return true;
      } catch (error) {
        return false;
      }
    }
  }
};

export { nobleSecp256k1 };

console.log('Fixed Pure JavaScript secp256k1 loaded successfully');
