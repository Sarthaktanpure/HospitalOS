import React from "react";

const AppointmentList = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Appointments
          </h1>
          <p className="text-sm text-gray-500 font-medium font-sans">
            Manage, schedule, and view daily outpatient clinics.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 bg-white hover:bg-gray-50 text-sm font-semibold text-gray-700 rounded-xl transition-all">
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
            Calendar View
          </button>
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
            Book Appointment
          </button>
        </div>
      </div>

      {/* Stat Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Stat 1 */}
        <div className="p-5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Today's Total
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">156</h3>
            <span className="text-[11px] font-semibold text-green-600 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="inline"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
              8.3%{" "}
              <span className="text-gray-400 font-medium">from yesterday</span>
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
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M16 2v4" />
              <path d="M8 2v4" />
            </svg>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="p-5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Confirmed
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">112</h3>
            <span className="text-[11px] text-gray-500 font-semibold">
              71.8% <span className="text-gray-400 font-medium">of total</span>
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

        {/* Stat 3 */}
        <div className="p-5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Pending Queue
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">32</h3>
            <span className="text-[11px] text-gray-500 font-semibold">
              20.5%{" "}
              <span className="text-gray-400 font-medium">awaiting review</span>
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
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="p-5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Cancelled / No Show
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">12</h3>
            <span className="text-[11px] text-red-600 font-semibold">
              7.7%{" "}
              <span className="text-gray-400 font-medium">rate this week</span>
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
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="15" x2="9" y1="9" y2="15" />
              <line x1="9" x2="15" y1="9" y2="15" />
            </svg>
          </div>
        </div>
      </div>

      {/* Filter Row */}
      <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* Search */}
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
              placeholder="Search appointments..."
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
            />
          </div>

          {/* Filters */}
          <button className="flex items-center justify-between min-w-[140px] px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-100">
            <span>Filter by Doctor</span>
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

          <button className="flex items-center justify-between min-w-[120px] px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-100">
            <span>All Statuses</span>
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

          <button className="flex items-center justify-between min-w-[140px] px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="inline text-gray-400 mr-1.5"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M16 2v4" />
              <path d="M8 2v4" />
            </svg>
            <span>Date: Today</span>
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

      {/* Appointments Table */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="px-6 py-4">Appointment ID</th>
                <th className="px-6 py-4">Patient Name</th>
                <th className="px-6 py-4">Doctor</th>
                <th className="px-6 py-4">Date & Time</th>
                <th className="px-6 py-4">Consultation Type</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-150 text-sm text-gray-700">
              {/* Row 1 */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-900 font-mono">
                  AP-0924
                </td>
                <td className="px-6 py-4 font-semibold text-gray-800">
                  Rahul Verma
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=80&fit=crop&auto=format&q=80"
                      alt="Dr. Sharma"
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <span className="font-semibold text-gray-800">
                      Dr. Arvind Sharma
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-bold text-gray-805 block">
                    12 May 2026
                  </span>
                  <span className="text-xs text-gray-400 font-semibold mt-0.5">
                    09:30 AM
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-bold">
                    OPD
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-bold">
                    Confirmed
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

              {/* Row 2 */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-900 font-mono">
                  AP-0925
                </td>
                <td className="px-6 py-4 font-semibold text-gray-800">
                  Priya Shah
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1594824813573-246434de83fb?w=80&fit=crop&auto=format&q=80"
                      alt="Dr. Priya Shah"
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <span className="font-semibold text-gray-800">
                      Dr. Priya Shah
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-bold text-gray-805 block">
                    12 May 2026
                  </span>
                  <span className="text-xs text-gray-400 font-semibold mt-0.5">
                    10:00 AM
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-bold">
                    OPD
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-bold">
                    Confirmed
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

              {/* Row 3 */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-900 font-mono">
                  AP-0926
                </td>
                <td className="px-6 py-4 font-semibold text-gray-800">
                  Amit Kumar
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=80&fit=crop&auto=format&q=80"
                      alt="Dr. Amit Kumar"
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <span className="font-semibold text-gray-800">
                      Dr. Amit Kumar
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-bold text-gray-805 block">
                    12 May 2026
                  </span>
                  <span className="text-xs text-gray-400 font-semibold mt-0.5">
                    11:00 AM
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-xs font-bold">
                    Follow-Up
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-0.5 bg-orange-50 text-orange-700 border border-orange-200 rounded-full text-xs font-bold">
                    Pending
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

              {/* Row 4 */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-900 font-mono">
                  AP-0927
                </td>
                <td className="px-6 py-4 font-semibold text-gray-800">
                  Neha Joshi
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&fit=crop&auto=format&q=80"
                      alt="Dr. Neha Joshi"
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <span className="font-semibold text-gray-800">
                      Dr. Neha Joshi
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-bold text-gray-805 block">
                    12 May 2026
                  </span>
                  <span className="text-xs text-gray-400 font-semibold mt-0.5">
                    11:30 AM
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-bold">
                    OPD
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-bold">
                    Confirmed
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

              {/* Row 5 */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-900 font-mono">
                  AP-0928
                </td>
                <td className="px-6 py-4 font-semibold text-gray-800">
                  Sanjay Singh
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=80&fit=crop&auto=format&q=80"
                      alt="Dr. Sharma"
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <span className="font-semibold text-gray-800">
                      Dr. Arvind Sharma
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-bold text-gray-805 block">
                    12 May 2026
                  </span>
                  <span className="text-xs text-gray-400 font-semibold mt-0.5">
                    12:00 PM
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-250 rounded-full text-xs font-bold">
                    Tele-Visit
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-0.5 bg-orange-50 text-orange-700 border border-orange-200 rounded-full text-xs font-bold">
                    Pending
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

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-500">
            Showing 1 to 5 of 156 appointments
          </span>
          <div className="flex items-center gap-1">
            <button className="p-2 border border-gray-200 bg-white hover:bg-gray-50 rounded-lg text-gray-500 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button className="h-8 w-8 rounded-lg text-xs font-bold bg-blue-600 text-white shadow-sm shadow-blue-200">
              1
            </button>
            <button className="h-8 w-8 rounded-lg text-xs font-semibold border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-all">
              2
            </button>
            <button className="h-8 w-8 rounded-lg text-xs font-semibold border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-all">
              3
            </button>
            <button className="p-2 border border-gray-200 bg-white hover:bg-gray-50 rounded-lg text-gray-500 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentList;
