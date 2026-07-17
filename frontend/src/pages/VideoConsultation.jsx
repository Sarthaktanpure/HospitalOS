import React from "react";

const VideoConsultation = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-250 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-ping"></span>
            Telehealth Video Consultation
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Session ID:{" "}
            <span className="font-mono font-bold text-gray-800">
              ROOM-849-XYZ
            </span>{" "}
            | Patient:{" "}
            <span className="font-semibold text-gray-800">Vikram Singh</span>
          </p>
        </div>
        <button className="px-4 py-2 border border-red-500 bg-red-50 hover:bg-red-100 text-xs font-bold text-red-650 rounded-xl transition-all">
          Terminate Room
        </button>
      </div>

      {/* Video Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Video Screen Panel (col-span-9) */}
        <div className="lg:col-span-9 bg-slate-900 border border-slate-950 rounded-3xl shadow-xl overflow-hidden aspect-video relative flex items-center justify-center">
          {/* Remote Doctor Stream Overlay */}
          <img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&fit=crop&auto=format&q=80"
            alt="Dr. Arvind Sharma"
            className="w-full h-full object-cover opacity-90"
          />

          {/* Doctor Name overlay */}
          <div className="absolute left-6 top-6 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl text-white text-xs font-bold flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-55 animate-pulse"></span>
            Dr. Arvind Sharma (General Medicine)
          </div>

          {/* Local Stream (PIP) Picture in picture */}
          <div className="absolute right-6 bottom-20 w-44 aspect-video bg-slate-800 border-2 border-white/20 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&fit=crop&auto=format&q=80"
              alt="Local Patient View"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-black/65 px-2 py-1 rounded text-[8px] font-bold text-white">
              You (Vikram Singh)
            </div>
          </div>

          {/* Floating Meeting controls */}
          <div className="absolute bottom-6 inset-x-0 flex items-center justify-center gap-3">
            {/* Mute Mic */}
            <button className="h-11 w-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center shadow-lg transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
                <line x1="12" x2="12" y1="19" y2="22" />
              </svg>
            </button>

            {/* Mute Camera */}
            <button className="h-11 w-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center shadow-lg transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="m22 8-6 4 6 4V8Z" />
                <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
              </svg>
            </button>

            {/* Screen Share */}
            <button className="h-11 w-11 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center shadow-lg transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
                <line x1="2" x2="22" y1="20" y2="20" />
                <line x1="12" x2="12" y1="20" y2="16" />
              </svg>
            </button>

            {/* End Call */}
            <button className="h-11 w-16 rounded-3xl bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-lg transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" />
              </svg>
            </button>
          </div>
        </div>

        {/* Participants & Live Notes (col-span-3) */}
        <div className="lg:col-span-3 bg-white border border-gray-200 rounded-3xl shadow-sm p-5 space-y-5 flex flex-col">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">
            Session Participants
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=80&fit=crop&auto=format&q=80"
                alt="Dr. Sharma"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <div>
                <h4 className="text-xs font-bold text-gray-900">
                  Dr. Arvind Sharma
                </h4>
                <span className="text-[9px] text-green-600 font-bold block">
                  Online
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&fit=crop&auto=format&q=80"
                alt="Vikram Singh"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <div>
                <h4 className="text-xs font-bold text-gray-900">
                  Vikram Singh
                </h4>
                <span className="text-[9px] text-green-600 font-bold block">
                  Online (You)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoConsultation;
