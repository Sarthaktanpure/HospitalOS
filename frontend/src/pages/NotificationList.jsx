import React from "react";

const NotificationList = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Notifications Log
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            View medical indicators, patient check-ins, and inventory updates.
          </p>
        </div>
        <button className="px-4 py-2 border border-gray-250 bg-white hover:bg-gray-100 text-xs font-bold text-gray-700 rounded-xl transition-all">
          Mark All as Read
        </button>
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-2 border-b border-gray-200 pb-px">
        <button className="px-4 py-2.5 text-xs font-bold border-b-2 border-blue-600 text-blue-600">
          All Alerts
        </button>
        <button className="px-4 py-2.5 text-xs font-semibold text-gray-500 hover:text-gray-900">
          Unread
        </button>
        <button className="px-4 py-2.5 text-xs font-semibold text-gray-500 hover:text-gray-900">
          System Logs
        </button>
      </div>

      {/* Notifications list */}
      <div className="space-y-4">
        {/* Critical alert */}
        <div className="p-4 bg-white border-l-4 border-l-red-500 border border-gray-200 rounded-r-2xl shadow-sm flex items-start justify-between gap-4">
          <div className="flex gap-3">
            <div className="h-9 w-9 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">
                Critical Lab Alert (Pathology)
              </h4>
              <p className="text-xs text-gray-600 mt-1">
                Patient{" "}
                <span className="font-semibold text-gray-800">
                  Vikram Singh's (PT-0001)
                </span>{" "}
                HbA1c lab result has crossed target threshold (9.2%). Review
                suggested.
              </p>
              <span className="text-[10px] text-gray-400 font-bold block mt-1">
                5 mins ago
              </span>
            </div>
          </div>
          <button className="text-xs font-bold text-blue-600 hover:underline">
            View Report
          </button>
        </div>

        {/* Patient check-in alert */}
        <div className="p-4 bg-white border-l-4 border-l-blue-500 border border-gray-200 rounded-r-2xl shadow-sm flex items-start justify-between gap-4">
          <div className="flex gap-3">
            <div className="h-9 w-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M16 2v4" />
                <path d="M8 2v4" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">
                Patient Check-in Notification
              </h4>
              <p className="text-xs text-gray-600 mt-1">
                Patient{" "}
                <span className="font-semibold text-gray-800">Amit Kumar</span>{" "}
                checked in at reception desk for OPD consult with Dr. Amit
                Kumar.
              </p>
              <span className="text-[10px] text-gray-400 font-bold block mt-1">
                20 mins ago
              </span>
            </div>
          </div>
          <span className="text-xs text-gray-400 font-semibold">Mark read</span>
        </div>

        {/* Inventory restock alert */}
        <div className="p-4 bg-white border-l-4 border-l-orange-500 border border-gray-200 rounded-r-2xl shadow-sm flex items-start justify-between gap-4">
          <div className="flex gap-3">
            <div className="h-9 w-9 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">
                Low Stock Inventory Alert
              </h4>
              <p className="text-xs text-gray-600 mt-1">
                Item{" "}
                <span className="font-semibold text-gray-800">
                  Amoxicillin 250mg
                </span>{" "}
                has fallen below reorder threshold (80 units remaining).
              </p>
              <span className="text-[10px] text-gray-400 font-bold block mt-1">
                1 hour ago
              </span>
            </div>
          </div>
          <button className="text-xs font-bold text-blue-600 hover:underline">
            Reorder
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationList;
