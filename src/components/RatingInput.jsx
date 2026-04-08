"use client";

const EMOJIS = ["😞", "😕", "🙂", "😊", "🤩"];
const LABELS = ["Terrible", "Poor", "Okay", "Good", "Excellent"];

export default function RatingInput({ scale, labels, value, onChange }) {
  const isNPS = scale === 10;

  if (isNPS) {
    const getColor = (num) => {
      if (num <= 6) return "low";
      if (num <= 8) return "mid";
      return "high";
    };

    const colorMap = {
      low: {
        active: "bg-violet-600 border-violet-600 text-white shadow-violet-200",
        hover: "hover:border-violet-300 hover:text-violet-500",
      },
      mid: {
        active: "bg-indigo-500 border-indigo-500 text-white shadow-indigo-200",
        hover: "hover:border-indigo-300 hover:text-indigo-500",
      },
      high: {
        active: "bg-purple-600 border-purple-600 text-white shadow-purple-200",
        hover: "hover:border-purple-300 hover:text-purple-500",
      },
    };

    return (
      <div className="space-y-4 max-w-2xl w-full">
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => {
            const type = getColor(num);
            const colors = colorMap[type];
            const isSelected = value === num;

            return (
              <button
                key={num}
                onClick={() => onChange(num)}
                className={`aspect-square rounded-2xl border-2 font-bold text-base transition-all duration-150
                  ${
                    isSelected
                      ? `${colors.active} shadow-lg scale-110`
                      : `border-slate-200 bg-white text-slate-500 ${colors.hover} hover:scale-105`
                  }`}
              >
                {num}
              </button>
            );
          })}
        </div>

        <div className="flex justify-between text-xs font-medium px-1">
          <span className="flex items-center gap-1 text-violet-400">
            <span className="w-2 h-2 rounded-full bg-violet-400 inline-block" />
            Low
          </span>
          <span className="flex items-center gap-1 text-indigo-400">
            <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" />
            Medium
          </span>
          <span className="flex items-center gap-1 text-purple-500">
            <span className="w-2 h-2 rounded-full bg-purple-500 inline-block" />
            High
          </span>
        </div>

        {value && (
          <div
            className={`text-center text-sm font-semibold py-2 rounded-xl
              ${
                value <= 6
                  ? "bg-violet-50 text-violet-500"
                  : value <= 8
                  ? "bg-indigo-50 text-indigo-500"
                  : "bg-purple-50 text-purple-600"
              }`}
          >
            {value <= 6
              ? "We’ll improve 😔"
              : value <= 8
              ? "Thanks for feedback 🙂"
              : "Awesome! 🎉"}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        {Array.from({ length: scale }, (_, i) => i + 1).map((num) => {
          const isSelected = value === num;
          const isFilled = value && num <= value;

          return (
            <button
              key={num}
              onClick={() => onChange(num)}
              className={`group flex-1 flex flex-col items-center gap-2 py-5 rounded-2xl border-2 transition-all duration-150
                ${
                  isSelected
                    ? "border-violet-600 bg-violet-600 text-white shadow-lg shadow-violet-200 scale-105"
                    : isFilled
                    ? "border-violet-200 bg-violet-50 text-violet-700"
                    : "border-slate-100 bg-white text-slate-400 hover:border-violet-200 hover:bg-violet-50 hover:scale-105"
                }`}
            >
              <span
                className={`text-2xl transition-transform ${
                  isSelected ? "scale-125" : "group-hover:scale-110"
                }`}
              >
                {EMOJIS[num - 1]}
              </span>

              <span className="text-xs font-bold">{num}</span>
            </button>
          );
        })}
      </div>

      <div className="flex justify-between px-1">
        <span className="text-xs text-slate-400">
          {labels?.low ?? "Very Dissatisfied"}
        </span>
        <span className="text-xs text-slate-400">
          {labels?.high ?? "Very Satisfied"}
        </span>
      </div>

      {value && (
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 bg-violet-50 text-violet-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-violet-100">
            <span>{EMOJIS[value - 1]}</span>
            {LABELS[value - 1]}
          </span>
        </div>
      )}
    </div>
  );
}
