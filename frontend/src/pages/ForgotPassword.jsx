import React from "react";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-6">
      <div className="w-full max-w-7xl bg-white/80 backdrop-blur-xl rounded-[32px] shadow-2xl overflow-hidden grid lg:grid-cols-2">
        {/* Left Side: Brand Panel */}
        <div className="relative flex flex-col justify-between bg-gradient-to-br from-blue-50 to-blue-100 p-10">
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center text-white text-3xl font-bold shadow-sm shadow-blue-200">
                +
              </div>
              <div>
                <h1 className="text-4xl font-bold text-slate-900 leading-none">
                  Hospital<span className="text-blue-600">OS</span>
                </h1>
                <p className="text-gray-600 text-sm mt-1">
                  Smart Hospital Management
                </p>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-6xl font-bold leading-tight text-slate-900">
                Password Recovery.
              </h2>
              <p className="mt-8 max-w-lg text-xl text-gray-600 leading-9">
                Quickly retrieve access to your workspace and clinical modules.
              </p>
            </div>
          </div>

          {/* Brand Image */}
          <div className="mt-12">
            <img
              src="https://images.unsplash.com/photo-1586773860418-d3b97998c63d?w=800&fit=crop&auto=format&q=80"
              alt="Hospital Recovery"
              className="w-full h-64 rounded-2xl object-cover shadow-md"
            />
          </div>
        </div>

        {/* Right Side: Recover Password Card */}
        <div className="flex items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-xl rounded-3xl bg-white p-10 shadow-2xl border border-gray-100">
            <h1 className="text-4xl font-bold text-slate-900">
              Reset Password
            </h1>
            <p className="mt-2 text-gray-500 text-lg">
              Enter your email to receive recovery instructions.
            </p>

            <form className="mt-10 space-y-6">
              {/* Email Input */}
              <div>
                <label className="font-semibold text-gray-800">
                  Email Address
                </label>
                <div className="mt-2 flex items-center rounded-xl border border-gray-300 px-4 py-4 focus-within:border-blue-600 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-gray-500"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <input
                    type="email"
                    placeholder="Enter your registered email"
                    className="ml-4 w-full outline-none text-lg text-gray-800 bg-transparent"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 w-full rounded-xl bg-blue-600 py-4 text-xl font-semibold text-white hover:bg-blue-700 active:scale-[0.98] transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" x2="2" y1="2" y2="22" />
                    <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h7" />
                    <path d="M18 8V6a2 2 0 0 0-2-2H9" />
                  </svg>
                  Send Reset Link
                </button>

                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 py-4 font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
