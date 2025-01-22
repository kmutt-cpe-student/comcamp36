# ComCamp#36

Monorepo for ComCamp#36 website.

### Apps and Packages

- `web`: comcamp.io website. built with Next 15
- `server`: API server for comcamp.io . built with Nest.js
- `utils`: Auto Schema generator
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```