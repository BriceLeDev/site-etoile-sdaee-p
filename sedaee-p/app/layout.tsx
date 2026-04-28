import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cours de Répétition & Soutien Scolaire au Togo | SDAEE-P",
  description: "SDAEE-P : Leader du soutien scolaire à Lomé et partout au Togo. Cours de répétition en Mathématiques, Physique, Anglais et Informatique. Excellence académique assurée.",
  keywords: ["Cours de répétition Togo", "Soutien scolaire Lomé", "Cours en ligne Togo", "SDAEE-P", "Excellence scolaire", "Mathématiques", "Physique", "Informatique"],
  openGraph: {
    title: "Cours de Répétition & Soutien Scolaire au Togo | SDAEE-P",
    description: "Accompagnement scolaire de haute qualité au Togo pour la réussite de vos enfants.",
    url: "https://www.sdaee-pcfr.com",
    siteName: "SDAEE-P",
    locale: "fr_TG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cours de Répétition & Soutien Scolaire au Togo | SDAEE-P",
    description: "Soutien scolaire d'excellence au Togo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "SDAEE-P (Excellence & Avenir)",
              "url": "https://www.sdaee-pcfr.com",
              "logo": "https://www.sdaee-pcfr.com/image/logo.png",
              "description": "Cours de répétition et soutien scolaire d'excellence au Togo (Lomé). Spécialisé en Mathématiques, Physique, Anglais et Informatique.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lomé",
                "addressCountry": "TG"
              },
              "sameAs": [
                "https://www.facebook.com/sdaeep",
                "https://www.linkedin.com/company/sdaeep"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
