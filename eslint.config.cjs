const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = [
  // ignore config files and node_modules
  { ignores: [".eslintrc.cjs", "eslint.config.cjs", "node_modules/**"] },
  // Convert legacy "extends" and shareable configs to flat-config entries
  ...compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier"
  ),
  // Project-specific overrides
  ...compat.config({
    env: {
      browser: true,
      es2021: true,
    },
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["react", "react-hooks", "jsx-a11y", "import", "prettier"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "prettier/prettier": "error",
      "no-unused-vars": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  }),
];
