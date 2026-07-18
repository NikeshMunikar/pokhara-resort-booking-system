# Himāla Cove — Design System

Reference for every page and component built in this project. Tokens live in
`app/globals.css`; this doc explains the intent behind them.

## Brand

**Himāla Cove** — *Lakeside Living, Mountain Soul*
A fictional lakeside resort on Phewa Lake, Pokhara. Calm, editorial luxury —
closer to Aman/Six Senses restraint than ornate five-star opulence.

## Color

| Token | Hex | Use |
|---|---|---|
| `mist` | `#F5F6F1` | Base background |
| `mist-dim` | `#ECECE4` | Alternating section background |
| `dusk` | `#10263D` | Primary text, dark surfaces |
| `pine` | `#2C4638` | Primary accent — CTAs, links, active states |
| `amber` | `#C2872F` | Secondary accent — highlights, badges, prices |
| `timber` | `#8A6244` | Tertiary accent — used sparingly (icons, dividers) |
| `stone` | `#57625D` | Muted / secondary text |
| `line` | `#DDDED4` | Hairline borders on light surfaces |

Dark mode remaps `background`→`dusk`, `foreground`→`mist` via the `.dark`
class on `<html>`. Accent colors stay constant across themes.

**Rule:** one accent color leads per section. Don't combine pine and amber
CTAs in the same view — pine is the primary action, amber is reserved for
price emphasis and small highlight badges only.

## Typography

| Role | Face | Where |
|---|---|---|
| Display | Fraunces | H1/H2, hero lines, pull-quotes — used with restraint |
| Body / UI | Inter | Everything else: nav, buttons, forms, paragraphs |
| Data | IBM Plex Mono | Prices, dates, booking references, room codes |

Utility class `.font-data` applies the mono face with tabular numerals —
use it any time a number needs to align in a table or price summary.

Scale: `text-xs` (12) → `text-sm` (14) → `text-base` (16) → `text-lg` (18)
→ `text-xl` (20) → `text-2xl` (24) → `text-3xl` (32) → `text-5xl` (48)
→ `text-6xl` (64), Tailwind defaults.

## Spacing

- Base unit: 4px (Tailwind default scale).
- Section vertical rhythm: `py-section` (7rem / 112px desktop) and
  `py-section-sm` (3rem / 48px, mobile or tighter sections) — both
  registered as theme tokens, use them instead of ad-hoc `py-*` values
  on top-level `<section>` wrappers.

## Radius & Shadow

- `radius-sm` (8px): inputs, badges
- `radius-md` (12px): buttons
- `radius-lg` (16px): cards
- `radius-xl` (24px): hero panels, modals, the floating search widget

Shadows are warm-tinted (`rgba(16,38,61,...)`, dusk-based) rather than
neutral gray — `shadow-soft` for resting cards, `shadow-elevated` for
hover/active, `shadow-glass` for glassmorphic panels over imagery.

## Signature motif — contour lines

A topographic contour-line device (`.contour-divider` utility class) stands
in for hard `<hr>` rules between sections. It echoes both lake ripples and
Himalayan elevation lines — the one recurring visual signature tying the
brand to its geography. Use it between major homepage sections; don't
overuse it inside dense UI like dashboards.

## Component conventions

- All interactive components get visible `:focus-visible` outlines
  (already global — don't override with `outline-none` without replacing it).
- Buttons: primary = solid `pine`, secondary = outlined `line` border on
  `surface`, tertiary = text-only `pine` with underline on hover.
- Cards: `bg-surface`, `rounded-lg`, `shadow-soft`, `border border-line`.
- Reduced motion is respected globally — don't add animations that ignore
  `prefers-reduced-motion`.

## Room naming style

Nature/geography-led, not generic tiers (e.g. not "Standard/Deluxe/Suite"
alone): *Lakeside Retreat, Annapurna View Room, Sarangkot Suite, Fewa Family
Cottage, Machapuchare Executive Suite, Himalayan Horizon Villa.*
