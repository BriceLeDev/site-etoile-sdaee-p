import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo & Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl font-bold transition-transform group-hover:rotate-12">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <span className="font-bold text-2xl tracking-tight uppercase">
                SDAEE-P/CFR
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Votre partenaire de confiance pour l&apos;éducation et la formation professionnelle. 
              Nous accompagnons chaque apprenant vers l&apos;excellence académique.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                <i className="fa-brands fa-x-twitter text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 relative inline-block">
              Liens Rapides
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-blue-600"></span>
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link href="#accueil" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-chevron-right text-[10px]"></i> Accueil
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-chevron-right text-[10px]"></i> À propos
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-chevron-right text-[10px]"></i> Nos Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-chevron-right text-[10px]"></i> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 relative inline-block">
              Nos Cours
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-blue-600"></span>
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link href="#services" className="hover:text-blue-400 transition-colors">Mathématiques</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-400 transition-colors">Physique-Chimie</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-400 transition-colors">Anglais</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-400 transition-colors">Informatique</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-400 transition-colors">Allemand</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6 relative inline-block">
              Newsletter
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-blue-600"></span>
            </h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Inscrivez-vous pour recevoir nos dernières actualités et offres de formation.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-gray-800 border-none rounded-l-lg px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-blue-600 w-full"
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 px-4 rounded-r-lg transition-colors"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {currentYear} SDAEE-P/CFR. Tous droits réservés.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-gray-300 transition-colors">Confidentialité</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Conditions d&apos;utilisation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
