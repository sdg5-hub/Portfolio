# Saiyid Gilani — Personal Site

A cinematic, production-grade personal site for Saiyid Gilani: CS & EE at Drexel, builder of NGSP, MedTrack, and WeaveWise, with live links to the real `sdg5-hub` GitHub profile.

Built to feel like the fusion of a stealth startup launch page, a futuristic control room, and a hacker's command center — dark, premium, intentional. Not a template.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (custom design tokens in `tailwind.config.ts`)
- **Framer Motion** for cinematic, choreographed motion
- **lucide-react** for the few icons actually used
- Fonts: Inter (sans), JetBrains Mono (mono), Instrument Serif (philosophy moments), loaded via `next/font`

## Structure

```
saiyid-gilani/
├── app/
│   ├── globals.css          # design system base — tokens, scrollbar, grain, focus
│   ├── layout.tsx           # root layout, font wiring, metadata
│   ├── page.tsx             # orchestrates loading screen → main arc
│   ├── gallery/page.tsx     # photo gallery
│   ├── blog/page.tsx        # updates and writing
│   └── credentials/page.tsx # certifications and experience
├── components/
│   ├── sections/
│   │   ├── loading-screen.tsx   # boot sequence
│   │   ├── hero.tsx             # wow-moment entrance
│   │   ├── about.tsx            # identity + how-I-think schematic
│   │   ├── projects.tsx         # NGSP + MedTrack + WeaveWise showcases
│   │   ├── pages.tsx            # gallery/blog/credentials links
│   │   ├── systems.tsx          # interactive principles grid
│   │   ├── timeline.tsx         # mission-log trajectory
│   │   ├── dashboard.tsx        # control-center telemetry
│   │   ├── philosophy.tsx       # Tesla quote moment
│   │   ├── personal.tsx         # margin notes
│   │   └── contact.tsx          # final CTA
│   └── ui/
│       ├── cursor-glow.tsx      # damped cursor aurora
│       ├── grid-background.tsx  # shared crosshair atmosphere
│       ├── reveal.tsx           # canonical in-view reveal + stagger group
│       ├── section-header.tsx   # shared header with index & kicker
│       ├── side-nav.tsx         # floating HUD section indicator
│       └── status-pill.tsx      # live-status pills (signal / ember / bone)
├── public/
│   ├── gallery/             # future gallery images
│   └── papers/              # add NGSP PDF as `ngsp.pdf`
├── lib/
│   ├── content.ts           # single source of truth for all copy
│   └── utils.ts             # cn() class merger, clamp
└── tailwind.config.ts       # design tokens (palette, grid, motion)
```

### Design choices (quick tour)

- **Palette.** Intentionally restrained. Deep ink base (`#050507`), off-white primary text, a single cool "signal" cyan (`#7DF9FF`) for interaction, and a warm "ember" amber (`#E9B872`) reserved for the achievement moment and the Tesla quote. No rainbows.
- **Typography.** Massive, tightly-tracked sans in the hero for commanding weight; Instrument Serif italic reserved for philosophical moments (the hero sub-line, the Tesla quote, personal note titles); JetBrains Mono for HUD labels, timestamps, and telemetry — reinforcing the control-room feel without ever shouting.
- **Motion.** Everything uses a single shared easing curve (`[0.22, 1, 0.36, 1]`) so reveals feel choreographed rather than random. Cursor glow is spring-damped so it reads as ambient light, not a gimmick. Reduced-motion is respected — the boot screen is skipped, and animations are disabled globally.
- **Copy.** Written to read as signal, not résumé. No "passionate student." Every line is pulling weight.

## Local setup

```bash
# 1. Install dependencies
npm install

# 2. Dev server
npm run dev

# 3. Production build (run this before deploy to catch any TS issues)
npm run build && npm start
```

Node 18+ recommended.

## Deploying to Vercel

The easiest path — push the repo, click once:

```bash
# 1. Create a new GitHub repo and push
git init
git add .
git commit -m "initial — saiyid gilani personal site"
git branch -M main
git remote add origin git@github.com:YOUR-USERNAME/saiyid-gilani.git
git push -u origin main

# 2. Import on Vercel
#    https://vercel.com/new → Import the repo → click Deploy
#    Defaults are correct (Framework: Next.js, build `next build`, output `.next`).
```

Or via the CLI:

```bash
npm i -g vercel
vercel           # first run links the project
vercel --prod    # promote to production
```

No environment variables are required for the site as shipped. If you later add analytics, newsletter, or a contact endpoint, set them in Project → Settings → Environment Variables.

### Custom domain

In Vercel → Project → Settings → Domains, add the domain you want to use. Vercel provides the DNS records to set at your registrar. After propagation, the site is live.

## Editing content

All copy lives in `lib/content.ts` so you can iterate without touching components:

- `identity` — name, role, email
- `achievements` — status pills in the hero
- `projects` — NGSP, MedTrack, and WeaveWise
- `sitePages` — links for Gallery, Blog, and Certifications & Experience
- `galleryItems` — gallery entries
- `blogPosts` — blog/update entries
- `certifications` / `experience` — credentials page entries
- `systemsThoughts` — principles cards
- `timeline` — mission log entries
- `dashboardMetrics` / `interests` — telemetry panel
- `teslaQuote` — the philosophy moment
- `contact` — email and social handles (edit `href` fields with real URLs)

## Notes

- **Loading screen** only shows once per session (`sessionStorage` flag). Reloads don't re-punish the visitor.
- **Side nav** (right edge, desktop) uses `IntersectionObserver` to track the current section.
- **GitHub activity** pulls public data from `https://github.com/sdg5-hub`.
- **NGSP paper link** points to `/papers/ngsp.pdf`; put the PDF at `public/papers/ngsp.pdf` when it is ready to publish.

---

Authored, not assembled.
