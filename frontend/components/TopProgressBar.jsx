"use client";

import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleAnchorClick = (event) => {
      const target = event.currentTarget;
      const targetUrl = target.getAttribute("href");
      const targetAttr = target.getAttribute("target");

      if (
        targetUrl &&
        targetUrl.startsWith("/") &&
        targetAttr !== "_blank" &&
        !event.metaKey &&
        !event.ctrlKey
      ) {
        if (targetUrl !== `${pathname}${window.location.search}`) {
          setLoading(true);
        }
      }
    };

    const handleFormSubmit = () => {
      setLoading(true);
    };

    const anchors = document.querySelectorAll("a[href^='/']");
    anchors.forEach((a) => a.addEventListener("click", handleAnchorClick));

    const forms = document.querySelectorAll("form");
    forms.forEach((f) => f.addEventListener("submit", handleFormSubmit));

    return () => {
      anchors.forEach((a) => a.removeEventListener("click", handleAnchorClick));
      forms.forEach((f) => f.removeEventListener("submit", handleFormSubmit));
    };
  }, [pathname, searchParams]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-orange-100 overflow-hidden pointer-events-none">
      <div className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 animate-[loading-bar_1.2s_infinite_ease-in-out]" />
      <style jsx>{`
        @keyframes loading-bar {
          0% {
            width: 0%;
            margin-left: 0%;
          }
          50% {
            width: 70%;
            margin-left: 15%;
          }
          100% {
            width: 100%;
            margin-left: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default function TopProgressBar() {
  return (
    <Suspense fallback={null}>
      <NavigationProgress />
    </Suspense>
  );
}
