import React from "react";

const DepartmentList = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Departments
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Manage clinical divisions, bed occupancy rates, and lead physicians.
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
            Create Department
          </button>
        </div>
      </div>

      {/* Grid of Department Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* General Medicine */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:border-gray-300 transition-all duration-200 space-y-5">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-bold">
              General Medicine
            </span>
            <span className="text-xs text-gray-400 font-semibold font-mono">
              DEPT-MED
            </span>
          </div>

          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=80&fit=crop&auto=format&q=80"
              alt="Dr. Arvind Sharma"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase block leading-none">
                Head of Department
              </span>
              <h4 className="text-sm font-bold text-gray-900 mt-1">
                Dr. Arvind Sharma
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-gray-500">
            <div>
              <span>Active Patients:</span>
              <p className="text-lg font-black text-gray-900 mt-0.5">890</p>
            </div>
            <div>
              <span>Total Staff:</span>
              <p className="text-lg font-black text-gray-900 mt-0.5">
                24 Clinicians
              </p>
            </div>
          </div>

          {/* Ward capacity bar */}
          <div className="space-y-1.5 text-xs text-gray-500 font-semibold">
            <div className="flex justify-between">
              <span>Ward Bed Occupancy:</span>
              <span className="font-bold text-gray-800">
                45 / 50 beds (90%)
              </span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Cardiology */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:border-gray-300 transition-all duration-200 space-y-5">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-pink-50 text-pink-700 border border-pink-200 rounded-full text-xs font-bold">
              Cardiology
            </span>
            <span className="text-xs text-gray-400 font-semibold font-mono">
              DEPT-CARD
            </span>
          </div>

          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <img
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=80&fit=crop&auto=format&q=80"
              alt="Dr. Amit Kumar"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase block leading-none">
                Head of Department
              </span>
              <h4 className="text-sm font-bold text-gray-900 mt-1">
                Dr. Amit Kumar
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-gray-500">
            <div>
              <span>Active Patients:</span>
              <p className="text-lg font-black text-gray-900 mt-0.5">382</p>
            </div>
            <div>
              <span>Total Staff:</span>
              <p className="text-lg font-black text-gray-900 mt-0.5">
                14 Clinicians
              </p>
            </div>
          </div>

          {/* Ward capacity bar */}
          <div className="space-y-1.5 text-xs text-gray-500 font-semibold">
            <div className="flex justify-between">
              <span>Ward Bed Occupancy:</span>
              <span className="font-bold text-gray-800">
                18 / 20 beds (90%)
              </span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-pink-500 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Pediatrics */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:border-gray-300 transition-all duration-200 space-y-5">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full text-xs font-bold">
              Pediatrics
            </span>
            <span className="text-xs text-gray-400 font-semibold font-mono">
              DEPT-PED
            </span>
          </div>

          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&fit=crop&auto=format&q=80"
              alt="Dr. Neha Joshi"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase block leading-none">
                Head of Department
              </span>
              <h4 className="text-sm font-bold text-gray-900 mt-1">
                Dr. Neha Joshi
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-gray-500">
            <div>
              <span>Active Patients:</span>
              <p className="text-lg font-black text-gray-900 mt-0.5">509</p>
            </div>
            <div>
              <span>Total Staff:</span>
              <p className="text-lg font-black text-gray-900 mt-0.5">
                18 Clinicians
              </p>
            </div>
          </div>

          {/* Ward capacity bar */}
          <div className="space-y-1.5 text-xs text-gray-500 font-semibold">
            <div className="flex justify-between">
              <span>Ward Bed Occupancy:</span>
              <span className="font-bold text-gray-800">
                28 / 30 beds (93%)
              </span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: "93%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentList;
