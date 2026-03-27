"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sürecimiz", href: "#process" },
    { name: "Hizmetlerimiz", href: "#services" },
    { name: "Faydalar", href: "#features" },
    { name: "Görüşler", href: "#reviews" },
    { name: "SSS", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? "bg-white/80 backdrop-blur-md border-gray-100 shadow-sm" : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Logo className="w-10 h-10" />
              <span className="font-bold text-xl tracking-tight text-gray-900 group-hover:text-fluxiqo transition-colors duration-300">
                FLUXIQO
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-fluxiqo transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fluxiqo transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#cta"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event('openCalModal'));
              }}
              className="inline-flex items-center justify-center px-6 py-2.5 border border-fluxiqo/20 text-sm font-semibold rounded-full text-fluxiqo bg-fluxiqo/10 hover:bg-fluxiqo hover:text-white hover:shadow-lg hover:shadow-fluxiqo/30 transition-all duration-300"
            >
              Ücretsiz Görüşme
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-fluxiqo focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl absolute w-full rounded-b-2xl overflow-hidden">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-fluxiqo hover:bg-gray-50 rounded-lg w-full text-center transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 w-full px-4">
              <a
                href="#cta"
                className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-fluxiqo shadow-md shadow-fluxiqo/20 hover:bg-fluxiqo-dark transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  window.dispatchEvent(new Event('openCalModal'));
                }}
              >
                Ücretsiz Görüşme Ayarla
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
