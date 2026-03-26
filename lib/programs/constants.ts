import type { ConditionTile, InsuranceOption, ConditionTileId, OtherSubConditionTile, IndicationCategory, FdaIndication } from "./types";

export const CONDITION_TILES: ConditionTile[] = [
  {
    id: "obesity",
    label: "Weight Loss",
    subLabel: "Zepbound, Wegovy",
    icon: "scale",
    colorClasses: "bg-amber-50 text-amber-700 border-amber-200 hover:border-amber-400",
  },
  {
    id: "type2-diabetes",
    label: "Type 2 Diabetes",
    subLabel: "Ozempic, Farxiga, INVOKANA, insulins",
    icon: "droplet",
    colorClasses: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400",
  },
  {
    id: "type1-diabetes",
    label: "Type 1 Diabetes",
    subLabel: "Humalog, Humulin, Basaglar",
    icon: "syringe",
    colorClasses: "bg-orange-50 text-orange-700 border-orange-200 hover:border-orange-400",
  },
  {
    id: "migraine",
    label: "Migraine",
    subLabel: "Emgality, Aimovig, Nurtec",
    icon: "zap",
    colorClasses: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400",
  },
  {
    id: "heart-cholesterol",
    label: "Heart & Cholesterol",
    subLabel: "Repatha, Eliquis, XARELTO, Farxiga",
    icon: "heart",
    colorClasses: "bg-red-50 text-red-700 border-red-200 hover:border-red-400",
  },
  {
    id: "asthma-copd",
    label: "Asthma & COPD",
    subLabel: "Advair, Ventolin, Spiriva",
    icon: "wind",
    colorClasses: "bg-sky-50 text-sky-700 border-sky-200 hover:border-sky-400",
  },
  {
    id: "psoriasis-skin",
    label: "Psoriasis & Skin",
    subLabel: "Cosentyx, Sotyktu, Eucrisa",
    icon: "shield",
    colorClasses: "bg-pink-50 text-pink-700 border-pink-200 hover:border-pink-400",
  },
  {
    id: "arthritis-autoimmune",
    label: "Arthritis & Autoimmune",
    subLabel: "Xeljanz, Amjevita, Cosentyx",
    icon: "activity",
    colorClasses: "bg-indigo-50 text-indigo-700 border-indigo-200 hover:border-indigo-400",
  },
  {
    id: "other",
    label: "Other Conditions",
    subLabel: "MS, Cancer, COVID, Flu",
    icon: "plus-circle",
    colorClasses: "bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-400",
  },
];

export const INSURANCE_OPTIONS: InsuranceOption[] = [
  {
    id: "uninsured",
    label: "I have no insurance",
    description: "Show cash-pay and self-pay programs only",
  },
  {
    id: "commercial",
    label: "I have private / employer insurance",
    description: "Show copay cards, savings programs, and cash-pay options",
  },
  {
    id: "government",
    label: "I have Medicare or Medicaid",
    description: "Show programs available to government-insured patients",
  },
];

export const GOVERNMENT_BANNER =
  "Most manufacturer direct-to-patient (DTP) programs are designed for patients with private insurance or no insurance. Some programs below may still be available at cash prices, but you typically cannot seek reimbursement from your government plan. Verify eligibility directly with the manufacturer.";

export const OTHER_SUB_CONDITIONS: OtherSubConditionTile[] = [
  {
    id: "ms",
    label: "Multiple Sclerosis",
    subLabel: "Mayzent (siponimod)",
    drugGenericKeys: ["siponimod-other"],
    colorClasses: "bg-blue-50 text-blue-700 border-blue-200 hover:border-blue-400",
  },
  {
    id: "oncology",
    label: "Cancer",
    subLabel: "Rydapt, Tabrecta",
    drugGenericKeys: ["midostaurin-other", "capmatinib-other"],
    colorClasses: "bg-rose-50 text-rose-700 border-rose-200 hover:border-rose-400",
  },
  {
    id: "covid",
    label: "COVID-19",
    subLabel: "Paxlovid (free)",
    drugGenericKeys: ["nirmatrelvir-ritonavir-other"],
    colorClasses: "bg-green-50 text-green-700 border-green-200 hover:border-green-400",
  },
  {
    id: "flu",
    label: "Influenza",
    subLabel: "Relenza (zanamivir)",
    drugGenericKeys: ["zanamivir-other"],
    colorClasses: "bg-teal-50 text-teal-700 border-teal-200 hover:border-teal-400",
  },
  {
    id: "malaria",
    label: "Malaria Prevention",
    subLabel: "Malarone Pediatric",
    drugGenericKeys: ["atovaquone-proguanil-other"],
    colorClasses: "bg-yellow-50 text-yellow-700 border-yellow-200 hover:border-yellow-400",
  },
];

/** T2D drugGenericKeys classified by route of administration */
export const T2D_INJECTABLE_KEYS: string[] = [
  "insulin-lispro-diabetes",
  "insulin-human-diabetes",
  "insulin-glargine-diabetes",
  "insulin-lispro-aabc-diabetes",
  "insulin-glargine-aglr-diabetes",
  "semaglutide-diabetes",
];

export const T2D_ORAL_KEYS: string[] = [
  "dapagliflozin-diabetes-heart",
  "dapagliflozin-metformin-diabetes",
  "linagliptin-metformin-diabetes",
  "linagliptin-metformin-xr-diabetes",
  "canagliflozin-diabetes-heart",
  "canagliflozin-metformin-diabetes",
  "canagliflozin-metformin-xr-diabetes",
];

/**
 * FDA approval year by drugGenericKey.
 * Used as tiebreaker when sortPrice is equal — newer agents rank first.
 */
export const DRUG_MARKET_YEAR: Record<string, number> = {
  // Obesity
  "tirzepatide-obesity": 2023,          // Zepbound
  "semaglutide-obesity": 2021,          // Wegovy

  // Diabetes — injectables
  "insulin-glargine-aglr-diabetes": 2024, // Rezvoglar
  "insulin-lispro-aabc-diabetes": 2020,   // Lyumjev
  "semaglutide-diabetes": 2017,           // Ozempic
  "insulin-glargine-diabetes": 2015,      // Basaglar
  "insulin-lispro-diabetes": 1996,        // Humalog
  "insulin-human-diabetes": 1982,         // Humulin

  // Diabetes — orals
  "canagliflozin-metformin-xr-diabetes": 2016, // INVOKAMET XR
  "linagliptin-metformin-xr-diabetes": 2016,   // Jentadueto XR
  "dapagliflozin-metformin-diabetes": 2014,     // Xigduo XR
  "dapagliflozin-diabetes-heart": 2014,         // Farxiga
  "canagliflozin-metformin-diabetes": 2014,     // INVOKAMET
  "canagliflozin-diabetes-heart": 2013,         // INVOKANA
  "linagliptin-metformin-diabetes": 2012,       // Jentadueto

  // Migraine
  "zavegepant-migraine": 2023,          // Zavzpret
  "rimegepant-migraine": 2020,          // Nurtec ODT
  "galcanezumab-migraine": 2018,        // Emgality
  "erenumab-migraine": 2018,            // Aimovig

  // Heart & Cholesterol
  "evolocumab-heart": 2015,             // Repatha
  "apixaban-heart": 2012,               // Eliquis
  "rivaroxaban-heart": 2011,            // XARELTO

  // Asthma & COPD
  "albuterol-budesonide-asthma": 2023,          // Airsupra
  "glycopyrrolate-formoterol-copd": 2016,       // Bevespi Aerosphere
  "fluticasone-furoate-asthma": 2014,           // Arnuity Ellipta
  "umeclidinium-copd": 2014,                    // Incruse Ellipta
  "tiotropium-copd": 2014,                      // Spiriva Respimat
  "olodaterol-copd": 2014,                      // Striverdi Respimat
  "umeclidinium-vilanterol-copd": 2013,         // Anoro Ellipta
  "albuterol-asthma": 2005,                     // Ventolin HFA
  "fluticasone-salmeterol-asthma-copd": 2000,   // Advair Diskus
  "fluticasone-salmeterol-asthma": 2006,        // Advair HFA

  // Psoriasis & Skin
  "deucravacitinib-psoriasis": 2022,    // Sotyktu
  "crisaborole-psoriasis": 2016,        // Eucrisa
  "secukinumab-psoriasis-autoimmune": 2015, // Cosentyx

  // Arthritis & Autoimmune
  "adalimumab-atto-autoimmune": 2017,   // Amjevita
  "tofacitinib-autoimmune": 2012,       // Xeljanz
  "tofacitinib-xr-autoimmune": 2016,    // Xeljanz XR

  // Other
  "nirmatrelvir-ritonavir-other": 2021, // Paxlovid
  "capmatinib-other": 2020,             // Tabrecta
  "siponimod-other": 2019,              // Mayzent
  "midostaurin-other": 2017,            // Rydapt
  "atovaquone-proguanil-other": 2000,   // Malarone
  "zanamivir-other": 1999,              // Relenza
};

/** Asthma & COPD drugGenericKeys classified by condition */
export const ASTHMA_KEYS: string[] = [
  "albuterol-budesonide-asthma",
  "fluticasone-salmeterol-asthma-copd",
  "fluticasone-salmeterol-asthma",
  "fluticasone-furoate-asthma",
  "albuterol-asthma",
];

export const COPD_KEYS: string[] = [
  "glycopyrrolate-formoterol-copd",
  "tiotropium-copd",
  "olodaterol-copd",
  "fluticasone-salmeterol-asthma-copd",
  "umeclidinium-vilanterol-copd",
  "umeclidinium-copd",
];

/** Tailwind classes for each indication category pill */
export const INDICATION_COLORS: Record<IndicationCategory, string> = {
  weight: "bg-emerald-50 text-emerald-700",
  diabetes: "bg-blue-50 text-blue-700",
  migraine: "bg-violet-50 text-violet-700",
  cardiovascular: "bg-rose-50 text-rose-700",
  respiratory: "bg-sky-50 text-sky-700",
  dermatology: "bg-amber-50 text-amber-700",
  autoimmune: "bg-pink-50 text-pink-700",
  gi: "bg-yellow-50 text-yellow-700",
  neuro: "bg-slate-100 text-slate-600",
  oncology: "bg-red-50 text-red-700",
  infectious: "bg-lime-50 text-lime-700",
  kidney: "bg-cyan-50 text-cyan-700",
};

/** FDA-approved indications by drugGenericKey */
export const FDA_INDICATIONS: Record<string, FdaIndication[]> = {
  // Obesity / Weight
  "tirzepatide-obesity": [
    { label: "Chronic weight management in adults with BMI ≥30 or ≥27 with comorbidity", category: "weight" },
  ],
  "semaglutide-obesity": [
    { label: "Chronic weight management in adults with BMI ≥30 or ≥27 with comorbidity", category: "weight" },
    { label: "Reduction of MACE risk in adults with established CVD and obesity/overweight", category: "cardiovascular" },
  ],

  // Diabetes — injectables
  "insulin-lispro-diabetes": [
    { label: "Glycemic control in adults and children with type 1 or type 2 diabetes", category: "diabetes" },
  ],
  "insulin-human-diabetes": [
    { label: "Glycemic control in adults and children with type 1 or type 2 diabetes", category: "diabetes" },
  ],
  "insulin-glargine-diabetes": [
    { label: "Glycemic control in adults and pediatric patients with T1D and adults with T2D", category: "diabetes" },
  ],
  "insulin-lispro-aabc-diabetes": [
    { label: "Glycemic control in adults with type 1 or type 2 diabetes", category: "diabetes" },
  ],
  "insulin-glargine-aglr-diabetes": [
    { label: "Glycemic control in adults and pediatric patients with T1D and adults with T2D", category: "diabetes" },
  ],
  "semaglutide-diabetes": [
    { label: "Adjunct to diet and exercise for glycemic control in adults with T2D", category: "diabetes" },
    { label: "Reduction of MACE risk in adults with T2D and established CVD", category: "cardiovascular" },
  ],

  // Diabetes — orals
  "dapagliflozin-diabetes-heart": [
    { label: "Glycemic control in adults with T2D", category: "diabetes" },
    { label: "Heart failure (HFrEF and HFpEF) to reduce CV death and hospitalization", category: "cardiovascular" },
    { label: "Chronic kidney disease to reduce eGFR decline, ESKD, and CV/renal death", category: "kidney" },
  ],
  "dapagliflozin-metformin-diabetes": [
    { label: "Adjunct to diet and exercise for glycemic control in adults with T2D", category: "diabetes" },
  ],
  "linagliptin-metformin-diabetes": [
    { label: "Adjunct to diet and exercise for glycemic control in adults with T2D", category: "diabetes" },
  ],
  "linagliptin-metformin-xr-diabetes": [
    { label: "Adjunct to diet and exercise for glycemic control in adults with T2D", category: "diabetes" },
  ],
  "canagliflozin-diabetes-heart": [
    { label: "Adjunct to diet and exercise for glycemic control in adults with T2D", category: "diabetes" },
    { label: "Reduce risk of ESKD, doubling of SCr, CV death, and HF hospitalization in T2D with diabetic nephropathy", category: "kidney" },
  ],
  "canagliflozin-metformin-diabetes": [
    { label: "Adjunct to diet and exercise for glycemic control in adults with T2D", category: "diabetes" },
  ],
  "canagliflozin-metformin-xr-diabetes": [
    { label: "Adjunct to diet and exercise for glycemic control in adults with T2D", category: "diabetes" },
  ],

  // Migraine
  "galcanezumab-migraine": [
    { label: "Preventive treatment of migraine in adults", category: "migraine" },
    { label: "Treatment of episodic cluster headache in adults", category: "migraine" },
  ],
  "erenumab-migraine": [
    { label: "Preventive treatment of migraine in adults", category: "migraine" },
  ],
  "rimegepant-migraine": [
    { label: "Acute treatment of migraine with or without aura in adults", category: "migraine" },
    { label: "Preventive treatment of episodic migraine in adults", category: "migraine" },
  ],
  "zavegepant-migraine": [
    { label: "Acute treatment of migraine with or without aura in adults", category: "migraine" },
  ],

  // Heart & Cholesterol
  "evolocumab-heart": [
    { label: "Primary hyperlipidemia (including HeFH) to reduce LDL-C", category: "cardiovascular" },
    { label: "Reduce risk of MI, stroke, and coronary revascularization in adults with established CVD", category: "cardiovascular" },
  ],
  "apixaban-heart": [
    { label: "Reduce risk of stroke and systemic embolism in nonvalvular atrial fibrillation", category: "cardiovascular" },
    { label: "Treatment and risk reduction of recurrent DVT and PE", category: "cardiovascular" },
    { label: "DVT prophylaxis following hip or knee replacement surgery", category: "cardiovascular" },
  ],
  "rivaroxaban-heart": [
    { label: "Reduce risk of stroke and systemic embolism in nonvalvular atrial fibrillation", category: "cardiovascular" },
    { label: "Treatment and risk reduction of recurrent DVT and PE", category: "cardiovascular" },
    { label: "Risk reduction of major CV events in patients with CAD or PAD", category: "cardiovascular" },
  ],

  // Asthma & COPD
  "albuterol-budesonide-asthma": [
    { label: "PRN treatment or prevention of bronchoconstriction and reduction of exacerbation risk in asthma (≥18 yr)", category: "respiratory" },
  ],
  "fluticasone-salmeterol-asthma-copd": [
    { label: "Maintenance treatment of asthma in patients ≥4 years", category: "respiratory" },
    { label: "Maintenance treatment of airflow obstruction in COPD", category: "respiratory" },
  ],
  "fluticasone-salmeterol-asthma": [
    { label: "Maintenance treatment of asthma in patients ≥12 years", category: "respiratory" },
  ],
  "umeclidinium-vilanterol-copd": [
    { label: "Long-term maintenance of airflow obstruction in COPD", category: "respiratory" },
  ],
  "fluticasone-furoate-asthma": [
    { label: "Maintenance treatment of asthma in patients ≥5 years", category: "respiratory" },
  ],
  "umeclidinium-copd": [
    { label: "Long-term maintenance of airflow obstruction in COPD", category: "respiratory" },
  ],
  "albuterol-asthma": [
    { label: "Treatment or prevention of bronchospasm in reversible obstructive airway disease (≥4 yr)", category: "respiratory" },
  ],
  "glycopyrrolate-formoterol-copd": [
    { label: "Long-term maintenance of airflow obstruction in COPD", category: "respiratory" },
  ],
  "tiotropium-copd": [
    { label: "Long-term maintenance of bronchospasm in COPD", category: "respiratory" },
    { label: "Maintenance treatment of asthma in patients ≥6 years", category: "respiratory" },
  ],
  "olodaterol-copd": [
    { label: "Long-term maintenance of airflow obstruction in COPD", category: "respiratory" },
  ],

  // Psoriasis & Skin
  "deucravacitinib-psoriasis": [
    { label: "Moderate-to-severe plaque psoriasis in adults eligible for systemic therapy", category: "dermatology" },
  ],
  "crisaborole-psoriasis": [
    { label: "Mild-to-moderate atopic dermatitis in patients ≥3 months", category: "dermatology" },
  ],
  "secukinumab-psoriasis-autoimmune": [
    { label: "Moderate-to-severe plaque psoriasis in adults eligible for systemic therapy", category: "dermatology" },
    { label: "Active psoriatic arthritis in adults", category: "autoimmune" },
    { label: "Active ankylosing spondylitis in adults", category: "autoimmune" },
  ],

  // Arthritis & Autoimmune
  "tofacitinib-autoimmune": [
    { label: "Moderately-to-severely active rheumatoid arthritis in adults", category: "autoimmune" },
    { label: "Active psoriatic arthritis in adults", category: "autoimmune" },
    { label: "Moderately-to-severely active ulcerative colitis in adults", category: "gi" },
  ],
  "tofacitinib-xr-autoimmune": [
    { label: "Moderately-to-severely active rheumatoid arthritis in adults", category: "autoimmune" },
    { label: "Active psoriatic arthritis in adults", category: "autoimmune" },
    { label: "Moderately-to-severely active ulcerative colitis in adults", category: "gi" },
  ],
  "adalimumab-atto-autoimmune": [
    { label: "Moderately-to-severely active rheumatoid arthritis in adults", category: "autoimmune" },
    { label: "Moderate-to-severe plaque psoriasis in adults", category: "dermatology" },
    { label: "Moderately-to-severely active Crohn's disease in adults", category: "gi" },
    { label: "Moderately-to-severely active ulcerative colitis in adults", category: "gi" },
  ],

  // Other
  "siponimod-other": [
    { label: "Relapsing forms of multiple sclerosis in adults (including CIS, RRMS, active SPMS)", category: "neuro" },
  ],
  "midostaurin-other": [
    { label: "Newly diagnosed FLT3-mutation-positive AML (with chemo)", category: "oncology" },
    { label: "Aggressive systemic mastocytosis, SM-AHN, or mast cell leukemia", category: "oncology" },
  ],
  "capmatinib-other": [
    { label: "Metastatic NSCLC with METex14 skipping mutation", category: "oncology" },
  ],
  "nirmatrelvir-ritonavir-other": [
    { label: "Mild-to-moderate COVID-19 in adults at high risk for progression to severe disease", category: "infectious" },
  ],
  "zanamivir-other": [
    { label: "Treatment of influenza A and B in patients ≥7 years", category: "infectious" },
    { label: "Prophylaxis of influenza A and B in patients ≥5 years", category: "infectious" },
  ],
  "atovaquone-proguanil-other": [
    { label: "Prevention of Plasmodium falciparum malaria", category: "infectious" },
    { label: "Treatment of acute uncomplicated P. falciparum malaria", category: "infectious" },
  ],
};

export const CONDITION_TILE_COLORS: Record<ConditionTileId, string> = {
  obesity: "bg-amber-50 border-amber-200",
  "type2-diabetes": "bg-orange-50 border-orange-200",
  "type1-diabetes": "bg-orange-50 border-orange-200",
  migraine: "bg-purple-50 border-purple-200",
  "heart-cholesterol": "bg-red-50 border-red-200",
  "asthma-copd": "bg-sky-50 border-sky-200",
  "psoriasis-skin": "bg-pink-50 border-pink-200",
  "arthritis-autoimmune": "bg-indigo-50 border-indigo-200",
  other: "bg-gray-50 border-gray-200",
};
