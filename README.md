# eslint-config-alvstech
ALVS - Advanced Level Virtual Systems default eslint code pattern config for used technologies.

# Usage
You can extended one of these configurations, depending on the project you are developing:

-- **eslint-config-alvstech**
-- **eslint-config-alvstech/typescript**

PS.: If you are using `eslint-config-alvstech/typescript` config you will need to install some dependencies:

```bash
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

finally, install ALVS ESLint config

```bash
yarn eslint-config-alvstech
```

## Setup
For setting up ALVS ESLint Config, just extend and tweak the config as you like in your `package.json`:

```json
{
  "eslintConfig": {
    "root": true,
    "extends": "eslint-config-alvstech/SELECTED-ESLINT-CONFIG",
    "parserOptions": {
      "project": "./tsconfig.json"
    }
  }
}
```