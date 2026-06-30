# Cardiff Gate International Business Park — Website

Marketing website for Cardiff Gate International Business Park, built with Next.js 15 and Tailwind CSS. Auto-deploys to Vercel on every push to `master`.

## Tech stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: Vercel (auto-deploy from GitHub)
- **Repo**: [danielcridland96/cardiffgate-website](https://github.com/danielcridland96/cardiffgate-website)

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # Production build (run this before pushing to catch errors)
npm run start    # Serve the production build locally
```

## Deploying

Push to `master` — Vercel picks it up automatically. No manual steps needed.

If you need to deploy manually: `vercel --prod`

## Project structure

```
app/
  page.tsx              # Home page
  not-found.tsx         # Branded 404 page
  sitemap.ts            # Auto-generated sitemap at /sitemap.xml
  spaces/page.tsx       # Available spaces (Ashtree Court, Copse Walk, Design & Build)
  occupiers/page.tsx    # Occupier directory with logos
  amenities/page.tsx    # On-site facilities
  location/page.tsx     # Interactive map + transport info
  contact/page.tsx      # Enquiry form + JLL agent details
components/
  Header.tsx            # Sticky navigation
  Footer.tsx            # Footer
  LogoImage.tsx         # Occupier logo card (Clearbit API + initials fallback)
public/
  park-hero.png         # Cardiff Gate wordmark logo
  park-main.jpg         # Hero background photo
  ashtree-court.jpg     # Ashtree Court photo
  copse-walk.jpg        # Copse Walk photo
  jll-logo.png          # JLL leasing agent logo
```

## Updating content

### Adding or removing an available space

Edit the `spaces` array in `app/spaces/page.tsx` and the `featuredSpaces` array in `app/page.tsx`. Add any new photos to `public/`.

### Updating the occupier list

Edit the `occupiers` object in `app/occupiers/page.tsx`. Each entry takes a `name` and an optional `domain` (used to fetch a logo from Clearbit). Entries without a domain show initials instead.

### Changing leasing agent details

Agent names, phones, and emails are in `app/contact/page.tsx` (the `agents` array at the top).

### Updating park info (address, phone)

The footer (`components/Footer.tsx`) and contact page (`app/contact/page.tsx`) both contain the address and phone number.

## Colour palette

| Token      | Hex       | Usage                          |
|------------|-----------|--------------------------------|
| navy-800   | `#0a2545` | Primary background, headings   |
| navy-900   | `#071830` | Footer, dark overlays          |
| gold-500   | `#d4a843` | Accent colour, CTAs, stats bar |
| gold-600   | `#b8902e` | Hover states, links            |

## Contact form

The enquiry form is currently client-side only — it shows a thank-you message on submit but does not send emails. To wire it up, integrate Formspree or Resend into `app/contact/page.tsx` (see the `handleSubmit` function).

## Sitemap & SEO

The sitemap is auto-generated at `/sitemap.xml` via `app/sitemap.ts`. If the domain changes from `cardiffgate.com`, update the `BASE_URL` constant in that file and also the `url` in `app/layout.tsx` openGraph metadata.
