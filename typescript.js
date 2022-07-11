module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "./index.js",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaVersion": 13,
    "sourceType": "module",
  },
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": true
        }
      }
    ],
  },
  settings: {
    "import/resolver": {
      "typescript": {}
    }
  }
};