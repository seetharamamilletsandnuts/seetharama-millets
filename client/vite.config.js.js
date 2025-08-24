// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // root path
  build: {
    outDir: 'dist' // ensure Vercel knows output dir
  }
});