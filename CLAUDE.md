# Cardiff Gate Website

Next.js 15 (App Router) + Tailwind CSS marketing site for Cardiff Gate International Business Park.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Run production build locally
```

## Deploy

Hosted on Vercel. Auto-deploys on every push to `master` via GitHub integration.
Manual deploy: `vercel --prod` from project root.

## Project Structure

```
app/
  page.tsx              # Home page
  not-found.tsx         # Branded 404 page
  sitemap.ts            # Auto-generated sitemap at /sitemap.xml
  spaces/page.tsx       # Available spaces
  occupiers/page.tsx    # Occupier directory
  amenities/page.tsx    # On-site facilities
  location/
    page.tsx            # Server wrapper (metadata)
    LocationClient.tsx  # Interactive map + transport tabs (client component)
  contact/
    layout.tsx          # Metadata wrapper (page.tsx is 'use client')
    page.tsx            # Enquiry form + JLL agent details
components/
  Header.tsx            # Sticky nav (client component)
  Footer.tsx            # Footer with links and contact
  LogoImage.tsx         # OccupierLogo card with Clearbit logo + initials fallback
public/
  park-hero.png         # Cardiff Gate wordmark (header, footer, favicon)
  park-main.jpg         # Hero background photo + OG image
  park-photo2.png       # Secondary park photo
  ashtree-court.jpg     # Ashtree Court space photo
  copse-walk.jpg        # Copse Walk space photo
  jll-logo.png          # JLL leasing agent logo
  robots.txt            # Search engine crawl rules
```

## Available Spaces

Currently listed: **Ashtree Court**, **Copse Walk**, **Design & Build**.
Removed: Laburnum House, Lime Tree Court, Retail Pod Development.

## Key Details

- **Business park**: M4 Junction 30, Cardiff CF23 8BA
- **Phone**: 029 2054 5300
- **Leasing agents**: JLL — Rhydian Morris (rhydian.morris@eu.jll.com) and Justin Millett (justin.millett@jll.com)
- **Occupier logos**: fetched at runtime from `https://logo.clearbit.com/{domain}`
- **Contact form**: currently client-side only — wire up to Formspree/Resend to send emails

## Colour Palette

| Name       | Hex       | Usage                        |
|------------|-----------|------------------------------|
| navy-800   | `#0a2545` | Primary background, headings |
| navy-900   | `#071830` | Footer, dark sections        |
| gold-500   | `#d4a843` | Accent, CTAs, stats bar      |
| gold-600   | `#b8902e` | Hover states, links          |
