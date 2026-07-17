import React from "react";

const PatientList = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Patients
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Manage and view all registered patients
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
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
            Import Patients
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
            Add New Patient
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Stat 1: Total Patients */}
        <div className="p-5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Total Patients
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">2,543</h3>
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
              12.5%{" "}
              <span className="text-gray-400 font-medium">from last month</span>
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
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
            </svg>
          </div>
        </div>

        {/* Stat 2: New Patients */}
        <div className="p-5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              New Patients (This Month)
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">356</h3>
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
              8.7%{" "}
              <span className="text-gray-400 font-medium">from last month</span>
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
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" x2="19" y1="5" y2="13" />
              <line x1="15" x2="23" y1="9" y2="9" />
            </svg>
          </div>
        </div>

        {/* Stat 3: Male Patients */}
        <div className="p-5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Male Patients
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">1,237</h3>
            <span className="text-[11px] font-semibold text-gray-500">
              48.7% <span className="text-gray-400 font-medium">of total</span>
            </span>
          </div>
          <div className="h-11 w-11 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="10" r="8" />
              <path d="M12 2v2" />
              <path d="M12 18v4" />
              <path d="M4 12H2" />
              <path d="M22 12h-2" />
            </svg>
          </div>
        </div>

        {/* Stat 4: Female Patients */}
        <div className="p-5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Female Patients
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">1,306</h3>
            <span className="text-[11px] font-semibold text-gray-500">
              51.3% <span className="text-gray-400 font-medium">of total</span>
            </span>
          </div>
          <div className="h-11 w-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="8" r="6" />
              <path d="M12 14v8" />
              <path d="M9 19h6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Filter and Actions Bar */}
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
              placeholder="Search patients..."
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-2 text-sm text-gray-850 placeholder-gray-400 outline-none focus:border-blue-500 focus:bg-white transition-all"
            />
          </div>

          {/* Dropdowns */}
          <button className="flex items-center justify-between min-w-[140px] px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-100">
            <span>All Departments</span>
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

          <button className="flex items-center justify-between min-w-[110px] px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-100">
            <span>All Genders</span>
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

          <button className="flex items-center justify-between min-w-[110px] px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-100">
            <span>All Status</span>
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
            <span>Joined: Newest</span>
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

        <div>
          <button className="flex items-center gap-2 px-4 py-2 border border-blue-500 hover:bg-blue-50 text-xs font-bold text-blue-600 rounded-xl transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
            </svg>
            Export
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50 text-[11px] font-bold text-gray-450 uppercase tracking-wider">
                <th className="px-6 py-4">Patient ID</th>
                <th className="px-6 py-4">Patient Name</th>
                <th className="px-6 py-4">Age / Gender</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Registered On</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-150 text-sm text-gray-700">
              {/* Row 1 */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-900">PT-0001</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&fit=crop&auto=format&q=80"
                      alt="Vikram Singh"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-semibold text-gray-800">
                      Vikram Singh
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  34 / Male
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  9876543210
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-bold">
                    General.Medicine
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  11 May 2026
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-bold">
                    Active
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
                <td className="px-6 py-4 font-bold text-gray-900">PT-0002</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&fit=crop&auto=format&q=80"
                      alt="Anjali Desai"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-semibold text-gray-800">
                      Anjali Desai
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  28 / Female
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  9123456780
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-xs font-bold">
                    Dermatology
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  11 May 2026
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-bold">
                    Active
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
                <td className="px-6 py-4 font-bold text-gray-900">PT-0003</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&fit=crop&auto=format&q=80"
                      alt="Rohit Mehta"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-semibold text-gray-800">
                      Rohit Mehta
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  45 / Male
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  9988776655
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-red-50 text-red-700 border border-red-200 rounded-full text-xs font-bold">
                    Cardiology
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  10 May 2026
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-bold">
                    Active
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
                <td className="px-6 py-4 font-bold text-gray-900">PT-0004</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=80&fit=crop&auto=format&q=80"
                      alt="Meera Patel"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-semibold text-gray-800">
                      Meera Patel
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  32 / Female
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  9478523690
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-bold">
                    Gynecology
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  10 May 2026
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-bold">
                    Active
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
                <td className="px-6 py-4 font-bold text-gray-900">PT-0005</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&fit=crop&auto=format&q=80"
                      alt="Suresh Kumar"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-semibold text-gray-800">
                      Suresh Kumar
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  60 / Male
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  9811122233
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold">
                    Orthopedics
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  09 May 2026
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-bold">
                    Active
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

              {/* Row 6 */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-900">PT-0006</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&auto=format&q=80"
                      alt="Pooja Sharma"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-semibold text-gray-800">
                      Pooja Sharma
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  26 / Female
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  9723344556
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full text-xs font-bold">
                    Pediatrics
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-gray-500">
                  09 May 2026
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-0.5 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-full text-xs font-bold">
                    Inactive
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

        {/* Pagination Footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-500">
            Showing 1 to 6 of 2,543 patients
          </span>
          <div className="flex items-center gap-1">
            {/* Back button */}
            <button className="p-2 border border-gray-200 bg-white hover:bg-gray-50 rounded-lg text-gray-500 hover:text-gray-700 transition-all">
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

            {/* Numbers */}
            <button className="h-8 w-8 rounded-lg text-xs font-bold bg-blue-600 text-white shadow-sm shadow-blue-200">
              1
            </button>
            <button className="h-8 w-8 rounded-lg text-xs font-semibold border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-all">
              2
            </button>
            <button className="h-8 w-8 rounded-lg text-xs font-semibold border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-all">
              3
            </button>
            <button className="h-8 w-8 rounded-lg text-xs font-semibold border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-all">
              4
            </button>
            <span className="text-xs text-gray-400 font-bold px-1.5">...</span>
            <button className="h-8 w-8 rounded-lg text-xs font-semibold border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-all">
              364
            </button>

            {/* Next button */}
            <button className="p-2 border border-gray-200 bg-white hover:bg-gray-50 rounded-lg text-gray-500 hover:text-gray-700 transition-all">
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

export default PatientList;
