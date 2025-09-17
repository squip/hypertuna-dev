import { promises as fs } from 'fs';
import { basename, extname } from 'path';
import { NostrUtils } from './NostrUtils.js';
import { HypertunaUtils } from './HypertunaUtils.js';

function mimeFromExtension(ext) {
  const map = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.mp4': 'video/mp4',
    '.mp3': 'audio/mpeg',
    '.pdf': 'application/pdf',
    '.txt': 'text/plain'
  };
  return map[ext.toLowerCase()] || 'application/octet-stream';
}

export async function prepareFileAttachment(filePath, identifier) {
  const buffer = await fs.readFile(filePath);
  const fileHash = await NostrUtils.computeSha256(buffer);
  const ext = extname(filePath);
  const fileId = `${fileHash}${ext}`;

  let gatewayDomain;
  try {
    gatewayDomain = new URL(HypertunaUtils.DEFAULT_GATEWAY_URL).hostname;
  } catch (e) {
    gatewayDomain = HypertunaUtils.DEFAULT_GATEWAY_URL.replace(/^https?:\/\//, '');
  }

  // Build URL using publicIdentifier (npub:alias) when provided
  const fileUrl = `https://${gatewayDomain}/drive/${identifier}/${fileId}`;
  const metadata = {
    mimeType: mimeFromExtension(ext),
    filename: basename(filePath)
  };

  const tags = [
    ['r', fileUrl, 'hypertuna:drive'],
    ['i', 'hypertuna:drive']
  ];

  return { buffer, fileHash, fileId, fileUrl, metadata, tags };
}
