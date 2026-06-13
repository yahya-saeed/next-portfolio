"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
      fixed top-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }
    `}
    >
      <div className="container-custom flex justify-between items-center py-5">
        <h1 className="font-bold text-lg">
          Yahya<span className="text-indigo-400">.dev</span>
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#projects">Work</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="https://wa.me/923159833182" className="btn-primary text-sm">
          Hire Me
        </a>
      </div>
    </nav>
  );
}
