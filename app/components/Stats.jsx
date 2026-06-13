const stats = [
  {
    value: "10+",
    label: "Projects",
  },
  {
    value: "95+",
    label: "Lighthouse",
  },
  {
    value: "100%",
    label: "Responsive",
  },
];

export default function Stats() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
              glass
              rounded-3xl
              p-10
              text-center
              "
            >
              <h2 className="text-5xl font-black">{stat.value}</h2>

              <p className="text-gray-400 mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
