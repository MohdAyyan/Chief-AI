"use client";

import { ChefHat } from "lucide-react";

export default function LoadingSpinner({
  title = "Cooking up details...",
  message = "Please wait a moment while our AI chef prepares everything.",
}) {
  return (
    <div className="min-h-[65vh] flex flex-col items-center justify-center p-6 bg-stone-50/50">
      <div className="text-center space-y-4 max-w-sm mx-auto">
        <div className="relative w-20 h-20 mx-auto">
          {/* Outer Pulsing Aura */}
          <div className="absolute inset-0 rounded-full border-4 border-orange-400/30 animate-ping" />
          <div className="absolute -inset-2 rounded-full border-2 border-orange-500/20 animate-spin border-t-orange-600" />

          {/* Center Chef Hat Icon */}
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-orange-600 to-amber-500 text-white shadow-xl shadow-orange-500/25">
            <ChefHat className="w-10 h-10 animate-bounce" />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-1.5 pt-2">
          <h3 className="text-xl font-bold text-stone-900 tracking-tight">
            {title}
          </h3>
          {message && (
            <p className="text-sm text-stone-500 font-light">
              {message}
            </p>
          )}
        </div>

        {/* Loading bar animation */}
        <div className="w-48 h-1.5 mx-auto bg-stone-200 rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 animate-[shimmer_1.5s_infinite_linear]" />
        </div>
      </div>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
