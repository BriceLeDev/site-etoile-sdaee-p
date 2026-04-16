"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Mathématiques",
      desc: "Algèbre, Géométrie, Analyse. Soutien scolaire et préparation aux examens.",
      icon: "fa-square-root-variable",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      delay: 0.1,
    },
    {
      title: "Physique-Chimie",
      desc: "Compréhension des lois fondamentales, mécanique et travaux pratiques.",
      icon: "fa-flask",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      delay: 0.2,
    },
    {
      title: "Anglais",
      desc: "Grammaire, communication orale et préparation au TOEIC/TOEFL.",
      icon: "fa-language",
      color: "text-green-600",
      bgColor: "bg-green-100",
      delay: 0.3,
    },
    {
      title: "Informatique",
      desc: "Initiation numérique, bureautique (Word, Excel) et programmation.",
      icon: "fa-laptop-code",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      delay: 0.4,
    },
    {
      title: "Allemand",
      desc: "Apprentissage de la langue, grammaire et pratique orale pour tous niveaux.",
      icon: "fa-book-open",
      color: "text-red-600",
      bgColor: "bg-red-100",
      delay: 0.5,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 font-sans">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold tracking-widest uppercase text-xs"
          >
            Nos Domaines d&apos;Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4"
          >
            Ce que nous proposons
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: service.delay, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all h-full"
            >
              {/* Decorative blob background */}
              <div
                className={`absolute top-0 right-0 w-24 h-24  opacity-20 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-110 ${service.bgColor}`}
              ></div>

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-8 group-hover:rotate-12 transition-transform duration-300 ${service.bgColor} ${service.color}`}
              >
                <i className={`fa-solid ${service.icon}`} aria-hidden="true"></i>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {service.desc}
              </p>

              <Link
                href="#contact"
                className={`inline-flex items-center font-bold text-sm ${service.color} hover:underline group/btn`}
              >
                S&apos;inscrire
                <i className="fa-solid fa-arrow-right ml-2 text-xs transition-transform group-hover/btn:translate-x-1"></i>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
