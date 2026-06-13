const testimonials = [
  {
    name: "Modern UI",
    text: "Clean and professional interfaces focused on user experience.",
  },
  {
    name: "Responsive Design",
    text: "Perfect experience across desktop, tablet and mobile devices.",
  },
  {
    name: "Performance",
    text: "Fast-loading websites optimized for SEO and conversions.",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container-custom">
        <h2 className="text-5xl font-black mb-16">Why Work With Me</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
              glass
              p-8
              rounded-3xl
              "
            >
              <h3 className="font-bold text-xl">{item.name}</h3>

              <p className="text-gray-400 mt-4">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
