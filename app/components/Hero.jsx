"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative">
      <div className="absolute inset-0">
        <div className="w-[700px] h-[700px] bg-indigo-600/20 blur-[180px] absolute top-20 left-1/2 -translate-x-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-indigo-400 mb-4">FRONTEND DEVELOPER</p>

          <h1 className="text-6xl md:text-8xl font-black leading-[0.95]">
            Building
            <span className="gradient-text block">High-Converting</span>
            Web Experiences
          </h1>

          <p className="text-gray-400 mt-8 max-w-2xl text-lg">
            I design and build modern, fast, and scalable web applications using
            React & Next.js. Focused on performance, UX, and business impact.
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <a href="#projects" className="btn-primary">
              View Work
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="grid grid-cols-3 mt-24 text-center">
            <div>
              <h2 className="text-4xl font-bold">10+</h2>
              <p className="text-gray-500">Projects</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">95+</h2>
              <p className="text-gray-500">Performance</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">100%</h2>
              <p className="text-gray-500">Responsive</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
