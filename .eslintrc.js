module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    "react-hooks/rules-of-hooks": 'error',
    "react-hooks/exhaustive-deps": 'off',
    "no-console": "error",
  }
};
