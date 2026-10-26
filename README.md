# Movie List

A Netflix-style movie browser built with **React + TypeScript + Vite**. Browse a
strip of movies, read live-updating comments, and post your own with validated
form input.

> **Live demo:** _add your Netlify URL here after deploying_

## Features

- Movie strip with real poster artwork, served from bundled demo data by default
- Comments panel that updates instantly when you post
- Comment form with client-side validation (Formik + Yup)
- Fully typed with TypeScript in `strict` mode
- Keyboard-accessible movie selection
- Works with zero configuration — no backend required

## Data modes

By default the app runs in **local mode**: movies and comments come from bundled
demo data (`src/data/mockData.ts`), so the deployed demo always works and never
depends on an external API. Comments you post are kept in memory for the session.

To run against a **real REST API** instead, set `VITE_API_BASE_URL` (see below).
The service expects `GET /movies`, `GET /movies/:id/comments`, and
`POST /movies/:id/comments`.

## Tech stack

| Area        | Choice                        |
| ----------- | ----------------------------- |
| Framework   | React 18                      |
| Language    | TypeScript (strict)           |
| Build tool  | Vite 5                        |
| Forms       | Formik + Yup                  |
| HTTP        | Axios                         |
| Styling     | Sass (SCSS)                   |

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. (Optional) point at your own API
cp .env.example .env
#    then edit VITE_API_BASE_URL

# 3. Start the dev server
npm run dev

# 4. Build for production
npm run build

# 5. Preview the production build
npm run preview
```

## Environment variables

| Variable             | Description                                                   | Default            |
| -------------------- | ------------------------------------------------------------ | ------------------ |
| `VITE_API_BASE_URL`  | Base URL for a real REST API. If unset, bundled demo data is used. | _(local mode)_ |

## Deploying to Netlify

A `netlify.toml` is included. Either:

1. Connect the repo in the Netlify dashboard (build command `npm run build`,
   publish directory `dist`), or
2. Deploy from the CLI:

   ```bash
   npm install -g netlify-cli
   npm run build
   netlify deploy --prod --dir=dist
   ```

## Project structure

```
src/
├── components/     # UI components (App, Header, Movies, Comments, AddForm, Banner)
├── services/       # MovieService — API access + data transforms
├── style/          # Global SCSS + variables
├── types.ts        # Shared TypeScript types
└── main.tsx        # App entry point
```
