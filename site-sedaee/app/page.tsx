import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <Header />
      
      <div className="flex-grow">
        <Hero />
        <About />
        <Services />

        {/* CTA Banner Section */}
        <section className="py-20 bg-blue-900 text-center text-white relative overflow-hidden">
          {/* Decorative background effects */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full -mr-32 -mb-32 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 max-w-2xl mx-auto leading-tight">
              Prêt à transformer votre parcours <span className="text-orange-500 underline decoration-2 underline-offset-8">académique</span> ?
            </h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto text-lg opacity-80">
              Rejoignez les centaines d&apos;élèves qui ont déjà fait confiance à notre expertise.
            </p>
            <Link
              href="#contact"
              className="inline-block px-10 py-4 bg-orange-500 text-blue-900 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-xl hover:shadow-white/10 transform hover:scale-105 active:scale-95"
            >
              Réserver ma place dès maintenant
            </Link>
          </div>
        </section>

        <Contact />
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
