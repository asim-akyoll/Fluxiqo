"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-12 lg:pt-20 lg:pb-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-fluxiqo/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute -top-20 right-1/4 w-[400px] h-[400px] bg-fluxiqo-light/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8 hover:shadow-md transition-all group"
        >
          <span className="flex h-2 w-2 rounded-full bg-fluxiqo animate-pulse"></span>
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-900">
            Yeni Nesil Dijital Çözüm Ortağınız
          </span>
          <ChevronRight size={14} className="text-gray-400 group-hover:text-fluxiqo transition-colors" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-8 max-w-5xl mx-auto"
        >
          Geleceğin Teknolojisiyle <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fluxiqo via-fluxiqo-light to-fluxiqo">
            İşinizi Otomatiğe Bağlayın
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-base text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          En kritik iş süreçlerinizi otomatikleştirmek için yapay zekânın gücünü kullanın; zamandan tasarruf edin, maliyetleri düşürün ve ekibinizin odağını gerçekten önemli işlere kaydırın.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#cta" 
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event('openCalModal'));
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-transparent text-base font-semibold rounded-full text-white bg-gray-900 hover:bg-fluxiqo hover:shadow-xl hover:shadow-fluxiqo/30 transition-all duration-300 group"
          >
            Ücretsiz Görüşme Ayarla
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <Link
            href="#process"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-200 text-base font-semibold rounded-full text-gray-900 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
          >
            <PlayCircle size={18} className="text-fluxiqo" />
            Süreci Keşfet
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <p className="text-sm font-medium text-gray-400 mb-6 uppercase tracking-widest">
            Dünyanın önde gelen markaları tarafından güveniliyor
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Logos that mimic the LanderOS "Trusted by big brands" section */}
            <div className="text-xl font-black italic tracking-widest">ElevenLabs</div>
            <div className="text-xl font-bold tracking-tight">MedAssist.AI</div>
            <div className="text-xl font-bold tracking-widest">AutoTag</div>
            <div className="text-xl font-extrabold uppercase">Framebase</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
