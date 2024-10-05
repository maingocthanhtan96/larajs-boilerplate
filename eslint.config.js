import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginSecurity from 'eslint-plugin-security';
import importPlugin from 'eslint-plugin-import';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';

const isProd = process.env.NODE_ENV === 'production';

export default [
  { files: ['**/*.{ts,vue}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tsEslint.parser } } },
  eslintConfigPrettier,
  pluginSecurity.configs.recommended,
  eslintPluginUnicorn.configs['flat/recommended'],
  {
    linterOptions: {
      reportUnusedDisableDirectives: 0,
    },
  },
  {
    plugins: {
      'unused-imports': unusedImports,
    },
  },
  {
    plugins: {
      imports: importPlugin,
    },
  },
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 0,
      'no-console': isProd ? 1 : 0,
      'no-undef': 0,
    },
  },
  {
    rules: {
      'vue/multi-word-component-names': 0,
    },
  },
  {
    rules: {
      'unicorn/filename-case': 0,
      'unicorn/prevent-abbreviations': 0,
    },
  },
  {
    rules: {
      'security/detect-object-injection': 0,
    },
  },
  {
    ignores: ['public', 'vendor', 'node_modules', 'dist', '*.d.ts'],
  },
];
