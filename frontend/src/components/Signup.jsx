import React, { useState } from "react";
import { User, Mail, Lock, Eye, UserPlus } from "lucide-react";

const Signup = ({ onToggleLogin }) => {
  return (
    <div className="w-full max-w-xl rounded-3xl bg-white p-10 shadow-2xl border border-gray-100">
      <h1 className="text-4xl font-bold text-slate-900">Create Account</h1>

      <p className="mt-2 text-gray-500 text-lg">
        Register your HospitalOS account
      </p>

      <form className="mt-8 space-y-5">
        {/* Full Name */}

        <div>
          <label className="font-semibold">Full Name</label>

          <div className="mt-2 flex items-center rounded-xl border border-gray-300 px-4 py-4 focus-within:border-blue-600">
            <User className="text-gray-500" />

            <input
              type="text"
              placeholder="Enter your name"
              className="ml-4 w-full outline-none text-lg"
            />
          </div>
        </div>

        {/* Email */}

        <div>
          <label className="font-semibold">Email Address</label>

          <div className="mt-2 flex items-center rounded-xl border border-gray-300 px-4 py-4 focus-within:border-blue-600">
            <Mail className="text-gray-500" />

            <input
              type="email"
              placeholder="Enter your email"
              className="ml-4 w-full outline-none text-lg"
            />
          </div>
        </div>

        {/* Password */}

        <div>
          <label className="font-semibold">Password</label>

          <div className="mt-2 flex items-center rounded-xl border border-gray-300 px-4 py-4 focus-within:border-blue-600">
            <Lock className="text-gray-500" />

            <input
              type="password"
              placeholder="Create password"
              className="ml-4 w-full outline-none text-lg"
            />

            <Eye className="text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Confirm Password */}

        <div>
          <label className="font-semibold">Confirm Password</label>

          <div className="mt-2 flex items-center rounded-xl border border-gray-300 px-4 py-4 focus-within:border-blue-600">
            <Lock className="text-gray-500" />

            <input
              type="password"
              placeholder="Confirm password"
              className="ml-4 w-full outline-none text-lg"
            />

            <Eye className="text-gray-500 cursor-pointer" />
          </div>
        </div>

        <label className="flex items-start gap-3">
          <input type="checkbox" className="mt-1 accent-blue-600" />

          <span className="text-gray-600">
            I agree to the Terms & Conditions and Privacy Policy.
          </span>
        </label>

        <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 text-xl font-semibold text-white hover:bg-blue-700 transition">
          <UserPlus />
          Create Account
        </button>

        {/* Switch to login */}
        <div className="text-center mt-6">
          <span className="text-gray-500">Already have an account? </span>
          <button
            type="button"
            onClick={onToggleLogin}
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
