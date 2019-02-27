module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-indent.md
    // "vue/html-indent": ["error", 2, {
    //   // "attribute": 1,
    //   // "baseIndent": 1,
    //   // "closeBracket": 0,
    //   "alignAttributesVertically": false,
    //   "ignores": []
    // }]
  }
}
