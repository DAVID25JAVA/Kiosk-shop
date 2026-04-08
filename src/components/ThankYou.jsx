"use client";
import { useEffect } from "react";
import { Oval } from "react-loader-spinner";

export default function ThankYouScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 5000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="bg-white p-10 max-w-2xl w-full rounded-3xl shadow-xl text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h1>
      <p className="text-gray-500">Redirecting...</p>
      <div className="flex items-center justify-center mt-5">
        <Oval color="#8A2BE2" />
      </div>
    </div>
  );
}
