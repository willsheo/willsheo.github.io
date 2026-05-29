# Seonmin Will Heo Website

This is the Astro source for `swheo.com`. It uses the Academic Portfolio Astro template as a starting point, with the demo content removed.

## Local Development

This template requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

The local site runs at `http://127.0.0.1:4321/`.

## Main Files

- `src/content/bio.md`: homepage biography.
- `src/content/cv.md`: CV page content.
- `src/content/publications/`: research entries.
- `src/content/book/`: book landing/chapter content.
- `src/content/teaching/`: teaching entries.
- `src/config/`: site metadata, navigation, social links, and colors.
- `public/files/`: PDFs and teaching materials.

## Commands

```bash
npm run dev
npm run build
npm run preview
```

## Deployment

This site is prepared for GitHub Pages deployment through GitHub Actions.

1. Create a GitHub repository named `willsheo.github.io`.
2. Push this project to the repository's `main` branch.
3. In GitHub, open the repository settings and go to Pages.
4. Set the Pages source to GitHub Actions.
5. Add `swheo.com` as the custom domain and enable HTTPS once GitHub allows it.
6. Point the domain DNS records to GitHub Pages.

The deployed output is generated automatically from `npm run build`; do not commit `dist/`, `node_modules/`, `.astro/`, or `private/`.
