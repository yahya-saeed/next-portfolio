"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import projects from "@/app/data/projects";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-14">
          <div>
            <p className="text-indigo-400 uppercase tracking-widest text-sm">
              Portfolio
            </p>

            <h2 className="text-5xl font-black mt-2">Selected Work</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="
                glass
                group
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                hover:border-indigo-500/40
                transition-all
                duration-500
              "
            >
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                  priority={i === 0}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-2xl font-bold">{p.title}</h3>

                <p className="text-gray-400 mt-3 leading-relaxed">
                  {p.description}
                </p>

                <div className="flex gap-3 mt-6">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    Live Demo
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
