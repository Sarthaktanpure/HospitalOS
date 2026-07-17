import React from "react";

const Chat = () => {
  return (
    <div className="p-6 bg-gray-50 h-[calc(100vh-4rem)] flex flex-col">
      {/* Chat Workspace */}
      <div className="flex-1 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Conversations Sidebar (col-span-4) */}
        <div className="lg:col-span-4 border-r border-gray-200 flex flex-col">
          {/* Search */}
          <div className="p-4 border-b border-gray-100">
            <div className="relative flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
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
                placeholder="Search conversations..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-2 text-xs text-gray-800 outline-none focus:border-blue-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Chats List */}
          <div className="flex-1 overflow-y-auto divide-y divide-gray-50">
            {/* Active Chat */}
            <div className="p-4 bg-blue-50/50 flex items-start justify-between gap-3 cursor-pointer">
              <div className="flex gap-3">
                <div className="h-9 w-9 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm">
                  DR
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">
                    Doctor Chat (Group)
                  </h4>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5 max-w-[160px] truncate">
                    Dr. Priya Shah: Reports for PT-0001 uploaded.
                  </p>
                </div>
              </div>
              <span className="text-[10px] text-gray-400 font-bold">
                10m ago
              </span>
            </div>

            {/* Chat 2 */}
            <div className="p-4 hover:bg-gray-50/50 flex items-start justify-between gap-3 cursor-pointer transition-colors">
              <div className="flex gap-3">
                <div className="h-9 w-9 bg-green-105/10 rounded-xl flex items-center justify-center text-green-700 font-bold text-sm">
                  RE
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">
                    Reception Desk
                  </h4>
                  <p className="text-[11px] text-gray-550 mt-0.5 max-w-[160px] truncate">
                    Staff Schedule updated for the coming week.
                  </p>
                </div>
              </div>
              <span className="text-[10px] text-gray-400 font-bold">
                1h ago
              </span>
            </div>
          </div>
        </div>

        {/* Messages Panel (col-span-8) */}
        <div className="lg:col-span-8 flex flex-col justify-between h-full bg-gray-50/20">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-100 bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 bg-blue-150/10 rounded-xl flex items-center justify-center text-blue-600 font-bold text-xs">
                DR
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-950">
                  Doctor Chat Group
                </h4>
                <p className="text-[10px] text-gray-400 font-semibold mt-0.5">
                  3 active clinicians: Dr. Sharma, Dr. Shah, Dr. Kumar
                </p>
              </div>
            </div>
          </div>

          {/* Messaging Area */}
          <div className="flex-1 p-6 space-y-4 overflow-y-auto">
            {/* Msg Left */}
            <div className="flex items-start gap-3 max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=80&fit=crop&auto=format&q=80"
                alt="Dr. Sharma"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <div>
                <div className="p-3 bg-white border border-gray-200 rounded-2xl rounded-tl-none text-xs text-gray-800 space-y-1">
                  <span className="text-[9px] text-gray-450 font-bold block">
                    Dr. Arvind Sharma
                  </span>
                  <p className="leading-relaxed">
                    Hey team, did we get the pathological results for patient
                    Vikram Singh yet?
                  </p>
                </div>
                <span className="text-[9px] text-gray-400 font-bold block mt-1 ml-1">
                  11:15 AM
                </span>
              </div>
            </div>

            {/* Msg Left 2 */}
            <div className="flex items-start gap-3 max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1594824813573-246434de83fb?w=80&fit=crop&auto=format&q=80"
                alt="Dr. Priya Shah"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <div>
                <div className="p-3 bg-white border border-gray-200 rounded-2xl rounded-tl-none text-xs text-gray-800 space-y-1">
                  <span className="text-[9px] text-gray-455 font-bold block">
                    Dr. Priya Shah
                  </span>
                  <p className="leading-relaxed">
                    Yes, I just uploaded the Lipid profile and HbA1c values to
                    his file. They look borderline high.
                  </p>
                </div>
                <span className="text-[9px] text-gray-400 font-bold block mt-1 ml-1">
                  11:18 AM
                </span>
              </div>
            </div>

            {/* Msg Right */}
            <div className="flex items-start gap-3 max-w-lg ml-auto flex-row-reverse">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&auto=format&q=80"
                alt="Sarthak Tanpure"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <div>
                <div className="p-3 bg-blue-600 text-white rounded-2xl rounded-tr-none text-xs space-y-1">
                  <span className="text-[9px] text-blue-200 font-bold block">
                    You (Sarthak Tanpure)
                  </span>
                  <p className="leading-relaxed">
                    Understood. I will schedule a follow-up consultation with
                    Dr. Sharma for this evening.
                  </p>
                </div>
                <span className="text-[9px] text-gray-400 font-bold block mt-1 mr-1 text-right">
                  11:20 AM
                </span>
              </div>
            </div>
          </div>

          {/* Input Bar */}
          <div className="p-4 border-t border-gray-150 bg-white">
            <div className="relative flex items-center bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
              <button className="p-1.5 hover:bg-gray-200 rounded-lg text-gray-400 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
              </button>
              <textarea
                rows="1"
                placeholder="Type message here..."
                className="w-full bg-transparent border-none outline-none resize-none pl-3 pr-10 text-xs text-gray-805 placeholder-gray-400 pt-1"
              ></textarea>
              <button className="absolute right-2 p-1.5 bg-blue-600 hover:bg-blue-705 text-white rounded-lg active:scale-95 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="22" x2="11" y1="2" y2="13" />
                  <polyline points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
