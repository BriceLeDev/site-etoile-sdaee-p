"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/22899573110"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl transition hover:bg-[#128C7E] animate-bounce-slow"
      aria-label="Discuter sur WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-3xl"></i>
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
        Besoin d&apos;aide ?
      </span>
    </motion.a>
  );
}
