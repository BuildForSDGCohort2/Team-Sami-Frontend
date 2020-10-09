module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ['react-app', 'airbnb', 'plugin:jsx-a11y/recommended', 'prettier', 'prettier/react'],
  plugins: ['jsx-a11y', 'prettier', 'stylelint-prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': [
      'error',
      {
        semi: true
      }
    ]
  }
};
