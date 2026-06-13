"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setLoading(false);
        setStatus("success");
        form.current.reset();
      })
      .catch(() => {
        setLoading(false);
        setStatus("error");
      });
  };

  return (
    <section id="contact-form" className="section">
      <div className="container-custom grid md:grid-cols-2 gap-16">
        {/* LEFT INFO */}
        <div>
          <h2 className="text-5xl font-black">
            Contact <span className="gradient-text">Me</span>
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Fill out the form and I’ll get back to you within 24 hours.
          </p>

          <div className="mt-10 space-y-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/923159833182?text=Hi%20Yahya,%20I%20have%20a%20project%20for%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary block text-center"
            >
              WhatsApp Me
            </a>
          </div>
        </div>

        {/* FORM */}
        <form ref={form} onSubmit={sendEmail} className="glass p-8 space-y-5">
          <input
            name="user_name"
            required
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 outline-none"
          />

          <input
            name="user_email"
            type="email"
            required
            placeholder="Your Email"
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 outline-none"
          />

          <textarea
            name="message"
            required
            rows="5"
            placeholder="Tell me about your project..."
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 outline-none"
          />

          <button
            disabled={loading}
            className="btn-primary w-full flex justify-center items-center gap-2 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* STATUS */}
          {status === "success" && (
            <p className="text-green-400 text-sm">
              ✔ Message sent successfully
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm">
              ✖ Failed to send. Try WhatsApp.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
