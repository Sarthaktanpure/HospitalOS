import React from "react";

const EmergencyPatientForm = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* High-visibility Warning Banner */}
      <div className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3 text-red-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="animate-pulse"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <line x1="12" x2="12" y1="9" y2="13" />
            <line x1="12" x2="12.01" y1="17" y2="17" />
          </svg>
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider">
              Emergency Intake System
            </h4>
            <p className="text-xs font-semibold mt-0.5">
              Please triage immediately. Fields marked with (*) are critical for
              ER bed queue assignment.
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-block px-3 py-1 bg-red-100 text-red-800 border border-red-250 rounded-full text-xs font-bold font-mono">
          TRAUMA PROTOCOL ACTIVE
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Emergency Patient Triage Form
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Quick admission and triage for emergency encounters.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 bg-red-600 hover:bg-red-700 active:scale-[0.98] text-xs font-bold text-white rounded-xl shadow-sm shadow-red-200 flex items-center gap-2 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
            Admit to Trauma Bay
          </button>
        </div>
      </div>

      {/* Form Layout */}
      <form className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Form Fields (col-span-8) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Triage Priority Selector */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Triage Level Assignment *
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Level 1: Red */}
              <button
                type="button"
                className="p-4 border-2 border-red-500 bg-red-50/50 rounded-xl text-center flex flex-col items-center justify-center gap-2 transition-all"
              >
                <span className="h-4.5 w-4.5 rounded-full bg-red-600 animate-ping"></span>
                <span className="text-xs font-extrabold text-red-800 uppercase tracking-wider block">
                  Level 1 (Red)
                </span>
                <span className="text-[10px] text-red-650 font-bold leading-tight">
                  Resuscitation / Immediate
                </span>
              </button>

              {/* Level 2: Orange */}
              <button
                type="button"
                className="p-4 border border-orange-200 bg-white hover:bg-orange-50/20 rounded-xl text-center flex flex-col items-center justify-center gap-2 transition-all"
              >
                <span className="h-3 w-3 rounded-full bg-orange-500"></span>
                <span className="text-xs font-bold text-orange-850 uppercase tracking-wider block">
                  Level 2 (Orange)
                </span>
                <span className="text-[10px] text-gray-500 font-semibold leading-tight">
                  Emergent / Critical
                </span>
              </button>

              {/* Level 3: Yellow */}
              <button
                type="button"
                className="p-4 border border-amber-200 bg-white hover:bg-amber-50/20 rounded-xl text-center flex flex-col items-center justify-center gap-2 transition-all"
              >
                <span className="h-3 w-3 rounded-full bg-amber-500"></span>
                <span className="text-xs font-bold text-amber-850 uppercase tracking-wider block">
                  Level 3 (Yellow)
                </span>
                <span className="text-[10px] text-gray-500 font-semibold leading-tight">
                  Urgent / Acute
                </span>
              </button>

              {/* Level 4: Green */}
              <button
                type="button"
                className="p-4 border border-green-200 bg-white hover:bg-green-50/20 rounded-xl text-center flex flex-col items-center justify-center gap-2 transition-all"
              >
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
                <span className="text-xs font-bold text-green-850 uppercase tracking-wider block">
                  Level 4 (Green)
                </span>
                <span className="text-[10px] text-gray-500 font-semibold leading-tight">
                  Less Urgent / Stable
                </span>
              </button>
            </div>
          </div>

          {/* Patient Profile Intake */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">
              Patient Personal Identification
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Patient Name */}
              <div>
                <label className="text-xs font-bold text-gray-705 block mb-1.5">
                  Patient Name (Unknown if Unidentified)
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe / Jane Doe"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>

              {/* Estimated Age */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-705 block mb-1.5">
                    Estimated Age *
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 45"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-805 outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-705 block mb-1.5">
                    Gender *
                  </label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-805 outline-none focus:border-blue-500">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unidentified">Unidentified</option>
                  </select>
                </div>
              </div>

              {/* Mode of Arrival */}
              <div>
                <label className="text-xs font-bold text-gray-705 block mb-1.5">
                  Mode of Arrival *
                </label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-805 outline-none focus:border-blue-500">
                  <option value="ambulance">Ambulance (108 Service)</option>
                  <option value="private-ambulance">Private Ambulance</option>
                  <option value="walk-in">Self / Walk-in</option>
                  <option value="police">Brought by Police</option>
                  <option value="other">Brought by Bystander</option>
                </select>
              </div>

              {/* Ambulance Details */}
              <div>
                <label className="text-xs font-bold text-gray-705 block mb-1.5">
                  Ambulance ID / Paramedic Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. AMB-128 / Paramedic Roy"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>

              {/* Chief Complaint */}
              <div className="md:col-span-2">
                <label className="text-xs font-bold text-gray-705 block mb-1.5">
                  Chief Complaint / Initial Presentation *
                </label>
                <textarea
                  rows="3"
                  placeholder="Provide short clinical summary (e.g. Chest pain radiating to left arm, cardiac arrest, vehicular trauma)"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Side Column: ER Destination & Critical Vitals (col-span-4) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Vitals Intake Card */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">
              Critical Vitals on Arrival
            </h3>
            <div className="space-y-3">
              {/* BP */}
              <div>
                <label className="text-[10px] font-bold text-gray-450 uppercase block mb-1">
                  Blood Pressure (mmHg)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 110/70"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm text-gray-800 font-mono outline-none focus:border-red-500"
                />
              </div>

              {/* Heart Rate */}
              <div>
                <label className="text-[10px] font-bold text-gray-450 uppercase block mb-1">
                  Pulse Rate (bpm)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 104"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm text-gray-800 font-mono outline-none focus:border-red-500"
                />
              </div>

              {/* SpO2 */}
              <div>
                <label className="text-[10px] font-bold text-gray-455 uppercase block mb-1">
                  Oxygen Saturation SpO2 (%)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 91"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm text-gray-850 font-mono outline-none focus:border-red-500"
                />
              </div>

              {/* GCS */}
              <div>
                <label className="text-[10px] font-bold text-gray-455 uppercase block mb-1">
                  Glasgow Coma Scale (3 - 15)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 12"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm text-gray-850 font-mono outline-none focus:border-red-500"
                />
              </div>
            </div>
          </div>

          {/* Location & Bed Assignment */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">
              Facility Allocation
            </h3>
            <div className="space-y-4">
              {/* Bed Allocation */}
              <div>
                <label className="text-xs font-bold text-gray-705 block mb-1.5">
                  Destination Trauma Bay *
                </label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-805 outline-none focus:border-blue-500">
                  <option value="bay-1">
                    Trauma Bay 1 (Ventilator Capable)
                  </option>
                  <option value="bay-2">Trauma Bay 2</option>
                  <option value="er-bed-3">ER Ward - Bed 3</option>
                  <option value="icu-bed-1">ICU - Bed 1</option>
                  <option value="or-1">Operating Room 1 (Cardiac)</option>
                </select>
              </div>

              {/* Accompanying Bystander */}
              <div>
                <label className="text-xs font-bold text-gray-705 block mb-1.5">
                  Bystander Name / Contact Info
                </label>
                <input
                  type="text"
                  placeholder="Name, Phone, Relation"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmergencyPatientForm;
