const steps = ["Discovery", "Planning", "Design", "Development", "Launch"];

export default function Process() {
  return (
    <section className="section">
      <div className="container-custom">
        <h2 className="text-5xl font-black mb-12">Process</h2>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div
              key={step}
              className="
              glass
              rounded-3xl
              p-8
              "
            >
              <p className="text-indigo-400">0{index + 1}</p>

              <h3 className="mt-3 font-bold">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
