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
        input: fg.sync('maps/**/index.html').reduce((entries, file) => {
          const name = file.replace(/^maps\/(.+)\/index\.html$/, '$1');
          entries[name] = resolve(__dirname, file);
          return entries;
        }, {})
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/maplibre-gl')) return 'vendor-maplibre';
          if (id.includes('node_modules/@maplibre/')) return 'vendor-maplibre-plugins';
          if (id.includes('node_modules/@geoman-io/')) return 'vendor-geoman';
          if (id.includes('node_modules/maplibre-notifications-master'))
            return 'vendor-notifications';
          if (id.includes('node_modules')) return 'vendor-others';
        }
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