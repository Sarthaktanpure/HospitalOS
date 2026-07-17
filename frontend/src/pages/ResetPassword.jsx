import React from 'react'

const ResetPassword = () => {
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
              <p className="text-gray-600 text-sm mt-1">Smart Hospital Management</p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-6xl font-bold leading-tight text-slate-900">
              Secure Access.
            </h2>
            <p className="mt-8 max-w-lg text-xl text-gray-600 leading-9">
              Update your credentials securely to protect patient and clinic data.
            </p>
          </div>
        </div>

        {/* Brand Image */}
        <div className="mt-12">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&fit=crop&auto=format&q=80"
            alt="Secure Hospital Settings"
            className="w-full h-64 rounded-2xl object-cover shadow-md"
          />
        </div>
      </div>

      {/* Right Side: Reset Password Form */}
      <div className="flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-xl rounded-3xl bg-white p-10 shadow-2xl border border-gray-100">
          <h1 className="text-4xl font-bold text-slate-900">Set New Password</h1>
          <p className="mt-2 text-gray-500 text-lg">
            Ensure your password is strong and secure.
          </p>

          <form className="mt-10 space-y-6">
            {/* New Password */}
            <div>
              <label className="font-semibold text-gray-800">New Password</label>
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
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="ml-4 w-full outline-none text-lg text-gray-800 bg-transparent"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="font-semibold text-gray-800">Confirm New Password</label>
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
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="ml-4 w-full outline-none text-lg text-gray-800 bg-transparent"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              className="flex items-center justify-center gap-3 w-full rounded-xl bg-blue-600 py-4 text-xl font-semibold text-white hover:bg-blue-700 active:scale-[0.98] transition-all"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
)

}

export default ResetPassword
