# alvs-eslint-config
ALVS - Advanced Level Virtual Systems default eslint code pattern config for used technologies.

# Usage
You can extended one of these configurations, depending on the project you are developing:

-- **alvs-company/alvs-eslint-config**
-- **alvs-company/alvs-eslint-config/typescript**

PS.: If you are using `@alvs-company/alvs-eslint-config/typescript` config you will need to install some dependencies:

```bash
yarn @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

finally, install ALVS ESLint config

```bash
yarn @alvs-company/alvs-eslint-config
```

## Setup
For setting up ALVS ESLint Config, just extend and tweak the config as you like in your `package.json`:

```json
{
  "eslintConfig": {
    "root": true,
    "extends": "@alvs-company/alvs-eslint-config/SELECTED-ESLINT-CONFIG",
    "parserOptions": {
      "project": "./tsconfig.json"
    }
  }
}
```