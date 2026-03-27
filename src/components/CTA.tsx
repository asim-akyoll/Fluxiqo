"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Listen for global open events from other components like Navbar or Hero
  useEffect(() => {
    const handleOpen = () => setIsModalOpen(true);
    window.addEventListener('openCalModal', handleOpen);
    return () => window.removeEventListener('openCalModal', handleOpen);
  }, []);

  return (
    <>
      <section id="cta" className="pt-4 pb-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f8f9fa] rounded-[24px] md:rounded-[32px] py-12 md:py-16 px-6 md:px-10 text-center shadow-sm border border-gray-200 flex flex-col items-center justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">
              İşinizi <span className="text-fluxiqo">Dönüştürmeye Hazır mısınız ?</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg mb-8">
              Fluxiqo ekibiyle kısa bir keşif görüşmesi planlayın.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-fluxiqo text-white text-base font-medium rounded-full shadow-md shadow-fluxiqo/20 hover:shadow-fluxiqo/40 hover:-translate-y-1 transition-all duration-300"
            >
              15 Dakikalık Görüşme Planla
            </button>
            <p className="mt-4 text-xs md:text-sm text-gray-500 font-medium tracking-wide">
              Tamamen <span className="text-fluxiqo">Ücretsizdir</span>
            </p>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-gray-900/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[24px] shadow-2xl w-full max-w-5xl h-[90vh] md:h-[85vh] flex flex-col overflow-hidden relative"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-white z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-fluxiqo/10 flex items-center justify-center text-fluxiqo">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 leading-tight">Ücretsiz Değerlendirme</h3>
                    <p className="text-xs text-gray-500">Fluxiqo Otomasyon Uzmanları</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 bg-gray-50 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Modal Body / Iframe */}
              <div className="flex-1 w-full bg-[#f8f9fa] relative">
                {/* Loader Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 gap-3">
                  <div className="w-8 h-8 border-4 border-gray-200 border-t-fluxiqo rounded-full animate-spin"></div>
                  <p className="text-sm font-medium">Takvim yükleniyor...</p>
                </div>
                
                {/* Iframe */}
                <iframe 
                  src="https://cal.eu/asim-akyol/fluxiqo-automation" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  className="relative z-10 w-full h-full bg-transparent"
                  allow="camera; microphone"
                ></iframe>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
