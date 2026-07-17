import React from "react";

const Invoices = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Invoices Ledger
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Manage outpatient billing logs, payments, and invoice statements.
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
            Generate Invoice
          </button>
        </div>
      </div>

      {/* Stat Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Outstanding Balance
            </span>
            <h3 className="text-2xl font-extrabold text-red-600">₹45,200</h3>
            <span className="text-[11px] text-gray-400 font-semibold">
              Pending collections from unpaid bills
            </span>
          </div>
          <div className="h-11 w-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-650">
            <span className="text-xl font-bold font-sans">₹</span>
          </div>
        </div>

        <div className="p-5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Paid Invoices (This Month)
            </span>
            <h3 className="text-2xl font-extrabold text-green-600">
              ₹8,30,100
            </h3>
            <span className="text-[11px] text-green-605 font-bold">
              ↑ 14.8% from average
            </span>
          </div>
          <div className="h-11 w-11 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-green-655">
            <span className="text-xl font-bold font-sans">₹</span>
          </div>
        </div>

        <div className="p-5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Unpaid Claims
            </span>
            <h3 className="text-2xl font-extrabold text-orange-600">14</h3>
            <span className="text-[11px] text-orange-500 font-bold">
              Insurance claims pending review
            </span>
          </div>
          <div className="h-11 w-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-655">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
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
              placeholder="Search invoice number, patient name..."
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
            />
          </div>

          <button className="flex items-center justify-between min-w-[120px] px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-105">
            <span>Payment Status</span>
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

      {/* Invoices table */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="px-6 py-4">Invoice ID</th>
                <th className="px-6 py-4">Patient Name</th>
                <th className="px-6 py-4">Date Issued</th>
                <th className="px-6 py-4">Total Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-150 text-sm text-gray-705">
              {/* Row 1 */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-900 font-mono">
                  INV-8473
                </td>
                <td className="px-6 py-4 font-semibold text-gray-800">
                  Rahul Verma
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  11 May 2026
                </td>
                <td className="px-6 py-4 font-bold text-gray-900">₹590.00</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-bold">
                    Paid
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="px-3.5 py-1.5 border border-gray-200 hover:bg-gray-100 rounded-xl text-xs font-bold text-gray-700">
                    Print
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-900 font-mono">
                  INV-8474
                </td>
                <td className="px-6 py-4 font-semibold text-gray-800">
                  Priya Shah
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  11 May 2026
                </td>
                <td className="px-6 py-4 font-bold text-gray-900">₹1,200.00</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-bold">
                    Paid
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="px-3.5 py-1.5 border border-gray-200 hover:bg-gray-100 rounded-xl text-xs font-bold text-gray-700">
                    Print
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-900 font-mono">
                  INV-8475
                </td>
                <td className="px-6 py-4 font-semibold text-gray-800">
                  Amit Kumar
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  10 May 2026
                </td>
                <td className="px-6 py-4 font-bold text-gray-900">₹4,500.00</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-0.5 bg-orange-50 text-orange-700 border border-orange-200 rounded-full text-xs font-bold">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-sm">
                    Pay Bill
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

export default Invoices;
