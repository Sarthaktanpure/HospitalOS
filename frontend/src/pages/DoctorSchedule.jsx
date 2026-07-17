import React from "react";

const DoctorSchedule = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200 pb-5">
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
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              Doctor Schedule & Availability
            </h1>
            <p className="text-sm text-gray-500 font-medium">
              Configure daily working hours and manage appointments queue for{" "}
              <span className="font-semibold text-gray-800">
                Dr. Arvind Sharma
              </span>
              .
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-200 bg-white hover:bg-gray-50 text-xs font-bold text-gray-700 rounded-xl transition-all">
            Copy Weekly Schedule
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white rounded-xl shadow-sm transition-all">
            + Add Time Slot
          </button>
        </div>
      </div>

      {/* Schedule Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Doctor Profile Card & Status controls (col-span-4) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-5">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=120&fit=crop&auto=format&q=80"
                alt="Dr. Arvind Sharma"
                className="w-16 h-16 rounded-xl object-cover border border-gray-150"
              />
              <div>
                <h3 className="text-sm font-bold text-gray-900 leading-snug">
                  Dr. Arvind Sharma
                </h3>
                <p className="text-xs text-blue-600 font-bold mt-0.5">
                  General Medicine
                </p>
                <p className="text-[10px] text-gray-400 font-semibold mt-0.5">
                  ID: DOC-0024
                </p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-4">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Quick Status Toggle
              </h4>

              <div className="flex items-center justify-between p-3 bg-green-55/5 border border-green-200 rounded-xl">
                <div>
                  <h5 className="text-xs font-bold text-green-800">
                    Clinic Availability
                  </h5>
                  <p className="text-[10px] text-green-600 font-medium mt-0.5">
                    Currently accepting bookings
                  </p>
                </div>
                {/* Mock Switch */}
                <div className="w-10 h-6 bg-green-500 rounded-full p-1 cursor-pointer flex items-center justify-end transition-all">
                  <span className="h-4 w-4 bg-white rounded-full shadow-sm"></span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-150 rounded-xl">
                <div>
                  <h5 className="text-xs font-bold text-gray-800">
                    Teleconsultation Status
                  </h5>
                  <p className="text-[10px] text-gray-500 font-medium mt-0.5">
                    Online visits offline
                  </p>
                </div>
                {/* Mock Switch Off */}
                <div className="w-10 h-6 bg-gray-300 rounded-full p-1 cursor-pointer flex items-center justify-start transition-all">
                  <span className="h-4 w-4 bg-white rounded-full shadow-sm"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule Preferences info */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Schedule Configuration
            </h3>
            <div className="space-y-3.5 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500 font-semibold">
                  Slot Interval:
                </span>
                <span className="font-bold text-gray-800">15 minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 font-semibold">
                  Max Daily Patients:
                </span>
                <span className="font-bold text-gray-800">24 patients</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 font-semibold">
                  Auto-Approve Appointments:
                </span>
                <span className="font-bold text-gray-800">Enabled</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Week Calendar & Time Slots Grid (col-span-8) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Week Calendar Row */}
          <div className="p-4 bg-white border border-gray-200 rounded-2xl shadow-sm flex items-center justify-between gap-2 overflow-x-auto">
            {/* Mon */}
            <button className="flex-1 min-w-[60px] py-3 rounded-xl border border-gray-150 hover:bg-gray-50 text-center transition-all">
              <span className="text-[10px] text-gray-400 font-bold uppercase block">
                Mon
              </span>
              <span className="text-sm font-extrabold text-gray-700 mt-1 block">
                11 May
              </span>
            </button>
            {/* Tue */}
            <button className="flex-1 min-w-[60px] py-3 rounded-xl border-2 border-blue-500 bg-blue-50 text-center transition-all">
              <span className="text-[10px] text-blue-600 font-bold uppercase block">
                Tue
              </span>
              <span className="text-sm font-extrabold text-blue-700 mt-1 block">
                12 May
              </span>
            </button>
            {/* Wed */}
            <button className="flex-1 min-w-[60px] py-3 rounded-xl border border-gray-150 hover:bg-gray-50 text-center transition-all">
              <span className="text-[10px] text-gray-400 font-bold uppercase block">
                Wed
              </span>
              <span className="text-sm font-extrabold text-gray-700 mt-1 block">
                13 May
              </span>
            </button>
            {/* Thu */}
            <button className="flex-1 min-w-[60px] py-3 rounded-xl border border-gray-150 hover:bg-gray-50 text-center transition-all">
              <span className="text-[10px] text-gray-400 font-bold uppercase block">
                Thu
              </span>
              <span className="text-sm font-extrabold text-gray-700 mt-1 block">
                14 May
              </span>
            </button>
            {/* Fri */}
            <button className="flex-1 min-w-[60px] py-3 rounded-xl border border-gray-150 hover:bg-gray-50 text-center transition-all">
              <span className="text-[10px] text-gray-400 font-bold uppercase block">
                Fri
              </span>
              <span className="text-sm font-extrabold text-gray-700 mt-1 block">
                15 May
              </span>
            </button>
            {/* Sat */}
            <button className="flex-1 min-w-[60px] py-3 rounded-xl border border-gray-150 hover:bg-gray-50 text-center transition-all opacity-50">
              <span className="text-[10px] text-gray-400 font-bold uppercase block">
                Sat
              </span>
              <span className="text-sm font-extrabold text-gray-700 mt-1 block">
                16 May
              </span>
            </button>
            {/* Sun */}
            <button className="flex-1 min-w-[60px] py-3 rounded-xl border border-gray-150 hover:bg-gray-50 text-center transition-all opacity-50">
              <span className="text-[10px] text-gray-400 font-bold uppercase block">
                Sun
              </span>
              <span className="text-sm font-extrabold text-gray-700 mt-1 block">
                17 May
              </span>
            </button>
          </div>

          {/* Time Slots Area */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-6">
            {/* Morning Slots */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">
                Morning Session (09:00 AM - 12:00 PM)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {/* Slot 1 */}
                <div className="p-3 border border-red-200 bg-red-50/20 rounded-xl flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-gray-800">09:00 AM</span>
                    <p className="text-[10px] text-gray-500 font-semibold mt-0.5">
                      Rahul Verma (PT-0001)
                    </p>
                  </div>
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-sm"
                    title="Booked"
                  ></span>
                </div>

                {/* Slot 2 */}
                <div className="p-3 border border-red-200 bg-red-50/20 rounded-xl flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-gray-800">09:30 AM</span>
                    <p className="text-[10px] text-gray-500 font-semibold mt-0.5">
                      Sanjay Nair (PT-0084)
                    </p>
                  </div>
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-red-500"
                    title="Booked"
                  ></span>
                </div>

                {/* Slot 3 */}
                <div className="p-3 border border-green-200 bg-green-50/10 hover:bg-green-50/30 rounded-xl flex items-center justify-between text-xs cursor-pointer transition-colors">
                  <div>
                    <span className="font-bold text-green-700">10:00 AM</span>
                    <p className="text-[10px] text-green-600 font-semibold mt-0.5">
                      Available Slot
                    </p>
                  </div>
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-green-500"
                    title="Available"
                  ></span>
                </div>

                {/* Slot 4 */}
                <div className="p-3 border border-green-200 bg-green-50/10 hover:bg-green-50/30 rounded-xl flex items-center justify-between text-xs cursor-pointer transition-colors">
                  <div>
                    <span className="font-bold text-green-700">10:30 AM</span>
                    <p className="text-[10px] text-green-600 font-semibold mt-0.5">
                      Available Slot
                    </p>
                  </div>
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-green-500"
                    title="Available"
                  ></span>
                </div>

                {/* Slot 5 */}
                <div className="p-3 border border-red-200 bg-red-50/20 rounded-xl flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-gray-800">11:00 AM</span>
                    <p className="text-[10px] text-gray-500 font-semibold mt-0.5">
                      John Doe (PT-0923)
                    </p>
                  </div>
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-red-500"
                    title="Booked"
                  ></span>
                </div>

                {/* Slot 6 */}
                <div className="p-3 border border-green-200 bg-green-50/10 hover:bg-green-50/30 rounded-xl flex items-center justify-between text-xs cursor-pointer transition-colors">
                  <div>
                    <span className="font-bold text-green-700">11:30 AM</span>
                    <p className="text-[10px] text-green-600 font-semibold mt-0.5">
                      Available Slot
                    </p>
                  </div>
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-green-500"
                    title="Available"
                  ></span>
                </div>
              </div>
            </div>

            {/* Afternoon Slots */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">
                Afternoon Session (12:00 PM - 04:00 PM)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {/* Slot 7 (Lunch) */}
                <div className="p-3 border border-gray-200 bg-gray-50 rounded-xl flex items-center justify-between text-xs opacity-60">
                  <div>
                    <span className="font-bold text-gray-500">12:00 PM</span>
                    <p className="text-[10px] text-gray-400 font-medium mt-0.5">
                      Lunch Block
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-gray-400"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>

                {/* Slot 8 */}
                <div className="p-3 border border-green-200 bg-green-50/10 hover:bg-green-50/30 rounded-xl flex items-center justify-between text-xs cursor-pointer transition-colors">
                  <div>
                    <span className="font-bold text-green-700">01:00 PM</span>
                    <p className="text-[10px] text-green-600 font-semibold mt-0.5">
                      Available Slot
                    </p>
                  </div>
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-green-500"
                    title="Available"
                  ></span>
                </div>

                {/* Slot 9 */}
                <div className="p-3 border border-red-200 bg-red-50/20 rounded-xl flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-gray-800">01:30 PM</span>
                    <p className="text-[10px] text-gray-500 font-semibold mt-0.5">
                      Vikram Singh (PT-0001)
                    </p>
                  </div>
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-red-500"
                    title="Booked"
                  ></span>
                </div>

                {/* Slot 10 */}
                <div className="p-3 border border-green-200 bg-green-50/10 hover:bg-green-50/30 rounded-xl flex items-center justify-between text-xs cursor-pointer transition-colors">
                  <div>
                    <span className="font-bold text-green-700">02:00 PM</span>
                    <p className="text-[10px] text-green-600 font-semibold mt-0.5">
                      Available Slot
                    </p>
                  </div>
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-green-500"
                    title="Available"
                  ></span>
                </div>

                {/* Slot 11 */}
                <div className="p-3 border border-green-200 bg-green-50/10 hover:bg-green-50/30 rounded-xl flex items-center justify-between text-xs cursor-pointer transition-colors">
                  <div>
                    <span className="font-bold text-green-700">02:30 PM</span>
                    <p className="text-[10px] text-green-600 font-semibold mt-0.5">
                      Available Slot
                    </p>
                  </div>
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-green-500"
                    title="Available"
                  ></span>
                </div>

                {/* Slot 12 */}
                <div className="p-3 border border-gray-200 bg-gray-50 rounded-xl flex items-center justify-between text-xs opacity-60">
                  <div>
                    <span className="font-bold text-gray-500">03:30 PM</span>
                    <p className="text-[10px] text-gray-400 font-medium mt-0.5">
                      Ward Rounds
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-gray-400"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSchedule;
