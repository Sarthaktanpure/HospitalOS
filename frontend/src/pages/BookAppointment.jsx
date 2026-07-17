import React from "react";

const BookAppointment = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-250 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Book Appointment
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Create a new booking slot for outpatient consultation.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-255 bg-white hover:bg-gray-50 text-xs font-bold text-gray-705 rounded-xl transition-all">
            Cancel
          </button>
          <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-xs font-bold text-white rounded-xl shadow-sm shadow-blue-200 transition-all">
            Confirm Appointment
          </button>
        </div>
      </div>

      {/* Form Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Form Fields (col-span-8) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Patient Selection Card */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
              1. Select Patient
            </h3>

            <div className="space-y-4">
              {/* Patient Search */}
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1.5">
                  Search Registered Patient *
                </label>
                <div className="relative flex items-center">
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
                    placeholder="Type patient name, phone, or ID (e.g. PT-0001)..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-2.5 text-sm text-gray-805 outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 font-semibold">Or</span>
                <button
                  type="button"
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <line x1="19" x2="19" y1="5" y2="13" />
                    <line x1="15" x2="23" y1="9" y2="9" />
                  </svg>
                  Quick Register New Patient
                </button>
              </div>
            </div>
          </div>

          {/* Clinical Setup (Doctor & Specialty) */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
              2. Clinical Assignment
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Department */}
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1.5">
                  Specialized Department *
                </label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500">
                  <option value="">Select department</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="dermatology">Dermatology</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="genmed">General Medicine</option>
                  <option value="ortho">Orthopedics</option>
                </select>
              </div>

              {/* Doctor */}
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1.5">
                  Available Clinician *
                </label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500">
                  <option value="">Select Doctor</option>
                  <option value="sharma">
                    Dr. Arvind Sharma (Available today)
                  </option>
                  <option value="priya">
                    Dr. Priya Shah (Available today)
                  </option>
                  <option value="amit">Dr. Amit Kumar (Available today)</option>
                </select>
              </div>

              {/* Consult Type */}
              <div className="md:col-span-2">
                <label className="text-xs font-bold text-gray-700 block mb-1.5">
                  Consultation Type *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    className="p-3 border-2 border-blue-500 bg-blue-50/50 rounded-xl text-center flex flex-col items-center justify-center gap-1 transition-all"
                  >
                    <span className="text-xs font-bold text-blue-750 block">
                      In-Person (OPD)
                    </span>
                    <span className="text-[9px] text-gray-400 font-bold">
                      Standard clinic visit
                    </span>
                  </button>
                  <button
                    type="button"
                    className="p-3 border border-gray-200 bg-white hover:bg-gray-50 rounded-xl text-center flex flex-col items-center justify-center gap-1 transition-all"
                  >
                    <span className="text-xs font-bold text-gray-700 block">
                      Video Consult
                    </span>
                    <span className="text-[9px] text-gray-400 font-bold">
                      Tele-medicine visit
                    </span>
                  </button>
                  <button
                    type="button"
                    className="p-3 border border-gray-200 bg-white hover:bg-gray-50 rounded-xl text-center flex flex-col items-center justify-center gap-1 transition-all"
                  >
                    <span className="text-xs font-bold text-gray-700 block">
                      Follow-Up
                    </span>
                    <span className="text-[9px] text-gray-400 font-bold">
                      Post-treatment review
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Date & Slot selection */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
              3. Slot Booking
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Datepicker */}
              <div className="md:col-span-1">
                <label className="text-xs font-bold text-gray-700 block mb-1.5">
                  Choose Date *
                </label>
                <input
                  type="date"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500"
                />
              </div>

              {/* Time Slot Selection Grid */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-gray-700 block">
                  Select Available Time Slot *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    className="py-2.5 bg-blue-50 border border-blue-300 text-blue-700 rounded-xl text-xs font-bold transition-all"
                  >
                    09:00 AM
                  </button>
                  <button
                    type="button"
                    className="py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl text-xs font-semibold transition-all"
                  >
                    09:30 AM
                  </button>
                  <button
                    type="button"
                    className="py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl text-xs font-semibold transition-all"
                  >
                    10:00 AM
                  </button>
                  <button
                    type="button"
                    className="py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl text-xs font-semibold transition-all"
                  >
                    10:30 AM
                  </button>
                  <button
                    type="button"
                    className="py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl text-xs font-semibold transition-all"
                  >
                    11:00 AM
                  </button>
                  <button
                    type="button"
                    className="py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl text-xs font-semibold transition-all"
                  >
                    11:30 AM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary column (col-span-4) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
              Booking Summary
            </h3>

            <div className="space-y-4 text-xs font-semibold text-gray-500">
              {/* Dr name */}
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=80&fit=crop&auto=format&q=80"
                  alt="Dr. Sharma"
                  className="w-10 h-10 rounded-lg object-cover border border-gray-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-gray-900 leading-tight">
                    Dr. Arvind Sharma
                  </h4>
                  <p className="text-[10px] text-gray-400 font-semibold mt-0.5">
                    General Medicine - OPD
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <div className="flex justify-between">
                  <span>Appointment Date:</span>
                  <span className="text-gray-900 font-bold">12 May 2026</span>
                </div>
                <div className="flex justify-between">
                  <span>Appointment Time:</span>
                  <span className="text-gray-900 font-bold">09:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Wait Time:</span>
                  <span className="text-gray-900 font-bold">&lt; 15 mins</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2.5">
                <div className="flex justify-between">
                  <span>Consultation Fees:</span>
                  <span className="text-gray-900 font-bold">₹500.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (CGST/SGST 18%):</span>
                  <span className="text-gray-900 font-bold">₹90.00</span>
                </div>
                <div className="flex justify-between border-t border-gray-150 pt-2 text-sm">
                  <span className="text-gray-900 font-bold">Total Amount:</span>
                  <span className="text-blue-600 font-black">₹590.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
