import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [
    // If you want to run directly from the Laravel server, you can use the laravel-vite-plugin
    // If you want to run the Vite server separately, you can comment out the laravel-vite-plugin and remove index.html from the root folder.
    laravel({
      input: ['resources/ts/main.ts'],
    }),
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: ['./resources/ts/composables/**', './resources/ts/api/**', 'resources/ts/stores', './resources/ts/utils'],
      dts: true,
      viteOptimizeDeps: true,
      vueTemplate: true,
      injectAtEnd: true,
    }),
    Components({
      dirs: ['resources/ts/components'],
      dts: true,
      deep: true,
    }),
    createSvgIconsPlugin({
      iconDirs: ['resources/ts/assets/icons/svg'],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('resources/ts', import.meta.url)),
    },
  },
});
