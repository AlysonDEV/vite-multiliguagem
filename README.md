# Vite (React + TypeScript) - Usando estado em idioma inglês e portuquês.

## Objetivo

Criar um estado para mudar o idioma do site inteiro, de acordo com a opção definida pelo usuário.

## Como surgio a nescessidade

Na comuniddade do Discord da Rocketseat um colega fez a pergunta de como mudar o idioma do projeto criado em vite. Para testar minha teoria na utilização do estado para a mudança do idioma fiz esse projeto mostrando essa funcionalidade no arquivo src/App.tsx.

## Como rodar o projeto

```bash
git clone
```

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
