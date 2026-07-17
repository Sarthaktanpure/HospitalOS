import React from "react";

const DoctorList = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Doctors
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Manage clinical staff, specializations, and daily availabilities.
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
            Export List
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
            Add New Doctor
          </button>
        </div>
      </div>

      {/* Filter & Options Bar */}
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
              placeholder="Search doctors..."
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
            />
          </div>

          {/* Dropdowns */}
          <button className="flex items-center justify-between min-w-[150px] px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-100">
            <span>Specialization</span>
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
            <span>Status</span>
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

      {/* Doctors Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Doctor Card 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between hover:border-gray-300 transition-all duration-200">
          <div className="p-5 space-y-4">
            <div className="flex items-start justify-between">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=120&fit=crop&auto=format&q=80"
                alt="Dr. Arvind Sharma"
                className="w-16 h-16 rounded-xl object-cover border border-gray-150"
              />
              <span className="px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-[10px] font-bold">
                Available
              </span>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 leading-snug">
                Dr. Arvind Sharma
              </h3>
              <span className="inline-block mt-1 px-2.5 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-[10px] font-bold">
                General Medicine
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-amber-500"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>4.9</span>
              <span className="text-gray-400 font-semibold">(180 reviews)</span>
            </div>

            <div className="space-y-2 border-t border-gray-100 pt-3 text-xs text-gray-500 font-medium">
              <div className="flex justify-between">
                <span>Patient Load:</span>
                <span className="font-bold text-gray-800">
                  14 patients today
                </span>
              </div>
              <div className="flex justify-between">
                <span>Hours:</span>
                <span className="font-bold text-gray-800">
                  09:00 AM - 04:00 PM
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center gap-2">
            <button className="flex-1 px-3 py-2 border border-gray-250 bg-white hover:bg-gray-100 text-xs font-bold text-gray-700 rounded-xl transition-all">
              View Schedule
            </button>
            <button className="p-2 border border-gray-250 bg-white hover:bg-gray-100 text-gray-400 hover:text-gray-700 rounded-xl transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
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
          </div>
        </div>

        {/* Doctor Card 2 */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between hover:border-gray-300 transition-all duration-200">
          <div className="p-5 space-y-4">
            <div className="flex items-start justify-between">
              <img
                src="https://images.unsplash.com/photo-1594824813573-246434de83fb?w=120&fit=crop&auto=format&q=80"
                alt="Dr. Priya Shah"
                className="w-16 h-16 rounded-xl object-cover border border-gray-150"
              />
              <span className="px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-[10px] font-bold">
                Available
              </span>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 leading-snug">
                Dr. Priya Shah
              </h3>
              <span className="inline-block mt-1 px-2.5 py-0.5 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-[10px] font-bold">
                Dermatology
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-amber-500"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>4.8</span>
              <span className="text-gray-400 font-semibold">(96 reviews)</span>
            </div>

            <div className="space-y-2 border-t border-gray-100 pt-3 text-xs text-gray-500 font-medium">
              <div className="flex justify-between">
                <span>Patient Load:</span>
                <span className="font-bold text-gray-800">
                  8 patients today
                </span>
              </div>
              <div className="flex justify-between">
                <span>Hours:</span>
                <span className="font-bold text-gray-800">
                  10:00 AM - 05:00 PM
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center gap-2">
            <button className="flex-1 px-3 py-2 border border-gray-250 bg-white hover:bg-gray-100 text-xs font-bold text-gray-700 rounded-xl transition-all">
              View Schedule
            </button>
            <button className="p-2 border border-gray-250 bg-white hover:bg-gray-100 text-gray-400 hover:text-gray-700 rounded-xl transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
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
          </div>
        </div>

        {/* Doctor Card 3 */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between hover:border-gray-300 transition-all duration-200">
          <div className="p-5 space-y-4">
            <div className="flex items-start justify-between">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&fit=crop&auto=format&q=80"
                alt="Dr. Neha Joshi"
                className="w-16 h-16 rounded-xl object-cover border border-gray-150"
              />
              <span className="px-2.5 py-0.5 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-full text-[10px] font-bold">
                On Leave
              </span>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 leading-snug">
                Dr. Neha Joshi
              </h3>
              <span className="inline-block mt-1 px-2.5 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full text-[10px] font-bold">
                Pediatrics
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-amber-500"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>4.7</span>
              <span className="text-gray-400 font-semibold">(124 reviews)</span>
            </div>

            <div className="space-y-2 border-t border-gray-100 pt-3 text-xs text-gray-500 font-medium">
              <div className="flex justify-between">
                <span>Patient Load:</span>
                <span className="font-bold text-gray-800">
                  0 patients today
                </span>
              </div>
              <div className="flex justify-between">
                <span>Hours:</span>
                <span className="font-bold text-gray-850">Not Available</span>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center gap-2">
            <button className="flex-1 px-3 py-2 border border-gray-250 bg-white hover:bg-gray-100 text-xs font-bold text-gray-700 rounded-xl transition-all">
              View Schedule
            </button>
            <button className="p-2 border border-gray-250 bg-white hover:bg-gray-100 text-gray-400 hover:text-gray-700 rounded-xl transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
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
          </div>
        </div>

        {/* Doctor Card 4 */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between hover:border-gray-300 transition-all duration-200">
          <div className="p-5 space-y-4">
            <div className="flex items-start justify-between">
              <img
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=120&fit=crop&auto=format&q=80"
                alt="Dr. Amit Kumar"
                className="w-16 h-16 rounded-xl object-cover border border-gray-150"
              />
              <span className="px-2.5 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-[10px] font-bold">
                Available
              </span>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 leading-snug">
                Dr. Amit Kumar
              </h3>
              <span className="inline-block mt-1 px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[10px] font-bold">
                Orthopedics
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-amber-500"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>4.9</span>
              <span className="text-gray-400 font-semibold">(142 reviews)</span>
            </div>

            <div className="space-y-2 border-t border-gray-100 pt-3 text-xs text-gray-500 font-medium">
              <div className="flex justify-between">
                <span>Patient Load:</span>
                <span className="font-bold text-gray-800">
                  11 patients today
                </span>
              </div>
              <div className="flex justify-between">
                <span>Hours:</span>
                <span className="font-bold text-gray-800">
                  08:00 AM - 03:00 PM
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center gap-2">
            <button className="flex-1 px-3 py-2 border border-gray-250 bg-white hover:bg-gray-100 text-xs font-bold text-gray-700 rounded-xl transition-all">
              View Schedule
            </button>
            <button className="p-2 border border-gray-250 bg-white hover:bg-gray-100 text-gray-400 hover:text-gray-700 rounded-xl transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
