# DirectRxGuide.com — Project Context for Claude

## What this is
The first independent, pharmacist-built aggregator of direct-to-patient (DTP) prescription drug programs in the United States. No pharma funding. No bias.

## Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** Vercel
- **DNS/CDN:** Cloudflare
- **Database:** Supabase (anonymous session logs only — no PII ever)
- **Analytics:** Google Analytics 4
- **Drug data:** Google Sheet (manually maintained, updated daily)

## Design system
- **Primary color:** `#0D9E80` (teal-500 in Tailwind)
- **Heading font:** Instrument Serif (`var(--font-instrument-serif)`) — use `font-serif`
- **Body font:** DM Sans (`var(--font-dm-sans)`) — use `font-sans`
- **Logo:** Text-only wordmark — `Direct` + `Rx` in teal + `Guide`, font-serif, tracking-normal
- **Background:** White. Warm and accessible feel. No stock pharma photos.

## Copy rules
- Never use "PBM" — always say "insurance"
- Never say "DirectRxGuide receives no funding" as a blanket statement — say "No pharmaceutical manufacturer funds, sponsors, or influences this platform" (leaves room for future non-pharma ads)
- Platform is an **information aggregator**, not a pharmacy, prescriber, or healthcare provider — copy must reflect this
- "DTP" = direct-to-patient — always spell out on first use per page

## Locked homepage copy
- **Headline:** "Every direct-to-patient drug program, in one place." — "in one place." in teal italic Instrument Serif
- **Tagline:** "No pharma bias. · No sales pitch."
- **Sub-description:** "We aggregate every manufacturer direct-to-patient program so patients and providers can find, compare, and access them instantly."
- **Trust strip:** Independent · No Pharma Funding · Pharmacist-Built · Updated Daily · Free to Use

## Nav (current)
Find My Options · DTP Programs · Learn · About

## Pages
- `/` — Homepage
- `/about` — About page (author is anonymous — no founder name or bio)
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service

## Key decisions already made
- HCP section and nav item → Phase 2 (post-launch)
- Program cards swapped to DTP platform cards (11 platforms: LillyDirect, NovoCare, PfizerForAll, AZ Patient Direct, AmgenNow, BMS Patient Connect, ELIQUIS DTP Program, Boehringer Ingelheim Direct, Novartis Direct, GSK for You, J&J Direct)
- Ad slots not built yet — section layout allows easy insertion between sections in Phase 2
- Scheduled Claude agent for daily pricing updates → Phase 2
- **"Find My Options"** tool built — condition-first flow (condition → [sub-condition if "Other"] → insurance status → results ranked by out-of-pocket cost). Income step removed (zero programs have income requirements). "Unsure" insurance option removed (3 options: uninsured, commercial, government).
- Tool never says "you qualify" — always "you may be eligible" with manufacturer verification required
- "What is DTP?" educational section added to homepage between Find My Options and DTP Programs

## P0 items before launch
- [x] Swap program cards → DTP platform cards (11 platforms)
- [x] Add search bar to hero
- [x] Fix footer medical disclaimer
- [x] Build Find My Options tool
- [x] Privacy Policy and Terms of Service pages
- [x] Cookie consent banner (CCPA/VCDPA)
- [ ] Data pipeline for updates without code deploys (Phase 2)

## Legal / compliance
- Medical disclaimer required in footer on every page
- Exit disclaimer overlay required on all outbound links to manufacturer sites
- No PII ever written to any database
- Cookie consent banner required before launch (CCPA + VCDPA)
- No affiliate or sponsored content until attorney review (Phase 3)

## What NOT to do
- Manufacturer logos may be used on platform cards and result cards for visual identification
- Do not store any personally identifiable information
- Do not activate affiliate tracking until legal clearance
- Do not use "bi-weekly" — update frequency is daily
- Do not link to or refer users to any external website other than official pharma manufacturer DTP/DTC platforms — no government sites, no third-party tools, no news sources, no GoodRx, no NeedyMeds, no TrumpRx, nothing
