import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

const isProd = process.env.NODE_ENV === 'production';

export default [
  { files: ['**/*.{ts,vue}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tsEslint.parser } } },
  {
    rules: {
      'vue/multi-word-component-names': 0,
      'no-console': isProd ? 1 : 0,
      '@typescript-eslint/ban-ts-comment': 0,
      'no-undef': 0,
    },
  },
  {
    ignores: ['public', 'vendor', 'node_modules', 'dist', '*.d.ts'],
  },
];
