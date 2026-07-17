import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Hospital from "../assets/Hospital.png";

const Register = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-6">
      <div className="w-full max-w-7xl bg-white/80 backdrop-blur-xl rounded-[32px] shadow-2xl overflow-hidden grid lg:grid-cols-2">
        {/* Left Side */}
        <div className="relative flex flex-col justify-between bg-gradient-to-br from-blue-50 to-blue-100 p-10">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                +
              </div>

              <div>
                <h1 className="text-4xl font-bold text-slate-900">
                  Hospital<span className="text-blue-600">OS</span>
                </h1>

                <p className="text-gray-600">Smart Hospital Management</p>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-6xl font-bold leading-tight text-slate-900">
                Smarter Care.
                <br />
                Better Outcomes.
              </h2>

              <p className="mt-8 max-w-lg text-xl text-gray-600 leading-9">
                A complete hospital management solution to streamline operations
                and improve patient care.
              </p>
            </div>
          </div>

          {/* Hospital Image */}
          <div className="mt-12">
            <img
              src={Hospital}
              alt="Hospital"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-8 lg:p-12">
          {/* Switch between LoginForm & SignupForm */}
          {isLogin ? (
            <Login onToggleSignup={() => setIsLogin(false)} />
          ) : (
            <Signup onToggleLogin={() => setIsLogin(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
