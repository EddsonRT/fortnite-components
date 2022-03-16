module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['prettier', '@typescript-eslint', '@emotion'],
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': [
      'off',
      {
        allowedNames: ['ignoredFunctionName', 'ignoredMethodName']
      }
    ],
    'multiline-ternary': ['off', 'always'],
    '@typescript-eslint/ban-ts-ignore': ['off'],
    '@typescript-eslint/camelcase': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/interface-name-prefix': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-unused-expressions': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-use-before-define': 'off',
    'comma-dangle': ['error', 'never'],
    'no-async-promise-executor': ['off'],
    'no-empty-pattern': ['off'],
    'no-undef': ['error'],
    'no-var': ['error'],
    curly: ['error', 'multi'],
    'object-curly-spacing': ['error', 'always'],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true }
    ],
    semi: ['error', 'never'],
    'spaced-comment': ['off'],
    'no-prototype-builtins': ['off'],
    'sort-keys': ['off'],
    'space-before-function-paren': ['off'],
    indent: ['off']
  },
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true
  }
}
