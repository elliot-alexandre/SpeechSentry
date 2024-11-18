/** @type {import(eslint).Linter.Config}  */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "only-warn"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  extends: ["eslint:recommended", "prettier", "turbo"],

  rules: {
    "no-console": 1,
    "prettier/prettier": 2,
  },
  env: {
    node: true,
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "dist/",
  ],
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"],
    },
  ],
};
