# Cardiff Gate Website

Next.js 14 (App Router) + Tailwind CSS marketing site for Cardiff Gate International Business Park.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Run production build locally
```

## Deploy

Hosted on Vercel. Push to `main` triggers auto-deploy.
Manual deploy: `vercel --prod` from project root.

## Project Structure

```
app/
  page.tsx              # Home page
  spaces/page.tsx       # Available spaces
  occupiers/page.tsx    # Occupier directory
  amenities/page.tsx    # On-site facilities
  location/
    page.tsx            # Server wrapper (metadata)
    LocationClient.tsx  # Interactive map + transport tabs (client component)
  contact/page.tsx      # Enquiry form + JLL agent details
components/
  Header.tsx            # Sticky nav (client component)
  Footer.tsx            # Footer with links and contact
  LogoImage.tsx         # Clearbit logo fetcher + OccupierLogo card (client components)
public/
  park-hero.png         # Cardiff Gate wordmark (used in header/footer)
  park-main.jpg         # Hero background photo (CARDIFF_062.JPG from old site)
  park-photo2.png       # Secondary park photo
  jll-logo.png          # JLL leasing agent logo
  location-*.png        # Location diagrams from old site (not currently used)
```

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
