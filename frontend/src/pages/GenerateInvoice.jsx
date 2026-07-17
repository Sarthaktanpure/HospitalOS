import React from "react";

const GenerateInvoice = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-250 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Generate Invoice
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Create a new itemized invoice statement for patient checkout.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-250 bg-white hover:bg-gray-50 text-xs font-bold text-gray-700 rounded-xl transition-all">
            Cancel
          </button>
          <button className="px-4 py-2 border border-blue-500 hover:bg-blue-55/10 text-xs font-bold text-blue-650 rounded-xl transition-all">
            Save Draft
          </button>
          <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-xs font-bold text-white rounded-xl shadow-sm shadow-blue-200 transition-all">
            Finalize & Print
          </button>
        </div>
      </div>

      {/* Invoice Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Items List Form (col-span-8) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Patient Selection Banner */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
              1. Patient Attachment
            </h3>
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1.5">
                Select Patient for Checkout *
              </label>
              <div className="relative flex items-center">
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
                  placeholder="Type patient name or ID to load files..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-2.5 text-sm text-gray-805 outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>

          {/* Invoice Items Card */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                2. Line Items
              </h3>
              <button className="text-xs font-bold text-blue-600 hover:underline hover:text-blue-800">
                + Add Custom Charge
              </button>
            </div>

            {/* Items Table list */}
            <div className="space-y-3">
              {/* Item 1 */}
              <div className="p-4 bg-gray-50 border border-gray-150 rounded-xl flex items-center justify-between gap-4">
                <div className="flex-1">
                  <span className="text-[10px] text-gray-400 font-bold uppercase block leading-none">
                    Consultation
                  </span>
                  <span className="text-sm font-bold text-gray-800 mt-1 block">
                    General Medicine Consultation (Dr. Sharma)
                  </span>
                </div>
                <div className="w-32">
                  <span className="text-[10px] text-gray-400 font-bold uppercase block leading-none">
                    Dept
                  </span>
                  <span className="text-xs font-semibold text-gray-700 mt-1 block">
                    General Medicine
                  </span>
                </div>
                <div className="w-24 text-right">
                  <span className="text-[10px] text-gray-400 font-bold uppercase block leading-none">
                    Cost
                  </span>
                  <span className="text-sm font-bold text-gray-900 mt-1 block">
                    ₹500.00
                  </span>
                </div>
                <button className="text-red-500 hover:text-red-700 p-1 hover:bg-gray-200 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2500/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <line x1="18" x2="6" y1="6" y2="18" />
                    <line x1="6" x2="18" y1="6" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Item 2 */}
              <div className="p-4 bg-gray-50 border border-gray-150 rounded-xl flex items-center justify-between gap-4">
                <div className="flex-1">
                  <span className="text-[10px] text-gray-400 font-bold uppercase block leading-none">
                    Lab Test
                  </span>
                  <span className="text-sm font-bold text-gray-800 mt-1 block">
                    Complete Blood Count (CBC)
                  </span>
                </div>
                <div className="w-32">
                  <span className="text-[10px] text-gray-400 font-bold uppercase block leading-none">
                    Dept
                  </span>
                  <span className="text-xs font-semibold text-gray-700 mt-1 block">
                    Laboratory
                  </span>
                </div>
                <div className="w-24 text-right">
                  <span className="text-[10px] text-gray-400 font-bold uppercase block leading-none">
                    Cost
                  </span>
                  <span className="text-sm font-bold text-gray-900 mt-1 block">
                    ₹350.00
                  </span>
                </div>
                <button className="text-red-500 hover:text-red-700 p-1 hover:bg-gray-200 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <line x1="18" x2="6" y1="6" y2="18" />
                    <line x1="6" x2="18" y1="6" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Dotted border trigger to simulate Notion slot */}
              <button className="w-full p-4 border border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50/10 rounded-xl text-center text-xs font-bold text-gray-400 hover:text-blue-600 transition-all flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="12" x2="12" y1="5" y2="19" />
                  <line x1="5" x2="19" y1="12" y2="12" />
                </svg>
                Quick Add Item from Clinic Templates
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Pricing calculations (col-span-4) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
              Receipt Breakdown
            </h3>

            <div className="space-y-3.5 text-xs font-semibold text-gray-500">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="text-gray-950 font-bold">₹850.00</span>
              </div>
              <div className="flex justify-between">
                <span>GST (18%):</span>
                <span className="text-gray-955 font-bold">₹153.00</span>
              </div>
              <div className="flex justify-between p-2 bg-blue-50 border border-blue-100 rounded-lg text-blue-700">
                <span>Insurance Claims (Star Health 80%):</span>
                <span className="font-extrabold">-₹802.40</span>
              </div>
              <div className="border-t border-gray-150 pt-3 flex justify-between text-sm">
                <span className="text-gray-900 font-bold">
                  Total Patient Due:
                </span>
                <span className="text-blue-600 font-black">₹200.60</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateInvoice;
