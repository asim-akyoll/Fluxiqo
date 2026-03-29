import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fluxiqo.com"),
  title: "Fluxiqo | Dijital Otomasyon Ajansı",
  description: "İşletmelerin daha akıllı çalışması, daha hızlı ölçeklenmesi ve özel yapay zeka çözümleriyle cesurca yenilik yapması için gücümüzü kullanıyoruz.",
  icons: {
    icon: "/Fluxiqo-SolÜst-Logo.png",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable}`}>
      <body className="min-h-screen font-sans bg-white text-gray-900 antialiased selection:bg-fluxiqo-light selection:text-white">
        {children}
      </body>
    </html>
  );
}
