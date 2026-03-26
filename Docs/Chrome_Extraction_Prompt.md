# Chrome Extension Extraction Prompt

Use this prompt when on any DTP drug product page (e.g. lilly.com/lillydirect/medicines/humalog).
Paste into the Claude Chrome extension while on the specific drug page — not the homepage.

---

You are helping build a drug program database. Extract the following information from this page and return it in a structured table:

1. Drug brand name(s) and all variants/formulations listed
2. Generic name(s)
3. Condition(s) treated / FDA indication
4. All pricing options — list each separately (insurance, self-pay, savings card, cash price, intro offer)
5. Exact monthly dollar amount for each pricing option
6. Is this a true cash-pay program, or does it require insurance?
7. Are Medicare/Medicaid/government insurance patients eligible? (yes/no — quote the exact eligibility language from the page)
8. Is there an income requirement? If yes, what are the thresholds?
9. Any other eligibility requirements (age, residency, prescription requirements, refill windows, enrollment caps)
10. Any expiry dates on current offers
11. URL of the page

Return as a clean table with these as column headers.
