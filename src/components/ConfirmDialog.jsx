"use client";

export default function ConfirmDialog({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 relative">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent rounded-full" />

        <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
          ✔
        </div>

        <h3 className="text-2xl outline-none font-semibold text-gray-900 text-center mb-2">
          Submit Survey?
        </h3>

        <p className="text-gray-500 text-sm text-center mb-8">
          You won't be able to change after submitting.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-3 rounded-xl border border-gray-300 text-gray-600"
          >
            Go Back
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 py-3 rounded-xl bg-green-500 text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}