import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
  server: {
    open: false,
    port: 5173,
  },
  preview: {
    port: 4173,
  },
});
