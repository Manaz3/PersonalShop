module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es2021: true,
      node: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    overrides: [],
    parserOptions: {
      ecmaVersion: 'latest',
    },
    plugins: ['react'],
    rules: {
      'no-restricted-syntax': 0,
      'react/prop-types': 0,
    },
  };  