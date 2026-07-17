import React from "react";

const Navbar = () => {
  return (
    <header className="h-16 border-b border-gray-200 bg-white px-6 flex items-center justify-between sticky top-0 z-30">
      {/* Left side: Hamburger (Mobile) & Title Placeholder */}
      <div className="flex items-center gap-4">
        <button className="lg:hidden p-2 hover:bg-gray-50 rounded-xl text-gray-500 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        <div className="hidden sm:block">
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">
            Overview
          </h2>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-6 hidden md:block">
        <div className="relative flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="absolute left-3 text-gray-400"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search patients, doctors, records..."
            className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-12 py-2 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
          />
          <div className="absolute right-3 px-1.5 py-0.5 bg-gray-200 border border-gray-300 rounded text-[10px] text-gray-500 font-semibold font-mono tracking-wider pointer-events-none select-none">
            ⌘K
          </div>
        </div>
      </div>

      {/* Right side Actions */}
      <div className="flex items-center gap-4">
        {/* Hospital Selector */}
        <div className="relative hidden lg:block">
          <button className="flex items-center gap-2 px-3.5 py-2 bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-xl text-sm font-semibold text-gray-700 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-600"
            >
              <rect width="8" height="18" x="3" y="3" rx="2" />
              <rect width="8" height="10" x="13" y="3" rx="2" />
              <rect width="8" height="4" x="13" y="17" rx="2" />
            </svg>
            <span>City Care Hospital</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400 ml-1"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>

        {/* Messages Trigger */}
        <button className="relative p-2.5 hover:bg-gray-50 rounded-xl text-gray-500 hover:text-gray-800 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span className="absolute top-1.5 right-1.5 h-4 w-4 bg-red-500 rounded-full text-[9px] font-bold text-white flex items-center justify-center border border-white">
            3
          </span>
        </button>

        {/* Notifications Trigger */}
        <button className="relative p-2.5 hover:bg-gray-50 rounded-xl text-gray-500 hover:text-gray-800 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          <span className="absolute top-1.5 right-1.5 h-4 w-4 bg-red-500 rounded-full text-[9px] font-bold text-white flex items-center justify-center border border-white">
            5
          </span>
        </button>

        {/* User Profile Info (Short layout on mobile) */}
        <div className="flex items-center gap-3 pl-2 border-l border-gray-200">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&auto=format&q=80"
            alt="Sarthak Tanpure"
            className="w-9 h-9 rounded-xl object-cover border border-gray-150 shadow-sm"
          />
          <div className="hidden sm:block text-left">
            <h4 className="text-xs font-bold text-gray-900">Sarthak Tanpure</h4>
            <p className="text-[10px] text-gray-500 font-medium">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
