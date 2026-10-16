# Smart Cubes

A responsive, seven-page Next.js website built with the App Router, React, TypeScript, and Lucide icons.

The site follows the supplied HTML/CSS reference: centered logo and navigation, a full-width image banner with torn-paper edges, black section-title bands, centered content columns, and image grids. Smart Cubes content replaces the reference company's copy. Each topic now has its own page, with shared React components and application styling.

Routes: `/` (Home), `/about-us`, `/designs`, `/who-we-serve`, `/benefits-of-prefab`, `/contact`, and `/faqs`. Home now imports the actual supplied HTML section markup and CSS, adapted to Smart Cubes branding and the seven requested topics. It includes the short hero text, original quotation form layout, and navigation to the separate pages. Both quotation forms use the Next.js enquiry endpoint. Design enquiries navigate to Contact Us with the selected interest carried in the URL, including after a refresh.

## Responsive UI

`public/ui-polish.css` provides shared responsive sizing, readable typography, touch targets, accessible focus states, and consistent card and form layouts. Forms stack on phones and use 16px mobile inputs. Both navigation menus support Escape, outside clicks, and resizing. The home FAQs use native expandable rows. The imported stylesheet deduplicates identical embedded fonts, reducing its size by approximately 38%.

Browser checks cover all seven routes at 320, 390, 600, 768, 1024, 1440, and 1920 CSS pixels. Run `scripts/audit-responsive.cjs` with the same optional Playwright environment variables described below to repeat the layout, form-size, and touch-target audit.

## Details and motion

`data/site-details.json` contains document-based benefits, planned configurations, the four-step process, and project preparation guidance. React pages use `components/project-details.tsx`; the imported home renders the same information through `scripts/import-reference.cjs`. SVGs use a consistent Lucide outline style.

`components/site-experience.tsx` adds subtle one-time scroll reveals, a thin reading-progress indicator, and a back-to-top button. Reveals use IntersectionObserver; scroll updates are scheduled with requestAnimationFrame and passive listeners. Content is visible by default without JavaScript, remains available to keyboard users, and respects the reduced-motion preference. Animations do not pin the page or replace native scrolling. Repeat the motion and content checks with `scripts/check-details-motion.cjs`.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. For a production build, run `npm run build` and then `npm start`.

## Included

Home banner, About Us, five explorable modular-space categories, six customer groups, eight prefab benefits, an enquiry form, and all 15 FAQs from the supplied Smart Cubes document. The site includes responsive navigation, design filtering, accessible design dialogs, enquiry prefilling, and expandable FAQs.

The original `index.html` and `styles.css` remain as supplied reference files. Route pages and their metadata live in `app/`. The imported home markup is `data/reference-home.html`; `components/reference-home.tsx` connects its navigation and form. `public/reference-home.css` contains the original stylesheet with selectors scoped to the imported home; `reference-adapter.css` and `reference-layout.css` adapt unavailable Wix widgets and mobile layouts. Separate-page content and navigation are in `components/site-page.tsx`; model descriptions and FAQs are in `data/designs.ts` and `data/faqs.json`.

## Enquiries

`POST /api/enquiries` validates required fields, contact consent, and the selected product on the server. On a conventional local or self-hosted Node server, enquiries are appended to the git-ignored `data/enquiries.jsonl`. This is a working local persistence mechanism, not an email service. Protect this file, back it up, set appropriate retention, and use a persistent volume if self-hosting.

For production, copy `.env.example` to `.env.local` and configure `ENQUIRY_WEBHOOK_URL` to a trusted CRM or email automation endpoint. Optional `ENQUIRY_WEBHOOK_TOKEN` is sent as a Bearer token. Webhook submissions only show success after the endpoint accepts the request. Serverless hosts require the webhook; their temporary filesystem is not used to store enquiries. Add host-level rate limiting before a public launch.

The supplied document does not include phone, WhatsApp, email, or street address values. Those are not fabricated or shown. Add verified contact details before launch if desired.

## Images

The Smart Cubes logo is the supplied original. Architectural images are AI-generated concept visualizations, displayed as inspiration and explicitly identified as illustrative in the design section and dialogs. They do not represent completed Smart Cubes projects. Replace them with verified project photography when available. Fonts use Google Fonts with local system fallbacks.

## Checks

```sh
npm run typecheck
npm run build
```

An optional browser check lives in `scripts/verify.cjs`. With Playwright and its browser installed and the site running on port 3000, run `node scripts/verify.cjs`. Alternatively, set `PLAYWRIGHT_MODULE` to an existing Playwright installation and `CHROME_EXECUTABLE` to a Chrome executable. The check verifies navigation, filtering, dialogs, FAQs, form validation and persistence, images, and responsive widths. Its synthetic enquiry is removed after verification.
