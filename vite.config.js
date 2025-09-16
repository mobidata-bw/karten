import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import fg from 'fast-glob';

export default defineConfig(({ mode }) => {

  // process.on('uncaughtException', (err) => {
  //   if (err?.code === 'ENOENT') console.warn('[dev] Ignored ENOENT', err.path);
  //   else throw err;
  // });

  const env = loadEnv(mode, process.cwd(), '');
  const basePath = env.VITE_BASE_PATH;
  const outDir = env.VITE_OUT_DIR;

  return {
    base: basePath,
    resolve: {
      alias: { '@assets': resolve(__dirname, 'assets') },
    },
    build: {
      rollupOptions: {
        input: fg.sync('maps/**/*.html').reduce((entries, file) => {
          const name = file.replace(/^maps\/(.+)\.html$/, '$1');
          entries[name] = resolve(__dirname, file);
          return entries;
        }, {})
        // input: {
        //   parkApiCarOnStreet: resolve(__dirname, 'maps/ipl/park-api_car_on-street/index.html')
        // }       
      },
      outDir: outDir,
      emptyOutDir: true
    },
    server: {
      port: 5173,
      open: '/maps/' 
    }
  };
});