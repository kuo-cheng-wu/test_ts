module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: [
    "@typescript-eslint", 
    "jest",
    "jest-formatting",
    "promise",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "plugin:jest-formatting/recommended"
  ],
  rules: {
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
  },
  overrides: [
    {
      files: ["*.js"],
      rules: { "@typescript-eslint/no-var-requires": "off" },
    },
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
};
