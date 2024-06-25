module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "eslint-config-prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'import/no-unresolved': [0],
    'import/named': [0],
    'react/display-name': [0],
    'i18next/no-literal-string': [0],
    'react/prop-types': [0],
    'react/react-in-jsx-scope': [0],
    '@typescript-eslint/no-unused-vars': [0],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
