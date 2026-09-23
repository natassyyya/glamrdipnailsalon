# GLAMRDiP+

A responsive salon landing page built with React, TypeScript, and Vinext.

## Local development

Use Node.js 22.13 or newer.

```sh
npm install
npm run dev
```

## Validation

```sh
npm run build
npm run lint
```

## Booking

The form prepares a WhatsApp message. It does not save customer data or reserve a time slot. The customer must send the message, and salon staff must confirm the appointment.

## Before launch

Update the sample address and phone number in `app/page.tsx`. WhatsApp currently uses the fictional US demo number: `13105550148`. Replace platform home-page links with the salon's real social profile URLs. Prices, client quotes, review counts, and press names are supplied design content and should be verified by the salon. Images are visual references; source URLs are recorded in `public/images/sources.json`. Replace them with salon-owned or properly licensed photography for a commercial launch.

## Structure

- `app/page.tsx`: landing page, gallery, search, booking, and information dialogs.
- `app/globals.css`: design system, responsive layouts, and reduced-motion support.
- `public/images`: local photography assets.
- `.openai/hosting.json`: Sites hosting configuration.

## Vercel deployment

The checked-in vercel.json runs Next.js directly and uses its .next output. The existing npm run build command remains the Vinext build for Sites. Import the repository into Vercel with the Next.js preset.


## Brand assets and icons

- `app/components/brand-logo.tsx`: responsive GLAMRDIP+ wordmark and almond-shaped G+ monogram.
- `app/components/icons.tsx`: shared Lucide interface icons and Font Awesome social brand icons through `react-icons`.
- `public/brand/glamrdip-logo.png`: transparent reusable logo.
- `public/brand/glamrdip-icon.png`: matching favicon and touch icon.
- `scripts/create-brand-assets.ps1`: regenerate PNG brand assets from the project root on Windows.

Buttons keep their accessible text labels; decorative icons are hidden from assistive technology.
