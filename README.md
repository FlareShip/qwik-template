# Qwik City App ⚡️

- [Qwik Docs](https://qwik.dev/)
- [Discord](https://qwik.dev/chat)
- [Qwik GitHub](https://github.com/QwikDev/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)

---

A starter project for [Qwik City](https://qwik.dev) configured with [TailwindCSS](https://tailwindcss.com) and [Biomejs](https://biomejs.dev).

## Getting Started
- Clone the repo with:
  ```bash
  git clone https://github.com/FlareShip/qwik-template.git
  ```
- Install the dependencies using:
  ```bash  
  bun install
  ```

## Project Structure

This project is using Qwik with [QwikCity](https://qwik.dev/qwikcity/overview/) and [Bun](https://bun.sh). QwikCity is just an extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory-based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.dev/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.
  - `src/components/common`: Directory for very simple components like buttons, checkboxes, inputs, etc.
  - `src/components/feature`: Directory for complex components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Add Integrations and deployment

Use the `bun run qwik add` command to add additional integrations. Some examples of integrations includes: Cloudflare, Netlify or Express Server, and the [Static Site Generator (SSG)](https://qwik.dev/qwikcity/guides/static-site-generation/).

```bash
bun run qwik add
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```bash
bun run start
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
bun run preview
```

## Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
bun build # or `bun build`
```

## Bun Server

This app has a minimal [Bun server](https://bun.sh/docs/api/http) implementation. After running a full build, you can preview the build using the command:

```
bun run serve
```

Then visit [http://localhost:3000/](http://localhost:3000/)
