"use client";

export default function TextInput({ value, onChange }) {
  return (
    <div className="w-full max-w-2xl mx-auto">

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3"
        rows={4}
        placeholder="Write your feedback..."
      />
    </div>
  );
}