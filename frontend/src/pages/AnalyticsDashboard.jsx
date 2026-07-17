import React from "react";

const AnalyticsDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Hospital Analytics
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Review metrics for revenue growth, bed utility, wait times, and
            clinic performances.
          </p>
        </div>
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
          Download CSV Report
        </button>
      </div>

      {/* Analytics KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm flex items-center justify-between">
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
              Average Patient Wait Time
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">14.5 mins</h3>
            <span className="text-[11px] font-semibold text-green-600">
              ↓ 2.1 mins from last week
            </span>
          </div>
        </div>

        <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm flex items-center justify-between">
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
              Bed Occupancy Rate
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">88%</h3>
            <span className="text-[11px] font-semibold text-gray-500">
              118 / 135 total beds filled
            </span>
          </div>
        </div>

        <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm flex items-center justify-between">
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
              Patient Satisfaction
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">96.4%</h3>
            <span className="text-[11px] font-semibold text-green-650 flex items-center gap-1">
              ★ 4.8 avg rating
            </span>
          </div>
        </div>

        <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm flex items-center justify-between">
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
              Outpatient Retention
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900">84.2%</h3>
            <span className="text-[11px] font-semibold text-blue-600">
              ↑ 1.5% return rate
            </span>
          </div>
        </div>
      </div>

      {/* Graphical Trends Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue bar charts */}
        <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
            Revenue Growth Trends
          </h3>

          {/* Simple SVG Bar chart layout */}
          <div className="h-64 flex items-end justify-between gap-4 pt-6 border-b border-gray-200 pb-2">
            {/* Bar 1 */}
            <div className="flex-1 flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold text-gray-400">₹6.2L</span>
              <div
                className="w-full bg-blue-100 border border-blue-200 hover:bg-blue-200 rounded-t-lg transition-all"
                style={{ height: "120px" }}
              ></div>
              <span className="text-xs text-gray-500 font-semibold">Jan</span>
            </div>
            {/* Bar 2 */}
            <div className="flex-1 flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold text-gray-400">₹7.1L</span>
              <div
                className="w-full bg-blue-100 border border-blue-200 hover:bg-blue-200 rounded-t-lg transition-all"
                style={{ height: "145px" }}
              ></div>
              <span className="text-xs text-gray-500 font-semibold">Feb</span>
            </div>
            {/* Bar 3 */}
            <div className="flex-1 flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold text-gray-400">₹6.8L</span>
              <div
                className="w-full bg-blue-100 border border-blue-200 hover:bg-blue-200 rounded-t-lg transition-all"
                style={{ height: "135px" }}
              ></div>
              <span className="text-xs text-gray-500 font-semibold">Mar</span>
            </div>
            {/* Bar 4 */}
            <div className="flex-1 flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold text-gray-400">₹8.2L</span>
              <div
                className="w-full bg-blue-100 border border-blue-200 hover:bg-blue-200 rounded-t-lg transition-all"
                style={{ height: "170px" }}
              ></div>
              <span className="text-xs text-gray-500 font-semibold">Apr</span>
            </div>
            {/* Bar 5 */}
            <div className="flex-1 flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold text-blue-600">₹8.7L</span>
              <div
                className="w-full bg-blue-600 rounded-t-lg transition-all"
                style={{ height: "185px" }}
              ></div>
              <span className="text-xs text-gray-900 font-bold">May</span>
            </div>
          </div>
        </div>

        {/* Patient growth line chart */}
        <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
            Patient Volume Intake
          </h3>

          {/* Simple Line graph using SVG */}
          <div className="h-64 relative flex items-end">
            <svg
              className="w-full h-full pb-8 pr-2"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Area path */}
              <path
                d="M 0,90 Q 25,60 50,45 T 100,20 L 100,100 L 0,100 Z"
                fill="rgba(59, 130, 246, 0.05)"
              />
              {/* Line path */}
              <path
                d="M 0,90 Q 25,60 50,45 T 100,20"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.5"
              />
            </svg>

            <div className="absolute inset-x-0 bottom-0 flex justify-between text-xs text-gray-500 font-semibold border-t border-gray-250 pt-2 px-1">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
