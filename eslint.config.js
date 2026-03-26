/* eslint-disable @typescript-eslint/no-require-imports */
const tseslint = require('typescript-eslint');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const prettierConfig = require('eslint-config-prettier');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  {
    ignores: ['**/lib/**', '**/types/**', '**/node_modules/**', '**/*.d.ts']
  },
  ...tseslint.configs.recommended,
  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin
    },
    settings: {
      react: {
        version: '19.2.0'
      }
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      'comma-dangle': ['error', 'never'],
      'no-eval': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true }
      ],
      // These react rules use context APIs removed in ESLint 10
      'react/jsx-no-undef': 'off',
      'react/no-unescaped-entities': 'off',
      // Relax rules that were not enforced by @react-native-community/eslint-config
      '@typescript-eslint/no-explicit-any': 'off',
      'react/display-name': 'off',
      // New in react-hooks@7, not previously enforced
      'react-hooks/set-state-in-effect': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowShortCircuit: true, allowTernary: true }
      ]
    }
  }
];
