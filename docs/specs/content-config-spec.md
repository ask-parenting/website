# Content Config Spec

## Source of Truth
- File: `lib/site-config.ts`

## Fields
- `brand`: marketing brand name.
- `headline`: primary above-the-fold message.
- `subheadline`: secondary explanatory copy.
- `whatsapp.businessNumber`:
  - Source: `NEXT_PUBLIC_WHATSAPP_NUMBER`
  - Fallback: `YOUR_BUSINESS_NUMBER`
- `whatsapp.prefilledText`: prefilled first message.
- `ownershipStatement`: legal ownership statement (must stay exact).
- `legalAddress`:
  - Source: `NEXT_PUBLIC_LEGAL_ADDRESS`
  - Fallback: placeholder requiring replacement.
- `valuePillars[]`: title and description cards in the middle section.

## Deployment Inputs
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: digits with country code, no `+`, no spaces.
- `NEXT_PUBLIC_LEGAL_ADDRESS`: exact address text for Meta verification.

## Change Process
- Update config values first.
- Run preview build.
- Re-run verification checklist before production deploy.
