import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Compare from "@/components/Compare";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import LegalModal from "@/components/LegalModal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <Hero />
        <Process />
        <Services />
        <Features />
        <About />
        <Compare />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <LegalModal />
    </div>
  );
}
