"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const fadeInVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInRightVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const points = [
    {
      title: "Programmes personnalisés :",
      desc: "Adaptés au niveau de chaque élève (primaire, collège, lycée, université).",
    },
    {
      title: "Approche pratique :",
      desc: "Mise en situation réelle pour les cours d'informatique et de langues.",
    },
    {
      title: "Environnement motivant :",
      desc: "Des salles aérées et bien équipées.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 font-sans">
          {/* IMAGE SECTION (Left) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className="w-full lg:w-1/2 relative group"
          >
            {/* Decorative blobs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-5 w-48 h-48 bg-orange-100/50 rounded-full blur-3xl -z-10"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.01] h-[500px]">
              <Image
                src="/image/photo-kenedi.png"
                alt="Cadre d'apprentissage"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-white p-6 rounded-xl shadow-xl border-l-4 border-blue-600 max-w-xs z-10"
            >
              <p className="font-bold text-gray-900 text-lg mb-1">La clé de la réussite ?</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                La persévérance et un bon encadrement.
              </p>
            </motion.div>
          </motion.div>

          {/* TEXT SECTION (Right) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRightVariants}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              Une Pédagogie Adaptée à <span className="text-blue-600">Chacun</span>
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed text-lg italic">
              Bienvenue au <strong>SDAEE-P/CFR</strong>. Nous ne sommes pas seulement un centre de répétitions, 
              nous sommes une structure d'accompagnement global. Notre mission est de combler les lacunes, de 
              renforcer les compétences et de préparer nos apprenants aux défis de demain.
            </p>

            <ul className="space-y-6 mb-10">
              {points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-4">
                    <i className="fa-solid fa-check text-blue-600 text-xs"></i>
                  </div>
                  <span className="text-gray-700 text-base">
                    <strong className="font-semibold text-gray-900">{point.title}</strong> {point.desc}
                  </span>
                </motion.li>
              ))}
            </ul>

            <Link
              href="#services"
              className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group"
            >
              En savoir plus sur notre approche
              <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
