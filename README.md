# Anton Loparev — Personal Portfolio

Static personal landing page for **Anton Loparev**, a Data / Marketing Analyst.

The site is a professional portfolio, not an HR resume clone. Positioning: **Marketing Analytics × Data × AI**, with additional emphasis on product analytics, data engineering and AI-assisted tooling.

All commercial facts on the page come from the resume PDF. Experimental blocks are labeled `EXPLORING` / `EXPERIMENTAL` and are not presented as client work.

## Tech Stack

- React 18
- Vite
- TypeScript
- Tailwind CSS
- Lucide React

No backend, database, authentication or paid APIs. The build output is a static site.

## Local Development

```bash
npm install
npm run dev
```

Open the URL printed by Vite, usually `http://localhost:5173`.

## Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Content edits

Profile, metrics, experience, skills, cases and contacts live in:

```text
src/data/site.ts
```

## Download CV

The **Download CV** button points to `public/cv.pdf`.

If you replace the resume, overwrite that file:

```text
Place your CV as public/cv.pdf
```

## Deployment

The Vite `base` is `./`, so asset paths work on GitHub Pages, Vercel, Netlify and Cloudflare Pages.

### GitHub

1. Create a repository on GitHub.
2. From this folder:

```bash
git add .
git commit -m "Add personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Vercel

1. Sign in at [vercel.com](https://vercel.com) and import the GitHub repository.
2. Framework preset: Vite.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Deploy. No server functions are required.

### GitHub Pages

1. In the repository, open **Settings → Pages**.
2. Source: **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/pages.yml` builds the site and publishes `dist`.
4. If you prefer a manual deploy: run `npm run build`, then upload the `dist` folder, or use the `peaceiris/actions-gh-pages` action.

If the site is served from `https://USERNAME.github.io/REPO/`, relative paths already work because `base` is `./`.

After the first deploy, set your public URL in `index.html` Open Graph tags and in `public/sitemap.xml` if you want absolute SEO URLs.

### Netlify / Cloudflare Pages

- Build command: `npm run build`
- Publish directory: `dist`

`netlify.toml` and `vercel.json` are included for static hosting.

## Project structure

```text
src/
  components/
  sections/
  data/
  assets/
  hooks/
  styles/
public/
  cv.pdf
```
