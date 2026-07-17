import React from "react";

const Settings = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-250 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            System Settings
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Configure clinic metadata, active notifications, and system
            accounts.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-250 bg-white hover:bg-gray-50 text-xs font-bold text-gray-700 rounded-xl transition-all">
            Cancel
          </button>
          <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-xs font-bold text-white rounded-xl shadow-sm shadow-blue-200 transition-all">
            Save Settings
          </button>
        </div>
      </div>

      {/* Settings split grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Settings Navigation Sidebar (col-span-3) */}
        <div className="lg:col-span-3 space-y-1.5">
          <button className="flex items-center gap-3 w-full px-4 py-3 bg-white border border-gray-200 shadow-sm rounded-xl text-left text-sm font-bold text-blue-650 hover:bg-gray-50/50 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <rect width="8" height="18" x="3" y="3" rx="2" />
              <rect width="8" height="10" x="13" y="3" rx="2" />
              <rect width="8" height="4" x="13" y="17" rx="2" />
            </svg>
            Hospital Information
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 bg-transparent rounded-xl text-left text-sm font-semibold text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            General Configuration
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 bg-transparent rounded-xl text-left text-sm font-semibold text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            Notification Rules
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 bg-transparent rounded-xl text-left text-sm font-semibold text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Security & Access keys
          </button>
        </div>

        {/* Main Settings Panel Form (col-span-9) */}
        <div className="lg:col-span-9 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-6">
          <h3 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3">
            Hospital Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1.5">
                Registered Corporate Name
              </label>
              <input
                type="text"
                value="City Care Hospital Private Limited"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1.5">
                Contact Helpline Email
              </label>
              <input
                type="email"
                value="support@citycarehospital.com"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-xs font-bold text-gray-700 block mb-1.5">
                Physical Facility Address
              </label>
              <input
                type="text"
                value="Building 3A, Ring Road Expressway, South Delhi, Delhi - 110024"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1.5">
                Primary Contact Phone
              </label>
              <input
                type="text"
                value="+91 11 4872 9900"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1.5">
                Tax registration ID (GSTIN)
              </label>
              <input
                type="text"
                value="07AAAAA1111A1Z1"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-850 font-mono outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Upload Logo Segment */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-gray-700 block">
              Hospital Branding Logo
            </label>
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 text-3xl font-bold shadow-sm border border-blue-150">
                +
              </div>
              <div className="space-y-1">
                <button className="px-3 py-1.5 border border-gray-200 hover:bg-gray-100 rounded-xl text-xs font-bold text-gray-700">
                  Change Logo
                </button>
                <p className="text-[10px] text-gray-400 font-semibold">
                  JPG, PNG format max 2MB. Square dimensions recommended.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
