"use client";

import { File, FileLockIcon, MoveRight, StarIcon, Timer } from "lucide-react";

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="min-h-screen   flex items-center justify-center  ">
      <div className="relative bg-white rounded-3xl shadow-2xl   md:px-10 py-14  text-center overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500" />

        <div className="mx-auto mb-6 w-20 h-20 rounded-2xl bg-violet-50 flex items-center justify-center">
          <StarIcon className="text-indigo-500 text-2xl" size={40}/>
        </div>

        <span className="inline-block bg-violet-50 text-violet-600 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          Customer Feedback
        </span>

        <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-3">
          Welcome to <br />
          <span className="text-violet-500">Our Store</span>
        </h1>

        <p className="text-slate-400 text-sm leading-relaxed mb-2 max-w-xs mx-auto">
          We&apos;d love to hear about your experience today.
        </p>

        <div className="flex items-center justify-center gap-4 mb-10 mt-4">
          {[
            { icon: <Timer className="text-indigo-500" />, label: "2 min" },
            {
              icon: <File className="text-indigo-500" />,
              label: "5 questions",
            },
            {
              icon: <FileLockIcon className="text-indigo-500" />,
              label: "Anonymous",
            },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 bg-slate-50 rounded-full px-3 py-1.5"
            >
              <span className="text-sm">{icon}</span>
              <span className="text-xs font-medium text-slate-500">
                {label}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={onStart}
          className="group w-full cursor-pointer py-4 rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600 text-white font-semibold text-base shadow-lg shadow-violet-200 hover:shadow-violet-300 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
        >
          Begin Survey
          <MoveRight />
        </button>

        <p className="mt-5 text-xs text-slate-400">
          Your responses are confidential and help us improve
        </p>
      </div>
    </div>
  );
}
