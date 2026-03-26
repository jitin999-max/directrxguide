import type { ConditionTile, InsuranceOption, ConditionTileId, OtherSubConditionTile } from "./types";

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
