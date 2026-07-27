# Qunda Mateza — Design System

A single source of truth for every Qunda Mateza surface: website, social,
invoices, proposals, and anything built in Claude Design. **When in doubt, this
system wins.**

---

## 1. Company context

**Qunda Mateza** builds modern websites and smart automation for South African
small businesses — *done properly, explained plainly, and built to last.*

**The one role to play:** you are the *trust signal*. Every choice in this system
exists to make a non-technical owner think, "I can work with this person."

**Three principles** — every piece of brand content must pass all three:

1. **Reliable, not flashy.** Clean, calm, dependable. No hype, no clutter.
2. **Approachable, not corporate.** Warm and human. Plain language, real photos.
3. **Local, not generic.** South African context. Rand pricing. WhatsApp-first.

### Products represented
There is one primary surface today — the **marketing website** (`ui_kits/website/`):
a WhatsApp-first lead-generation site (Home, Services, Work, Contact). The same
foundations carry across social posts, proposals, and invoices.

### Sources
- `uploads/qunda-mateza-design-system.md` — the original brand spec (v1.0). This
  README, the tokens, and the components are derived from it. No codebase or
  Figma file was provided; the website UI kit is an original build that follows
  the brand rules (not a recreation of an existing site).

---

## 2. Content fundamentals

**Voice:** plain, warm, confident, zero jargon. Short sentences. Explain things
the way you'd explain them to a friend who isn't technical.

**The golden rule — translate technology into outcomes.** Never sell features;
sell the job the thing does. Non-negotiable for the AI service.

| Don't write | Write instead |
|---|---|
| "Leveraging agentic AI workflows" | "A smart assistant that handles the boring jobs for you" |
| "Responsive, scalable web solutions" | "A website that works on every phone and grows with you" |
| "Automated lead-qualification pipeline" | "Only the real enquiries reach your phone" |
| "Get a quote" | "Message me on WhatsApp" |
| "Investment from R4 500" | "From R4 500" |

**Casing:** always **sentence case** — headlines, buttons, everything. *Never*
Title Case headlines, *never* ALL CAPS for emphasis. The one exception is the
mono **eyebrow / descriptor** label (e.g. `WEB DEVELOPER & AI AUTOMATION`), which
is uppercased by the component, not typed in caps.

**Person:** first person singular — "I build", "I'll WhatsApp you back". It's one
person you can trust, not a faceless agency ("we").

**Tone by surface:** marketing copy → warm, benefit-led. Pricing/technical detail
→ precise, factual, in mono. Error/problem messages → calm and reassuring, *never*
alarmist ("Something went wrong on our side — try again in a moment.").

**Emoji:** none. The brand uses no emoji. Warmth comes from words and real photos,
not decorations. (The amber dot on the logo is the single playful flourish.)

**Numbers:** every figure — price, phone number, date, hours — is written in the
**mono** face. It signals precision and ties to the developer identity. Rand
amounts use a space as the thousands separator, SA style: `R4 500`, not `R4,500`.

**Vibe in one line:** the calm, capable local pro who picks up WhatsApp, explains
the plan in plain words, and delivers.

---

## 3. Visual foundations

**Colour.** Six brand colours: Ink `#16263A` (headings, dark surfaces, logo),
Signal Blue `#2D6CB8` (links, primary buttons, interactive), Warm Amber `#E9A23B`
(accent only — the human touch, the logo dot), Slate `#5F6B78` (secondary text),
Paper `#F7F5F1` (page background), White (cards, inputs). Usage ratio ≈ **60%
Paper/White · 30% Ink · 10% Blue + Amber combined.** Amber is a *seasoning* — a
dot, an underline, a single highlight per view; never a large background, never
body text on light (use Amber Dark `#B97A1C` for amber-coloured text). Aim for
WCAG AA (4.5:1) on every text/background pair.

**Type.** Three faces: **Bricolage Grotesque** (display & headings, 400/600),
**Hanken Grotesk** (body, 400/500), **Spline Sans Mono** (all figures, code,
technical, 400/500). Display 48 / H1 36 / H2 28 / H3 20, headings tracked −0.02em;
body 16–18 at 1.6 line-height. Restraint reads as polish — only those weights.

**Spacing & layout.** Strict 4px scale: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96`,
no arbitrary numbers. Max content width 1120px, 24px gutters. Generous whitespace
is part of the "reliable, calm" feel — let things breathe. Mobile-first; most
clients see the site on a phone.

**Backgrounds.** Flat Paper or White for most surfaces; Ink for footers and the
occasional full-bleed CTA band. No gradients on content, no textures, no patterns.
The hero/imagery areas are the only dark full-bleed moments.

**Imagery.** Real over stock — actual local businesses, real screenshots, the
owner's own face on About (trust again). Warm, natural light; uncluttered; people
and places that feel South African. If a photo sits under text/logo, add an Ink
scrim at 40–60% for legibility. **Avoid:** glossy corporate stock, abstract "AI"
imagery (glowing brains, robots, circuit boards), anything that contradicts
"approachable and local". In this system, missing photos are shown as honest Ink
`PhotoSlot` placeholders labelled with the shot they need.

**Corners & radii.** small `6px` (inputs, badges) · medium `8px` (buttons, cards)
· large `12px` (large cards, panels) · `16px` (logo tile) · pill `999px`.

**Cards.** White background, **1px hairline border** (`--color-border`), 12px
radius, 24px padding. **No drop shadows** — the brand uses borders, flat and clean.
Shadows are reserved for genuinely floating UI (dialogs, toasts, dropdowns).

**Borders.** Hairline `rgba(22,38,58,0.12)` is the workhorse divider and card edge.
Featured cards step up to a 2px Signal Blue border rather than a shadow.

**Buttons & states.** Primary = Signal Blue fill / white text, hover → Blue Hover
`#245A9C`. Secondary = transparent + 1px Ink border, hover → Paper fill. Ghost =
blue text, hover → Blue Tint fill. WhatsApp CTA = WhatsApp Green, hover → darker
green. **Hover = colour shift** (never scale-up on buttons). Links: Signal Blue,
underline on hover, *never* amber (amber is decorative, not interactive).

**Inputs.** White, 1px border, 44px tall, 6px radius. Focus = 2px Signal Blue ring
(`box-shadow`) plus blue border. Labels in Slate, 14px.

**Animation.** Restrained and quick. Transitions ~120–280ms on
`cubic-bezier(0.2,0,0,1)` for colour/box-shadow. Fades and gentle colour shifts —
no bounces, no parallax, no infinite loops. Calm = trustworthy.

**Transparency & blur.** Used sparingly: the sticky header uses a translucent
Paper background with an 8px backdrop blur. Otherwise surfaces are solid.

**Left-accent bars.** Generally avoided (an AI-slop tell) — the *one* sanctioned
use is the `Alert` note, where a 3px left bar reads as a margin note, not a card.

---

## 4. Iconography

**Approach:** outline style only, consistent stroke weight, Slate or Ink. Never
filled, never multi-colour — match the calm, simple feel.

- **No bundled icon font or sprite** ships with this system (none existed in the
  brand spec). For UI work, use **Lucide** (https://lucide.dev) from a CDN — its
  2px outline style and neutral geometry match the brand. Colour every icon
  `currentColor` so it inherits Slate/Ink. *(This is a substitution — flagged for
  the owner to confirm or replace with a chosen set.)*
- **WhatsApp glyph** is the one brand mark used as an icon. It ships as
  `assets/icon-whatsapp.svg` and is baked into the `WhatsAppCTA` component. It is
  the only place a brand-coloured (green) glyph appears.
- **Emoji:** never used as iconography or decoration.
- **Unicode:** a simple `✓` is used for check-list ticks in Signal Blue; the chevron
  on `Select` is an inline SVG. Keep such usage minimal.

---

## 5. Index / manifest

**Root**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills wrapper for use in Claude Code.

**`tokens/`** — `fonts.css` (webfonts), `colors.css`, `typography.css`,
`spacing.css`, `elevation.css` (shadows + motion), `base.css` (element defaults).

**`assets/`** — `logo-primary.svg`, `logo-stacked.svg`, `logo-monogram.svg`,
`wordmark.svg`, `icon-whatsapp.svg`.

**`components/`** — reusable React primitives (namespace
`window.QundaMatezaDesignSystem_e01598`):
- `core/` — **Button**, **WhatsAppCTA**, **Card**, **Badge**
- `forms/` — **Input**, **Select**, **Field**
- `feedback/` — **Alert**
- `brand/` — **Logo**, **Eyebrow**, **PriceTag**

**`ui_kits/website/`** — interactive marketing-site recreation: **HomePage**,
**ServicesPage**, **WorkPage**, **ContactPage**, plus `SiteHeader` / `SiteFooter`
and `index.html`. See its own `README.md`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) that
populate the Design System tab.

---

## 6. Consistency checklist

Before any brand content ships:

- [ ] Colours come only from the palette, at the right ratio (amber as seasoning).
- [ ] Type uses the three faces and the scale; **every figure is in mono**.
- [ ] Copy is sentence case, plain, first-person, sells outcomes not features.
- [ ] The **WhatsApp CTA** is present and prominent on any client-facing page.
- [ ] Logo clear space (≈ the amber dot's height) and minimum size are respected.
- [ ] Spacing uses the 4px scale; corners use the radius scale.
- [ ] Cards use borders, not shadows. No emoji. Real photos over stock.
