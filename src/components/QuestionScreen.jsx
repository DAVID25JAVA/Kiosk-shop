"use client";

import RatingInput from "./RatingInput";
import TextInput from "./TextInput";

export default function QuestionScreen({
  question,
  questionIndex,
  totalQuestions,
  answer,
  onAnswer,
  onNext,
  onPrev,
  onSkip,
}) {
  const progress = ((questionIndex + 1) / totalQuestions) * 100;
  const isFirst = questionIndex === 0;
  const isLast = questionIndex === totalQuestions - 1;

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">

        {/* ── Header: step counter + progress ── */}
        <div className="mb-5 px-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-violet-500">
              Question
            </span>
            <span className="text-sm text-slate-400">
              <strong className="text-slate-700">{questionIndex + 1}</strong> / {totalQuestions}
            </span>
          </div>

          {/* Progress bar */}
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-violet-500 to-indigo-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Step dots */}
          <div className="flex items-center gap-1.5 mt-3 justify-center">
            {Array.from({ length: totalQuestions }).map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i < questionIndex
                    ? "w-4 h-1.5 bg-violet-400"
                    : i === questionIndex
                    ? "w-6 h-1.5 bg-violet-600"
                    : "w-1.5 h-1.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Card ── */}
        <div className="relative bg-white rounded-3xl shadow-2xl shadow-slate-200 px-8 py-10 overflow-hidden">
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500" />

          {/* Question type badge */}
          <div className="inline-flex items-center gap-2 bg-violet-50 rounded-full px-3 py-1 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-violet-500">
              {question.type === "rating" ? "Rate your experience" : "Your thoughts"}
            </span>
          </div>

          {/* Question text */}
          <h2 className="text-2xl font-bold text-slate-800 leading-snug mb-8">
            {question.text}
          </h2>

          {/* Input */}
          <div className="mb-8">
            {question.type === "rating" ? (
              <RatingInput
                scale={question.scale}
                labels={question.labels}
                value={answer}
                onChange={onAnswer}
              />
            ) : (
              <TextInput value={answer || ""} onChange={onAnswer} />
            )}
          </div>

          {/* ── Navigation ── */}
          <div className="flex items-center gap-3 pt-2 border-t border-slate-100">

            {/* Prev */}
            <button
              onClick={onPrev}
              disabled={isFirst}
              className="flex items-center justify-center w-11 h-11 rounded-xl border-2 border-slate-200 text-slate-400 transition-all hover:border-slate-300 hover:text-slate-600 disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>

            {/* Skip */}
            <button
              onClick={onSkip}
              className="flex-1 h-11 rounded-xl border-2 border-dashed border-slate-200 text-slate-400 text-sm font-medium transition-all hover:border-slate-300 hover:text-slate-500"
            >
              Skip
            </button>

            {/* Next / Submit */}
            <button
              onClick={onNext}
              className="group flex-2 h-11 flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm shadow-md shadow-violet-200 transition-all hover:shadow-violet-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              {isLast ? "Submit Survey" : "Next Question"}
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom hint */}
        <p className="text-center text-xs text-slate-400 mt-4">
          {isFirst ? "Use Skip if you prefer not to answer" : "You can go back to change any answer"}
        </p>

      </div>
    </div>
  );
}