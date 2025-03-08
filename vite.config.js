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
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'TouhouFest 2024 Schedule',
        short_name: 'TouhouFest',
        description: 'Digital schedule for TouhouFest with events, bookmarks, filters, and more',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        screenshots: [
          {
            src: "widescreenshot.png",
            sizes: "1680x970",
            type:"image/png",
            form_factor:"wide",
            label:"Desktop Version"
          },
          {
            src:"narrow.png",
            sizes: "375x812",
            type:"image/png",
            form_factor:"narrow",
            label:"Mobile Version"
          }
        ]
      }
    }) ],
    assetsInclude: ["**/*.csv"],
    base:"/"
  };
});