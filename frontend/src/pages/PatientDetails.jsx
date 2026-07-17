import React from "react";

const PatientDetails = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <button className="p-2 border border-gray-200 bg-white hover:bg-gray-50 rounded-xl text-gray-550 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                Vikram Singh
              </h1>
              <span className="px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-bold">
                Active
              </span>
            </div>
            <p className="text-sm text-gray-500 font-semibold mt-0.5">
              Patient ID:{" "}
              <span className="text-gray-900 font-extrabold font-mono">
                PT-0001
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-200 bg-white hover:bg-gray-50 text-xs font-bold text-gray-700 rounded-xl transition-all">
            Edit Profile
          </button>
          <button className="px-4 py-2 border border-blue-500 hover:bg-blue-50 text-xs font-bold text-blue-600 rounded-xl transition-all">
            Order Lab Test
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-xs font-bold text-white rounded-xl shadow-sm transition-all">
            Book Appointment
          </button>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Personal Information (col-span-4) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Core Profile Card */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm text-center flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&fit=crop&auto=format&q=80"
              alt="Vikram Singh"
              className="w-24 h-24 rounded-2xl object-cover border border-gray-250 shadow-sm"
            />
            <h2 className="text-lg font-bold text-gray-900 mt-4">
              Vikram Singh
            </h2>
            <p className="text-xs text-gray-400 font-semibold mt-0.5">
              Registered on 11 May 2026
            </p>

            <div className="grid grid-cols-3 gap-4 w-full border-t border-b border-gray-150 py-4 my-5 text-center">
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase block">
                  Age / Sex
                </span>
                <span className="text-sm font-bold text-gray-800">
                  34 / Male
                </span>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase block">
                  Blood Group
                </span>
                <span className="text-sm font-bold text-red-600">O+</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase block">
                  Allergies
                </span>
                <span className="text-sm font-bold text-amber-600">
                  Penicillin
                </span>
              </div>
            </div>

            {/* Contact info list */}
            <div className="w-full text-left space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-400 mt-0.5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block leading-none">
                    Email Address
                  </span>
                  <span className="font-semibold text-gray-800">
                    vikram.singh@email.com
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-400 mt-0.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block leading-none">
                    Phone Number
                  </span>
                  <span className="font-semibold text-gray-800">
                    +91 98765 43210
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-400 mt-0.5"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block leading-none">
                    Residential Address
                  </span>
                  <span className="font-semibold text-gray-800">
                    42, Green Park Extension, New Delhi
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-400 mt-0.5"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block leading-none">
                    Emergency Contact
                  </span>
                  <span className="font-semibold text-gray-800">
                    Karan Singh (Brother) - 98765 43219
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Insurance Details Card */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
              Insurance Information
            </h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400 font-semibold">Provider:</span>
                <span className="font-bold text-gray-800">
                  Star Health Insurance
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 font-semibold">
                  Policy Number:
                </span>
                <span className="font-bold text-gray-800 font-mono">
                  STAR-98472-A
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 font-semibold">
                  Validity Date:
                </span>
                <span className="font-bold text-gray-800">
                  12 December 2028
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 font-semibold">
                  Coverage Status:
                </span>
                <span className="px-2 py-0.5 bg-green-55/10 text-green-700 border border-green-200/50 rounded-full text-[11px] font-bold">
                  Fully Covered
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Vitals, Prescription, History, Timeline (col-span-8) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Vitals Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm text-center">
              <span className="text-[10px] text-gray-400 font-bold uppercase">
                Blood Pressure
              </span>
              <h4 className="text-lg font-black text-gray-900 mt-1">120/80</h4>
              <span className="text-[10px] font-bold text-green-600">
                Normal
              </span>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm text-center">
              <span className="text-[10px] text-gray-400 font-bold uppercase">
                Heart Rate
              </span>
              <h4 className="text-lg font-black text-gray-900 mt-1">72 bpm</h4>
              <span className="text-[10px] font-bold text-green-600">
                Normal
              </span>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm text-center">
              <span className="text-[10px] text-gray-400 font-bold uppercase">
                Temperature
              </span>
              <h4 className="text-lg font-black text-gray-900 mt-1">98.6 °F</h4>
              <span className="text-[10px] font-bold text-green-600">
                Normal
              </span>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm text-center">
              <span className="text-[10px] text-gray-400 font-bold uppercase">
                Oxygen SpO2
              </span>
              <h4 className="text-lg font-black text-gray-900 mt-1">98%</h4>
              <span className="text-[10px] font-bold text-green-600">
                Normal
              </span>
            </div>
          </div>

          {/* Clinical Overview Panel */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-gray-150 pb-4">
              <h3 className="text-base font-extrabold text-gray-900">
                Medical Diagnoses & Prescriptions
              </h3>
              <span className="text-xs text-gray-400 font-bold">
                Last Updated: 11 May 2026
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Diagnoses Box */}
              <div className="space-y-3.5">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Active Conditions
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-150 rounded-xl">
                    <span className="text-sm font-bold text-gray-800">
                      Type 2 Diabetes Mellitus
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-700 border border-red-200 rounded-full text-[10px] font-bold">
                      Chronic
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-150 rounded-xl">
                    <span className="text-sm font-bold text-gray-800">
                      Essential Hypertension
                    </span>
                    <span className="px-2 py-0.5 bg-red-50 text-red-700 border border-red-200 rounded-full text-[10px] font-bold">
                      Chronic
                    </span>
                  </div>
                </div>
              </div>

              {/* Prescriptions Box */}
              <div className="space-y-3.5">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Active Medications
                </h4>
                <div className="space-y-2">
                  <div className="p-3 bg-gray-50 border border-gray-150 rounded-xl flex items-center justify-between">
                    <div>
                      <h5 className="text-sm font-bold text-gray-800">
                        Metformin 500mg
                      </h5>
                      <p className="text-[10px] text-gray-400 font-semibold mt-0.5">
                        Twice daily, post meals
                      </p>
                    </div>
                    <span className="text-xs text-blue-650 font-extrabold">
                      Qty: 60 Tabs
                    </span>
                  </div>
                  <div className="p-3 bg-gray-50 border border-gray-150 rounded-xl flex items-center justify-between">
                    <div>
                      <h5 className="text-sm font-bold text-gray-800">
                        Lisinopril 10mg
                      </h5>
                      <p className="text-[10px] text-gray-400 font-semibold mt-0.5">
                        Once daily, morning
                      </p>
                    </div>
                    <span className="text-xs text-blue-650 font-extrabold">
                      Qty: 30 Tabs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical History Timeline */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-6">
            <h3 className="text-base font-extrabold text-gray-900 border-b border-gray-150 pb-4">
              Encounter History & Timeline
            </h3>

            <div className="space-y-6 pl-2 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-150">
              {/* Timeline Event 1 */}
              <div className="flex items-start gap-4 relative">
                <div className="h-7 w-7 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" x2="12" y1="8" y2="12" />
                    <line x1="12" x2="12.01" y1="16" y2="16" />
                  </svg>
                </div>
                <div className="flex-1 bg-gray-50 border border-gray-150 p-4 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-gray-900">
                      General Medicine Consult
                    </h4>
                    <span className="text-xs text-gray-400 font-semibold">
                      11 May 2026
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">
                    Attended by{" "}
                    <span className="font-semibold text-gray-800">
                      Dr. Sharma
                    </span>
                    . Diagnostic: Periodic diabetes review.
                  </p>
                  <div className="text-xs font-medium text-gray-500 bg-white border border-gray-100 p-2 rounded-lg mt-2">
                    <span className="font-semibold text-gray-800 block">
                      Vitals Notes:
                    </span>
                    Patient reports occasional fatigue. Glucose values are
                    borderline. Adjusted Metformin titration from 250mg to
                    500mg.
                  </div>
                </div>
              </div>

              {/* Timeline Event 2 */}
              <div className="flex items-start gap-4 relative">
                <div className="h-7 w-7 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-600 relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 2.5-2 3.5 0 1.2 1 2 2 2h15c1 0 2-.8 2-2 0-1-.5-2.24-2-3.5" />
                  </svg>
                </div>
                <div className="flex-1 bg-gray-50 border border-gray-150 p-4 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-gray-900">
                      Lab Diagnostic Tests
                    </h4>
                    <span className="text-xs text-gray-400 font-semibold">
                      10 May 2026
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">
                    Sample Collection:{" "}
                    <span className="font-semibold text-gray-800">
                      HbA1c & Fasting Lipids
                    </span>
                    .
                  </p>
                  <span className="inline-block px-2.5 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-[10px] font-bold">
                    Completed - Report Uploaded
                  </span>
                </div>
              </div>

              {/* Timeline Event 3 */}
              <div className="flex items-start gap-4 relative">
                <div className="h-7 w-7 rounded-full bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600 relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <div className="flex-1 bg-gray-50 border border-gray-150 p-4 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-gray-900">
                      Cardiology Consult
                    </h4>
                    <span className="text-xs text-gray-400 font-semibold">
                      05 May 2026
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">
                    Attended by{" "}
                    <span className="font-semibold text-gray-800">
                      Dr. Amit Kumar
                    </span>
                    . Follow-up ECG analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
