const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Redux",
  "Git",
  "GitHub",
  "Responsive Design",
  "REST APIs",
  "Framer Motion",
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <h2 className="text-5xl font-black mb-12">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="
              glass
              px-6
              py-3
              rounded-full
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
