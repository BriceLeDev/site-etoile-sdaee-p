"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#about" },
    { name: "Nos Services", href: "#services" },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 flex flex-col transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
        }`}
      >
        {/* Banner Announcement */}
        <div 
          onClick={() => setIsBannerOpen(true)}
          className="w-full bg-brand-red text-white py-2 md:py-2.5 px-4 text-center text-xs md:text-sm font-semibold cursor-pointer hover:bg-brand-red-deep transition-colors flex items-center justify-center gap-2 sm:gap-3"
        >
          <span className="animate-pulse text-base">📢</span>
          <span className="truncate max-w-[80%] sm:max-w-none">COMMUNIQUÉ OFFICIEL : SDAEE-P met à disposition des surveillants.</span>
          <span className="underline hidden sm:inline decoration-white/50 underline-offset-2">Lire l'annonce</span>
        </div>

        <div className={`container mx-auto px-4 flex justify-between items-center font-sans transition-all duration-300 ${isScrolled ? "h-16" : "h-20"}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white shadow-sm transition-transform duration-300 group-hover:rotate-6 flex-shrink-0">
              <Image
                src="/image/logo.jpeg"
                alt="Logo SDAEE-P"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-brand-dark text-lg leading-tight tracking-tight">
                SDAEE-P/CFR
              </span>
              <span className="text-[10px] text-primary font-bold uppercase tracking-widest">
                Excellence & Avenir
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brand-dark/80 hover:text-primary font-semibold transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-primary text-white font-bold transition-all shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 hover:bg-primary/90 active:scale-95"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-brand-dark p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white border-t border-brand-light shadow-xl overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-brand-dark/90 hover:text-primary font-medium text-lg py-2 border-b border-brand-light last:border-0"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 w-full text-center py-4 rounded-xl bg-primary text-white font-bold shadow-lg"
                >
                  Contactez-nous
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Banner Modal */}
      <AnimatePresence>
        {isBannerOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-sans">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBannerOpen(false)}
              className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 bg-brand-light flex items-start justify-between border-b border-brand-dark/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-brand-red text-white shadow-sm">
                    <i className="fa-solid fa-bullhorn"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark">Communiqué Officiel</h3>
                    <p className="text-sm font-medium text-brand-red mt-1">SDAEE-P / CFR</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsBannerOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/50 text-gray-500 hover:bg-white hover:text-brand-dark transition-colors"
                >
                  <i className="fa-solid fa-xmark text-lg"></i>
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar text-brand-dark/90 space-y-6">
                <p className="font-semibold text-lg leading-relaxed">
                  Dans le cadre de l’élargissement de ses activités pédagogiques et organisationnelles, la SDAEE-P / CFR informe le public qu’elle met désormais à disposition des surveillants qualifiés et expérimentés pour :
                </p>
                <ul className="space-y-3 bg-brand-light/50 p-5 rounded-xl border border-brand-dark/5">
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-primary"></i>
                    <span>Les universités publiques et privées</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-primary"></i>
                    <span>Les établissements scolaires et centres de formation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-primary"></i>
                    <span>Les examens et concours nationaux et internationaux</span>
                  </li>
                </ul>

                <div>
                  <h4 className="font-bold text-brand-dark mb-4 text-lg">Objectifs de cette initiative :</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-start gap-3">
                      <i className="fa-solid fa-bullseye text-brand-red mt-1"></i>
                      <p className="text-sm">Assurer le bon déroulement des épreuves</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-start gap-3">
                      <i className="fa-solid fa-scale-balanced text-brand-red mt-1"></i>
                      <p className="text-sm">Garantir une surveillance rigoureuse, impartiale et crédible</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-start gap-3">
                      <i className="fa-solid fa-eye text-brand-red mt-1"></i>
                      <p className="text-sm">Contribuer à l’équité et la transparence des évaluations</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-start gap-3">
                      <i className="fa-solid fa-users text-brand-red mt-1"></i>
                      <p className="text-sm">Apporter un soutien logistique et organisationnel aux institutions</p>
                    </div>
                  </div>
                </div>

                <p className="text-center font-medium italic pt-4 border-t border-brand-dark/10">
                  La SDAEE-P / CFR reste ainsi fidèle à sa mission : accompagner efficacement élèves, étudiants et institutions dans la réussite et la crédibilité des évaluations.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
