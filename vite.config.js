import { defineConfig } from 'vite';
import { resolve } from 'path';
import fg from 'fast-glob';

export default defineConfig({
  base: '',
  resolve: {
    alias: { '@assets': resolve(__dirname, 'assets') }
  },
  build: {
    rollupOptions: {
      input: fg.sync('maps/**/index.html').reduce((entries, file) => {
        const name = file.replace(/^maps\/(.+)\/index\.html$/, '$1');
        entries[name] = resolve(__dirname, file);
        return entries;
      }, {})
    },
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    port: 5173
  }
});
