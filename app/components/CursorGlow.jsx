"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const move = (e) => {
      const glow = document.getElementById("cursor-glow");
      if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      id="cursor-glow"
      className="fixed w-72 h-72 pointer-events-none rounded-full bg-indigo-600/20 blur-3xl -translate-x-1/2 -translate-y-1/2 z-50"
    />
  );
}
