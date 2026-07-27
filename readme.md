# Founders Retreat — Design System

> **Working brand name.** The retreat is **Founders Retreat**. This project's
> internal title still reads *"The Founders' Edit Design System"* (an early
> placeholder that is locked and could not be renamed automatically). The
> compiler namespace `TheFoundersEditDesignSystem_0cfd4a` is likewise fixed.
> Everything the reader/attendee sees says **Founders Retreat**. Ask us to
> rename the project if the mismatch is a problem.

**Founders Retreat** is a small, invitation-only weekend (October 2–5, 2026, on
the Carolina coast) for ~10–12 women who own and are actively growing their
businesses. It is deliberately *not* a conference — everyone teaches, everyone
learns, and the most valuable conversations happen over dinner and on the beach.

This design system captures the retreat's **fun, editorial, warm travel**
aesthetic and gives design agents the tokens, components, and full landing page
to build on-brand assets.

## Sources given
- **Copy:** the full invitation copy the client rewrote "as an actual website"
  (hero, "breakthrough across the dinner table", why-you-were-invited,
  everyone-teaches, weekend format, who-you'll-meet, details, questionnaire,
  RSVP). This is the source of truth for tone and content.
- **Website inspiration** (`reference/`, `uploads/`):
  - *"Late Checkout Edit"* — cream + dusty-teal editorial travel site with a
    Didone masthead, vintage-warm photos, oversized display type, and thin rule
    dividers.
  - *"La Vita Lenta"* — Tuscan villa site: cream + terracotta + olive + a cobalt
    "REAL ITALIAN LIVING" ribbon band, handwritten script headline, hand-drawn
    terracotta line illustrations.
- **Photography** (`assets/photos/`, `assets/portraits/`): retreat lifestyle
  imagery — long-table dinners, beach yoga, journaling by candlelight, outdoor
  workshops, a pier at sunset, a skylit market hall — plus warm portrait
  headshots and blue-stripe linen textures (`assets/textures/`).
- No logo, brand fonts, or codebase were provided (see Iconography & Fonts).

---

## CONTENT FUNDAMENTALS

**Voice: a warm, direct friend who happens to run a business.** First-person
plural — *"we wanted to create the kind of weekend we all wish existed"* — and
second-person *you* for the reader. Never corporate, never hype.

- **Casing:** sentence case everywhere in prose. Headlines are sentence-case
  editorial statements, not Title Case. Small UPPERCASE + letterspacing is
  reserved for eyebrows, nav, and metadata labels only.
- **Sentence rhythm:** short. Fragments are used deliberately for emphasis and
  often stacked as their own lines: *"Not a conference. / Not a networking
  event. / Not a room where one person teaches while everyone else listens."*
- **Honest, not polished.** The client explicitly wanted it to *not* sound "AI"
  or overly polished. Favor plain words ("bounce ideas off of", "the offer that
  isn't converting", "the website that doesn't quite feel right") over jargon.
- **Emotionally forward.** Names the real feeling first (owning a business "can
  be surprisingly lonely") before the invitation.
- **Emoji:** none. Never.
- **Punctuation & marks:** use real typographic marks — curly quotes (' '),
  em dashes (—) for asides, en dash in date ranges (October 2–5). Numbers in
  details are approximate and said so ("approximately", "around $300").
- **Signature phrases:** *"Gather. Learn. Build."* (the handwritten divider),
  *"Everyone teaches. Everyone learns."*, and the closing line *"Come ready to
  share what you've learned. Leave with ideas you couldn't have found on your
  own."*
- **CTA copy:** warm and low-pressure — **"Request an Invitation"** (top),
  **"RSVP"** (bottom). Never "Buy now" / "Register" / "Sign up".

---

## VISUAL FOUNDATIONS

**Overall vibe:** editorial travel magazine meets a slow coastal weekend.
Sun-faded, warm, unhurried, confident. Big type, real photography, generous
white space, one accent color doing the talking.

- **Color.** **Neutral-led, à la the Late Checkout Edit — photography and type
  carry the color, not the palette.** A warm mushroom off-white base
  (`--paper #F4F1EA`) and a muted near-black (`--ink #23201C`) do almost all the
  work. Buttons, headings, eyebrows, links, and text on photos are **muted black
  or white** — never a color. The summer accents appear **rarely and
  deliberately**: Ares Red (`--terracotta #D52700`, the one true signal — a hover
  pop, a single tag), Smoky Blue (`--teal #7195A6`), a dusty light blue
  (`--olive #A8C3D2`, “Nearsighted”), Lemon (`--cobalt #EFC049`). Rule of thumb:
  if you’re reaching for a color, ask whether ink/white and a good photo would
  do it better. Usually yes.
- **Type.** Four voices: **Bricolage Grotesque** (funky contemporary grotesque,
  headers) · **Cormorant Garamond** (italic ledes & pull-quotes) · **Jost**
  (body, UI, letterspaced eyebrows/labels) · **Yeseva One** (a funky, curvy
  display serif used for the wordmark, the “Retreat” accent, and the dividers —
  this replaces the earlier script). Headlines are set large with tight
  tracking; body is airy at 1.6–1.75 line-height.
- **Backgrounds.** Mostly flat warm cream. Full-bleed photography for hero and
  section breaks. Occasional solid color bands (teal, sand, olive) and the
  cobalt ribbon. Blue-stripe linen textures available for accents. No gradients
  except subtle photo-protection overlays. Oversized ghost display type
  (e.g. "RETREAT") sits behind content as a texture device.
- **Photography.** Warm, faintly desaturated (`saturate ~.9`, tiny contrast
  bump), golden natural light, candid not corporate — dinner tables, beaches,
  notebooks, flowers, working outdoors. **Never stiff people-in-business-attire
  stock.** Framed in boxy rectangles with hairline borders (`--radius-sm`, 4px)
  and a soft warm lift shadow (`--shadow-frame`). A dark protection gradient is
  laid under captions.
- **Corners & borders.** Predominantly square/boxy — image frames and cards use
  4px radius; buttons and chips are full **pills**. Dividers are 1px hairlines
  (`--border` on cream) or a 1.5px ink editorial rule, sometimes broken by a
  centered ornament glyph (✻).
- **Shadows.** Warm-toned, low, soft ("sun through linen") — used sparingly,
  really only to lift a framed photo or the RSVP form. Flat by default.
- **Motion.** Gentle and unhurried. Photos zoom slowly on hover
  (`--dur-slow 480ms`, custom ease). The ribbon scrolls continuously. No
  bounces, no springy motion.
- **Hover / press.** Buttons darken to the deep shade of their color (no size
  change on hover); on press they scale to `0.97`. Links go from terracotta to
  terracotta-deep. Card photos zoom; "read more" arrows nudge right.
- **Transparency & blur.** The sticky nav is translucent cream with a backdrop
  blur. Photo overlays use ink at low alpha. Otherwise surfaces are opaque.
- **Layout.** Max content width ~1120–1200px, 40px gutters. Two-column story
  blocks alternate image side. Full-bleed heroes and photo breaks span edge to
  edge. 8px spacing rhythm.

---

## ICONOGRAPHY

The brand is **type- and photography-led with almost no icons** — this is
intentional and matches both inspiration sites.

- **No logo or brand mark was provided.** Wherever a mark would go, the brand
  name is set in the **Yeseva One** funky-serif wordmark (see `guidelines/
  brand-wordmark.card.html`). Do not fabricate a logo.
- **No icon font or SVG icon set** ships or was provided. The few glyphs used
  are typographic: a right arrow `→` on buttons/links, a rotating `+` in the
  Accordion, a small `▼` chevron in Select, and an ornamental `✻` in the Ribbon
  and Divider. These are text characters, not icons.
- **Emoji / unicode as icons:** never used decoratively.
- **If a project genuinely needs icons,** substitute **Lucide** (CDN,
  `https://unpkg.com/lucide-static`) — thin, humanist stroke that suits the
  editorial feel — and flag the substitution. Keep icon use minimal.

---

## FONTS — substitution notice

No brand font files were supplied, so all four typefaces are **Google Fonts
stand-ins** chosen to match the inspiration: **Bricolage Grotesque**, **Cormorant
Garamond**, **Jost**, and **Yeseva One** (the funky display serif). They load via a Google Fonts `@import` in
`tokens/fonts.css` (this is why `check_design_system` reports "Fonts: none" — no
local `@font-face` binaries, but the webfonts do load). **If you have the real
retreat fonts, send them and we'll swap them in.**

---

## Components (15)

Reusable primitives, composed by the UI kit. Namespace:
`window.TheFoundersEditDesignSystem_0cfd4a`.

**Primitives** (`components/primitives/`)
- **Button** — editorial letterspaced pill; terracotta primary, ink-outline secondary, teal, ghost.
- **Eyebrow** — letterspaced uppercase section kicker, optional flanking rules.
- **Tag** — small uppercase category/metadata chip (outline or filled pill).
- **Ribbon** — signature scrolling marquee band (cobalt by default).
- **Divider** — editorial rule, optional centered ornament glyph.

**Content** (`components/content/`)
- **SectionHeading** — eyebrow + Bodoni display headline + italic serif lede.
- **Card** — editorial image card (framed 4:3 photo, tag, serif title, read-more).
- **BlogCard** — compact horizontal post row (thumbnail, title, teaser, date).
- **Stat** — oversized display figure + uppercase caption.
- **Accordion** — FAQ disclosure list with ink rules and a rotating +.

**Forms** (`components/forms/`)
- **Input** — labeled text field; editorial underline or boxed.
- **Select** — styled native dropdown matching Input.
- **Checkbox** — square check with terracotta fill.

**Navigation** (`components/navigation/`)
- **NavBar** — editorial masthead nav (centered script wordmark or inline).
- **Footer** — dark teal footer with script wordmark and link columns.

Each component directory has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`,
and a `*.card.html` specimen.

---

## UI kit

- **`ui_kits/website/`** — the real **Founders Retreat invitation landing page**
  (`index.html` + `kit-home.jsx`). A full editorial one-page scroll: hero,
  the "breakthrough across the dinner table" statement, the "Gather. Learn.
  Build." handwritten divider, why-you-were-invited, everyone-teaches, the
  weekend format, who-you'll-meet (industry tags + ribbon), details on teal,
  the pre-weekend questionnaire, and an interactive RSVP form. Also registered
  as a **Starting Point**.

---

## Repository index

- `styles.css` — entry point; `@import`s the token files only (link this one file).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `components/` — `primitives/`, `content/`, `forms/`, `navigation/`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `ui_kits/website/` — the invitation landing page.
- `assets/` — `photos/`, `portraits/`, `textures/`.
- `reference/` — the two website-inspiration screenshots (stored, not shipped).
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skills-compatible entry point.
- Generated (do not edit): `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`.
