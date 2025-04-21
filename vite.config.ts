import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/colorscape-murals/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]'
      }
    }
  },
  server: {
    watch: {
      usePolling: true
    },
    fs: {
      strict: false,
      allow: ['..']
    }
  },
  publicDir: 'public'
});