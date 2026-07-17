import React from "react";
import { Link, useLocation } from "react-router-dom";
import Sarthak from "../assets/Sarthak.jpg.jpg";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => {
    if (path === "/dashboard" || path === "/") {
      return currentPath === "/" || currentPath === "/dashboard";
    }
    return currentPath.startsWith(path);
  };

  const getLinkClass = (path) => {
    return isActive(path)
      ? "flex items-center gap-3 px-3 py-2.5 text-sm font-semibold rounded-xl bg-blue-50 text-blue-600 transition-all duration-200"
      : "flex items-center gap-3 px-3 py-2.5 text-sm font-semibold rounded-xl text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200";
  };

  const getIconClass = (path) => {
    return isActive(path) ? "text-blue-600" : "text-gray-500";
  };

  return (
    <aside className="w-64 border-r border-gray-200 bg-white flex flex-col h-screen sticky top-0">
      {/* Logo Header */}
      <div className="p-6 border-b border-gray-100 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-sm shadow-blue-200">
          +
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-900 tracking-tight flex items-center">
            Hospital<span className="text-blue-600">OS</span>
          </h1>
          <p className="text-xs text-gray-500 font-medium">
            Smart Hospital Management
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
        <Link to="/dashboard" className={getLinkClass("/dashboard")}>
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
            className={getIconClass("/dashboard")}
          >
            <rect width="7" height="9" x="3" y="3" rx="1" />
            <rect width="7" height="5" x="14" y="3" rx="1" />
            <rect width="7" height="9" x="14" y="12" rx="1" />
            <rect width="7" height="5" x="3" y="16" rx="1" />
          </svg>
          Dashboard
        </Link>

        <Link to="/appointments" className={getLinkClass("/appointments")}>
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
            className={getIconClass("/appointments")}
          >
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M16 2v4" />
            <path d="M8 2v4" />
            <path d="M3 10h18" />
          </svg>
          Appointments
        </Link>

        <Link to="/patients" className={getLinkClass("/patients")}>
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
            className={getIconClass("/patients")}
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          Patients
        </Link>

        <Link to="/doctors" className={getLinkClass("/doctors")}>
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
            className={getIconClass("/doctors")}
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          Doctors
        </Link>

        <Link to="/departments" className={getLinkClass("/departments")}>
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
            className={getIconClass("/departments")}
          >
            <rect x="4" y="3" width="16" height="18" rx="2" />
            <path d="M9 3v18" />
            <path d="M15 3v18" />
            <path d="M4 9h16" />
            <path d="M4 15h16" />
          </svg>
          Departments
        </Link>

        <Link to="/billing" className={getLinkClass("/billing")}>
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
            className={getIconClass("/billing")}
          >
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          Billing
        </Link>

        <Link to="/pharmacy" className={getLinkClass("/pharmacy")}>
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
            className={getIconClass("/pharmacy")}
          >
            <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
            <path d="m8.5 8.5 7 7" />
          </svg>
          Pharmacy
        </Link>

        <Link to="/laboratory" className={getLinkClass("/laboratory")}>
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
            className={getIconClass("/laboratory")}
          >
            <path d="M4.5 16.5c-1.5 1.26-2 2.5-2 3.5 0 1.2 1 2 2 2h15c1 0 2-.8 2-2 0-1-.5-2.24-2-3.5" />
            <path d="M6 18c0-4 3-7 6-7s6 3 6 7" />
            <path d="M12 2v9" />
            <path d="M9 5h6" />
          </svg>
          Laboratory
        </Link>

        <Link to="/reports" className={getLinkClass("/reports")}>
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
            className={getIconClass("/reports")}
          >
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
          </svg>
          Reports
        </Link>

        <Link to="/messages" className={getLinkClass("/messages")}>
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
            className={getIconClass("/messages")}
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Messages
        </Link>

        <Link to="/settings" className={getLinkClass("/settings")}>
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
            className={getIconClass("/settings")}
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
          Settings
        </Link>
      </nav>

      {/* Quick Access Card */}
      <div className="px-4 mb-4">
        <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl flex flex-col gap-2">
          <div className="flex items-center gap-2 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-wider">
              Quick Access
            </span>
          </div>
          <div className="mt-2 space-y-2">
            <Link
              to="/patients/add"
              className="flex items-center justify-between w-full text-left text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
            >
              <span>+ Add New Patient</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
            <Link
              to="/patients"
              className="flex items-center justify-between w-full text-left text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors"
            >
              <span>+ Patient Import</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* User Card */}
      <div className="p-4 border-t border-gray-100 flex flex-col gap-2">
        <div className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
          <div className="flex items-center gap-3">
            <img
              src={Sarthak}
              alt="Sarthak Tanpure"
              className="w-10 h-10 rounded-xl object-cover border border-gray-200"
            />
            <div>
              <h4 className="text-sm font-semibold text-gray-900 leading-tight">
                Sarthak Tanpure
              </h4>
              <p className="text-xs text-gray-500 font-medium mt-0.5">Admin</p>
            </div>
          </div>
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
            className="text-gray-400"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>

        <Link
          to="/register"
          className="flex items-center gap-2.5 w-full px-2 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
          </svg>
          Log Out
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
