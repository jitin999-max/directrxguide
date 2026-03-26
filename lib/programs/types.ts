export type ConditionTileId =
  | "obesity"
  | "type2-diabetes"
  | "type1-diabetes"
  | "migraine"
  | "heart-cholesterol"
  | "asthma-copd"
  | "psoriasis-skin"
  | "arthritis-autoimmune"
  | "other";

export type InsuranceStatus =
  | "uninsured"
  | "commercial"
  | "government";

export type GovernmentInsuranceHandling =
  | "excluded"
  | "allowed-restricted"
  | "allowed-waiver"
  | "not-stated"
  | "not-applicable";

export type InsuranceRequirement =
  | "none"
  | "commercial-required"
  | "commercial-with-coverage"
  | "commercial-without-coverage"
  | "any";

export type DataStatus = "confirmed" | "verify";

export interface DTPProgramRow {
  id: string;
  platform: string;
  manufacturer: string;
  drugBrand: string;
  drugGeneric: string;
  programVariant: string;
  drugGenericKey: string;
  conditionTileIds: ConditionTileId[];
  fdaIndication: string;
  insuranceRequirement: InsuranceRequirement;
  governmentInsuranceHandling: GovernmentInsuranceHandling;
  accessibilityScore: number;
  sortPrice: number;
  priceDisplay: string;
  priceNotes: string;
  eligibilityNotes: string;
  governmentCaveat: string | null;
  stateExclusions: string[];
  platformUrl: string;
  lastVerified: string;
  dataStatus: DataStatus;
}

export interface ConditionTile {
  id: ConditionTileId;
  label: string;
  subLabel: string;
  icon: string;
  colorClasses: string;
}

export interface InsuranceOption {
  id: InsuranceStatus;
  label: string;
  description: string;
}

export type MedicationRoute = "oral" | "injectable" | "all";

export type RespiratorySubType = "asthma" | "copd" | "all";

export type IndicationCategory =
  | "weight"
  | "diabetes"
  | "migraine"
  | "cardiovascular"
  | "respiratory"
  | "dermatology"
  | "autoimmune"
  | "gi"
  | "neuro"
  | "oncology"
  | "infectious"
  | "kidney";

export interface FdaIndication {
  label: string;
  category: IndicationCategory;
}

export type OtherSubCondition =
  | "ms"
  | "oncology"
  | "covid"
  | "flu"
  | "malaria";

export interface OtherSubConditionTile {
  id: OtherSubCondition;
  label: string;
  subLabel: string;
  drugGenericKeys: string[];
  colorClasses: string;
}
