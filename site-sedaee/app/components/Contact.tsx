"use client";

import { motion } from "framer-motion";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message envoyé ! Nous vous contacterons bientôt.");
  };

  return (
    <section id="contact" className="py-24 bg-white font-sans">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-hidden border border-gray-100"
        >
          {/* Info Section (Left) */}
          <div className="w-full lg:w-2/5 bg-blue-600 p-10 lg:p-14 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8">Contactez-nous</h3>
              <p className="text-blue-100 mb-10 leading-relaxed">
                Vous avez des questions ou souhaitez vous inscrire ? Notre équipe est prête à vous accompagner.
              </p>

              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                    <i className="fa-solid fa-location-dot text-xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Adresse</h4>
                    <p className="text-blue-100 text-sm">Centre Ville, Lomé, Togo</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                    <i className="fa-solid fa-phone text-xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Téléphone</h4>
                    <p className="text-blue-100 text-sm">+228 99 57 31 10</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                    <i className="fa-solid fa-envelope text-xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-blue-100 text-sm">contact@sdaee-pcfr.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 relative z-10 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white text-blue-600 transition-all">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white text-blue-600 transition-all">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Form Section (Right) */}
          <div className="w-full lg:w-3/5 p-10 lg:p-14 bg-gray-50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Nom complet</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Jean Dupont"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none bg-white transition-all shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Téléphone</label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: +228 00 00 00 00"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none bg-white transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Service d&apos;intérêt</label>
                <select className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none bg-white transition-all shadow-sm appearance-none">
                  <option>Mathématiques</option>
                  <option>Physique-Chimie</option>
                  <option>Anglais</option>
                  <option>Informatique</option>
                  <option>Allemand</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Message (optionnel)</label>
                <textarea
                  rows={4}
                  placeholder="Comment pouvons-nous vous aider ?"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none bg-white transition-all shadow-sm"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-5 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                Envoyer ma demande
                <i className="fa-solid fa-paper-plane text-sm"></i>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
