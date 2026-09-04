# OnerOS Website — Release Documentation

## Version

- **Website Version:** 2.0.0
- **Release Date:** 2026-09-03
- **Phase:** 4 — Launch Readiness & Production Polish

## Architecture Overview

| Layer | Technology |
|---|---|
| Framework | Vite 8.2.2 |
| HTML | Vanilla HTML5 |
| CSS | Vanilla CSS (tokens + components + sections) |
| JavaScript | Vanilla ES modules (no framework) |
| Runtime Dependencies | Zero |
| Dev Dependencies | Vite only |

## Branding Assets

| Asset | Path | Purpose |
|---|---|---|
| Primary Logo (SVG) | `/assets/logo.svg` | Full logo with gradient accent |
| Monochrome Logo | `/assets/logo-mono.svg` | White text only variant |
| Logo Mark (SVG) | `/assets/logo-mark.svg` | Compact rounded square mark |
| Favicon | `/favicon.ico` | Browser tab icon |
| OG Image | `/og-image.svg` | Social sharing preview (1200x630) |

## SEO Setup

| Tag | Value |
|---|---|
| Title | OnerOS — An Open-Source Web Operating System Experience |
| Description | Window management, 7 visual themes, built-in applications, and the Fluent Valley design language — all running in your browser. |
| Canonical | https://oneros.in |
| Theme Color | #0f1115 |
| OG Type | website |
| OG Site Name | OnerOS |
| Twitter Card | summary_large_image |
| Robots | index, follow |

## Production Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production → dist/
npm run preview      # Preview production build (http://localhost:4173)
```

## Deployment Notes

- **Target:** Netlify (oneros.in)
- **Build Output:** `dist/` directory
- **404 Handling:** `dist/404.html` (Netlify convention)
- **Headers:** Security headers configured in `netlify.toml`
- **Caching:** Assets cached for 1 year, images for 1 day

## Verification Results

### Build

- [x] `npm install` — 0 vulnerabilities
- [x] `npm run build` — succeeds in ~110ms
- [x] `npm run preview` — starts on port 4173
- [x] No build errors
- [x] No runtime warnings

### Links

- [x] All 8 external links verified (HTTP 200)
- [x] All internal anchor links valid (#features, #themes, #apps, etc.)
- [x] All `target="_blank"` links have `rel="noopener noreferrer"`
- [x] OG image URL accessible

### Assets

- [x] SVG logos render correctly
- [x] OG image renders at 1200x630
- [x] Favicon present
- [x] 404 page present in dist
- [x] robots.txt present
- [x] sitemap.xml present

### Accessibility

- [x] Semantic HTML structure (header, main, footer, nav, section)
- [x] ARIA labels on interactive elements
- [x] Keyboard navigation functional (search, features, themes, apps)
- [x] Focus-visible states present
- [x] Screen reader text (sr-only class)
- [x] Logo images have alt text

### Responsive

- [x] Mobile navigation (hamburger menu)
- [x] Hero responsive (logo scales)
- [x] Feature tabs work on mobile
- [x] Theme showcase scrolls horizontally on mobile
- [x] App showcase responsive layout
- [x] Footer responsive grid

## Known Limitations

- The `<script src="/js/apps.js">` warning during build is expected — it's a data file loaded as a global
- OG image is SVG format; some social platforms may not render SVG OG images (PNG fallback recommended for production)
- Hero images are JPG format; WebP would improve loading performance
- No `apple-touch-icon.png` — using SVG mark which may not work on all iOS versions

## File Structure

```
Website/
├── index.html              # Main page
├── 404.html                # 404 page (also in public/)
├── vite.config.js          # Vite configuration
├── package.json            # Project metadata
├── sitemap.xml             # Sitemap for oneros.in
├── netlify.toml            # Netlify deployment config
├── public/
│   ├── favicon.ico
│   ├── 404.html
│   ├── robots.txt
│   ├── og-image.svg
│   ├── googlea578bc69cf8d1f9a.html
│   ├── assets/
│   │   ├── logo.svg
│   │   ├── logo-mono.svg
│   │   └── logo-mark.svg
│   └── img/
│       ├── Preview - Desktops.jpg
│       ├── Preview - Browser.jpg
│       ├── Preview - Quick Setup.jpg
│       └── Wallpaper.jpg
├── css/
│   ├── tokens/ (6 files)
│   ├── components/ (3 files)
│   ├── sections/ (8 files)
│   ├── globals.css
│   └── responsive.css
└── js/
    ├── app.js
    ├── apps.js
    ├── apps-showcase.js
    └── theme-showcase.js
```
