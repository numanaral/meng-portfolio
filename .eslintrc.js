// .eslintrc.js
// create-react-app
const OFF = 0;
const WARN = 1;
const ERROR = 2;

/**
 * @typedef {Object} ESLintRules
 * @property {import('eslint/rules').ESLintRules} rules
 * @typedef {import('eslint').Linter.Config&ESLintRules} ESLintConfig
 */

/**
 * @type {ESLintConfig}
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    // 'react-app',
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "prettier"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
        paths: ["./src"],
      },
    },
  },
  rules: {
    // 'arrow-parens': [ERROR, 'as-needed'],
    "default-case": [ERROR, { commentPattern: "No Default" }],
    "global-require": OFF,
    "no-param-reassign": [
      ERROR,
      { props: true, ignorePropertyModificationsFor: ["draft"] },
    ],
    "import/no-named-as-default": OFF,
    "import/no-unresolved": [ERROR, { caseSensitive: false }],
    "import/prefer-default-export": OFF,
    "max-len": OFF,
    "no-alert": WARN,
    "no-console": OFF,
    "no-continue": OFF,
    "no-debugger": OFF,
    "no-plusplus": OFF,
    // 'no-tabs': OFF,
    "no-underscore-dangle": OFF,
    "no-unused-vars": WARN,
    "react-hooks/exhaustive-deps": WARN,
    "react-hooks/rules-of-hooks": ERROR,
    "react/jsx-filename-extension": [WARN, { extensions: [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": OFF,
    "react/no-array-index-key": OFF,
    "react/no-unescaped-entities": OFF,
    "react/jsx-boolean-value": OFF,
    "react/prop-types": OFF,
    "react/react-in-jsx-scope": OFF,
    "prettier/prettier": ERROR,
    "jsx-a11y/label-has-associated-control": OFF,
    "import/extensions": [
      OFF,
      {
        js: "never",
      },
    ],
    "no-irregular-whitespace": OFF,
    "react/button-has-type": OFF,
    "consistent-return": OFF,
  },
};
