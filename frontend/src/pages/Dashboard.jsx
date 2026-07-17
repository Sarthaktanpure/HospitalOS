import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Dashboard
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Welcome back, Sarthak! Here's what's happening at City Care today.
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
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            Export Report
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
            New Appointment
          </button>
        </div>
      </div>

      {/* KPIs Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Patients */}
        <div className="p-6 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Total Patients
            </span>
            <h3 className="text-3xl font-extrabold text-gray-900">2,543</h3>
            <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
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
          <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
        </div>

        {/* Appointments Today */}
        <div className="p-6 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Appointments Today
            </span>
            <h3 className="text-3xl font-extrabold text-gray-900">156</h3>
            <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
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
          <div className="h-12 w-12 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M16 2v4" />
              <path d="M8 2v4" />
              <path d="M3 10h18" />
            </svg>
          </div>
        </div>

        {/* Doctors */}
        <div className="p-6 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Active Doctors
            </span>
            <h3 className="text-3xl font-extrabold text-gray-900">48</h3>
            <span className="text-xs font-semibold text-blue-600 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="inline"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
              4 new{" "}
              <span className="text-gray-400 font-medium">
                added this month
              </span>
            </span>
          </div>
          <div className="h-12 w-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
        </div>

        {/* Revenue */}
        <div className="p-6 bg-white border border-gray-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Revenue (This Month)
            </span>
            <h3 className="text-3xl font-extrabold text-gray-900">₹8,75,300</h3>
            <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="inline"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
              15.2%{" "}
              <span className="text-gray-400 font-medium">from last month</span>
            </span>
          </div>
          <div className="h-12 w-12 rounded-xl bg-yellow-50 border border-yellow-100 flex items-center justify-center text-yellow-600">
            <span className="text-xl font-bold font-sans">₹</span>
          </div>
        </div>
      </div>

      {/* Section: Main Chart & Today's Appointments */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Appointments Trends Chart (col-span-8) */}
        <div className="lg:col-span-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Appointments Overview
              </h3>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Comparing general versus completed appointments.
              </p>
            </div>
            <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 bg-white hover:bg-gray-50">
              This Week
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>

          {/* Vector Line Graph Area */}
          <div className="relative h-64 w-full flex items-end">
            {/* Y Axis Labels */}
            <div className="absolute left-0 top-0 bottom-6 w-8 flex flex-col justify-between text-[10px] text-gray-400 font-bold font-mono">
              <span>250</span>
              <span>200</span>
              <span>150</span>
              <span>100</span>
              <span>50</span>
              <span>0</span>
            </div>

            {/* SVG Graph Drawing */}
            <div className="w-full h-full pl-8 pb-6 relative">
              {/* Grid lines */}
              <div className="absolute inset-x-8 top-0 bottom-6 flex flex-col justify-between pointer-events-none">
                <div className="border-b border-dashed border-gray-150 w-full h-px"></div>
                <div className="border-b border-dashed border-gray-150 w-full h-px"></div>
                <div className="border-b border-dashed border-gray-150 w-full h-px"></div>
                <div className="border-b border-dashed border-gray-150 w-full h-px"></div>
                <div className="border-b border-dashed border-gray-150 w-full h-px"></div>
                <div className="border-b border-gray-200 w-full h-px"></div>
              </div>

              {/* Vector Lines */}
              <svg
                className="w-full h-full absolute inset-0 pl-8 pb-6"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* Grid vertical guidelines (dots for days) */}
                {/* General Appointments Line (Blue) */}
                <path
                  d="M 5,60 Q 20,45 35,50 T 65,30 T 95,45"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Completed Appointments Line (Green) */}
                <path
                  d="M 5,80 Q 20,70 35,60 T 65,52 T 95,68"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

              {/* Data Dots placement */}
              <div className="absolute inset-x-8 top-0 bottom-6 flex justify-between pointer-events-none">
                {/* Simple Day Column lines */}
                <div className="h-full w-px border-r border-dotted border-gray-200"></div>
                <div className="h-full w-px border-r border-dotted border-gray-200"></div>
                <div className="h-full w-px border-r border-dotted border-gray-200"></div>
                <div className="h-full w-px border-r border-dotted border-gray-200"></div>
                <div className="h-full w-px border-r border-dotted border-gray-200"></div>
                <div className="h-full w-px border-r border-dotted border-gray-200"></div>
                <div className="h-full w-px border-r border-dotted border-gray-200"></div>
              </div>
            </div>

            {/* X Axis Labels */}
            <div className="absolute left-8 right-0 bottom-0 flex justify-between text-[11px] text-gray-500 font-semibold px-2">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-4 pl-8">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-blue-500"></span>
              <span className="text-xs font-semibold text-gray-700">
                Appointments
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
              <span className="text-xs font-semibold text-gray-700">
                Completed
              </span>
            </div>
          </div>
        </div>

        {/* Today's Appointments (col-span-4) */}
        <div className="lg:col-span-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">
              Today's Appointments
            </h3>
            <button className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline">
              View All
            </button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto pr-1">
            {/* Row 1 */}
            <div className="p-3.5 bg-gray-50 rounded-xl flex items-center justify-between border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&auto=format&q=80"
                  alt="Rahul Verma"
                  className="w-10 h-10 rounded-xl object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Rahul Verma
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5 font-medium">
                    OPD - Cardiology
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-400 font-bold block">
                  09:30 AM
                </span>
                <span className="inline-block mt-1 px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-[10px] font-bold">
                  Confirmed
                </span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="p-3.5 bg-gray-50 rounded-xl flex items-center justify-between border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&auto=format&q=80"
                  alt="Priya Shah"
                  className="w-10 h-10 rounded-xl object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Priya Shah
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5 font-medium">
                    OPD - Dermatology
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-400 font-bold block">
                  10:00 AM
                </span>
                <span className="inline-block mt-1 px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-[10px] font-bold">
                  Confirmed
                </span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="p-3.5 bg-gray-50 rounded-xl flex items-center justify-between border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&fit=crop&auto=format&q=80"
                  alt="Amit Kumar"
                  className="w-10 h-10 rounded-xl object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Amit Kumar
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5 font-medium">
                    OPD - Orthopedics
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-400 font-bold block">
                  11:00 AM
                </span>
                <span className="inline-block mt-1 px-2.5 py-0.5 bg-orange-50 text-orange-700 border border-orange-200 rounded-full text-[10px] font-bold">
                  Pending
                </span>
              </div>
            </div>

            {/* Row 4 */}
            <div className="p-3.5 bg-gray-50 rounded-xl flex items-center justify-between border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&fit=crop&auto=format&q=80"
                  alt="Neha Joshi"
                  className="w-10 h-10 rounded-xl object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Neha Joshi
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5 font-medium">
                    OPD - Pediatrics
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-400 font-bold block">
                  11:30 AM
                </span>
                <span className="inline-block mt-1 px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-[10px] font-bold">
                  Confirmed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Department Donut, Recent Patients & Activity Log */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Department Wise Patients */}
        <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col justify-between">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Department Wise Patients
          </h3>
          <div className="flex items-center justify-center gap-4 flex-1">
            {/* SVG Donut Chart */}
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 36 36"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="15.91"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="4.2"
                />
                {/* General Medicine (35%) */}
                <circle
                  cx="18"
                  cy="18"
                  r="15.91"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="4.2"
                  strokeDasharray="35 65"
                  strokeDashoffset="100"
                />
                {/* Pediatrics (20%) */}
                <circle
                  cx="18"
                  cy="18"
                  r="15.91"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="4.2"
                  strokeDasharray="20 80"
                  strokeDashoffset="65"
                />
                {/* Cardiology (15%) */}
                <circle
                  cx="18"
                  cy="18"
                  r="15.91"
                  fill="none"
                  stroke="#ec4899"
                  strokeWidth="4.2"
                  strokeDasharray="15 85"
                  strokeDashoffset="45"
                />
                {/* Orthopedics (15%) */}
                <circle
                  cx="18"
                  cy="18"
                  r="15.91"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="4.2"
                  strokeDasharray="15 85"
                  strokeDashoffset="30"
                />
                {/* Others (15%) */}
                <circle
                  cx="18"
                  cy="18"
                  r="15.91"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="4.2"
                  strokeDasharray="15 85"
                  strokeDashoffset="15"
                />
              </svg>
              <div className="absolute text-center flex flex-col">
                <span className="text-2xl font-black text-gray-900 leading-none">
                  2,543
                </span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">
                  Total
                </span>
              </div>
            </div>

            {/* Detailed Legend */}
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                <span className="text-gray-500 font-medium">Gen Med</span>
                <span className="font-bold text-gray-800 ml-auto">35%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
                <span className="text-gray-500 font-medium">Pediatrics</span>
                <span className="font-bold text-gray-800 ml-auto">20%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-pink-500"></span>
                <span className="text-gray-500 font-medium">Cardiology</span>
                <span className="font-bold text-gray-800 ml-auto">15%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span>
                <span className="text-gray-500 font-medium">Orthopedics</span>
                <span className="font-bold text-gray-800 ml-auto">15%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-gray-500"></span>
                <span className="text-gray-500 font-medium">Others</span>
                <span className="font-bold text-gray-800 ml-auto">15%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Patients */}
        <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Recent Patients</h3>
            <button className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline">
              View All
            </button>
          </div>

          <div className="flex-1 space-y-3.5">
            {/* Patient 1 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&fit=crop&auto=format&q=80"
                  alt="Vikram Singh"
                  className="w-9 h-9 rounded-xl object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 leading-tight">
                    Vikram Singh
                  </h4>
                  <p className="text-[11px] text-gray-400 font-semibold uppercase mt-0.5">
                    ID: PT-0001
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-500 font-medium">
                11 May 2026
              </span>
            </div>

            {/* Patient 2 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&fit=crop&auto=format&q=80"
                  alt="Anjali Desai"
                  className="w-9 h-9 rounded-xl object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 leading-tight">
                    Anjali Desai
                  </h4>
                  <p className="text-[11px] text-gray-400 font-semibold uppercase mt-0.5">
                    ID: PT-0002
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-500 font-medium">
                11 May 2026
              </span>
            </div>

            {/* Patient 3 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&fit=crop&auto=format&q=80"
                  alt="Rohit Mehta"
                  className="w-9 h-9 rounded-xl object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 leading-tight">
                    Rohit Mehta
                  </h4>
                  <p className="text-[11px] text-gray-400 font-semibold uppercase mt-0.5">
                    ID: PT-0003
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-500 font-medium">
                10 May 2026
              </span>
            </div>

            {/* Patient 4 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=80&fit=crop&auto=format&q=80"
                  alt="Meera Patel"
                  className="w-9 h-9 rounded-xl object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 leading-tight">
                    Meera Patel
                  </h4>
                  <p className="text-[11px] text-gray-400 font-semibold uppercase mt-0.5">
                    ID: PT-0004
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-500 font-medium">
                10 May 2026
              </span>
            </div>
          </div>
        </div>

        {/* Hospital Activity */}
        <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col justify-between">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Hospital Activity
          </h3>

          <div className="flex-1 space-y-4 pl-2 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
            {/* Act 1 */}
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-700 font-medium">
                  New patient{" "}
                  <span className="font-semibold text-gray-900">
                    Vikram Singh
                  </span>{" "}
                  registered.
                </p>
                <span className="text-xs text-gray-400 font-bold block mt-0.5">
                  2 mins ago
                </span>
              </div>
            </div>

            {/* Act 2 */}
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
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M16 2v4" />
                  <path d="M8 2v4" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-700 font-medium">
                  Appointment booked with{" "}
                  <span className="font-semibold text-gray-900">
                    Dr. Sharma
                  </span>
                  .
                </p>
                <span className="text-xs text-gray-400 font-bold block mt-0.5">
                  15 mins ago
                </span>
              </div>
            </div>

            {/* Act 3 */}
            <div className="flex items-start gap-4 relative">
              <div className="h-7 w-7 rounded-full bg-yellow-50 border border-yellow-200 flex items-center justify-center text-yellow-600 relative z-10">
                <span className="text-xs font-black">₹</span>
              </div>
              <div>
                <p className="text-sm text-gray-700 font-medium">
                  Payment received from{" "}
                  <span className="font-semibold text-gray-900">
                    Anjali Desai
                  </span>
                  .
                </p>
                <span className="text-xs text-gray-400 font-bold block mt-0.5">
                  1 hour ago
                </span>
              </div>
            </div>

            {/* Act 4 */}
            <div className="flex items-start gap-4 relative">
              <div className="h-7 w-7 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 relative z-10">
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
              <div>
                <p className="text-sm text-gray-700 font-medium">
                  Lab report generated for{" "}
                  <span className="font-semibold text-gray-900">
                    Rahul Verma
                  </span>
                  .
                </p>
                <span className="text-xs text-gray-400 font-bold block mt-0.5">
                  2 hours ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
