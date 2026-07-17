import React from "react";
import { Mail, Lock, Eye, LogIn, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = ({ onToggleSignup }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-xl rounded-3xl bg-white p-10 shadow-2xl border border-gray-100">
      <h1 className="text-4xl font-bold text-slate-900">Welcome Back</h1>

      <p className="mt-2 text-gray-500 text-lg">
        Sign in to your HospitalOS account
      </p>

      <form className="mt-10 space-y-6">
        {/* Email */}

        <div>
          <label className="font-semibold text-gray-800">Email Address</label>

          <div className="mt-2 flex items-center rounded-xl border border-gray-300 px-4 py-4 focus-within:border-blue-600">
            <Mail className="text-gray-500" size={22} />

            <input
              type="email"
              placeholder="Enter your email"
              className="ml-4 w-full outline-none text-lg"
            />
          </div>
        </div>

        {/* Password */}

        <div>
          <label className="font-semibold text-gray-800">Password</label>

          <div className="mt-2 flex items-center rounded-xl border border-gray-300 px-4 py-4 focus-within:border-blue-600">
            <Lock className="text-gray-500" size={22} />

            <input
              type="password"
              placeholder="Enter your password"
              className="ml-4 w-full outline-none text-lg"
            />

            <Eye className="text-gray-500 cursor-pointer" size={22} />
          </div>
        </div>

        {/* Remember */}

        <div className="flex justify-between items-center">
          <label className="flex items-center gap-3">
            <input type="checkbox" className="w-5 h-5 accent-blue-600" />

            <span className="text-gray-700">Remember me</span>
          </label>

          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        {/* Button */}

        <button className="flex items-center justify-center gap-3 w-full rounded-xl bg-blue-600 py-4 text-xl font-semibold text-white hover:bg-blue-700 transition">
          <LogIn size={22} />
          Sign In
        </button>

        {/* Divider */}

        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-300"></div>

          <span className="text-gray-400">OR</span>

          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        {/* SSO */}

        <button
          type="button"
          onClick={onToggleSignup}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-blue-500 py-4 font-semibold text-blue-600 hover:bg-blue-50"
        >
          <Shield size={20} />
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Login;
