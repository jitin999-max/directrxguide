"use client";

import { useState, useCallback } from "react";
import type { ConditionTileId, InsuranceStatus, OtherSubCondition, MedicationRoute, RespiratorySubType } from "@/lib/programs/types";
import { OTHER_SUB_CONDITIONS } from "@/lib/programs/constants";
import { PROGRAMS } from "@/lib/programs/data";
import { findMyOptions, type RankedResult } from "@/lib/programs/filters";
import ConditionStep from "./ConditionStep";
import SubConditionStep from "./SubConditionStep";
import RouteStep from "./RouteStep";
import RespiratoryStep from "./RespiratoryStep";
import InsuranceStep from "./InsuranceStep";
import ResultsStep from "./ResultsStep";

type Step = "condition" | "sub-condition" | "route" | "respiratory" | "insurance" | "results";

export default function FindMyOptions() {
  const [step, setStep] = useState<Step>("condition");
  const [selectedCondition, setSelectedCondition] =
    useState<ConditionTileId | null>(null);
  const [selectedSubCondition, setSelectedSubCondition] =
    useState<OtherSubCondition | null>(null);
  const [selectedRoute, setSelectedRoute] =
    useState<MedicationRoute | null>(null);
  const [selectedRespiratorySubType, setSelectedRespiratorySubType] =
    useState<RespiratorySubType | null>(null);
  const [selectedInsurance, setSelectedInsurance] =
    useState<InsuranceStatus | null>(null);
  const [results, setResults] = useState<RankedResult[]>([]);

  const handleConditionSelect = useCallback((id: ConditionTileId) => {
    setSelectedCondition(id);
    setSelectedSubCondition(null);
    setSelectedRoute(null);
    setSelectedRespiratorySubType(null);
    setSelectedInsurance(null);
    if (id === "other") {
      setStep("sub-condition");
    } else if (id === "type2-diabetes") {
      setStep("route");
    } else if (id === "asthma-copd") {
      setStep("respiratory");
    } else {
      setStep("insurance");
    }
  }, []);

  const handleSubConditionSelect = useCallback((id: OtherSubCondition) => {
    setSelectedSubCondition(id);
    setSelectedInsurance(null);
    setStep("insurance");
  }, []);

  const handleRouteSelect = useCallback((route: MedicationRoute) => {
    setSelectedRoute(route);
    setSelectedInsurance(null);
    setStep("insurance");
  }, []);

  const handleRespiratorySelect = useCallback((subType: RespiratorySubType) => {
    setSelectedRespiratorySubType(subType);
    setSelectedInsurance(null);
    setStep("insurance");
  }, []);

  const handleInsuranceSelect = useCallback((id: InsuranceStatus) => {
    setSelectedInsurance(id);
  }, []);

  const handleSubmit = useCallback(() => {
    if (!selectedCondition || !selectedInsurance) return;
    const otherKeys =
      selectedCondition === "other" && selectedSubCondition
        ? OTHER_SUB_CONDITIONS.find((s) => s.id === selectedSubCondition)
            ?.drugGenericKeys
        : undefined;
    const ranked = findMyOptions(
      PROGRAMS,
      selectedCondition,
      selectedInsurance,
      otherKeys,
      selectedRoute ?? undefined,
      selectedRespiratorySubType ?? undefined
    );
    setResults(ranked);
    setStep("results");
  }, [selectedCondition, selectedSubCondition, selectedInsurance, selectedRoute, selectedRespiratorySubType]);

  const handleBackToConditions = useCallback(() => {
    if (selectedCondition === "other") {
      setStep("sub-condition");
    } else if (selectedCondition === "type2-diabetes") {
      setStep("route");
    } else if (selectedCondition === "asthma-copd") {
      setStep("respiratory");
    } else {
      setStep("condition");
    }
    setSelectedInsurance(null);
  }, [selectedCondition]);

  const handleStartOver = useCallback(() => {
    setStep("condition");
    setSelectedCondition(null);
    setSelectedSubCondition(null);
    setSelectedRoute(null);
    setSelectedRespiratorySubType(null);
    setSelectedInsurance(null);
    setResults([]);
  }, []);

  return (
    <section
      id="eligibility"
      className="relative py-20 sm:py-28 overflow-hidden"
      aria-labelledby="find-my-options-heading"
    >
      {/* Background treatment */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/80 via-white to-white" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-teal-100/40 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Start Here
          </div>
          <h2
            id="find-my-options-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight"
          >
            Find programs{" "}
            <em className="not-italic italic" style={{ color: "#0D9E80" }}>
              you may be eligible for
            </em>
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-lg mx-auto leading-relaxed">
            Answer a few quick questions &mdash; no account, no personal data
            stored. We&apos;ll match you to manufacturer direct-to-patient
            programs that fit your situation.
          </p>
        </div>

        {/* Step indicator — sub-condition counts as step 1 visually */}
        {(() => {
          const visualSteps = ["condition", "insurance", "results"] as const;
          const stepLabels = ["Condition", "Insurance", "Results"];
          const visualIndex =
            step === "sub-condition" || step === "route" || step === "respiratory"
              ? 0
              : visualSteps.indexOf(step as (typeof visualSteps)[number]);
          return (
            <div className="flex items-center justify-center gap-2 mb-10">
              {visualSteps.map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div className="flex flex-col items-center gap-1.5">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-200 ${
                        visualIndex === i
                          ? "bg-teal-500 text-white shadow-md shadow-teal-200"
                          : visualIndex > i
                            ? "bg-teal-100 text-teal-600"
                            : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {visualIndex > i ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        i + 1
                      )}
                    </div>
                    <span className={`text-[10px] font-medium tracking-wide ${
                      visualIndex >= i ? "text-teal-600" : "text-gray-400"
                    }`}>
                      {stepLabels[i]}
                    </span>
                  </div>
                  {i < 2 && (
                    <div
                      className={`w-10 sm:w-16 h-0.5 mb-5 ${
                        visualIndex > i ? "bg-teal-300" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          );
        })()}

        {/* Card container */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/60 p-6 sm:p-10">
          {step === "condition" && (
            <ConditionStep onSelect={handleConditionSelect} />
          )}

          {step === "sub-condition" && (
            <SubConditionStep
              onSelect={handleSubConditionSelect}
              onBack={() => {
                setStep("condition");
                setSelectedCondition(null);
              }}
            />
          )}

          {step === "route" && (
            <RouteStep
              selectedRoute={selectedRoute}
              onSelect={handleRouteSelect}
              onBack={() => {
                setStep("condition");
                setSelectedCondition(null);
                setSelectedRoute(null);
              }}
            />
          )}

          {step === "respiratory" && (
            <RespiratoryStep
              selectedSubType={selectedRespiratorySubType}
              onSelect={handleRespiratorySelect}
              onBack={() => {
                setStep("condition");
                setSelectedCondition(null);
                setSelectedRespiratorySubType(null);
              }}
            />
          )}

          {step === "insurance" && selectedCondition && (
            <InsuranceStep
              condition={selectedCondition}
              selectedInsurance={selectedInsurance}
              onSelect={handleInsuranceSelect}
              onBack={handleBackToConditions}
              onSubmit={handleSubmit}
            />
          )}

          {step === "results" &&
            selectedCondition &&
            selectedInsurance && (
              <ResultsStep
                condition={selectedCondition}
                insurance={selectedInsurance}
                results={results}
                onStartOver={handleStartOver}
                labelOverride={
                  selectedCondition === "asthma-copd" && selectedRespiratorySubType && selectedRespiratorySubType !== "all"
                    ? selectedRespiratorySubType === "asthma" ? "Asthma" : "COPD"
                    : selectedCondition === "type2-diabetes" && selectedRoute && selectedRoute !== "all"
                      ? selectedRoute === "oral" ? "Type 2 Diabetes (Oral)" : "Type 2 Diabetes (Injectable)"
                      : undefined
                }
              />
            )}
        </div>

        {/* Privacy note */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <p className="text-xs text-gray-400">
            No account required. We never store or sell your data.
          </p>
        </div>
      </div>
    </section>
  );
}
