# OnerOS Website Discovery

> **Purpose:** Transferable knowledge package for the future OnerOS Website project.
> **Source:** OnerOS Web Preview 3.1.0 — Codename "Fluent Valley"
> **Status:** Read-only extraction. No code was modified.
> **Date:** 2026-09-03

---

## 1. Project Identity

**OnerOS** is a web-based desktop environment that simulates a full operating system experience in the browser. It features window management, themed applications, a modular architecture, and multiple visual themes inspired by real operating systems (Windows 95, Windows XP, macOS, Ubuntu) alongside its own unique "Fluent Valley" design language.

**OnerOS Web Preview 3.1.0** is the current production release, codenamed **"Fluent Valley"**, deployed on Netlify. It represents a fully functional browser-based OS simulation with 7 themes, 15 registered applications (8 internal, 7 external/iframe), and a complete window management system.

### Verified Product Facts

| Attribute | Value | Source |
|---|---|---|
| Product Name | OnerOS | `package.json`, `README.md` |
| Package Name | `oneros-web` | `package.json` |
| Current Version | 3.1.0 | `package.json` |
| Codename | Fluent Valley | `README.md` |
| Author | Klubuntu — OnerOS Project | `README.md` |
| License | GPL-3.0 | `README.md` |
| Deployment | Netlify | `netlify.toml` |
| Entry HTML Title | "OnerOS Web (Preview)" | `public/index.html` |
| PWA Name | "OnerOS Future Project" | `public/manifest.json` |
| Copyright | 2025-2026 OnerOS Project by Klubuntu | `src/apps/settings/settings.jsx` |
| Author Website | https://klubuntu.eu.org/ | `src/apps/settings/settings.jsx` |

### Tagline / Positioning

From `README.md`:
> "One OS For Your Devices"

From `public/manifest.json`:
> "OnerOS Future Project"

### What OnerOS Is (Verified)

- A web-based desktop environment (OS simulator) with window management
- Features themed apps and modular architecture
- Deployed as a single-page application on Netlify
- Built with React 18 + TypeScript
- Open-source under GPL-3.0

### What OnerOS Is NOT (Verified)

- NOT a real operating system (it runs in the browser)
- NOT a native OS (no indication of native plans in the repository)
- NOT a Progressive Web App (manifest exists but no service worker)

---

## 2. Verified Product Information

### Major Capabilities (from README.md)

- **Window Manager** — open, close, focus, drag, resize, maximize windows
- **Application Registry** — centralized app manifests with lazy loading & single-instance support
- **7 Themes** — Modern, Centered, Win95, WinXP, macOS, Ubuntu, OnerOS 2026
- **Accent Colors** — user-configurable, propagates to every internal app
- **Wallpaper System** — default wallpaper or solid color background
- **System Surfaces** — Taskbar, Start Menu, Clock, App Switcher with context menus
- **Responsive** — works on desktop, tablet, mobile
- **Internal Apps** — Settings, Personalization, Tools, DevZone, Linux Mode, MPlayer, WinSync, KDialer

### Key Differentiators

1. **Multi-theme OS simulation** — 7 distinct visual themes including authentic Win95, WinXP, macOS, and Ubuntu recreations
2. **Fluent Valley design language** — original dark-first design system with glass/translucency, layered surfaces, and spatial motion
3. **Floating island taskbar** — OnerOS 2026 theme features a centered, floating taskbar with auto-hide behavior
4. **Full window management** — drag, resize, snap (left/right/quarters), maximize, minimize with spatial animations
5. **Spotlight-style search** — Cmd/Ctrl+K global search with grouped results
6. **Boot sequence** — simulated OS boot screen with loader animation
7. **Responsive desktop** — works across desktop, tablet, and mobile viewports

### Ecosystem

The project references several external ecosystem projects:

| Project | Type | URL |
|---|---|---|
| ReVideeo | Media app | https://revideeo.app |
| ReImaage | Media app | https://reimaage-app.vercel.app/ |
| iVOD | Video on demand | https://vod.itvt.xyz |
| Google (clone) | Internet app | https://next-gooogle.vercel.app/ |
| Facebook (clone) | Internet app | https://clonedbook.vercel.app/ |
| Bing | Internet app | https://www.bing.com/ |
| Calculator | Utility | https://calculator-a.vercel.app/ |

---

## 3. Fluent Valley Design System

### Architecture Overview

The design system is organized into 6 layers:

```
src/styles/
├── tokens/              ← Design tokens (CSS custom properties)
│   ├── colors.css       ← Color primitives + Fluent Valley semantic tokens
│   ├── typography.css   ← Font families, sizes, weights, line heights
│   ├── shadows.css      ← Elevation system (5 levels)
│   ├── motion.css       ← Duration, easing, transitions
│   ├── surfaces.css     ← Surface hierarchy + glass/translucency
│   ├── radius.css       ← Border radius scale
│   ├── spacing.css      ← Spacing scale + component sizes
│   └── index.css        ← Barrel import
├── themes/
│   └── oneros2026.css   ← Fluent Valley theme (553 lines)
├── themes.css           ← Legacy themes (Win95, WinXP, macOS, Ubuntu) (731 lines)
├── system-surfaces.css  ← StartMenu, Notifications, Search, Panels (865 lines)
├── system-bars.css      ← TopBar, Taskbar, Window surfaces (968 lines)
├── responsive.css       ← 4 breakpoints (768px, 480px, 360px, touch)
├── globals/
│   ├── reset.css        ← Non-selectable, border-box, full viewport
│   └── base.css         ← Font, overflow: hidden, antialiased
└── legacy/
    └── app.css          ← Original monolithic CSS (1060 lines)
```

### Token System

The token system uses a **two-tier architecture**:

1. **Primitive tokens** — raw values (e.g., `--bg-primary: #181818`)
2. **Fluent Valley semantic tokens** — aliases prefixed with `--fv-*` (e.g., `--fv-surface-base: var(--bg-primary)`)

This allows theme overrides at one level while consumer code references semantic tokens.

### Design Philosophy

- **Dark-first** — default background is near-black (#181818)
- **Glass/translucency** — surfaces use `backdrop-filter: blur()` with graceful fallback
- **Layered depth** — 5-level elevation system with soft multi-stop shadows
- **Spatial motion** — Material Design-inspired easing with spring curves
- **System font stack** — native feel on all platforms
- **Reduced motion support** — all motion tokens zeroed in `@media (prefers-reduced-motion: reduce)`

---

## 4. Visual Tokens

### 4.1 Colors (`src/styles/tokens/colors.css`)

**Purpose:** Defines all color values for the Fluent Valley design system.

**Key Variables:**

| Category | Variable | Value | Website Reusable? |
|---|---|---|---|
| Accent | `--color-accent` | `#47b895` (teal/green) | YES |
| Accent | `--color-accent-dark` | `#3a9b7a` | YES |
| Accent | `--color-accent-light` | `#5cd4a8` | YES |
| Accent | `--color-accent-hover` | `#3a9b7a` | YES |
| Accent | `--color-accent-active` | `#2e8a6a` | YES |
| Accent | `--color-accent-subtle` | `rgba(71, 184, 149, 0.12)` | YES |
| Background | `--bg-primary` | `#181818` | YES |
| Background | `--bg-secondary` | `#1e1e1e` | YES |
| Background | `--bg-tertiary` | `#333` | YES |
| Text | `--text-primary` | `#ffffff` | YES |
| Text | `--text-secondary` | `#e0e0e0` | YES |
| Text | `--text-muted` | `#94a3b8` | YES |
| Status | `--color-success` | `#10b981` | YES |
| Status | `--color-warning` | `#f59e0b` | YES |
| Status | `--color-error` | `#ef4444` | YES |
| Status | `--color-info` | `#3b82f6` | YES |
| FV Semantic | `--fv-background` | `var(--bg-primary)` | YES |
| FV Semantic | `--fv-surface` | `var(--bg-secondary)` | YES |
| FV Semantic | `--fv-surface-elevated` | `var(--bg-tertiary)` | YES |
| FV Semantic | `--fv-surface-floating` | `#2a2a2a` | YES |

**Desktop-specific (NOT for website):**
- `--taskbar-bg`, `--taskbar-border` — Taskbar-specific
- `--menu-bg`, `--menu-border`, `--menu-item-bg` — Start menu-specific
- `--window-bg`, `--window-border`, `--window-titlebar` — Window-specific
- Win95/WinXP/macOS/Ubuntu theme colors — Theme-specific

**Website adaptation:** Use `--fv-*` semantic tokens as the primary API. The accent system (teal/green `#47b895`) can serve as the website brand color. Consider a lighter variant for the website if needed.

### 4.2 Typography (`src/styles/tokens/typography.css`)

**Purpose:** Font families, sizes, weights, and line heights.

**Key Variables:**

| Category | Variable | Value | Website Reusable? |
|---|---|---|---|
| Font | `--font-family-sans` | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, ...` | YES |
| Font | `--font-family-mono` | `'SF Mono', 'Fira Code', 'Cascadia Code', Menlo, ...` | YES |
| Size | `--text-xs` | `11px` | MAYBE (small for website) |
| Size | `--text-sm` | `12px` | MAYBE |
| Size | `--text-base` | `14px` | MAYBE (OS density) |
| Size | `--text-md` | `16px` | YES (standard web) |
| Size | `--text-lg` | `18px` | YES |
| Size | `--text-xl` | `22px` | YES |
| Size | `--text-2xl` | `28px` | YES |
| Weight | `--font-weight-normal` | `400` | YES |
| Weight | `--font-weight-medium` | `500` | YES |
| Weight | `--font-weight-semibold` | `600` | YES |
| Line Height | `--line-height-tight` | `1.2` | YES |
| Line Height | `--line-height-normal` | `1.5` | YES |
| Line Height | `--line-height-relaxed` | `1.75` | YES |

**Desktop-specific:**
- Base font size 14px is OS-like density; website should use 16px as base

**Website adaptation:** Increase base font size to 16px. Keep the system font stack. Add larger sizes (3xl, 4xl, 5xl) for hero text. The `--fv-*` alias pattern is excellent for website adaptation.

### 4.3 Shadows / Elevation (`src/styles/tokens/shadows.css`)

**Purpose:** 5-level elevation system for depth.

**Key Variables:**

| Level | Variable | Value | Website Reusable? |
|---|---|---|---|
| 0 | `--fv-elevation-0` | `none` | YES |
| 1 | `--fv-elevation-1` | `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)` | YES |
| 2 | `--fv-elevation-2` | `0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)` | YES |
| 3 | `--fv-elevation-3` | `0 8px 16px rgba(0,0,0,0.14), 0 4px 8px rgba(0,0,0,0.10)` | YES |
| 4 | `--fv-elevation-4` | `0 16px 32px rgba(0,0,0,0.16), 0 8px 16px rgba(0,0,0,0.10)` | YES |
| Active | `--fv-elevation-active` | `0 1px 2px rgba(0,0,0,0.10)` | YES |

**Desktop-specific:** None — the elevation system is fully reusable.

**Website adaptation:** Directly reusable. Use elevation-1 for cards, elevation-2 for dropdowns, elevation-3 for modals, elevation-4 for tooltips. The active state (near-zero shadow) provides excellent tactile feedback for pressed states.

### 4.4 Motion (`src/styles/tokens/motion.css`)

**Purpose:** Duration, easing, and transition tokens.

**Key Variables:**

| Category | Variable | Value | Website Reusable? |
|---|---|---|---|
| Duration | `--fv-duration-instant` | `0ms` | YES |
| Duration | `--fv-duration-fast` | `100ms` | YES |
| Duration | `--fv-duration-normal` | `200ms` | YES |
| Duration | `--fv-duration-slow` | `350ms` | YES |
| Duration | `--fv-duration-slower` | `500ms` | YES |
| Easing | `--fv-ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | YES |
| Easing | `--fv-ease-decelerate` | `cubic-bezier(0, 0, 0.2, 1)` | YES |
| Easing | `--fv-ease-accelerate` | `cubic-bezier(0.4, 0, 1, 1)` | YES |
| Easing | `--fv-ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | YES |
| Transition | `--fv-transition-fast` | `100ms cubic-bezier(0.4, 0, 0.2, 1)` | YES |
| Transition | `--fv-transition-normal` | `200ms cubic-bezier(0.4, 0, 0.2, 1)` | YES |
| Transition | `--fv-transition-slow` | `350ms cubic-bezier(0.4, 0, 0.2, 1)` | YES |

**Reduced motion:** Full `@media (prefers-reduced-motion: reduce)` support — all durations set to 0ms.

**Desktop-specific:** None — the motion system is fully reusable.

**Website adaptation:** Directly reusable. The spring curve is excellent for playful micro-interactions (hover states, card lifts). Standard/decelerate curves for content reveals. Accelerate curves for exits.

### 4.5 Surfaces (`src/styles/tokens/surfaces.css`)

**Purpose:** Surface hierarchy and glass/translucency system.

**Key Variables:**

| Category | Variable | Value | Website Reusable? |
|---|---|---|---|
| Hierarchy | `--fv-surface-base` | `var(--bg-primary)` | YES |
| Hierarchy | `--fv-surface-raised` | `var(--bg-secondary)` | YES |
| Hierarchy | `--fv-surface-elevated` | `var(--bg-tertiary)` | YES |
| Hierarchy | `--fv-surface-floating` | `#2a2a2a` | YES |
| Hierarchy | `--fv-surface-overlay` | `rgba(0, 0, 0, 0.6)` | YES |
| Semantic | `--fv-surface-card` | `var(--bg-secondary)` | YES |
| Semantic | `--fv-surface-panel` | `var(--bg-secondary)` | YES |
| Semantic | `--fv-surface-dialog` | `var(--bg-tertiary)` | YES |
| Glass | `--fv-glass-opacity` | `0.75` | YES |
| Glass | `--fv-glass-blur` | `12px` | YES |
| Glass | `--fv-glass-border` | `1px solid rgba(255, 255, 255, 0.08)` | YES |
| Glass | `--fv-glass-bg` | `rgba(30, 30, 30, 0.75)` | YES |
| Glass | `--fv-surface-glass` | `var(--fv-glass-bg)` | YES |

**Graceful fallback:** `@supports (backdrop-filter: blur(1px))` — when supported, glass opacity reduces to 0.65. When not supported, blur is zeroed and opacity increases to 0.92.

**Desktop-specific:** None — the surface system is fully reusable.

**Website adaptation:** Directly reusable. The 5-level surface hierarchy maps perfectly to website card/section layering. Glass effects are ideal for floating navigation, search overlays, and modal panels.

### 4.6 Radius (`src/styles/tokens/radius.css`)

**Purpose:** Border radius scale.

**Key Variables:**

| Variable | Value | Website Reusable? |
|---|---|---|
| `--radius-none` | `0` | YES |
| `--radius-sm` | `4px` | YES |
| `--radius-md` | `6px` | YES |
| `--radius-lg` | `8px` | YES |
| `--radius-xl` | `12px` | YES |
| `--radius-2xl` | `14px` | YES |
| `--radius-full` | `9999px` | YES |
| `--radius-window` | `8px` | MAYBE (window-specific) |
| `--radius-menu` | `12px` | YES |
| `--radius-button` | `5px` | YES |
| `--radius-app-tile` | `12px` | YES |

**Desktop-specific:** `--radius-window`, `--radius-window-maximized` (0), `--radius-win95` (0), `--radius-macos-button` (50%)

**Website adaptation:** Use the scale directly. `--radius-xl` (12px) for cards, `--radius-full` for pills/badges, `--radius-lg` (8px) for buttons.

### 4.7 Spacing (`src/styles/tokens/spacing.css`)

**Purpose:** Spacing scale and component-specific sizes.

**Key Variables:**

| Category | Variable | Value | Website Reusable? |
|---|---|---|---|
| Scale | `--space-1` | `4px` | YES |
| Scale | `--space-2` | `8px` | YES |
| Scale | `--space-3` | `12px` | YES |
| Scale | `--space-4` | `16px` | YES |
| Scale | `--space-5` | `20px` | YES |
| Scale | `--space-6` | `24px` | YES |
| Scale | `--space-8` | `32px` | YES |
| Scale | `--space-10` | `40px` | YES |
| Scale | `--space-12` | `48px` | YES |
| Scale | `--space-16` | `64px` | YES |

**Desktop-specific:**
- `--taskbar-height: 60px` — Taskbar
- `--topbar-height: 32px` — TopBar
- `--menu-width: 330px`, `--menu-height: 465px` — Start menu
- `--window-min-width: 152px`, `--window-min-height: 170px` — Window constraints
- `--border-width-window: 6.1px` — Window borders

**Website adaptation:** Use the 4px-base spacing scale directly. Ignore taskbar/menu/window sizing tokens.

### 4.8 OnerOS 2026 Theme (`src/styles/themes/oneros2026.css`)

**Purpose:** The Fluent Valley theme — 553 lines of component-specific overrides scoped to `body.oneros2026-mode`.

**Key Design Decisions:**

1. **Floating island taskbar** — centered, 16px radius, max-width calc(100vw - 40px), bottom 8px, height 48px
2. **Centered start menu** — left 50%, translateX(-50%), 380px wide, 16px radius, blur(24px)
3. **Blue accent** — `#60a5fa` (differentiates from default green)
4. **Cooler color palette** — backgrounds shift to blue-tinted dark (#0f1115, #181a20, #22252e)
5. **Stronger elevation** — shadows 2x opacity of base tokens
6. **Increased glass blur** — 16px (up from 12px)
7. **Window 12px radius** — up from 8px default
8. **App shell styling** — consistent `.os-app-header`, `.os-app-panel`, `.os-app-btn-*` classes
9. **Responsive start menu** — mobile goes full-width, max-height 60vh
10. **Taskbar auto-hide** — `.fv-taskbar--hidden` translates Y(calc(100% + 16px))

**Website adaptation:** This theme's visual language (floating surfaces, glass, blue accent, cool palette) is the primary inspiration for the website. The floating island taskbar concept directly informs a floating navigation dock concept.

---

## 5. Reusable UI Concepts

### 5.1 TopBar

- **Source:** `src/core/system/topbar/TopBar.tsx`
- **Purpose:** System bar with weather, search, and clock surfaces
- **Visual characteristics:** 40px height, glass background, three-column layout (left/center/right), auto-hide when windows are maximized
- **Interaction model:** Click triggers QuickPanel, mutual exclusion (only one panel open), Ctrl+K shortcut for search
- **Motion behavior:** Auto-hide via CSS class toggle, hover zone at top edge
- **Website adaptation:** **YES** — Repurpose as a contextual header that emerges on scroll or hover. The auto-hide behavior could inform a header that appears when needed.

### 5.2 Taskbar

- **Source:** `src/core/system/surfaces/Taskbar/Taskbar.tsx`
- **Purpose:** Application launcher, window switcher, notification area
- **Visual characteristics:** Floating island (OnerOS 2026), centered, glass background, 48px height, 16px radius
- **Interaction model:** Click to open StartMenu, app buttons for window focus/minimize, right-click context menus, auto-hide on maximize
- **Motion behavior:** CSS transition for show/hide, auto-hide with 300ms delay
- **Website adaptation:** **YES** — Floating navigation dock concept. The centered floating taskbar with glass effect is a strong website navigation pattern.

### 5.3 StartMenu

- **Source:** `src/core/system/surfaces/StartMenu/StartMenu.tsx`
- **Purpose:** Application launcher with search, app list, and footer actions
- **Visual characteristics:** Centered panel, glass background, 380px wide, 16px radius, backdrop-filter blur(24px), search input at top, app list, footer with system actions
- **Interaction model:** Search filters apps, keyboard navigation (arrows + Enter), click outside to close, Escape to close
- **Motion behavior:** `fv-menu-open` animation (opacity 0→1, translateY 8px→0, scale 0.98→1, decelerate easing)
- **Website adaptation:** **YES** — Navigation overlay / mega-menu concept. The search-within-navigation pattern is directly transferable. The slide-up + scale animation is ideal for website navigation reveals.

### 5.4 Search / Spotlight

- **Source:** `src/core/system/search/SearchPanel.tsx`, `src/core/system/surfaces/AppSwitcher/AppSwitcher.tsx`
- **Purpose:** Global search across apps and settings with grouped results
- **Visual characteristics:** Full glass panel (blur 40px), centered, 14px radius, search icon, keyboard shortcut hint, grouped results (APPLICATIONS, SETTINGS)
- **Interaction model:** Cmd/Ctrl+K to open, type to search, arrow keys to navigate, Enter to select, Escape to close
- **Motion behavior:** QuickPanel positioning, auto-focus on open
- **Website adaptation:** **YES** — Global website search overlay. The Spotlight-style centered search with glass effect is a strong website UX pattern for searching pages, features, and documentation.

### 5.5 NotificationPanel

- **Source:** `src/core/system/surfaces/Notifications/NotificationPanel.tsx`
- **Purpose:** System notifications with type-based icons, timestamps, and actions
- **Visual characteristics:** 340px wide panel, glass surface, status-colored icons (info/success/warning/error), unread indicators, time ago display
- **Interaction model:** Toggle via bell icon, clear all, dismiss individual, mark as read
- **Motion behavior:** Panel open/close animation
- **Website adaptation:** **YES** — Updates/changelog/announcements panel. The notification pattern maps well to a "What's New" or updates panel for the website.

### 5.6 AppSwitcher

- **Source:** `src/core/system/surfaces/AppSwitcher/AppSwitcher.tsx`
- **Purpose:** Alt-Tab style application switcher
- **Visual characteristics:** Fullscreen overlay (rgba 0,0,0,0.45), centered panel (320-420px), 12px radius, elevated shadow, app icons with active dots
- **Interaction model:** Click overlay to close, click item to switch, right-click for context menu, keyboard navigation
- **Motion behavior:** `fv-fade-in` (100ms), `fv-scale-in` (200ms decelerate)
- **Website adaptation:** **YES** — Project/feature switcher. The overlay + centered panel pattern works for showcasing projects or features in a spatial way.

### 5.7 Window Surface

- **Source:** `src/core/windowManager/Window/Window.tsx`
- **Purpose:** Application container with drag, resize, snap, minimize, maximize
- **Visual characteristics:** Elevated surface, draggable header, action buttons (minimize/maximize/close), snap preview overlay, click blocker for inactive windows
- **Interaction model:** Drag to move, edge snap, double-click to maximize, keyboard shortcuts (Ctrl+Arrow)
- **Motion behavior:** `window--opening` (scale 0.96→1 + fade), `window--closing` (fade out), `window--minimizing` (scale 0.8 + slide down), layout transitions (200ms ease)
- **Website adaptation:** **YES** — Content reveal container / card expansion. The open/close/minimize animations inform how content panels could expand into detail views.

### 5.8 QuickPanel

- **Source:** `src/core/system/quickPanels/QuickPanel.tsx`
- **Purpose:** Generic positioned panel container for clock, weather, and search
- **Visual characteristics:** Fixed positioning, computed from trigger element's bounding rect, 320px width (center: min(640px, vw - 32px))
- **Interaction model:** Click outside to close, Escape to close, mutual exclusion with other panels
- **Motion behavior:** Panel positioning animation
- **Website adaptation:** **YES** — Generic floating panel concept. The trigger-based positioning system is directly reusable for dropdown menus, tooltips, and floating content.

### 5.9 ClockPanel

- **Source:** `src/core/system/quickPanels/ClockPanel/ClockPanel.tsx`
- **Purpose:** Large clock display with day and date
- **Visual characteristics:** Large digits (40px, tabular-nums), day name, full date
- **Website adaptation:** **MAYBE** — Could inform a footer clock widget or time-based content display.

### 5.10 WeatherPanel

- **Source:** `src/core/system/quickPanels/WeatherPanel/WeatherPanel.tsx`
- **Purpose:** Weather display with temperature, condition, and details
- **Visual characteristics:** Main icon + temperature, location, condition, humidity/wind details
- **Website adaptation:** **NO** — Too OS-specific for a product website.

### 5.11 SystemAlert

- **Source:** `src/components/SystemAlert/SystemAlert.tsx`
- **Purpose:** Global toast notification system with info/warning/success types
- **Visual characteristics:** Centered modal overlay, 10px radius, status-colored icons, auto-dismiss after 3 seconds
- **Motion behavior:** `alertFadeIn` (150ms), `alertSlideIn` (200ms ease, translateY -10px→0)
- **Website adaptation:** **YES** — Toast notification system for the website (form submissions, copy confirmations, etc.)

### 5.12 Bootloader

- **Source:** `src/core/system/bootloader/Bootloader.tsx`
- **Purpose:** Boot splash screen with "OnerOS" text
- **Visual characteristics:** Black background, centered "OnerOS" text, 1.6s timer
- **Website adaptation:** **YES** — Loading/splash screen concept for the website. The boot sequence creates a memorable first impression.

### 5.13 Context Menus

- **Source:** Taskbar right-click, AppSwitcher right-click, BackgroundLayer right-click
- **Purpose:** Context-sensitive action menus
- **Visual characteristics:** Positioned at click point, elevated surface, separator lines, danger items
- **Motion behavior:** `ctxMenuIn` (120ms, scale 0.95→1 + opacity)
- **Website adaptation:** **MAYBE** — Right-click context menus are less common on websites, but the visual pattern (positioned elevated surface) is reusable for dropdown menus.

### 5.14 BackgroundLayer Context Menu

- **Source:** `src/core/desktop/layers/BackgroundLayer.tsx`
- **Purpose:** Desktop right-click menu with Reload UI, Start Menu, and About options
- **Visual characteristics:** Positioned at click point, list items
- **Website adaptation:** **NO** — OS-specific interaction.

### Components NOT Recommended for Website

| Component | Reason |
|---|---|
| Window drag/resize | Desktop-specific interaction |
| Window snap zones | Desktop-specific layout management |
| Window minimize/restore | Desktop-specific state |
| App iframe loading | Desktop-specific content loading |
| Virtual file system (Linux Mode) | OS simulation feature |
| Kernel panic overlay | OS simulation Easter egg |

---

## 6. Motion Language

### Existing Motion Tokens

| Token | Value | Use Case |
|---|---|---|
| `--fv-duration-instant` | `0ms` | Immediate feedback |
| `--fv-duration-fast` | `100ms` | Hover states, micro-interactions |
| `--fv-duration-normal` | `200ms` | Standard transitions |
| `--fv-duration-slow` | `350ms` | Content reveals, panel opens |
| `--fv-duration-slower` | `500ms` | Page transitions, large reveals |
| `--fv-ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | General purpose |
| `--fv-ease-decelerate` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering view |
| `--fv-ease-accelerate` | `cubic-bezier(0.4, 0, 1, 1)` | Elements exiting view |
| `--fv-ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful micro-interactions |

### Existing Animations

| Animation | Trigger | Behavior |
|---|---|---|
| `fv-menu-open` | StartMenu open | opacity 0→1, translateY 8px→0, scale 0.98→1, 200ms decelerate |
| `fv-panel-open` | QuickPanel open | opacity 0→1, translateY -6px→0 |
| `fv-fade-in` | AppSwitcher overlay | opacity 0→1, 100ms standard |
| `fv-scale-in` | AppSwitcher panel | scale 0.95→1 + opacity, 200ms decelerate |
| `ctxMenuIn` | Context menu | scale 0.95→1 + opacity, 120ms ease |
| `alertFadeIn` | SystemAlert overlay | opacity 0→1, 150ms ease |
| `alertSlideIn` | SystemAlert box | translateY -10px→0 + opacity, 200ms ease |
| `window--opening` | Window mount | scale 0.96→1 + opacity, 200ms |
| `window--closing` | Window close | opacity 1→0, 120ms |
| `window--minimizing` | Window minimize | scale 0.8 + translateY + opacity, 200ms |

### Reduced Motion Support

All motion tokens are zeroed in `@media (prefers-reduced-motion: reduce)`. All animations are disabled via `animation: none` on surfaces.

---

### WEBSITE MOTION LANGUAGE

#### Recommended Motion Hierarchy

**Micro (100ms, fast)**
- Button hover states
- Icon color transitions
- Border/focus ring appearances
- Badge count changes
- Use: `--fv-duration-fast` + `--fv-ease-standard`

**Small (200ms, normal)**
- Card hover elevation lift
- Menu item hover background
- Toggle switch transitions
- Input focus ring expansion
- Tab indicator sliding
- Use: `--fv-duration-normal` + `--fv-ease-standard`

**Medium (350ms, slow)**
- Section content reveal (scroll-triggered)
- Panel slide-in from edge
- Navigation overlay open/close
- Card expansion into detail view
- Search overlay appearance
- Use: `--fv-duration-slow` + `--fv-ease-decelerate`

**Large (500ms, slower)**
- Page section transitions
- Hero element entrance
- Full-screen overlay transitions
- Complex multi-element reveals
- Use: `--fv-duration-slower` + `--fv-ease-decelerate`

#### Recommended Motion Concepts

| Concept | Implementation | Use Case |
|---|---|---|
| Section enters from side | translateY(20px) → 0 + opacity 0→1 | Scroll-triggered content sections |
| Panel slides from edge | translateX(-100%) → 0 with glass backdrop | Navigation overlay, search panel |
| Cards lift into elevation | box-shadow elevation-1 → elevation-3 on hover | Feature cards, project cards |
| Navigation expands | scale(0.95) → 1 + opacity, glass backdrop | StartMenu-inspired nav |
| Content stacks spatially | z-index layering + subtle translateY offsets | Card grids, feature showcases |
| Overlays emerge from source | transform-origin from trigger element | Dropdown menus, tooltips |
| Sections reveal progressively | Staggered animation-delay (50ms intervals) | Feature grid, app showcase |

#### Motion Rules for the Website

1. **Never animate for decoration** — every animation should communicate state change or spatial relationship
2. **Use decelerate for entries, accelerate for exits** — elements entering should ease in, elements leaving should ease out
3. **Keep micro-interactions under 200ms** — anything longer feels sluggish
4. **Use spring curve sparingly** — only for playful moments (button hover, badge bounce)
5. **Always respect prefers-reduced-motion** — zero all animations for users who request it
6. **Stagger reveals for groups** — when revealing multiple items, add 30-50ms delay between each
7. **Avoid animating layout properties** — prefer transform and opacity for performance

---

## 7. Interaction Patterns

### Existing OS Patterns → Website Adaptations

| OS Pattern | Website Adaptation | Source |
|---|---|---|
| **AppSwitcher** | Project/feature switcher overlay | `AppSwitcher.tsx` |
| **Window opening** | Product showcase panel expanding into detail view | `Window.tsx` |
| **System search (Spotlight)** | Global Spotlight search across pages, features, and projects | `SearchPanel.tsx` |
| **StartMenu** | Navigation overlay with search and categorized links | `StartMenu.tsx` |
| **NotificationPanel** | Updates/changelog/announcements panel | `NotificationPanel.tsx` |
| **Taskbar** | Floating navigation dock with glass effect | `Taskbar.tsx` |
| **TopBar** | Contextual header that appears on scroll/hover | `TopBar.tsx` |
| **QuickPanel** | Floating positioned panels (dropdowns, tooltips) | `QuickPanel.tsx` |
| **SystemAlert** | Toast notifications for user actions | `SystemAlert.tsx` |
| **Bootloader** | Loading splash screen | `Bootloader.tsx` |
| **Context menu** | Right-click or long-press action menus | Taskbar, AppSwitcher |
| **Window snap** | Content panels that snap to viewport edges | `Window.tsx` |
| **Theme switching** | Optional dark/light theme toggle | `appearance.ts` |

### Hover States (from CSS)

| Pattern | Behavior | Website Reusable? |
|---|---|---|
| `.fv-taskbar-app:hover` | Background rgba(255,255,255,0.06), scale(1.02) | YES — card hover |
| `.fv-startmenu-app:hover` | Background rgba(255,255,255,0.08) | YES — list item hover |
| `.app-switcher-item:hover` | Background rgba(255,255,255,0.06) | YES — switcher item hover |
| `.fv-notif-bell:hover` | Color transition to accent | YES — icon hover |
| `.fv-weather--trigger:hover` | Background rgba(255,255,255,0.06) | YES — trigger hover |
| Button `:active` | Scale(0.97) + elevation-active | YES — pressed state |

### Focus States

| Pattern | Behavior | Website Reusable? |
|---|---|---|
| `:focus-visible` outlines | 2px solid accent, 2px offset | YES — accessibility |
| `.fv-search--focused` | Border-color accent, ring expansion | YES — input focus |

### Keyboard Interactions

| Shortcut | Action | Website Equivalent |
|---|---|---|
| Ctrl/Cmd+K | Open search | Global search overlay |
| Escape | Close panels/menus | Close overlays |
| Arrow Up/Down | Navigate lists | Navigate search results |
| Enter/Space | Select item | Activate selection |
| Tab | Move focus | Standard web accessibility |

---

## 8. Application & Ecosystem Inventory

### Internal Applications

| App | Category | Description | Icon | CSS | Website Potential |
|---|---|---|---|---|---|
| **Settings** | system | System settings and configuration | `fa-gear` | Yes | Feature showcase |
| **Personalization** | system | Customize wallpaper and accent colors | `fa-palette` | Yes | Feature showcase |
| **DevZone** | tools | Developer tools (JSON, Base64, Color, Regex, Hash, Snippets) | `fa-code` | Yes | Developer feature |
| **Linux Mode** | tools | Simulated Linux terminal with 24+ commands | `fa-terminal` | Yes | Developer feature / Easter egg |
| **MPlayer** | media | Music player with vinyl animation | `fa-music` | Yes | Media feature showcase |
| **WinSync** | tools | Windows sync tools (Clipboard, File Transfer, QR, Links, Notes) | `fa-rotate` | Yes | Feature showcase |
| **KDialer** | utilities | Phone dialer with contacts and recent calls | `fa-phone` | Yes | Feature showcase |
| **Tools** | tools | System tools (Screenshot, Monitor, Clipboard, Recorder, Color Picker, Notes) | `fa-screwdriver-wrench` | Yes | Feature showcase |

### External/Ecosystem Applications

| App | Category | URL | Website Potential |
|---|---|---|---|
| **Google** | internet | https://next-gooogle.vercel.app/ | Ecosystem partner |
| **Facebook** | internet | https://clonedbook.vercel.app/ | Ecosystem partner |
| **Bing** | internet | https://www.bing.com/ | Ecosystem partner |
| **ReVideeo** | media | https://revideeo.app | Ecosystem project — featured |
| **ReImaage** | media | https://reimaage-app.vercel.app/ | Ecosystem project — featured |
| **iVOD** | media | https://vod.itvt.xyz | Ecosystem project — featured |
| **Calculator** | utilities | https://calculator-a.vercel.app/ | Ecosystem project |

### Ecosystem Classification

**OnerOS Core Features:**
- Window Management
- Theme System (7 themes)
- Accent Color System
- Wallpaper System
- Application Registry
- Search System
- Notification System
- Boot Sequence

**OnerOS Internal Applications:**
- Settings, Personalization, DevZone, Linux Mode, MPlayer, WinSync, KDialer, Tools

**External Ecosystem Projects:**
- ReVideeo, ReImaage, iVOD (media ecosystem)
- Google clone, Facebook clone, Bing (internet apps)
- Calculator (utility)

---

## 9. Visual Assets Inventory

| Asset | Path | Type | Current Usage | Reuse? | Recommended Use |
|---|---|---|---|---|---|
| Wallpaper | `public/img/Wallpaper.webp` | WebP | Default desktop wallpaper | MAYBE | Hero background, dark-themed sections |
| React Logo | `public/logo192.png` | PNG 192x192 | PWA icon (stock CRA) | NO | Replace with OnerOS logo |
| React Logo | `public/logo512.png` | PNG 512x512 | PWA icon (stock CRA) | NO | Replace with OnerOS logo |
| Favicon | `public/favicon.ico` | ICO | Browser tab icon | MAYBE | Replace if stock CRA |
| React SVG | `src/logo.svg` | SVG | Unused (CRA leftover) | NO | Remove |
| App Icons | FontAwesome icons | SVG/CSS | All app icons | YES | Website icons |
| Empty | `src/assets/images/.gitkeep` | — | Empty directory | NO | — |

### Missing Assets for Website

| Asset | Priority | Description |
|---|---|---|
| OnerOS Logo (SVG) | HIGH | Official OnerOS logo for header, footer, branding |
| OnerOS Logo (PNG) | HIGH | For PWA manifest, social sharing |
| Hero Screenshot | HIGH | OnerOS Web Preview 3.1.0 Fluent Valley screenshot |
| Theme Showcase | MEDIUM | Grid of all 7 themes for feature page |
| Application Icons | MEDIUM | Custom icons for internal apps (currently FontAwesome) |
| Ecosystem Logos | MEDIUM | ReVideeo, ReImaage, iVOD logos |
| Open Graph Image | MEDIUM | Social sharing preview image |
| Historical UI Screenshots | LOW | v2.x vs v3.x comparison |
| Wallpaper Collection | LOW | All available wallpapers for showcase |

---

## 10. Content Available

### From Repository

- Product name: "OnerOS"
- Version: "3.1.0"
- Codename: "Fluent Valley"
- Tagline: "One OS For Your Devices"
- Author: "Klubuntu — OnerOS Project"
- License: GPL-3.0
- Copyright: "2025-2026 OnerOS Project by Klubuntu"
- Author website: https://klubuntu.eu.org/
- Feature list (from README.md)
- 7 theme names and descriptions
- 15 application names and descriptions
- Architecture documentation (README.md)
- Migration history (MIGRATION_V3.md, 2014 lines)
- External project URLs (ReVideeo, ReImaage, iVOD, etc.)

---

## 11. Information Required

### PRODUCT

| Item | Needed For | Status |
|---|---|---|
| Official one-sentence description of OnerOS | Hero section, meta tags | [INFORMATION REQUIRED] |
| Official longer description | About section, SEO | [INFORMATION REQUIRED] |
| Target audience | Content strategy | [INFORMATION REQUIRED] |
| Project status (beta, stable, etc.) | Website messaging | [INFORMATION REQUIRED] |
| Future native OS plans | Roadmap section | [INFORMATION REQUIRED] |
| Key differentiators vs other projects | Feature comparison | Partially available from README |

### LINKS

| Item | Needed For | Status |
|---|---|---|
| Official GitHub repository | Open source section | [INFORMATION REQUIRED] |
| OnerOS Web Preview live URL | "Try OnerOS" button | [INFORMATION REQUIRED] |
| Community links (Discord, forum, etc.) | Community section | [INFORMATION REQUIRED] |
| Social media accounts | Footer links | [INFORMATION REQUIRED] |
| Documentation URL | Help section | [INFORMATION REQUIRED] |

### ECOSYSTEM

| Item | Needed For | Status |
|---|---|---|
| Official ReVideeo description | Ecosystem section | [INFORMATION REQUIRED] |
| Official ReImaage description | Ecosystem section | [INFORMATION REQUIRED] |
| Official iVOD description | Ecosystem section | [INFORMATION REQUIRED] |
| Preferred project links | Ecosystem section | URLs available from registry |
| Logos / branding permissions | Ecosystem section | [INFORMATION REQUIRED] |

### CONTENT

| Item | Needed For | Status |
|---|---|---|
| Roadmap | Roadmap page | [INFORMATION REQUIRED] |
| Changelog strategy | Updates page | [INFORMATION REQUIRED] |
| Release history | Releases page | Version history from git tags needed |
| Feature priorities | Feature showcase | [INFORMATION REQUIRED] |
| Screenshots | Feature showcase | [INFORMATION REQUIRED] |

### LEGAL

| Item | Needed For | Status |
|---|---|---|
| License text | Footer / license page | GPL-3.0 (standard, available) |
| Copyright notice | Footer | "2025-2026 OnerOS Project by Klubuntu" |
| Privacy policy | Legal page | [INFORMATION REQUIRED] |
| Contact information | Contact page / footer | [INFORMATION REQUIRED] |

---

## 12. Recommended Website Architecture

Based on verified project information, the website should be structured as:

```
Home
├── Hero (OnerOS name, tagline, CTA)
├── Preview (Fluent Valley screenshot / interactive demo)
├── Features (Window Manager, Themes, Apps, Search)
├── Themes (7 theme showcase with previews)
├── Applications (Internal + Ecosystem grid)
├── Open Source (GitHub, License, Contributing)
└── Footer (Links, Copyright, Community)

Pages:
├── / (Home)
├── /features (Detailed feature breakdown)
├── /themes (Theme gallery and customization preview)
├── /apps (Application showcase)
├── /ecosystem (ReVideeo, ReImaage, iVOD)
├── /open-source (GitHub, license, contributing)
├── /try (Launch OnerOS Web Preview)
└── /updates (Changelog / What's New)

Overlays (system-style):
├── Search (Spotlight-style global search)
├── Navigation (StartMenu-inspired overlay)
└── Updates (Notification-style panel)
```

### Section Mapping

| Section | Type | Rationale |
|---|---|---|
| Hero | Homepage section | First impression, brand identity |
| Preview | Homepage section | Show Fluent Valley in action |
| Features | Homepage section + standalone page | Core value proposition |
| Themes | Standalone page | Visual showcase needs dedicated space |
| Applications | Homepage section + standalone page | Ecosystem overview |
| Open Source | Homepage section | Community trust signal |
| Search | Overlay | Spotlight-style global search |
| Navigation | Overlay or floating dock | StartMenu / Taskbar-inspired |
| Updates | Panel | Notification-style changelog |

---

## 13. OnerOS Web Experience Concept

### ONEROS WEB EXPERIENCE CONCEPT

The future website should feel like **"OnerOS, translated from an operating system interface into a modern product website."**

#### Interaction Model

**Landing Page → Core Navigation Surface**

The homepage opens with the OnerOS brand name and tagline. As the user scrolls, content sections reveal with spatial motion — cards lift into elevation, panels slide from edges, content stacks with depth. The experience should feel like surfaces emerging from the OS into a website context.

**Feature Exploration → Panels Slide Into View**

Each feature section enters the viewport as a panel sliding from the side or lifting from below. The Fluent Valley glass effect appears on key surfaces (feature cards, navigation elements). Content is layered with subtle depth using the 5-level elevation system.

**Application Showcase → Interactive Surfaces Expand**

Application cards start as compact tiles and expand into detailed views. The expansion animation mirrors the window opening behavior (scale + fade). Each app showcase uses the OS-app shell styling from the Fluent Valley theme.

**Search → Spotlight-Style Global Overlay**

Cmd/Ctrl+K opens a glass overlay centered on the page. The search panel uses the exact Spotlight visual language: glass background (blur 40px), search icon, keyboard shortcut hint, grouped results. Search covers pages, features, and projects.

**Updates → Notification-Style Panel**

A bell icon in the navigation triggers a slide-in panel from the right edge. The panel uses the notification panel visual language: glass surface, timestamped items, dismiss actions. This serves as the changelog/updates feed.

**Navigation → Context-Aware Floating System Surface**

The main navigation uses a floating dock concept inspired by the OnerOS 2026 taskbar: centered, glass background, compact, auto-hide on scroll. On mobile, it could expand into a StartMenu-style overlay.

#### Visual Language Translation

| OS Concept | Website Translation |
|---|---|
| Desktop wallpaper | Hero background (dark, atmospheric) |
| Window surfaces | Content cards with elevation |
| Taskbar | Floating navigation dock |
| StartMenu | Navigation overlay with search |
| Spotlight | Global search overlay |
| Notification panel | Updates/changelog panel |
| System alert | Toast notifications |
| Boot sequence | Loading animation |
| Theme system | Dark mode (default) with optional light |
| Glass surfaces | Floating nav, search overlay, modals |
| Elevation layers | Card hierarchy, section depth |
| Spatial motion | Scroll-triggered reveals, panel slides |

#### Recommended Experience Flow

```
1. Boot → Loading animation (200ms, OnerOS logo pulse)
2. Desktop → Hero section with brand name and tagline
3. Scroll → Sections reveal with spatial motion
4. Hover → Cards lift into elevation, icons animate
5. Search → Cmd+K opens Spotlight overlay
6. Nav → Floating dock appears/disappears contextually
7. Apps → Tiles expand into detail views
8. Updates → Notification panel slides from edge
```

#### Rules

1. **Subtle glass** — use sparingly on navigation and search overlays
2. **Spatial depth** — every section should have clear visual hierarchy
3. **Motion with purpose** — animations communicate spatial relationships
4. **System feel** — the website should feel like a well-designed system, not a marketing page
5. **No fake OS** — the website is NOT a desktop simulator; it borrows visual language only

---

## 14. Technical Transfer Map

### Transferable Concepts

| Web Preview Concept | Website Equivalent | Source Path | Reusable? | Notes |
|---|---|---|---|---|
| Fluent Valley tokens | Website design tokens | `src/styles/tokens/` | YES | Extract `--fv-*` tokens, increase base font to 16px |
| Color system | Website color palette | `src/styles/tokens/colors.css` | YES | Use `--fv-*` semantic tokens as primary API |
| Typography system | Website typography | `src/styles/tokens/typography.css` | YES | Add larger sizes for headings |
| Elevation system | Website depth system | `src/styles/tokens/shadows.css` | YES | Directly reusable, all 5 levels |
| Motion tokens | Website animation system | `src/styles/tokens/motion.css` | YES | Directly reusable, all durations + easings |
| Surface hierarchy | Website section/card hierarchy | `src/styles/tokens/surfaces.css` | YES | 5-level hierarchy maps to website sections |
| Glass system | Website floating surfaces | `src/styles/tokens/surfaces.css` | YES | Use for nav, search, modals |
| Radius scale | Website border radius | `src/styles/tokens/radius.css` | YES | Directly reusable |
| Spacing scale | Website spacing | `src/styles/tokens/spacing.css` | YES | 4px-base scale |
| OnerOS 2026 theme | Website dark theme | `src/styles/themes/oneros2026.css` | PARTIAL | Extract color palette, ignore OS-specific styles |
| Search system | Global website search | `src/core/system/search/` | PARTIAL | Reuse visual pattern, not OS-specific logic |
| Notification store | Website updates panel | `src/core/system/notifications/` | PARTIAL | Reuse subscriber pattern, adapt for changelog |
| QuickPanel | Floating positioned panels | `src/core/system/quickPanels/` | PARTIAL | Reuse positioning logic |
| SystemAlert | Toast notifications | `src/components/SystemAlert/` | YES | Clean, reusable pattern |
| Theme registry | Optional theme support | `src/core/system/appearance/themeRegistry.ts` | PARTIAL | Pattern reusable, not the OS themes |
| Accent system | Brand color system | `src/core/system/appearance/accent.ts` | YES | Excellent dynamic accent color derivation |
| App registry | Feature/project registry | `src/core/apps/registry.ts` | PARTIAL | Pattern reusable for website sections |
| Taskbar auto-hide | Nav auto-hide | `src/core/system/surfaces/Taskbar/Taskbar.tsx` | PARTIAL | Reuse scroll-based show/hide pattern |
| StartMenu animation | Nav overlay animation | `src/styles/system-surfaces.css` | YES | `fv-menu-open` keyframes directly reusable |
| AppSwitcher animation | Overlay animation | `src/core/system/surfaces/AppSwitcher/` | YES | `fv-fade-in`, `fv-scale-in` keyframes |
| Window opening | Content card expansion | `src/core/windowManager/Window/Window.tsx` | PARTIAL | Reuse animation concept, not window logic |
| Bootloader | Loading screen | `src/core/system/bootloader/Bootloader.tsx` | YES | Simple, clean pattern |
| Responsive breakpoints | Website responsive | `src/styles/responsive.css` | PARTIAL | Reuse breakpoints, ignore OS-specific overrides |
| CSS reset | Website reset | `src/styles/globals/reset.css` | PARTIAL | Remove `user-select: none` (website needs text selection) |
| Reduced motion | Accessibility | `src/styles/tokens/motion.css` | YES | Directly reusable |

### Code That Should Only Inspire (Not Be Copied)

| Concept | Why Not Copy |
|---|---|
| WindowManager state management | Desktop-specific window lifecycle |
| Window drag/resize (interact.js) | Desktop-specific interaction |
| Window snap zones | Desktop-specific layout |
| App iframe loading | Desktop-specific content loading |
| Taskbar app buttons | Desktop-specific window switching |
| StartMenu app launching | Desktop-specific app launching |
| Theme body class switching | Desktop-specific theming approach |
| Custom DOM events (os:app_run, etc.) | Desktop-specific communication |
| Bootloader 1.6s timer | Desktop-specific boot sequence |

### Desktop-Specific Code (Do NOT Transfer)

| Component | Reason |
|---|---|
| `WindowManager.tsx` | Full window lifecycle management |
| `Window.tsx` | Drag, resize, snap, minimize, maximize |
| `WindowHeader.tsx` | Window title bar with controls |
| `WindowContent.tsx` | iframe/embed/component rendering |
| `DesktopRuntime.tsx` | Desktop layer composition |
| `BackgroundLayer.tsx` | Wallpaper + context menu |
| `DesktopContentLayer.tsx` | Desktop content area |
| `SystemSurfaceLayer.tsx` | System UI container |
| `OverlayLayer.tsx` | Overlay container |
| `taskbarState.ts` | Window-to-taskbar state derivation |
| `taskbarPreferences.ts` | Pinned app management |
| `weather.service.ts` | Weather data fetching |
| All `src/apps/*.jsx` | OS application implementations |
| `src/OS/` | Legacy compatibility bridges |
| `src/pages/` | Legacy app page locations |

---

## 15. Repository Health & Migration Notes

### SAFE TO REFERENCE

| Path | Status | Notes |
|---|---|---|
| `src/styles/tokens/` | ACTIVE | All 7 token files are current and well-maintained |
| `src/styles/themes/oneros2026.css` | ACTIVE | Fluent Valley theme, 553 lines, current |
| `src/styles/system-surfaces.css` | ACTIVE | Component CSS, 865 lines, current |
| `src/styles/system-bars.css` | ACTIVE | Bar/window CSS, 968 lines, current |
| `src/styles/responsive.css` | ACTIVE | Responsive rules, 260 lines, current |
| `src/styles/globals/` | ACTIVE | Reset + base styles |
| `src/core/system/appearance/` | ACTIVE | Theme registry, accent system |
| `src/core/system/search/` | ACTIVE | Search system with registry |
| `src/core/system/notifications/` | ACTIVE | Notification store + types |
| `src/core/system/surfaces/AppSwitcher/` | ACTIVE | AppSwitcher with CSS |
| `src/core/system/quickPanels/` | ACTIVE | QuickPanel, ClockPanel, WeatherPanel |
| `src/core/system/bootloader/` | ACTIVE | Boot screen |
| `src/components/SystemAlert/` | ACTIVE | Toast notification system |
| `src/core/apps/registry.ts` | ACTIVE | App registry |
| `src/core/apps/iconResolver.ts` | ACTIVE | Icon mapping |
| `src/constants/index.ts` | ACTIVE | Central constants |

### DEPRECATED

| Path | Status | Notes |
|---|---|---|
| `src/styles/legacy/app.css` | DEPRECATED | Original monolithic CSS, kept for backward compatibility |
| `src/OS/` | DEPRECATED | Original OS components, now bridges to `src/core/` |
| `src/pages/` | DEPRECATED | Original app page locations, now in `src/apps/` |

### LEGACY / COMPATIBILITY

| Path | Status | Notes |
|---|---|---|
| `src/OS/Window/buildWindow.tsx` | BRIDGE | Re-exports from `src/core/windowManager/Window/` |
| `src/OS/Tools/taskbar.js` | BRIDGE | Original taskbar, replaced by `src/core/system/surfaces/Taskbar/` |
| `src/app.css` | BRIDGE | Re-exports from `src/styles/legacy/app.css` |

### DO NOT TRANSFER

| Path | Status | Notes |
|---|---|---|
| `src/lambda/` | STATIC | Netlify serverless functions (hello.js, async-dadjoke.js) |
| `src/reportWebVitals.js` | CRA | Create React App boilerplate |
| `src/setupTests.js` | CRA | Test setup boilerplate |
| `src/logo.svg` | UNUSED | Stock React logo, not used anywhere |
| `src/assets/images/.gitkeep` | EMPTY | Empty directory placeholder |
| `src/hooks/index.ts` | EMPTY | Empty barrel file |
| `src/services/index.ts` | EMPTY | Empty barrel file |
| `src/utils/index.ts` | EMPTY | Empty barrel file |
| `src/types/index.ts` | EMPTY | Unused types barrel |
| `src/core/index.ts` | EMPTY | Unused core barrel |
| `src/core/system/index.ts` | EMPTY | Unused system barrel |
| `src/features/index.ts` | EMPTY | Unused features barrel |
| `build/` | OUTPUT | Production build output (should be gitignored) |

### Architecture Health Notes

1. **Mid-migration codebase** — v2.x to v3.0 migration is complete but legacy bridges remain
2. **Empty barrel files** — Several `index.ts` files are intentionally empty (direct imports used at runtime)
3. **Feature stubs** — `src/features/` contains placeholder components not yet implemented
4. **Mixed JS/TS** — Core modules are TypeScript, apps are JavaScript (`.jsx`)
5. **No CSS modules** — All styling is plain CSS with custom properties
6. **No state library** — State managed via useState + localStorage + custom events
7. **No testing** — `setupTests.js` exists but no test files found
8. **CRA-based** — Uses Create React App, not Vite (despite README mentioning Vite-compatible architecture)

---

## 16. Recommended Website Project Starting Point

### Technology Stack (Recommended Based on Current Architecture)

| Layer | Recommendation | Rationale |
|---|---|---|
| Framework | Next.js or Astro | Modern SSG/SSR, good for marketing sites |
| Styling | CSS Custom Properties | Directly transfer Fluent Valley tokens |
| Animation | Framer Motion or CSS | Spring curves + scroll-triggered reveals |
| Icons | FontAwesome or Lucide | Current project uses FontAwesome |
| Search | Cmd+K library (kbar, cmdk) | Spotlight-style search overlay |
| Deployment | Vercel or Netlify | Current project uses Netlify |

### First Steps for Website Project

1. **Extract design tokens** — Copy `src/styles/tokens/` as the foundation
2. **Adapt the OnerOS 2026 theme** — Extract color palette, glass system, elevation
3. **Create brand assets** — OnerOS logo (SVG), favicon, OG image
4. **Build the navigation** — Floating dock concept from Taskbar
5. **Build the search** — Spotlight overlay from SearchPanel
6. **Build the hero** — Brand name + tagline + preview screenshot
7. **Build feature sections** — Spatial motion reveals from animation tokens

### Files to Reference (Priority Order)

1. `src/styles/tokens/motion.css` — Animation foundation
2. `src/styles/tokens/colors.css` — Color system
3. `src/styles/tokens/surfaces.css` — Glass and depth
4. `src/styles/tokens/shadows.css` — Elevation system
5. `src/styles/themes/oneros2026.css` — Fluent Valley visual language
6. `src/styles/system-surfaces.css` — Component animations
7. `src/core/system/appearance/accent.ts` — Dynamic accent color derivation
8. `src/components/SystemAlert/` — Toast notification pattern
9. `src/core/system/search/SearchPanel.tsx` — Spotlight search pattern
10. `src/core/system/surfaces/StartMenu/StartMenu.tsx` — Navigation overlay pattern

---

*This document was generated through read-only analysis of the OnerOS Web Preview 3.1.0 repository. No application code was modified. No commits were made.*
