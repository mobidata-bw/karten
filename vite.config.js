import { defineConfig } from 'vite';
import { resolve } from 'path';
import fg from 'fast-glob';

export default defineConfig({
  base: '/karten_vite/',
  // base: '',
  resolve: {
    alias: { '@assets': resolve(__dirname, 'assets') }
  },
  build: {
    rollupOptions: {
      input: fg.sync('**/index.html', {
        ignore: ['public/**', 'node_modules/**', 'dist/**']
      }).reduce((entries, file) => {
        // 'auswertungen/mobilstationen/index.html' → key: 'auswertungen/mobilstationen'
        const name = file.replace(/\/index\.html$/, '');
        entries[name] = resolve(__dirname, file);
        return entries;
      }, {})
    },
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    host: true,
    port: 5173
  }
});
