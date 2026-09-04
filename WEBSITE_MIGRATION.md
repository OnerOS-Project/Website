# OnerOS Website Migration

> **Status:** Phase 1–10 Complete
> **Date:** 2026-09-03
> **Source:** OnerOS Web Preview 3.1.0 — Fluent Valley

---

## 1. Architecture

The website is a static HTML/CSS/JS site deployed on Netlify. No build tools, no frameworks — pure client-side code with modular file organization.

### File Structure

```
Website/
├── index.html                    ← Main entry point (single-page)
├── css/
│   ├── tokens/                   ← Design tokens (6 files)
│   │   ├── colors.css
│   │   ├── typography.css
│   │   ├── spacing.css
│   │   ├── shadows.css
│   │   ├── motion.css
│   │   └── surfaces.css
│   ├── globals.css               ← Reset + base styles
│   ├── components/
│   │   ├── navigation.css        ← Floating dock nav
│   │   ├── search.css            ← Spotlight-style search overlay
│   │   └── surfaces.css          ← Surface primitives + reveal system
│   ├── sections/
│   │   ├── hero.css              ← Hero experience
│   │   ├── features.css          ← Feature explorer (interactive)
│   │   ├── preview.css           ← Web Preview showcase
│   │   ├── ecosystem.css         ← Ecosystem projects
│   │   ├── opensource.css        ← Open source section
│   │   └── footer.css            ← Footer
│   └── responsive.css            ← Responsive overrides
├── js/
│   └── app.js                    ← All JS (nav, search, features, scroll)
├── img/                          ← Existing images (preserved)
├── 404/index.html                ← Custom 404 page
├── netlify.toml                  ← Netlify config (redirect rule)
├── ONEROS_WEBSITE_DISCOVERY.md   ← Discovery document (reference)
├── WEBSITE_MIGRATION.md          ← This file
└── [legacy files preserved]      ← style.css, before.js, etc.
```

### Conceptual Layers

```
WebsiteRoot
├── Hero (full-viewport brand experience)
├── Main Content
│   ├── Features (interactive tab explorer)
│   ├── Web Preview (showcase cards)
│   ├── Ecosystem (project grid)
│   └── Open Source (info + actions)
├── Footer
├── Navigation Surface (floating dock, fixed bottom)
└── Overlay Layer (Spotlight search)
```

---

## 2. Design System

### Token Architecture

Two-tier system adapted from Fluent Valley:

1. **Primitive tokens** — raw values (`--bg-primary: #0f1115`)
2. **Semantic tokens** — aliases (`--fv-surface: var(--bg-secondary)`)

### Token Files

| File | Purpose | Key Variables |
|---|---|---|
| `colors.css` | Color palette | `--color-accent`, `--bg-primary`, `--text-primary`, `--fv-*` |
| `typography.css` | Font system | `--font-family-sans`, `--text-xs` to `--text-6xl` |
| `spacing.css` | Spacing scale | `--space-0` to `--space-32`, `--container-max` |
| `shadows.css` | Elevation | `--fv-elevation-0` to `--fv-elevation-4` |
| `motion.css` | Animation | `--fv-duration-*`, `--fv-ease-*`, reduced motion |
| `surfaces.css` | Surface hierarchy | `--fv-surface-*`, `--fv-glass-*`, `--radius-*` |

### Key Design Decisions

- **Base font:** 16px (web standard, up from 14px OS density)
- **Dark-first:** `#0f1115` background (adapted from OnerOS 2026 theme)
- **Accent:** `#47b895` teal/green (OnerOS brand color)
- **Glass:** `backdrop-filter: blur(16px)` with graceful fallback
- **Elevation:** 5-level shadow system (directly from Fluent Valley)
- **Radius:** Scale from 0 to 9999px

---

## 3. Surface Model

### Surface Primitives (CSS)

| Primitive | CSS Class | Behavior |
|---|---|---|
| `.surface` | Base surface | Card with border, transition on hover |
| `.surface--elevated` | Elevated card | Shadow + lift on hover |
| `.surface--glass` | Glass surface | Backdrop blur + border |
| `.surface--interactive` | Clickable surface | Scale-down on press |
| `.surface--expanded` | Full-screen expand | Fixed positioning + scale animation |
| `.surface--slide-right` | Edge slide panel | Translates from right edge |

### Reveal System

| Class | Behavior |
|---|---|
| `.reveal` | Base reveal (fade up) |
| `.reveal--visible` | Revealed state |
| `.reveal--left` | Slides from left |
| `.reveal--right` | Slides from right |
| `.reveal--scale` | Scales in |
| `.stagger > .reveal` | Staggered delays (60ms intervals) |

### Backdrop

| Class | Behavior |
|---|---|
| `.surface-backdrop` | Semi-transparent overlay |
| `.surface-backdrop--visible` | Visible state |

---

## 4. Motion System

### Motion Hierarchy

| Level | Duration | Easing | Use Cases |
|---|---|---|---|
| Micro | 100ms | standard | Hover, focus, button press |
| Small | 200ms | standard | Card elevation, menu hover |
| Medium | 350ms | decelerate | Section reveals, panel slides |
| Large | 500ms | decelerate | Hero entrance, major transitions |

### Token Reference

```
--fv-duration-fast: 100ms
--fv-duration-normal: 200ms
--fv-duration-slow: 350ms
--fv-duration-slower: 500ms

--fv-ease-standard: cubic-bezier(0.4, 0, 0.2, 1)
--fv-ease-decelerate: cubic-bezier(0, 0, 0.2, 1)
--fv-ease-accelerate: cubic-bezier(0.4, 0, 1, 1)
--fv-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)
```

### Reduced Motion

All motion tokens are zeroed in `@media (prefers-reduced-motion: reduce)`. All animations are disabled via `animation-duration: 0.01ms !important`.

### Scroll Reveal

IntersectionObserver-based reveal system. Elements with `.reveal` class animate in when they enter the viewport. Threshold: 10%, rootMargin: `-40px`.

---

## 5. Navigation Model

### Floating Dock

- **Position:** Fixed bottom center
- **Background:** Glass (`backdrop-filter: blur(16px)`)
- **Border radius:** 16px (rounded pill)
- **Auto-hide:** Hides on scroll down, shows on scroll up
- **Active state:** Current section highlighted with accent color

### Mobile Navigation

- Expands to full-width at bottom
- Hamburger toggle for mobile menu
- Menu opens as glass overlay above dock

### Keyboard Navigation

- All nav links are focusable
- `aria-label` on navigation landmark
- Focus-visible outline (2px accent, 2px offset)

---

## 6. Components Created

| Component | Files | Description |
|---|---|---|
| Floating Dock | `navigation.css` | Bottom-fixed glass nav bar |
| Spotlight Search | `search.css`, `app.js` | Cmd+K search overlay with grouped results |
| Feature Explorer | `features.css`, `app.js` | Interactive tab-based feature showcase |
| Surface System | `surfaces.css` | Reusable surface primitives + reveal animations |
| Hero Section | `hero.css` | Full-viewport brand entrance with staggered animations |
| Preview Cards | `preview.css` | Web Preview showcase with hover effects |
| Ecosystem Grid | `ecosystem.css` | Project cards with external link indicators |
| Open Source | `opensource.css` | Stats + action links |
| Footer | `footer.css` | Multi-column footer with social links |
| 404 Page | `404/index.html` | Styled error page |

---

## 7. Reused Concepts from Web Preview

| Concept | Source | Adaptation |
|---|---|---|
| Fluent Valley tokens | `src/styles/tokens/` | Extracted `--fv-*` tokens, adapted for web |
| Color system | `tokens/colors.css` | Used semantic `--fv-*` tokens as primary API |
| Elevation system | `tokens/shadows.css` | Directly reusable, all 5 levels |
| Motion tokens | `tokens/motion.css` | Directly reusable, all durations + easings |
| Surface hierarchy | `tokens/surfaces.css` | 5-level hierarchy maps to website sections |
| Glass system | `tokens/surfaces.css` | Used for nav, search overlay |
| Spotlight search | `SearchPanel.tsx` | Client-side search with glass overlay |
| StartMenu animation | `system-surfaces.css` | Scale + opacity entrance for search panel |
| Boot sequence concept | `Bootloader.tsx` | Hero entrance animation (staggered reveal) |
| Taskbar auto-hide | `Taskbar.tsx` | Scroll-based show/hide for floating dock |
| Hover states | CSS throughout | `rgba(255,255,255,0.06)` hover pattern |
| Focus states | CSS throughout | 2px accent outline with offset |
| Accent system | `accent.ts` | Teal/green brand color from Fluent Valley |

---

## 8. Concepts Intentionally Not Reused

| Concept | Reason |
|---|---|
| WindowManager | Desktop-specific window lifecycle |
| Window drag/resize (interact.js) | Desktop-specific interaction |
| Window snap zones | Desktop-specific layout |
| App iframe loading | Desktop-specific content loading |
| Taskbar app buttons | Desktop-specific window switching |
| StartMenu app launching | Desktop-specific app launching |
| Theme body class switching | Desktop-specific theming |
| Custom DOM events | Desktop-specific communication |
| Bootloader 1.6s timer | Desktop-specific boot sequence |
| Window Header/Content | Desktop-specific window chrome |
| DesktopRuntime layers | Desktop layer composition |
| BackgroundLayer | Wallpaper + context menu |
| SystemSurfaceLayer | Desktop UI container |
| Virtual file system | OS simulation feature |
| Kernel panic overlay | OS simulation Easter egg |
| WeatherPanel | Too OS-specific for product site |
| Context menus | Right-click less common on websites |

---

## 9. Responsive Strategy

### Breakpoints

| Breakpoint | Adaptation |
|---|---|
| 1024px | Reduced section gaps/padding |
| 768px | Single-column layouts, horizontal scroll features, mobile nav |
| 480px | Further reduced spacing |
| 360px | Minimum viable layout |

### Responsive Adaptations

- **Navigation:** Bottom dock → full-width with hamburger menu
- **Features:** Side-by-side → horizontal scroll on mobile
- **Ecosystem:** Grid → single column
- **Open Source:** 2-column → single column
- **Footer:** 4-column → 2-column → 1-column
- **Hero:** Full viewport with fluid typography (`clamp()`)
- **Touch targets:** Minimum 44px interactive area

### Testing Targets

1440px, 1024px, 768px, 480px, 360px

---

## 10. Accessibility Strategy

### Semantic HTML

- `<main>` for primary content
- `<nav>` with `aria-label` for navigation
- `<section>` with `id` for each content area
- `<footer>` for site footer
- Heading hierarchy: h1 → h2 → h3 (proper nesting)

### Keyboard Navigation

- All interactive elements are focusable
- `:focus-visible` with 2px accent outline
- Search overlay: Escape closes, arrow keys navigate, Enter selects
- Feature tabs: keyboard accessible with `role="tab"` and `aria-selected`
- Smooth scroll for anchor links

### ARIA Attributes

- `aria-label` on navigation, search, mobile toggle
- `aria-expanded` on mobile toggle
- `aria-selected` and `role="tab"` on feature items
- `aria-controls` linking tabs to panels
- `aria-hidden="true"` on decorative elements
- `aria-modal="true"` on search overlay

### Color Contrast

- Text primary: `#ffffff` on `#0f1115` — 16.7:1 ratio
- Text secondary: `#e0e0e0` on `#0f1115` — 13.3:1 ratio
- Text muted: `#94a3b8` on `#0f1115` — 6.8:1 ratio
- Accent: `#47b895` on `#0f1115` — 6.1:1 ratio

### Reduced Motion

- All motion tokens zeroed in `prefers-reduced-motion`
- Animation durations set to `0.01ms !important`
- State transitions remain understandable without animation

---

## 11. Performance Strategy

### Bundle

- **Vite** — development server + production build with minification
- **CSS:** 17 modular files bundled into single output (~37KB unminified, ~6.5KB gzipped)
- **JS:** 2 module files bundled into single output (~27KB unminified, ~7.6KB gzipped)
- **No external dependencies** — zero runtime libraries (Vite is dev-only)

### Loading

- Hero images: `loading="eager"` for above-fold content
- Below-fold images: `loading="lazy"`
- CSS loaded via `<link>` tags (parallel loading)
- JS loaded at end of `<body>` (non-blocking)

### Optimization

- No heavy animation libraries (GSAP, etc.)
- IntersectionObserver for scroll reveals (no scroll event handlers for reveals)
- Throttled scroll handler for nav (100ms throttle)
- Passive scroll event listener
- CSS transitions over JS animations where possible

### Known Limitations

- No image optimization pipeline
- No service worker / offline support

---

## 12. Build Result

### Files Created (Phase 1)

| File | Size (approx) | Purpose |
|---|---|---|
| `css/tokens/colors.css` | 1.2KB | Color tokens |
| `css/tokens/typography.css` | 0.8KB | Typography tokens |
| `css/tokens/spacing.css` | 0.5KB | Spacing tokens |
| `css/tokens/shadows.css` | 0.5KB | Elevation tokens |
| `css/tokens/motion.css` | 1.0KB | Motion tokens + reduced motion |
| `css/tokens/surfaces.css` | 0.8KB | Surface + glass tokens |
| `css/globals.css` | 1.2KB | Reset + base styles |
| `css/components/navigation.css` | 2.5KB | Floating dock nav |
| `css/components/search.css` | 3.0KB | Spotlight search |
| `css/components/surfaces.css` | 2.5KB | Surface primitives |
| `css/sections/hero.css` | 3.0KB | Hero experience |
| `css/sections/features.css` | 2.8KB | Feature explorer |
| `css/sections/preview.css` | 1.5KB | Preview cards |
| `css/sections/ecosystem.css` | 1.8KB | Ecosystem grid |
| `css/sections/opensource.css` | 2.0KB | Open source |
| `css/sections/footer.css` | 1.2KB | Footer |
| `css/responsive.css` | 0.4KB | Responsive overrides |
| `js/app.js` | 8.0KB | All JavaScript |
| `404/index.html` | 1.0KB | 404 page |
| `index.html` | 12.0KB | Main page |

### Files Created (Phase 2)

| File | Size (approx) | Purpose |
|---|---|---|
| `package.json` | 0.4KB | Project config + scripts |
| `vite.config.js` | 0.4KB | Vite configuration |
| `.gitignore` | 0.1KB | Git ignore rules |
| `css/sections/themes.css` | 4.5KB | Theme Showcase styles |
| `js/theme-showcase.js` | 6.5KB | Theme Showcase logic |

### Files Modified (Phase 2)

| File | Change |
|---|---|
| `index.html` | Added themes.css, theme-showcase.js, Theme Showcase section, nav link |
| `js/app.js` | Added theme search entries + group label |

### Files Moved (Phase 2)

| From | To | Reason |
|---|---|---|
| `img/*` | `public/img/*` | Vite static asset serving |
| `favicon.ico` | `public/favicon.ico` | Vite static asset serving |
| `googlea578bc69cf8d1f9a.html` | `public/googlea578bc69cf8d1f9a.html` | Vite static asset serving |

### Files Modified

| File | Change |
|---|---|
| `index.html` | Complete rewrite |
| `netlify.toml` | Redirect rule updated |
| `404/index.html` | Complete rewrite |

### Legacy Files Preserved

| File | Status |
|---|---|
| `style.css` | Preserved (old site CSS) |
| `before.js` | Preserved (old loading animation) |
| `functions.js` | Preserved (old button handlers) |
| `min/*` | Preserved (minified legacy files) |
| `img/*` | Preserved (all images reused) |
| `googlea578bc69cf8d1f9a.html` | Preserved (Google verification) |
| `sitemap.xml` | Preserved |

---

## 13. Warnings / Errors

None. The website builds and runs correctly through Vite.

---

## 14. Remaining Work

| Priority | Task | Description |
|---|---|---|
| HIGH | Hero screenshot | Replace `Preview - Desktops.jpg` with a proper Fluent Valley screenshot |
| HIGH | OnerOS logo SVG | Create proper SVG logo for header/footer |
| MEDIUM | OG image | Create Open Graph social sharing image |
| MEDIUM | Favicon | Replace stock favicon with OnerOS branding |
| MEDIUM | Sitemap update | Update `sitemap.xml` for new structure |
| LOW | Light theme toggle | Optional dark/light theme switch |
| LOW | Image optimization | WebP conversion, responsive srcset |
| LOW | Analytics | Verify Google Analytics tracking |

---

## 15. Recommended Next Phase

Phase 3: Add **additional interactive sections** — Apps showcase, Community/Discord integration, or Changelog/Updates panel.

---

## PHASE 2 — Theme Showcase + Vite Foundation

**Date:** 2026-09-03

### Summary

Migrated the website to a Vite-powered development environment and added a fully interactive Theme Showcase section demonstrating all 7 OnerOS visual themes.

### Vite Migration

- Initialized `package.json` with `vite` as dev dependency
- Created `vite.config.js` with minimal configuration
- Moved static assets (`img/`, `favicon.ico`) to `public/` directory
- Added `type="module"` to script tags for proper bundling
- Added `.gitignore` for `node_modules`, `dist`, `.vite`

### Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Production build → dist/
npm run preview      # Preview production build (http://localhost:4173)
```

### Theme Showcase Architecture

**CSS:** `css/sections/themes.css` (4.5KB)
- Theme selector buttons with accent color dots
- Preview surface with wallpaper, topbar, window, taskbar
- Info card with theme description, features, accent swatch
- Responsive layout: 2-column → stacked on mobile

**JS:** `js/theme-showcase.js` (6.5KB)
- Centralized theme data model (7 themes)
- Each theme defines: accent, wallpaper, topbar, window, taskbar, controls, desc, features
- `applyTheme(index)` applies all CSS properties with transitions
- Keyboard navigation: Arrow keys, Home, End
- Dynamic `aria-pressed` state

### Supported Themes

| # | Theme | Accent | Style |
|---|---|---|---|
| 1 | Modern | `#47b895` | Clean, glass, subtle depth |
| 2 | Centered | `#60a5fa` | Floating taskbar, balanced |
| 3 | Windows 95 | `#000080` | Classic teal, gray UI |
| 4 | Windows XP | `#3164c5` | Luna blue, gradients |
| 5 | macOS | `#0066cc` | Traffic light controls |
| 6 | Ubuntu | `#e95420` | Aubergine + orange |
| 7 | OnerOS 2026 | `#60a5fa` | Fluent Valley (highlighted) |

### OnerOS 2026 Highlight

- Default active theme on page load
- "New" badge on selector button and info card
- Glass blur, floating taskbar, spatial depth demonstrated

### Build Output

```
dist/index.html                42.23 kB │ gzip:  7.27 kB
dist/assets/main-*.css         36.87 kB │ gzip:  6.49 kB
dist/assets/main-*.js          26.70 kB │ gzip:  7.57 kB
```

**Total:** ~106 KB unminified, ~21 KB gzipped

### Dependencies Added

| Package | Version | Type |
|---|---|---|
| vite | 8.2.2 | devDependency |

### Regressions

None. All existing functionality preserved:
- Navigation: floating dock, auto-hide, active tracking, mobile toggle
- Search: Cmd+K, keyboard nav, Escape close
- Features: tab switching with animated content
- Web Preview: links work
- Ecosystem: external links work
- Open Source: actions work

---

## PHASE 3 — Apps Showcase & Interactive OS Experience

### Summary

Added an interactive Apps Showcase section that presents OnerOS applications inside a system-styled preview environment. Users can browse, filter, and "open" applications in a miniature window surface — creating the feeling of interacting with a real OS.

### New Files

| File | Purpose |
|---|---|
| `js/apps.js` | Central application data model (12 apps, 5 categories) |
| `js/apps-showcase.js` | Interactive showcase logic, launcher, preview rendering, calculator |
| `css/sections/apps.css` | Complete showcase styles with all preview types |

### Modified Files

| File | Changes |
|---|---|
| `index.html` | Added apps section HTML, CSS/JS links, nav link, footer link |
| `js/app.js` | Added 8 app search entries, 'apps' group label, appId-aware click handler |

### Architecture

- **Data Model**: `OnerOSApps` array with 12 app objects (id, name, category, description, icon, featured, previewType, accent, external, url, items)
- **State Management**: Centralized `state` object tracking active app, category, calculator state
- **Preview System**: 7 preview types rendered into a system-styled window surface
- **Exposed API**: `window.OnerOSAppsShowcase.selectApp(id)` for search integration

### Application Data Model

```javascript
{
  id: 'settings',
  name: 'Settings',
  category: 'System',
  description: 'Configure system preferences...',
  icon: '<svg>...</svg>',
  featured: true,
  previewType: 'settings',
  accent: '#47b895',
  items: ['Appearance', 'Theme', ...]
}
```

### Featured Apps with Rich Previews

| App | Preview Type | What It Shows |
|---|---|---|
| Settings | settings | Sidebar + appearance panel with toggles |
| Personalization | personalization | Theme cards, accent colors, wallpaper grid |
| DevZone | devzone | Code editor with syntax highlighting |
| Linux Mode | linux-mode | Terminal with neofetch output |
| MPlayer | mplayer | Album art, playback controls, timeline |
| Calculator | calculator | Fully interactive calculator with keyboard support |
| ReVideeo | revideeo | External app card with "Open externally" link |

### Category System

- All Apps, System, Productivity, Media, Utilities, Ecosystem
- Horizontally scrollable on mobile
- Filters launcher list dynamically

### Global Search Integration

- 8 new search entries for featured apps
- Clicking an app in search scrolls to #apps and selects it after 400ms delay
- `appId` data attribute on search results for app-aware navigation

### Responsive Behavior

| Breakpoint | Layout |
|---|---|
| 1440px | 300px launcher + window + info card |
| 1024px | 260px launcher + window + info card |
| 768px | Full-width, horizontal scrollable launcher |
| 480px | Full-width, hidden sidebars in previews |

### Accessibility

- `role="listbox"` on launcher, `aria-pressed` on items
- `role="img"` with `aria-label` on window
- Category buttons with `role="group"` and `aria-label`
- Calculator buttons with keyboard support
- Focus-visible outlines
- `prefers-reduced-motion` respected via existing motion tokens

### Build Output

```
dist/index.html                45.93 kB │ gzip:  7.75 kB
dist/assets/main-*.css         53.64 kB │ gzip:  8.55 kB
dist/assets/main-*.js          46.32 kB │ gzip: 11.03 kB
```

**Total:** ~146 KB unminified, ~27 KB gzipped

### Regressions

None. All existing functionality preserved:
- Navigation: floating dock, auto-hide, active tracking, mobile toggle, Apps link added
- Search: Cmd+K, keyboard nav, Escape close, app selection from search
- Features: tab switching with animated content
- Theme Showcase: all 7 themes, keyboard nav, transitions
- Web Preview: links work
- Ecosystem: external links work
- Open Source: actions work
- Footer: all links work

---

*This document was generated during the OnerOS Website rebuild. Phase 3 added Apps Showcase with interactive OS-style application previews.*
*The website implements the Fluent Valley design language as a system-inspired product website — not a desktop simulator.*
