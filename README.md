# Dietitian practice website

A responsive Next.js App Router website draft. Practice facts, booking and email
providers, jurisdiction-specific policies and article reviews are deliberately
left unapproved until the practitioner confirms them.

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
cd dietitian-site
npm install
cp .env.example .env.local
npm run dev
```

Open the URL printed by Next.js, usually `http://localhost:3000`. Contact and
consultation requests are collected by separate embedded Google Forms. Check
their responder access settings so intended clients can open them.

## Checks

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

## Configuration

Set the public values in `.env.local`:

- `NEXT_PUBLIC_PRACTICE_NAME`: practice display name (`Bhoomika G A`).
- `NEXT_PUBLIC_SITE_URL`: canonical origin; use `http://localhost:3000` locally.
- `NEXT_PUBLIC_SITE_APPROVED`: leave `false` until public facts, content, policy
  and accessibility reviews are complete. `true` enables the sitemap and
  search indexing.
- `NEXT_PUBLIC_BOOKING_URL`: HTTPS booking-provider URL, once selected and
  reviewed.
- `NEXT_PUBLIC_CONSULTATION_FORM_URL`: HTTPS Google Forms URL for the consultation
  request embed.
- `NEXT_PUBLIC_CONTACT_FORM_URL`: HTTPS Google Forms URL for the contact inquiry
  embed.
- `NEXT_PUBLIC_CONTACT_EMAIL`: public contact address.

The contact form is limited to four submissions per client IP in a rolling day.
This is an in-memory prototype limit; its scope and production implementation
still need confirmation in `REMAINING_PRACTICE_DETAILS.md`. The host must
overwrite `x-real-ip` or the first `x-forwarded-for` address with a trusted value.

The current server-side delivery integration uses Resend and can deliver to the
practice's Gmail inbox. To enable it, set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`
and `CONTACT_FROM_EMAIL` in the server environment. Never use a `NEXT_PUBLIC_`
prefix for secrets. A configured sender needs a verified domain in Resend.
Without delivery configuration, local submissions show preview-only success;
production returns an error and the form provides an email fallback. Confirm
whether to keep Resend or move delivery to a Google Gmail API integration before
launch.

The inquiry endpoint accepts only the documented field allowlist, never logs
form contents, and warns visitors not to submit clinical information. The
optional service message is limited to 300 characters. Do not use the general
form or ordinary email for medical records or health histories.

## Practice information for implementation

The [practice details worksheet](PRACTICE_DETAILS_WORKSHEET.md) contains the
information already supplied. Fill in the separate
[remaining details checklist](REMAINING_PRACTICE_DETAILS.md) before connecting
booking, enabling production delivery or publishing the site.

## Before publication

- Verify current credentials/registration, employer wording, language options,
  minor-consent process, hours/time zone, cancellation edge cases and the final
  service scope listed in the remaining-details checklist.
- Choose booking, hosting and email vendors; review their privacy terms and
  disclose data locations, access, retention and deletion practices.
- Have privacy, professional claims, advertising and terms reviewed for the
  actual jurisdictions served.
- Have a qualified practitioner review each resource, verify its sources and
  add an accurate review date. The current articles are unapproved drafts.
- Complete keyboard, screen-reader, contrast, zoom, browser and mobile checks;
  this project does not claim a completed WCAG audit.
- The practitioner approved the current Unsplash preview image; confirm its
  license/attribution requirements before publication.
- Add a production host, HTTPS, approved domain, monitoring and operational
  ownership. Keep testimonials unpublished unless genuine written permission and
  local compliance are confirmed.

See the project [requirements](../dieticianPortfolio/requirments.md) and
[implementation blueprint](../dieticianPortfolio/Project_Blueprint.md).
