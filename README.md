# Solentra Energies — Website

A Next.js (App Router) + Tailwind CSS website for Solentra Energies, covering rooftop solar
across Madhya Pradesh for homes, commercial/industrial, and housing societies.

## Pages
- `/` — Home (hub linking to all three offerings)
- `/residential` — Residential solar
- `/commercial` — Commercial & industrial solar
- `/housing-societies` — Housing societies / RWAs
- `/cities` — Index of all cities served, grouped by zone
- `/rooftop-solar-in-{city}` — Dynamic per-city landing page for every city in `lib/cities.js`
  (internally routed via `app/city/[city]/page.js` + a rewrite in `next.config.mjs`,
  since Next.js doesn't support a literal prefix + bracket in one folder name)
- `/contact` — Contact page with lead form

## Cities covered
**MPCZ — Central Zone:** Bhopal, Damoh, Gwalior, Hoshangabad, Sehore, Shivpuri
**MPWZ — Western Zone:** Badnagar (Head Office), Badnawar, Dewas, Dhar, Indore, Mandsaur, Neemuch, Ratlam, Ujjain

City content (tagline, blurb, two testimonials, zone) lives in one place: `lib/cities.js`. Add a new
city by adding an entry there — a new page at `/rooftop-solar-in-{slug}` is generated automatically
at build time, no new route file needed.

## Pricing & savings figures
Every city page shows an indicative pricing table (with/without subsidy) and a 25-year savings table.
These are computed in `lib/pricing.js` from Solentra's own assumptions (₹50,000–62,000/kW depending on
system size, PM Surya Ghar subsidy slabs, 3% annual tariff escalation, 1% annual panel degradation) —
**not copied from any competitor**. Before publishing, review `lib/pricing.js` and adjust the rates to
match your actual installed cost per kW.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before going live
- Replace all placeholder contact details (phone, email, address) in:
  - `components/Header.js`
  - `components/Footer.js`
  - `app/contact/page.js`
- Wire up `components/LeadForm.js` to a real backend / CRM / email service (it currently just
  shows a success message on submit, with no data sent anywhere). It now collects name, phone,
  city, PIN code, property type, and a monthly-bill range bucket.
- Double-check the subsidy figures on the Residential and Housing Societies pages against the
  current PM Surya Ghar Muft Bijli Yojana notification before publishing — scheme rates can change.
- Update `app/layout.js` metadata and add a real favicon in `app/favicon.ico`.

## Deploying
This is a standard Next.js app — deploy directly to [Vercel](https://vercel.com) (recommended),
or any host that supports Next.js (Netlify, Railway, your own Node server via `npm run build && npm start`).
