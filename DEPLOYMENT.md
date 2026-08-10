# YUDAO GLOBAL LOGISTICS Website Deployment

This rebuild is a Vue 3 + Vite + TypeScript static website. The quote form uses FormSubmit, so no backend, CMS, login system, database, or custom order tracking service is required.

## Local Commands

```text
npm install
npm run dev
npm run build
```

`npm run dev` starts a local preview server. `npm run build` creates the production files in `dist/`.

## Files To Deploy

Deploy the generated `dist/` folder to static hosting or CDN.

Recommended hosts:

- Cloudflare Pages
- Netlify
- Vercel
- GitHub Pages
- Nginx / Apache / IIS static hosting
- Object storage static hosting with CDN

## Required Routes

The site uses Vue Router history mode. Configure static hosting fallback so every route serves `index.html`.

Routes:

- `/`
- `/ocean-freight`
- `/air-freight`
- `/rail-freight`
- `/road-freight`
- `/multimodal-transport`
- `/customs-clearance`
- `/warehousing-distribution`
- `/documentation-cargo-tracking`
- `/company`
- `/blog`
- `/blog/:slug`
- `/quote`
- `/privacy`

Do not create standalone `/services`, `/logistics-solutions`, or `/thank-you` pages.

## FormSubmit Setup

The quote form posts to:

```text
https://formsubmit.co/ajax/official@yudaoglobal.com
```

The first real submission will trigger a confirmation email to:

```text
official@yudaoglobal.com
```

Open that email and confirm the form. After confirmation, future submissions will be delivered to the inbox.

The form uses:

- `_subject: New Quote Request from YUDAO GLOBAL LOGISTICS Website`
- `_captcha: false`
- `_template: table`
- `_honey` honeypot field

## Image Source Ledger

Current visual assets combine local project-owned SVG illustrations with free Unsplash logistics photos referenced from `src/data/images.ts` and documented in `src/data/site.ts`.

The selected photo URLs are downloaded into `public/assets/photos/` automatically by `scripts/download-images.mjs` before production build. Cloudflare Pages runs this through the `prebuild` script when executing `npm run build`, so the deployed site serves local image files from `/assets/photos/`.

If a build environment blocks external downloads, run this locally before uploading:

```text
node scripts/download-images.mjs
```
