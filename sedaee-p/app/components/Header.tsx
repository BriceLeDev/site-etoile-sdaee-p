"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
            className="px-6 py-2.5 rounded-full bg-primary text-white font-bold transition-all shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5 hover:bg-primary/90 active:scale-95"
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
  );
}
