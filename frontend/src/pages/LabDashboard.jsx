import React from "react";

const LabDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Laboratory Dashboard
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Track pathology diagnostics, radiology queues, and report releases.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-sm font-semibold text-white rounded-xl shadow-sm shadow-blue-200 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="12" x2="12" y1="5" y2="19" />
              <line x1="5" x2="19" y1="12" y2="12" />
            </svg>
            Record New Test
          </button>
        </div>
      </div>

      {/* Stat Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Pending Samples
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">42</h3>
            <span className="text-[11px] text-gray-400 font-semibold">
              12 samples processing in lab
            </span>
          </div>
          <div className="h-11 w-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-650">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 2.5-2 3.5 0 1.2 1 2 2 2h15c1 0 2-.8 2-2 0-1-.5-2.24-2-3.5" />
            </svg>
          </div>
        </div>

        <div className="p-5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Completed Reports (Today)
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">128</h3>
            <span className="text-[11px] text-green-600 font-semibold">
              ↑ 15% from average output
            </span>
          </div>
          <div className="h-11 w-11 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
        </div>

        <div className="p-5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Critical Alerts
            </span>
            <h3 className="text-2xl font-extrabold text-red-600">3</h3>
            <span className="text-[11px] text-red-500 font-bold">
              Panic values detected!
            </span>
          </div>
          <div className="h-11 w-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Lab Layout Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Pending Queue (col-span-8) */}
        <div className="lg:col-span-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Lab Diagnostic Worklist
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                Pending test samples awaiting collection or lab machine
                processing.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  <th className="px-4 py-3">Patient</th>
                  <th className="px-4 py-3">Test Request</th>
                  <th className="px-4 py-3">Request Physician</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs font-semibold text-gray-700">
                {/* Row 1 */}
                <tr>
                  <td className="px-4 py-3.5 font-bold text-gray-900">
                    Vikram Singh
                  </td>
                  <td className="px-4 py-3.5">Complete Blood Count (CBC)</td>
                  <td className="px-4 py-3.5 font-medium text-gray-500">
                    Dr. Arvind Sharma
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-750 border border-blue-200 rounded-full text-[10px] font-bold">
                      Sample Collected
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700">
                      Process
                    </button>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr>
                  <td className="px-4 py-3.5 font-bold text-gray-900">
                    Anjali Desai
                  </td>
                  <td className="px-4 py-3.5">Lipid Profile</td>
                  <td className="px-4 py-3.5 font-medium text-gray-500">
                    Dr. Priya Shah
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="px-2 py-0.5 bg-orange-50 text-orange-750 border border-orange-200 rounded-full text-[10px] font-bold">
                      Awaiting Sample
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <button className="px-3 py-1 bg-blue-600 hover:bg-blue-750 text-white rounded-lg">
                      Collect
                    </button>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr>
                  <td className="px-4 py-3.5 font-bold text-gray-900">
                    Rahul Verma
                  </td>
                  <td className="px-4 py-3.5">ECG / Cardiac Rhythm Check</td>
                  <td className="px-4 py-3.5 font-medium text-gray-500">
                    Dr. Amit Kumar
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="px-2 py-0.5 bg-pink-50 text-pink-700 border border-pink-200 rounded-full text-[10px] font-bold">
                      Processing
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700">
                      Update
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Completed Results (col-span-4) */}
        <div className="lg:col-span-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col justify-between">
          <h3 className="text-base font-bold text-gray-900 mb-4">
            Released Results
          </h3>
          <div className="space-y-4">
            <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-gray-900">
                  Suresh Kumar
                </h4>
                <p className="text-[10px] text-gray-400 font-semibold mt-0.5">
                  Thyroid Panel (T3/T4/TSH)
                </p>
              </div>
              <button className="px-3 py-1.5 bg-white border border-gray-200 hover:bg-gray-100 rounded-lg text-[10px] font-bold text-blue-600">
                View PDF
              </button>
            </div>
            <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-gray-900">Meera Patel</h4>
                <p className="text-[10px] text-gray-400 font-semibold mt-0.5">
                  Ultrasonography (USG Obstetric)
                </p>
              </div>
              <button className="px-3 py-1.5 bg-white border border-gray-200 hover:bg-gray-100 rounded-lg text-[10px] font-bold text-blue-600">
                View PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabDashboard;
