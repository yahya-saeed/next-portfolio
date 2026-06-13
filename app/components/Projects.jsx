import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.id}
            className="p-5 rounded-2xl border hover:shadow-xl transition"
          >
            <h3 className="font-bold text-xl">{p.title}</h3>
            <p className="text-gray-500 mt-2">{p.description}</p>

            <a
              href={p.link}
              className="inline-block mt-4 text-blue-500"
              target="_blank"
            >
              Live Demo →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
