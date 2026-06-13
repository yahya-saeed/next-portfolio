import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Stats from "@/app/components/Stats";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import Services from "@/app/components/Services";
import Skills from "@/app/components/Skills";
import Process from "@/app/components/Process";
import Footer from "@/app/components/Footer";
import Testimonials from "@/app/components/Testimonials";
import ContactCTA from "@/app/components/ContactCTA";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <FeaturedProjects />
        <Services />
        <Skills />
        <Process />
        <Testimonials />
        <ContactCTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
