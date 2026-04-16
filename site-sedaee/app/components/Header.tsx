"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header
      className={`fixed bg-white w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md h-16" : "bg-transparent h-20"
      }`}
    >
      <div className="container mx-auto px-4 h-full flex justify-between items-center font-sans">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl font-bold group-hover:rotate-12 transition-transform duration-300">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-900 text-lg leading-tight tracking-tight">
              SDAEE-P/CFR
            </span>
            <span className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">
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
                  className="text-gray-600 hover:text-blue-600 font-semibold transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-bold transition-all shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5 hover:bg-blue-700 active:scale-95"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-900 p-2 focus:outline-none"
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
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium text-lg py-2 border-b border-gray-50 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 w-full text-center py-4 rounded-xl bg-blue-600 text-white font-bold shadow-lg"
              >
                Contactez-nous
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
