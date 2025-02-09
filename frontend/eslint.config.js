module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // Enforce Prettier formatting as ESLint errors
    'react/prop-types': 'off', // Disable prop-types if using TypeScript
    'no-console': 'warn', // Warn on console.log usage
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
};
