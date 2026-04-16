"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stats = [
    { label: "Élèves Accompagnés", value: "+500" },
    { label: "Taux de Réussite", value: "98%" },
    { label: "Experts Formateurs", value: "10+" },
    { label: "Suivi En Ligne", value: "24/7" },
  ];

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/background.png"
          alt="SDAEE Background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Blue Overlay Layer */}
        <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
        {/* Gradient Overlay for Better Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-900/30 to-blue-900/90"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
            <span className="text-blue-100 text-sm font-medium tracking-wide">
              Inscriptions ouvertes pour la nouvelle rentrée
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          variants={itemVariants}
          className="font-sans text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-xl tracking-tight"
        >
          Révélez Votre Potentiel <br />
          <span className="text-orange-500">Académique & Professionnel</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-blue-100/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Structure d'accompagnement spécialisée en Mathématiques, Physique, Anglais et Informatique. 
          Nous aidons les élèves et les particuliers à atteindre l'excellence.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
          <Link
            href="#contact"
            className="px-10 py-4 rounded-full bg-orange-500 text-blue-900 font-bold text-lg hover:bg-orange-400 transition-all shadow-lg transform hover:-translate-y-1 hover:shadow-orange-500/20 active:scale-95"
          >
            Demander un devis gratuit
          </Link>
          <Link
            href="#services"
            className="px-10 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-lg hover:bg-white/20 transition-all shadow-lg transform hover:-translate-y-1 active:scale-95"
          >
            Découvrir nos cours
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-white border-t border-white/10 pt-10 max-w-5xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-4xl lg:text-5xl font-extrabold mb-1">{stat.value}</span>
              <span className="text-blue-200 text-xs uppercase tracking-wider font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
