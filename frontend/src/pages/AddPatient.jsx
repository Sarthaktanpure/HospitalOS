import React from "react";

const AddPatient = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-250 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Add New Patient
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Create a new patient file in the electronic health records system.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-250 bg-white hover:bg-gray-50 text-xs font-bold text-gray-700 rounded-xl transition-all">
            Cancel
          </button>
          <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-xs font-bold text-white rounded-xl shadow-sm shadow-blue-200 transition-all">
            Save Patient Profile
          </button>
        </div>
      </div>

      {/* Form Layout */}
      <form className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Personal & Address Info (col-span-8) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Card 1: Basic Information */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-5">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
              Basic Personal Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="text-xs font-bold text-gray-705 block mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="First and last name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="text-xs font-bold text-gray-705 block mb-1.5">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="text-xs font-bold text-gray-705 block mb-1.5">
                  Gender *
                </label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Blood Group */}
              <div>
                <label className="text-xs font-bold text-gray-705 block mb-1.5">
                  Blood Group *
                </label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all">
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>

              {/* Phone */}
              <div>
                <label className="text-xs font-bold text-gray-705 block mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-bold text-gray-705 block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>

          {/* Card 2: Contact Address & Emergency */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-5">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
              Address & Emergency Contact Details
            </h3>

            <div className="space-y-4">
              {/* Address */}
              <div>
                <label className="text-xs font-bold text-gray-705 block mb-1.5">
                  Residential Address *
                </label>
                <input
                  type="text"
                  placeholder="Street name, landmark, housing unit"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* City */}
                <div>
                  <label className="text-xs font-bold text-gray-705 block mb-1.5">
                    City / Town *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. New Delhi"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>

                {/* Pin Code */}
                <div>
                  <label className="text-xs font-bold text-gray-705 block mb-1.5">
                    Postal Code / PIN *
                  </label>
                  <input
                    type="text"
                    placeholder="6-digit PIN code"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>

                {/* Emergency Contact Name */}
                <div>
                  <label className="text-xs font-bold text-gray-705 block mb-1.5">
                    Emergency Contact Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Name of emergency contact"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>

                {/* Emergency Phone */}
                <div>
                  <label className="text-xs font-bold text-gray-705 block mb-1.5">
                    Emergency Contact Phone *
                  </label>
                  <input
                    type="tel"
                    placeholder="Emergency phone number"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>

                {/* Relationship */}
                <div className="md:col-span-2">
                  <label className="text-xs font-bold text-gray-705 block mb-1.5">
                    Relationship to Patient *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Spouse, Parent, Sibling"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Medical & Insurance details (col-span-4) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Card 3: Clinical Information */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-5">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
              Clinical Details
            </h3>

            <div className="space-y-4">
              {/* Primary Physician */}
              <div>
                <label className="text-xs font-bold text-gray-705 block mb-1.5">
                  Primary Care Doctor
                </label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all">
                  <option value="">Select doctor</option>
                  <option value="sharma">Dr. Sharma (General Medicine)</option>
                  <option value="amit">Dr. Amit Kumar (Orthopedics)</option>
                  <option value="neha">Dr. Neha Joshi (Pediatrics)</option>
                </select>
              </div>

              {/* Allergies */}
              <div>
                <label className="text-xs font-bold text-gray-705 block mb-1.5">
                  Known Drug Allergies
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Penicillin, Sulfa drugs (leave blank if none)"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
                ></textarea>
              </div>

              {/* Chronic Conditions */}
              <div>
                <label className="text-xs font-bold text-gray-705 block mb-1.5">
                  Chronic Medical Conditions
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Diabetes, Asthma, Hypertension"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Card 4: Insurance Information */}
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm space-y-5">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
              Insurance Information
            </h3>

            <div className="space-y-4">
              {/* Insurance Provider */}
              <div>
                <label className="text-xs font-bold text-gray-705 block mb-1.5">
                  Insurance Company Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Star Health, HDFC Ergo"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>

              {/* Policy ID */}
              <div>
                <label className="text-xs font-bold text-gray-705 block mb-1.5">
                  Policy Number
                </label>
                <input
                  type="text"
                  placeholder="Policy ID / Identification string"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-850 font-mono outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>

              {/* Validity date */}
              <div>
                <label className="text-xs font-bold text-gray-705 block mb-1.5">
                  Coverage Expiration Date
                </label>
                <input
                  type="date"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;
