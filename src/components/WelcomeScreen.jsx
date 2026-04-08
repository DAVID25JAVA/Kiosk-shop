"use client";

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="min-h-screen   flex items-center justify-center  ">
      <div className="relative bg-white rounded-3xl shadow-2xl   md:px-10 py-14  text-center overflow-hidden">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500" />

        {/* Icon */}
        <div className="mx-auto mb-6 w-20 h-20 rounded-2xl bg-violet-50 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-violet-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </div>

        {/* Badge */}
        <span className="inline-block bg-violet-50 text-violet-600 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          Customer Feedback
        </span>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-3">
          Welcome to <br />
          <span className="text-violet-500">Our Store</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-sm leading-relaxed mb-2 max-w-xs mx-auto">
          We&apos;d love to hear about your experience today.
        </p>

        {/* Time estimate chips */}
        <div className="flex items-center justify-center gap-4 mb-10 mt-4">
          {[
            { icon: "🕐", label: "2 min" },
            { icon: "📋", label: "5 questions" },
            { icon: "🔒", label: "Anonymous" },
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

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="group w-full py-4 rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600 text-white font-semibold text-base shadow-lg shadow-violet-200 hover:shadow-violet-300 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
        >
          Begin Survey
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>

        <p className="mt-5 text-xs text-slate-300">
          Your responses are confidential and help us improve
        </p>
      </div>
    </div>
  );
}
