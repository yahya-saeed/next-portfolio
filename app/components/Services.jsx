export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Building fast, responsive, and modern user interfaces using React, Next.js, and Tailwind CSS.",
    },
    {
      title: "E-Commerce Websites",
      description:
        "Creating professional online stores with product catalogs, shopping carts, authentication, and payment integrations.",
    },
    {
      title: "UI Implementation",
      description:
        "Converting Figma, Adobe XD, and design mockups into pixel-perfect responsive websites.",
    },
    {
      title: "Performance Optimization",
      description:
        "Improving loading speed, SEO, accessibility, and Lighthouse scores for better user experience.",
    },
    {
      title: "Website Redesign",
      description:
        "Modernizing outdated websites with clean design, animations, and improved usability.",
    },
    {
      title: "Maintenance & Support",
      description:
        "Bug fixing, feature additions, updates, and ongoing support for web applications.",
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-indigo-400 mb-3">SERVICES</p>

          <h2 className="text-5xl font-black">What I Can Build For You</h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Delivering modern web solutions that help businesses establish a
            strong online presence and provide exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="
              glass
              rounded-3xl
              p-8
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

              <p className="text-gray-400 leading-7">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
