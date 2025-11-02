import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get the current hostname if available
const getHostname = () => {
  try {
    return process.env.HOSTNAME || process.env.HOST || 'localhost'
  } catch (e) {
    return 'localhost'
  }
}

// Comprehensive list of allowed hosts for various environments
const getAllowedHosts = () => {
  const hosts = [
    'localhost',
    '127.0.0.1',
    '0.0.0.0',
    '.killercoda.com',
    '.papa.r.killercoda.com',
    '.katacoda.com',
    '.gitpod.io',
    '.codespaces.github.com',
    // Regex patterns for dynamic hostnames
    /.*-.*-.*-.*-.*\.papa\.r\.killercoda\.com$/,
    /.*\.killercoda\.com$/,
    /.*\.katacoda\.com$/,
    /.*\.gitpod\.io$/,
    /.*\.codespaces\.github\.com$/,
    // Specific hostname if detected
    getHostname()
  ]
  
  // Add any additional hosts from environment
  if (process.env.ALLOWED_HOSTS) {
    hosts.push(...process.env.ALLOWED_HOSTS.split(','))
  }
  
  return hosts
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: getAllowedHosts(),
    strictPort: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false
      }
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: getAllowedHosts()
  }
})
