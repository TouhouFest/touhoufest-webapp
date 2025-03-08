import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from 'vite-plugin-commonjs';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [react(), commonjs(), VitePWA({
      registerType: 'autoUpdate',
      manifest: false,
    }) ],
    assetsInclude: ["**/*.csv"],
    base:"/"
  };
});