import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import cssInjectedByJs from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [react(), cssInjectedByJs()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'main',
      fileName: 'main',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        dir: resolve(__dirname, 'front'),
      },
    },
    emptyOutDir: false,
  },
  resolve: {
    alias: {
      store: 'src/store',
      types: 'src/types',
      utils: 'src/utils',
      API: 'src/API',
    },
  },
});
