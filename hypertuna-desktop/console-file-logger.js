import { promises as fs } from 'fs'
import { join } from 'path'

// Determine storage directory
const storageDir = (typeof Pear !== 'undefined' && Pear.config && Pear.config.storage) ? Pear.config.storage : '.'
const logFilePath = join(storageDir, 'desktop-console.log')

function writeLog(level, args) {
  const message = args.map(arg => {
    try {
      return typeof arg === 'string' ? arg : JSON.stringify(arg)
    } catch {
      return '[Unserializable]' 
    }
  }).join(' ')
  const line = `[${new Date().toISOString()}] [${level.toUpperCase()}] ${message}\n`
  fs.appendFile(logFilePath, line).catch(() => {})
}

for (const level of ['log', 'info', 'warn', 'error']) {
  const original = console[level].bind(console)
  console[level] = (...args) => {
    writeLog(level, args)
    original(...args)
  }
}

export { logFilePath }
