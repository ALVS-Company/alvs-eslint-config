# alvs-eslint-config
ALVS - Advanced Level Virtual Systems default eslint code pattern config for used technologies.

# Usage
You can extended one of these configurations, depending on the project you are developing:

-- **alvs-company**
-- **alvs-company/typescript**
-- **alvs-company/react**
-- **alvs-company/react-typescript**

PS.: If you are using `@alvs-company/typescript` or `@alvs-company/react-typescript` configs you will need to install some dependencies:

```bash
yarn @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

for `@alvs-company/react-typescript` also install:

```bash
yarn eslint-plugin-jsx-ally eslint-plugin-react eslint-plugin-react-hooks
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
    "extends": "alvs-company/typescript",
    "parserOptions": {
      "project": "./tsconfig.json"
    }
  }
}
```