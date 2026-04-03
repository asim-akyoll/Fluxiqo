import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fluxiqo.com"),
  title: "Fluxiqo | Dijital Otomasyon Ajansı",
  description: "İşletmelerin daha akıllı çalışması, daha hızlı ölçeklenmesi ve özel yapay zeka çözümleriyle cesurca yenilik yapması için gücümüzü kullanıyoruz.",
  icons: {
    icon: "/favicon789987.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.fluxiqo.com",
  },
  openGraph: {
    type: "website",
    url: "https://www.fluxiqo.com",
    siteName: "Fluxiqo",
    title: "Fluxiqo | Dijital Otomasyon Ajansı",
    description: "İşletmelerin daha akıllı çalışması, daha hızlı ölçeklenmesi ve özel yapay zeka çözümleriyle cesurca yenilik yapması için gücümüzü kullanıyoruz.",
    images: [
      {
        url: "/sonolsunartık.png",
        width: 1200,
        height: 630,
        alt: "Fluxiqo - Dijital Otomasyon Ajansı",
      },
    ],
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fluxiqo | Dijital Otomasyon Ajansı",
    description: "İşletmelerin daha akıllı çalışması, daha hızlı ölçeklenmesi ve özel yapay zeka çözümleriyle cesurca yenilik yapması için gücümüzü kullanıyoruz.",
    images: ["/sonolsunartık.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Fluxiqo",
    "alternateName": "Fluxiqo Otomasyon Ajansı",
    "url": "https://www.fluxiqo.com",
    "logo": "https://www.fluxiqo.com/sonolsunartık.png",
    "image": "https://www.fluxiqo.com/sonolsunartık.png",
    "description": "İşletmelerin daha akıllı çalışması, daha hızlı ölçeklenmesi ve özel yapay zeka çözümleriyle cesurca yenilik yapması için gucumuzu kullanıyoruz.",
    "email": "info@fluxiqo.com",
    "areaServed": "TR",
    "inLanguage": "tr",
    "sameAs": [
      "https://www.fluxiqo.com"
    ],
    "knowsAbout": [
      "Yapay Zeka Otomasyonu",
      "Chatbot Geliştirme",
      "Sesli Asistan",
      "CRM Otomasyon",
      "Dijital Dönüşüm",
      "AI İş Akışı"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Fluxiqo Hizmetleri",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Akıllı Chatbot Entegrasyonu" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sesli AI Asistan" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM ve Satış Otomasyonu" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI İçerik Üretimi" } }
      ]
    }
  };

  return (
    <html lang="tr" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-screen font-sans bg-white text-gray-900 antialiased selection:bg-fluxiqo-light selection:text-white">
        {children}
      </body>
    </html>
  );
}
