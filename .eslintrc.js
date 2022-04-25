'use strict';

module.exports = {
  plugins: ['jest'],
  env: {
    'commonjs': true,
    'es2021': true,
    'node': true,
    'jest/globals': true,
  },
  extends: ['google', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    strict: ['error', 'global'],
  },
};
