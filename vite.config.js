import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { glob } from 'glob';

export default defineConfig({
  base: '/Personal_Page/',
  server: {
    open: '/index.html',
  },
  build: {
    outDir: 'dist',
  }
})
