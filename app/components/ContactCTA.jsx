export default function ContactCTA() {
  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <div className="glass rounded-3xl p-12 md:p-20">
          <h2 className="text-5xl font-black">Let’s Build Your Next Project</h2>

          <p className="text-gray-400 mt-6 max-w-2xl">
            Need a modern website, React application, or e-commerce store? Let’s
            discuss your project and bring it to life.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            {/* Scroll to form */}
            <a
              href="#contact-form"
              className="px-8 py-4 bg-indigo-600 rounded-full hover:scale-105 transition"
            >
              Send Message
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923159833182?text=Hi%20Yahya,%20I%20have%20a%20project%20for%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/10 rounded-full hover:scale-105 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
