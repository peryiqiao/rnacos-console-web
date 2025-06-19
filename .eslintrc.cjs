/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  plugins: ['vue'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser'
  },
  env: {
    'vue/setup-compiler-macros': true
  },
  rules: {
    'vue/script-setup-uses-vars': 'error',
    'vue/no-unused-vars': 'error',
    'vue/no-undef-components': [
      'error',
      {
        ignorePatterns: ['^n-'] // 忽略 Naive UI 组件
      }
    ],
    'vue/no-undef-properties': 'error',
    'vue/this-in-template': 'error',
    'vue/no-mutating-props': 'warn',
    'vue/no-v-html': 'off', // 如需用 v-html 可关闭
    'vue/multi-word-component-names': 'off', // 允许单词组件名
    'vue/require-default-prop': 'off', // 允许 props 没有默认值
    'vue/require-explicit-emits': 'off', // 允许不显式声明 emits

    'no-unused-vars': 'warn',
    'no-undef': 'error',
    'no-console': 'warn',
    'no-debugger': 'warn'
  }
}
