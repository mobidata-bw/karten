import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import fg from 'fast-glob';

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '');
  const basePath = env.VITE_BASE_PATH;

  return {
    base: basePath,
    resolve: {
      alias: { '@assets': resolve(__dirname, 'assets') }
    },
    build: {
      rollupOptions: {
        input: fg.sync('maps/**/*.html').reduce((entries, file) => {
          const name = file.replace(/^maps\/(.+)\.html$/, '$1');
          entries[name] = resolve(__dirname, file);
          return entries;
        }, {})
        // input: {
        //   charge_points: resolve(__dirname, 'maps/gebuendelte_daten/index.html')
        // }       
      },
      outDir: 'dist',
      emptyOutDir: true
    },
    server: {
      port: 5173,
      open: '/maps/'
    }
  };
});