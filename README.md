# Techelec Solutions — Marketing Website

Modern, fast, lead-generation website for **Techelec Solutions (Pty) Ltd** — Cape Town based solar, backup-power and electrical specialists.

Built with **Astro 5** + **Tailwind CSS v4**, deployed to **Netlify** as a static site (sub-second loads, free TLS, free form handling, generous free tier).

## Stack & key choices

| Concern              | Choice                                                |
| -------------------- | ----------------------------------------------------- |
| Framework            | Astro 5 (zero-JS by default, perfect for marketing)   |
| Styling              | Tailwind CSS v4 (CSS-first, no `tailwind.config.js`)  |
| Hosting              | Netlify (CDN, atomic deploys, instant rollback)       |
| Forms                | Netlify Forms (no backend code, spam protection)      |
| SEO                  | `@astrojs/sitemap` + `LocalBusiness` & `FAQPage` JSON-LD |
| Fonts                | Inter + Space Grotesk via Google Fonts                |

## Local development

```powershell
npm install
npm run dev          # http://localhost:4321
```

## Build

```powershell
npm run build
npm run preview
```

Output goes to `dist/`.

## Deploying to Netlify (as a brand-new project)

> ⚠️ **Always create a NEW Netlify site for this repo.** Do not attach it to any
> existing Techelec / personal Netlify site — this is a fresh marketing presence
> and must live in its own site so DNS, forms, analytics and billing stay scoped
> to Techelec Solutions only.

### Option A — Netlify dashboard (recommended for first deploy)

1. Push this repo to GitHub (e.g. `github.com/<your-org>/techelec-solutions-web`).
2. Sign in at <https://app.netlify.com>.
3. Click **Add new site → Import an existing project → GitHub** and pick the repo.
4. On the configuration screen:
   - **Site name:** `techelec-solutions` (Netlify will append a suffix if taken).
   - **Branch to deploy:** `main`.
   - Build command and publish directory are pre-filled from [`netlify.toml`](netlify.toml) — leave them as is.
5. Click **Deploy site**. First build takes ~1 minute.
6. **Rename / verify** under **Site configuration → Site details → Change site name** so the temporary URL is `https://techelec-solutions.netlify.app`.
7. **Custom domain** under **Domain management → Add a domain** → enter `techelecsolutions.co.za` once registered. Netlify auto-issues a free Let's Encrypt cert.
8. **Form notifications** under **Forms → quote → Settings → Form notifications** — add the Techelec email address (and optionally a Slack/Make webhook).

### Option B — Netlify CLI (for repeat / scripted deploys)

A helper script is included that **forces a new site** to be created and never
links to an existing one:

```powershell
npm install -g netlify-cli       # one-time
netlify login                    # one-time (browser auth)
npm run deploy:new               # creates a brand-new Netlify site for this repo
```

For every subsequent deploy of the same site, use:

```powershell
npm run deploy                   # production deploy of current site
```

If you ever see `netlify` complain that the folder is already linked to a different
site, run `netlify unlink` then re-run `npm run deploy:new`.

### Domain registration note

The brief says the original `techelecsolutions.co.za` lapsed. Recommended providers for `.co.za`:
- **Domains.co.za** — cheapest, ZA-local, reliable
- **Afrihost** — bundled hosting/email if needed later
After purchase, set the nameservers to Netlify's (or use Netlify DNS for the easiest path).

## Editing content

All marketing copy lives in `src/data/`:
- `site.ts` — company details, phone, address, brand list, certifications
- `services.ts` — service cards & long copy
- `projects.ts` — project gallery entries
- `faqs.ts` — FAQ items (also drives the `FAQPage` schema)
- `nav.ts` — top navigation links

## What's where

```
src/
├── components/   reusable UI (Header, Footer, Logo, ServiceCard, FaqList, CtaBanner, WhatsAppFloat, BrandStrip)
├── data/         editable site content
├── layouts/      BaseLayout.astro — shared <head>, header/footer, JSON-LD
├── pages/        index, services, projects, about, faq, contact, 404
└── styles/       global.css (Tailwind v4 theme tokens)

public/
├── favicon.svg
├── og-image.svg          social-share preview
├── robots.txt
└── __forms.html          static stub Netlify uses to detect the form at build time
```

## Things still worth doing once live

- [ ] Swap the inline SVG hero/project visuals for real install photos in `public/images/` and use `<Image>` from `astro:assets`.
- [ ] Drop the real `Techelec` logo PNG/SVG into `public/` and replace `Logo.astro`.
- [ ] Add Google Business Profile review embed once Techelec has its first reviews.
- [ ] Connect a free Plausible / Cloudflare Web Analytics script for visitor stats (avoids GDPR cookie banner).
- [ ] (Optional) wire Decap CMS so the owner can edit `src/data/*.ts` from a `/admin` page without touching code.
