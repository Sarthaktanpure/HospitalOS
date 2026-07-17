import React from "react";

const MedicineList = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Pharmacy & Medicine Inventory
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Monitor dispensary reserves, low-stock flags, and expiration dates.
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
            Restock Inventory
          </button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Total Items Cataloged
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">482</h3>
            <span className="text-[11px] text-gray-405">
              Across 12 major pharmaceutical classes
            </span>
          </div>
          <div className="h-11 w-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
            </svg>
          </div>
        </div>

        <div className="p-5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Low Stock alerts
            </span>
            <h3 className="text-2xl font-extrabold text-orange-600">18</h3>
            <span className="text-[11px] text-orange-500 font-bold">
              Needs ordering soon
            </span>
          </div>
          <div className="h-11 w-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
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

        <div className="p-5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Critical: Out of Stock
            </span>
            <h3 className="text-2xl font-extrabold text-red-650">4</h3>
            <span className="text-[11px] text-red-500 font-bold">
              Requires emergency dispatch
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex items-center min-w-[240px] flex-1 md:flex-initial">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="absolute left-3 text-gray-400"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="Search medicine catalog..."
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
            />
          </div>

          <button className="flex items-center justify-between min-w-[130px] px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-105">
            <span>Categories</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Medicine list table */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="px-6 py-4">Item Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Dispensary Stock Level</th>
                <th className="px-6 py-4">Unit Value</th>
                <th className="px-6 py-4">Expiry Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-150 text-sm text-gray-700">
              {/* Metformin */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-900">
                  Metformin 500mg
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  Antidiabetics
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-24 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: "82%" }}
                      ></div>
                    </div>
                    <span className="text-xs font-bold text-gray-750">
                      8,200 Units
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 font-bold text-gray-900">₹5.00</td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  12 May 2028
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-bold">
                    In Stock
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-700 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="12" cy="5" r="1" />
                      <circle cx="12" cy="19" r="1" />
                    </svg>
                  </button>
                </td>
              </tr>

              {/* Amoxicillin */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-900">
                  Amoxicillin 250mg
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  Antibiotics
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-24 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange-500 rounded-full"
                        style={{ width: "8%" }}
                      ></div>
                    </div>
                    <span className="text-xs font-bold text-gray-750">
                      80 Units
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 font-bold text-gray-900">₹12.00</td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  11 Sep 2026
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-0.5 bg-orange-50 text-orange-700 border border-orange-200 rounded-full text-xs font-bold">
                    Low Stock
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-700 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="12" cy="5" r="1" />
                      <circle cx="12" cy="19" r="1" />
                    </svg>
                  </button>
                </td>
              </tr>

              {/* Paracetamol */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-900">
                  Paracetamol 650mg
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  Analgesics
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-24 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-500 rounded-full"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <span className="text-xs font-bold text-gray-750">
                      0 Units
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 font-bold text-gray-900">₹2.50</td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  10 Dec 2027
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-0.5 bg-red-50 text-red-750 border border-red-200 rounded-full text-xs font-bold">
                    Out of Stock
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-700 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="12" cy="5" r="1" />
                      <circle cx="12" cy="19" r="1" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MedicineList;
