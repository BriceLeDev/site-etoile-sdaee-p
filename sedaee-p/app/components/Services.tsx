"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"enseignements" | "formations">("enseignements");

  // Empêcher le scroll du body quand le modal est ouvert
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  const services = [
    {
      id: "enseignement-primaire",
      category: "enseignements",
      title: "Enseignement Primaire",
      desc: "Acquisition des bases fondamentales : lecture, écriture, calcul et culture générale.",
      icon: "fa-child-reaching",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      delay: 0.1,
      details: [
        { label: "Matières", value: "Français, Mathématiques, Sciences, Histoire-Géographie, Éducation Civique, Langues étrangères (Anglais, Espagnol)" },
        { label: "Objectif", value: "Acquisition des bases fondamentales (lecture, écriture, calcul, culture générale)" },
        { label: "Méthodes", value: "Pédagogie active, jeux éducatifs, exercices progressifs" },
        { label: "Soutien", value: "Répétitions personnalisées, évaluations régulières, suivi des compétences" },
      ]
    },
    {
      id: "enseignement-college",
      category: "enseignements",
      title: "Enseignement Collège",
      desc: "Consolidation des acquis et préparation intensive au BEPC.",
      icon: "fa-school",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      delay: 0.2,
      details: [
        { label: "Niveaux", value: "6ème à 3ème" },
        { label: "Matières", value: "Français, Mathématiques, Sciences Physiques, SVT, Histoire-Géographie, Anglais, Espagnol, Éducation Civique, Informatique" },
        { label: "Objectif", value: "Consolider les acquis, préparer le BEPC" },
        { label: "Soutien", value: "Révisions guidées, corrections détaillées, simulations d’examens" },
      ]
    },
    {
      id: "enseignement-lycee",
      category: "enseignements",
      title: "Enseignement Lycée",
      desc: "Préparation au BAC pour les séries générales (A, C, D) et techniques (E, F, G, TI).",
      icon: "fa-graduation-cap",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      delay: 0.3,
      details: [
        { label: "Niveaux", value: "2nde, 1ère, Terminale" },
        { label: "Séries", value: "Séries Générales (A, C, D) et Techniques (E, F, G1, G2, G3, TI)" },
        { label: "Objectif", value: "Préparation intensive au BAC" },
        { label: "Méthodes", value: "Suivi par matière, orientation académique, soutien en petits groupes" },
        { label: "Spécialités", value: "Préparation aux épreuves écrites et orales, méthodologie, gestion du temps" },
      ]
    },
    {
      id: "enseignement-universitaire",
      category: "enseignements",
      title: "Enseignement Universitaire",
      desc: "Aide à la compréhension, préparation aux partiels, mémoires et soutenances.",
      icon: "fa-building-columns",
      color: "text-red-600",
      bgColor: "bg-red-100",
      delay: 0.4,
      details: [
        { label: "Domaines", value: "Mathématiques, Sciences, Économie, Droit, Lettres modernes, Anglais, Philosophie, Informatique, Gestion, Médecine, etc." },
        { label: "Public", value: "Étudiants de toutes universités, de la licence au master" },
        { label: "Objectif", value: "Aide à la compréhension des cours, préparation aux partiels, mémoire et soutenance" },
      ]
    },
    {
      id: "formation-professionnelle",
      category: "formations",
      title: "Formation Professionnelle",
      desc: "Compétences pratiques en bureautique, informatique, langues et gestion.",
      icon: "fa-briefcase",
      color: "text-teal-600",
      bgColor: "bg-teal-100",
      delay: 0.1,
      details: [
        { label: "Filières", value: "Bureautique, Langues, Informatique, Gestion & Comptabilité" },
        { label: "Objectif", value: "Acquérir des compétences pratiques, insertion professionnelle, reconversion" },
        { label: "Durée", value: "Modules courts ou formations certifiantes selon le besoin" },
      ]
    },
    {
      id: "preparation-concours",
      category: "formations",
      title: "Préparation aux Concours",
      desc: "Entraînement intensif pour les concours administratifs, grandes écoles, santé, etc.",
      icon: "fa-file-signature",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
      delay: 0.2,
      details: [
        { label: "Cibles", value: "Concours administratifs, grandes écoles, recrutement enseignants, gendarmerie, police, santé" },
        { label: "Méthodes", value: "Entraînement intensif, fiches de révision, simulations de concours, coaching individuel" },
      ]
    },
    {
      id: "alphabetisation",
      category: "formations",
      title: "Alphabétisation",
      desc: "Apprentissage progressif pour lire, écrire et compter, adapté aux adultes.",
      icon: "fa-book-open-reader",
      color: "text-pink-600",
      bgColor: "bg-pink-100",
      delay: 0.3,
      details: [
        { label: "Public visé", value: "Adultes, jeunes déscolarisés" },
        { label: "Objectif", value: "Lire, écrire, compter, s’exprimer correctement en français" },
        { label: "Méthode", value: "Pédagogie adaptée aux adultes, apprentissage progressif, langue locale comme support" },
      ]
    },
    {
      id: "tests-langues",
      category: "formations",
      title: "Tests de Langues",
      desc: "Préparation TCF, DELF, IELTS, TOEFL avec diagnostic et simulations réelles.",
      icon: "fa-language",
      color: "text-green-600",
      bgColor: "bg-green-100",
      delay: 0.4,
      details: [
        { label: "Français", value: "DELF/DALF (Diplômes valables à vie), TCF/TEF (Tests de niveau, ex: Canada)" },
        { label: "Anglais", value: "TOEFL/IELTS (Universités), TOEIC (Affaires), Duolingo English Test" },
        { label: "1. Diagnostic", value: "Évaluation initiale pour ne pas perdre de temps sur les acquis." },
        { label: "2. Coaching", value: "Entraînement sportif : Skimming & Scanning, connecteurs logiques." },
        { label: "3. Simulation", value: "Examens blancs rigoureux pour gérer le stress et le temps." },
      ]
    },
  ];

  const filteredServices = services.filter(service => service.category === activeTab);

  return (
    <section id="services" className="py-24 bg-brand-light overflow-hidden relative">
      <div className="container mx-auto px-4 font-sans">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-xs"
          >
            Nos Domaines d&apos;Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-brand-dark mt-2 mb-8"
          >
            Nos pôles d'enseignement et d'accompagnement
          </motion.h2>

          {/* Toggle Buttons (Enseignements vs Formations) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex bg-white p-1.5 rounded-full shadow-sm relative mx-auto"
          >
            {/* Sliding Pill Background */}
            <div 
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full transition-all duration-300 ease-out z-0 ${
                activeTab === "enseignements" ? "bg-primary left-1.5" : "bg-teal-600 left-[calc(50%+3px)]"
              }`}
            />
            
            <button
              onClick={() => setActiveTab("enseignements")}
              className={`relative z-10 px-6 sm:px-8 py-3 rounded-full text-sm font-bold transition-colors w-40 sm:w-48 ${
                activeTab === "enseignements" ? "text-white" : "text-brand-dark/80 hover:text-brand-dark"
              }`}
            >
              Enseignements
            </button>
            <button
              onClick={() => setActiveTab("formations")}
              className={`relative z-10 px-6 sm:px-8 py-3 rounded-full text-sm font-bold transition-colors w-40 sm:w-48 ${
                activeTab === "formations" ? "text-white" : "text-brand-dark/80 hover:text-brand-dark"
              }`}
            >
              Formations
            </button>
          </motion.div>
        </div>

        {/* Grid avec animation AnimatePresence pour les filtres */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-8 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all flex flex-col cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Decorative blob background */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 opacity-20 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-110 ${service.bgColor}`}
                ></div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-8 group-hover:rotate-12 transition-transform duration-300 ${service.bgColor} ${service.color}`}
                >
                  <i className={`fa-solid ${service.icon}`} aria-hidden="true"></i>
                </div>

                <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-dark/80 text-sm mb-6 leading-relaxed flex-grow">
                  {service.desc}
                </p>

                <button
                  className={`inline-flex items-center font-bold text-sm ${service.color} hover:underline group/btn mt-auto text-left`}
                >
                  Plus de détails
                  <i className="fa-solid fa-arrow-right ml-2 text-xs transition-transform group-hover/btn:translate-x-1"></i>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Popup pour les détails */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className={`p-6 sm:p-8 ${selectedService.bgColor} flex items-start justify-between`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-white shadow-sm ${selectedService.color}`}>
                    <i className={`fa-solid ${selectedService.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark">{selectedService.title}</h3>
                    <p className={`text-sm font-medium ${selectedService.color} mt-1`}>Domaine d'expertise SDAEE-P</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/50 text-gray-500 hover:bg-white hover:text-brand-dark transition-colors"
                  aria-label="Fermer"
                >
                  <i className="fa-solid fa-xmark text-lg"></i>
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                <p className="text-brand-dark/80 text-lg mb-8 leading-relaxed">
                  {selectedService.desc}
                </p>

                <div className="space-y-6">
                  {selectedService.details.map((detail: any, i: number) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-100">
                      <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <i className="fa-solid fa-check text-primary text-xs"></i>
                        {detail.label}
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-brand-light/50 flex justify-end gap-4">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 rounded-xl text-brand-dark/80 font-semibold hover:bg-brand-blue-lighter/50 transition-colors"
                >
                  Fermer
                </button>
                <Link
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className={`px-5 py-2.5 rounded-xl text-white font-semibold shadow-md hover:shadow-lg transition-all bg-primary hover:brightness-110`}
                >
                  S'inscrire
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
