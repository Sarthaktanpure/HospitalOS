import React from "react";

const AIModule = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-250 pb-5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-sm shadow-blue-200">
            ✦
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-950 tracking-tight flex items-center gap-2">
              HospitalOS AI Assistant
            </h1>
            <p className="text-sm text-gray-500 font-medium">
              Automated patient risk analysis, clinical summaries, and
              diagnostic suggestions.
            </p>
          </div>
        </div>
        <button className="px-4 py-2 border border-blue-500 hover:bg-blue-50 text-xs font-bold text-blue-600 rounded-xl transition-all">
          Re-Analyze Patient Records
        </button>
      </div>

      {/* AI Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left side: Clinical Summary & Risks (col-span-8) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Risk Indicators */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Patient Risk Overview
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Diabetes Risk */}
              <div className="p-4 bg-red-50/30 border border-red-200 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-red-800">
                    Diabetes Complication Risk
                  </span>
                  <span className="px-2 py-0.5 bg-red-100 text-red-800 border border-red-200 rounded-full text-[10px] font-bold">
                    84% Probability
                  </span>
                </div>
                <p className="text-xs text-gray-650 leading-relaxed">
                  Risk factors: Elevated HbA1c values (9.2%), family history of
                  diabetes, and sedentary lifestyle. Immediate lifestyle and
                  medication modifications suggested.
                </p>
              </div>

              {/* Hypertension Risk */}
              <div className="p-4 bg-orange-50/20 border border-orange-200 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-orange-850">
                    Hypertension Progression
                  </span>
                  <span className="px-2 py-0.5 bg-orange-100 text-orange-800 border border-orange-200 rounded-full text-[10px] font-bold">
                    56% Probability
                  </span>
                </div>
                <p className="text-xs text-gray-650 leading-relaxed">
                  Risk factors: Blood pressure readings averaging 135/85.
                  Monitored alongside Metformin dosage changes.
                </p>
              </div>
            </div>
          </div>

          {/* AI Medical Summary */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">
              AI-Generated Medical Summary
            </h3>
            <div className="prose prose-sm text-gray-700 leading-relaxed space-y-3.5">
              <p>
                The patient,{" "}
                <span className="font-bold text-gray-900">
                  Vikram Singh (34Y/M)
                </span>
                , presents with active Type-2 Diabetes Mellitus and essential
                hypertension. Recent diagnostic pathology tests collected on 10
                May 2026 indicate an elevated glucose level alongside high HbA1c
                values.
              </p>
              <p>
                Dr. Arvind Sharma adjusted the patient's Metformin dosage from
                250mg to 500mg. Active vitals indicators display stable heart
                rates and temperature, but systolic pressure warrants ongoing
                monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* Right side: AI Suggestions Panel (col-span-4) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Suggestion list */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">
              Clinical Suggestions
            </h3>

            <div className="space-y-3.5">
              {/* Sug 1 */}
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-lg bg-blue-50 border border-blue-150 flex items-center justify-center text-blue-600 font-bold text-xs mt-0.5">
                  ✦
                </div>
                <div className="text-xs font-medium text-gray-500">
                  <span className="font-bold text-gray-800 block">
                    Schedule HbA1c follow-up
                  </span>
                  Order follow-up diagnostic blood count and glucose tests in 90
                  days.
                </div>
              </div>

              {/* Sug 2 */}
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-lg bg-blue-50 border border-blue-150 flex items-center justify-center text-blue-600 font-bold text-xs mt-0.5">
                  ✦
                </div>
                <div className="text-xs font-medium text-gray-500">
                  <span className="font-bold text-gray-800 block">
                    Refer for Dietary Counseling
                  </span>
                  Suggest weight-loss and cardiac diet parameters to manage
                  hypertension markers.
                </div>
              </div>
            </div>
          </div>

          {/* Ask AI Input Prompt */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Ask Clinical Assistant
            </h3>
            <div className="relative flex items-center bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
              <textarea
                rows="2"
                placeholder="e.g. Is Metformin contraindicated with Lisinopril?"
                className="w-full bg-transparent border-none outline-none resize-none text-xs text-gray-800 placeholder-gray-400"
              ></textarea>
              <button className="absolute right-2 bottom-2 p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all active:scale-95">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="22" x2="11" y1="2" y2="13" />
                  <polyline points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIModule;
