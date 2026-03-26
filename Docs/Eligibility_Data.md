# Find My Options — Eligibility & Pricing Data

Last researched: March 2026
Used to power the "Find My Options" condition → eligibility → results flow.
Verify pricing monthly against manufacturer sites before publishing.

---

## How to Read This File

Each drug entry includes:
- **Conditions treated** (maps to Step 1 condition tiles — 9 tiles + sub-conditions for "Other")
- **Who qualifies** (maps to Step 2 insurance status filter — 3 options: uninsured, commercial, government)
- **Medicare/Medicaid eligible?** (critical — several programs explicitly exclude)
- **Income requirement?** (not currently used — zero programs have income requirements)
- **Cash price** (used for results ranking — lowest out-of-pocket first)
- **Notes** (caveats, expiry dates, dose-specific details)

> **Note:** The "unsure/prefer not to say" insurance option and the income step have been removed from the tool. Data below is reference material; the live tool data is in `/lib/programs/data.ts` (60 confirmed rows across 10 platforms).

---

## CONDITION: Obesity

### Zepbound (tirzepatide) — via LillyDirect
- **Indication:** Weight management (obesity / overweight with comorbidity)
- **Who qualifies:** Any US adult 18+ with valid Rx — uninsured, insured (regardless of coverage), or cash-pay
- **Medicare/Medicaid eligible?** Yes — no exclusion stated
- **Income requirement?** None
- **Cash price:** $299/mo (2.5mg) · $399/mo (5mg) · $499/mo (7.5mg) · $699/mo (10/12.5/15mg)
- **Notes:** Must refill within 45 days of last delivery to maintain pricing. New pricing effective Dec 1, 2025.

### Wegovy (semaglutide 2.4mg) — via NovoCare Pharmacy
- **Indication:** Weight management (obesity / overweight with comorbidity)
- **Who qualifies:** Uninsured OR insured but choosing to self-pay, valid Rx required, FDA-approved indication
- **Medicare/Medicaid eligible?** ❌ NO — explicitly excluded even if electing to self-pay
- **Income requirement?** None
- **Cash price:** $199/mo intro rate (first 2 fills, available through Jun 30, 2026) · $349/mo standard (1-month supply) · $698 (2-month) · $1,047 (3-month)
- **Notes:** Introductory $199 offer valid for first 2 fills only (Nov 2025–Jun 2026). After that, standard $349/mo.

---

## CONDITION: Diabetes (Type 2)

### Mounjaro (tirzepatide) — via LillyDirect
- **Indication:** Type 2 diabetes
- **Who qualifies:** Commercially insured patients with coverage — uses savings card to reduce copay
- **Medicare/Medicaid eligible?** ❌ NO — government beneficiaries excluded from savings card
- **Income requirement?** None
- **Cash price:** No direct cash-pay program confirmed via LillyDirect as of research date (Lilly Cares PAP available separately for uninsured/low-income)
- **Notes:** Different program from Zepbound — Mounjaro does not have the same self-pay vials program. Verify at lilly.com/lillydirect.

### Ozempic (semaglutide) — via NovoCare Pharmacy
- **Indication:** Type 2 diabetes
- **Who qualifies:** Uninsured OR insured but choosing to self-pay, valid Rx, FDA-approved indication
- **Medicare/Medicaid eligible?** ❌ NO — explicitly excluded
- **Income requirement?** None
- **Cash price:** $199/mo intro (first 2 fills, through Mar 31, 2026) · $349/mo (4mg/3mL) · $499/mo (8mg/3mL) standard
- **Notes:** Intro offer window closes Mar 31, 2026 for Ozempic. Standard pricing applies after 2 fills.

### Farxiga (dapagliflozin) — via AstraZeneca Direct
- **Indication:** Type 2 diabetes, heart failure, chronic kidney disease
- **Who qualifies:** Cash-pay patients with valid Rx
- **Medicare/Medicaid eligible?** Not specified — likely eligible (no exclusion found)
- **Income requirement?** None
- **Cash price:** $181.59/mo (70% off $600 list price)
- **Notes:** Available at AstraZenecaDirect.com since Oct 1, 2025.

### Xigduo XR (dapagliflozin + metformin) — via AstraZeneca Direct
- **Indication:** Type 2 diabetes
- **Who qualifies:** Cash-pay patients with valid Rx
- **Medicare/Medicaid eligible?** Not specified
- **Income requirement?** None
- **Cash price:** Not confirmed in research — verify at AstraZenecaDirect.com
- **Notes:** Listed as part of AZ's portfolio expansion. Price TBD.

### Jardiance (empagliflozin) — via LillyDirect
- **Indication:** Type 2 diabetes, heart failure, chronic kidney disease
- **Who qualifies:** Commercially insured — savings card program
- **Medicare/Medicaid eligible?** Not specified — verify
- **Income requirement?** None
- **Cash price:** Not a direct cash-pay program — copay savings card; verify pricing at lilly.com/lillydirect
- **Notes:** Jointly marketed by Lilly and Boehringer Ingelheim.

### Spiriva Respimat / Jentadueto — via BI Access (diabetes expansion coming)
- **Indication:** Jentadueto = Type 2 diabetes; Spiriva = COPD (see Respiratory below)
- **Who qualifies:** Valid e-Rx from HCP required, can use insurance + auto-applied savings, or cash/FSA/HSA
- **Medicare/Medicaid eligible?** Not specified — likely yes (BI Access accepts insurance including government)
- **Income requirement?** None
- **Cash price:** Diabetes portfolio pricing TBD — expansion announced, not yet live as of research date

---

## CONDITION: Migraine

### Emgality (galcanezumab) — via LillyDirect
- **Indication:** Migraine prevention; cluster headache
- **Who qualifies:** Cash-pay or insured, valid Rx — open program similar to other LillyDirect drugs
- **Medicare/Medicaid eligible?** Not specified — verify
- **Income requirement?** None
- **Cash price:** Not confirmed in research — verify at lilly.com/lillydirect
- **Notes:** Part of LillyDirect portfolio; pricing not as well publicized as Zepbound.

### Nurtec ODT (rimegepant) — via PfizerForAll
- **Indication:** Acute migraine treatment and prevention
- **Who qualifies:** Uninsured or government-insured unable to afford copay (Pfizer PAP standard criteria); commercially insured NOT eligible for PAP
- **Medicare/Medicaid eligible?** Yes — government-insured specifically mentioned as eligible if unable to afford copay
- **Income requirement?** Not stated, but inability to afford copay is a qualifier
- **Cash price:** Not confirmed — varies by program tier; verify at pfizerforall.com
- **Notes:** PfizerForAll routes patients to Pfizer RxPathways for full assistance program details.

### Aimovig (erenumab) — via AmgenNow
- **Indication:** Migraine prevention
- **Who qualifies:** All US patients with valid Rx, regardless of insurance status (including Medicare/Medicaid)
- **Medicare/Medicaid eligible?** ✅ YES — explicitly included
- **Income requirement?** None
- **Cash price:** Not separately confirmed from Repatha — verify at amgennow.com
- **Notes:** Must agree not to submit to insurance when purchasing through AmgenNow.

---

## CONDITION: Cardiology / Cardiovascular

### Repatha (evolocumab) — via AmgenNow
- **Indication:** High LDL cholesterol, cardiovascular disease risk reduction
- **Who qualifies:** All US patients with valid Rx, regardless of insurance (including Medicare/Medicaid), no prior auth or step therapy required
- **Medicare/Medicaid eligible?** ✅ YES — explicitly included
- **Income requirement?** None
- **Cash price:** $239/mo (~60% off list price)
- **Notes:** Landmark — no prior auth requirement makes this very accessible for patients who've been denied by insurance.

### Eliquis (apixaban) — via BMS Patient Connect (BMS-Pfizer Alliance)
- **Indication:** AFib stroke prevention, DVT/PE treatment and prevention
- **Who qualifies:** Cash-pay patients; specific eligibility criteria TBD — verify at bmspatientsupport.com
- **Medicare/Medicaid eligible?** Not specified — verify
- **Income requirement?** None stated
- **Cash price:** 40%+ off list price — specific dollar amount not confirmed; verify
- **Notes:** Jointly marketed by BMS and Pfizer. Two separate access programs exist (BMS Patient Connect and PfizerForAll).

### Farxiga (dapagliflozin) — via AstraZeneca Direct
- See Diabetes section above — also indicated for heart failure and CKD.

### Brilinta (ticagrelor) — via AstraZeneca Direct
- **Indication:** ACS, coronary artery disease
- **Who qualifies:** Cash-pay, valid Rx
- **Medicare/Medicaid eligible?** Not specified
- **Income requirement?** None
- **Cash price:** Not confirmed — verify at AstraZenecaDirect.com

---

## CONDITION: Respiratory

### Airsupra (albuterol/budesonide) — via AstraZeneca Direct
- **Indication:** Asthma (rescue inhaler)
- **Who qualifies:** Cash-pay patients with valid Rx
- **Medicare/Medicaid eligible?** Not specified
- **Income requirement?** None
- **Cash price:** $249/mo (~49% off $489 list)
- **Notes:** Available at AstraZenecaDirect.com since Oct 1, 2025.

### Spiriva Respimat (tiotropium) — via BI Access
- **Indication:** COPD, asthma
- **Who qualifies:** Valid e-Rx from HCP (submitted via EHR), can use insurance, FSA/HSA, or credit/debit card
- **Medicare/Medicaid eligible?** Likely yes — BI Access accepts insurance including government; auto-applies savings cards
- **Income requirement?** None
- **Cash price:** $35/mo out-of-pocket cap
- **Notes:** Most affordable respiratory option on any DTP platform. List price ~$600+/mo.

### Striverdi Respimat (olodaterol) — via BI Access
- **Indication:** COPD maintenance
- **Who qualifies:** Same as Spiriva Respimat
- **Medicare/Medicaid eligible?** Likely yes
- **Income requirement?** None
- **Cash price:** Not confirmed — verify at patient.boehringer-ingelheim.com

---

## CONDITION: Dermatology / Immunology

### Sotyktu (deucravacitinib) — via BMS Patient Connect
- **Indication:** Plaque psoriasis (moderate to severe)
- **Who qualifies:** Cash-pay US patients with valid Rx, available in all 50 states + Puerto Rico
- **Medicare/Medicaid eligible?** Not specified — verify
- **Income requirement?** None stated
- **Cash price:** $950/mo (86% off $6,868 list)
- **Notes:** Most dramatic list-to-DTP discount of any program. Available since Jan 2026.

### Cosentyx (secukinumab) — via Novartis Direct
- **Indication:** Plaque psoriasis, psoriatic arthritis, ankylosing spondylitis, nr-axSpA, enthesitis-related arthritis
- **Who qualifies:** Cash-paying patients with valid Rx
- **Medicare/Medicaid eligible?** Not specified — verify
- **Income requirement?** None for DTP cash-pay (separate NPAF program for uninsured/low-income with income thresholds)
- **Cash price:** ~$3,571/mo (55% off $7,936 list for self-injection package)
- **Notes:** Despite 55% off, still high out-of-pocket. Separate free program (NPAF) exists for uninsured/low-income patients.

---

## CONDITION: Oncology / Neurology / Other

### Mayzent (siponimod) — via Novartis Direct
- **Indication:** Secondary progressive MS with active disease
- **Who qualifies:** Cash-pay, valid Rx
- **Medicare/Medicaid eligible?** Not specified
- **Income requirement?** None for DTP cash-pay
- **Cash price:** Not confirmed — verify at novartis.com

### Rydapt (midostaurin) — via Novartis Direct / TrumpRx
- **Indication:** AML with FLT3 mutation, advanced systemic mastocytosis
- **Who qualifies:** Cash-pay, valid Rx
- **Medicare/Medicaid eligible?** Not specified
- **Income requirement?** None for DTP cash-pay
- **Cash price:** Not confirmed — verify at novartis.com

### Tabrecta (capmatinib) — via Novartis Direct / TrumpRx
- **Indication:** Metastatic NSCLC with METex14 mutation
- **Who qualifies:** Cash-pay, valid Rx
- **Medicare/Medicaid eligible?** Not specified
- **Income requirement?** None for DTP cash-pay
- **Cash price:** Not confirmed — verify at novartis.com

### Paxlovid (nirmatrelvir/ritonavir) — via PfizerForAll
- **Indication:** Mild-moderate COVID-19 at high risk for severe disease
- **Who qualifies:** Medicare/Medicaid/uninsured — free via USG PAP through Dec 31, 2026. Income verification required as of Mar 1, 2025.
- **Medicare/Medicaid eligible?** ✅ YES — primary target population for free access
- **Income requirement?** Yes — income verification added Mar 1, 2025
- **Cash price:** $0 (free via USG PAP for eligible patients through Dec 2026)
- **Notes:** Commercially insured patients use separate PAXCESS program (copay assistance). Program runs through Dec 31, 2026.

---

## Summary: Medicare/Medicaid Eligibility by Platform

| Platform | Medicare/Medicaid OK? |
|---|---|
| LillyDirect (Zepbound self-pay Program D) | ✅ Yes — allowed-restricted (cash price, no reimbursement) |
| LillyDirect (savings cards / copay programs) | ❌ No — government excluded |
| NovoCare Pharmacy (Wegovy, Ozempic) | ❌ No — explicitly excluded |
| PfizerForAll (Paxlovid USG PAP) | ✅ Yes — primary target ($0 free) |
| PfizerForAll (Zavzpret, Eucrisa, Xeljanz) | ❌ No — savings cards exclude government |
| ELIQUIS DTP Program (cash-pay) | ✅ Yes — allowed-restricted (cash price) |
| ELIQUIS DTP Program (savings card) | ❌ No — commercially insured only |
| AZ Patient Direct | Not stated — verify with manufacturer |
| AmgenNow (Repatha, Aimovig, Amjevita) | ✅ Yes — allowed-waiver (calendar-year waiver required) |
| BMS Patient Connect (Sotyktu) | ✅ Yes — allowed-restricted (cash price) |
| Boehringer Ingelheim Direct | ✅ Yes — allowed-restricted (cash price, no reimbursement) |
| Novartis Direct (DTP cash-pay) | ✅ Yes — allowed-restricted (cash price) |
| Novartis Direct (copay programs) | ❌ No — commercially insured only |
| GSK for You | ✅ Yes — allowed-restricted (cash price, no reimbursement) |

---

## Pricing Quick Reference (lowest monthly cash cost per condition)

| Condition | Drug | Platform | Monthly Cash Price |
|---|---|---|---|
| Obesity | Zepbound 2.5mg | LillyDirect | $299 |
| Obesity | Wegovy (intro) | NovoCare | $199 (first 2 fills) |
| Diabetes | Farxiga | AZ Direct | $182 |
| Migraine prevention | Aimovig | AmgenNow | TBC |
| Cardiology (cholesterol) | Repatha | AmgenNow | $239 |
| Respiratory (COPD) | Spiriva | BI Access | $35 |
| Dermatology (psoriasis) | Sotyktu | BMS Patient Connect | $950 |
| Dermatology (psoriasis) | Cosentyx | Novartis Direct | ~$3,571 |
| COVID-19 | Paxlovid | PfizerForAll | $0 (eligible patients) |

---

## Data Gaps — Needs Verification

- [ ] Mounjaro cash-pay price via LillyDirect (may not have one — only savings card)
- [ ] Emgality cash price via LillyDirect
- [ ] Nurtec cash price via PfizerForAll
- [ ] Aimovig cash price via AmgenNow
- [ ] Brilinta cash price via AZ Direct
- [ ] Xigduo XR cash price via AZ Direct
- [ ] Jentadueto cash price via BI Access (not yet live)
- [ ] Striverdi Respimat cash price via BI Access
- [ ] Eliquis cash price via BMS Patient Connect (40%+ off — dollar amount TBD)
- [ ] Mayzent, Rydapt, Tabrecta cash prices via Novartis Direct
- [ ] Medicare/Medicaid eligibility for AZ Direct, BMS Patient Connect, Novartis Direct
