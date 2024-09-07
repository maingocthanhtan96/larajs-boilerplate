import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [
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
      '@': fileURLToPath(new URL('./resources/ts', import.meta.url)),
    },
  },
});
