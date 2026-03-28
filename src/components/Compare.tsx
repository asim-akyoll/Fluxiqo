"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  { fluxiqo: "Hızlı kurulum ve hazır AI iş akışları", others: "Yavaş uygulama ve manuel kurulum süreci" },
  { fluxiqo: "Sizinle büyümek ve adapte olmak için tasarlandı", others: "Ölçeklendikçe manuel güncelleme gerektirir" },
  { fluxiqo: "Gerçek zamanlı, AI destekli analitikler", others: "Sınırlı veya gecikmeli raporlama" },
  { fluxiqo: "Görevleri otomatikleştirir, genel giderleri düşürür", others: "Yüksek işgücü maliyetleri, az otomasyon" },
  { fluxiqo: "Uzman desteği + AI kılavuzu", others: "Sınırlı müşteri desteği veya tamamen eksik" },
];

export default function Compare() {
  return (
    <section id="compare" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-fluxiqo font-semibold tracking-wider uppercase text-sm mb-3 block">Karşılaştırma</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
            Peki ya diğer şirketler?
          </h2>
          <p className="text-gray-600 text-lg">
            İşletmeler için yapay zeka gücünü en iyi şekilde dizginleyerek sıradan standartları nasıl aştığımızı görün.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-[32px] border border-gray-100 p-6 md:p-10 shadow-sm"
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 pb-6 border-b border-gray-200">
            <div className="flex flex-col items-center sm:items-start">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-3 shadow-sm shadow-fluxiqo/20 overflow-hidden border border-gray-100 p-1">
                <img src="/Fluxiqo-Logo.png" alt="Fluxiqo Logo" className="w-full h-full object-contain scale-[3.5] mix-blend-multiply" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Fluxiqo</h3>
            </div>
            <div className="flex flex-col items-center sm:items-start opacity-60">
              <div className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center text-gray-500 font-bold tracking-tight text-xl mb-3">
                ?
              </div>
              <h3 className="text-2xl font-bold text-gray-500 tracking-tight">Diğerleri</h3>
            </div>
          </div>

          <div className="space-y-6">
            {comparisons.map((row, idx) => (
              <div key={idx} className="grid grid-cols-2 gap-4 md:gap-8 group">
                <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm group-hover:border-fluxiqo/30 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-fluxiqo/10 text-fluxiqo flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-gray-900 font-medium text-sm md:text-base leading-snug">{row.fluxiqo}</span>
                </div>
                
                <div className="flex items-start gap-3 bg-gray-100/50 p-4 rounded-2xl border border-transparent opacity-80 mix-blend-multiply">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={14} strokeWidth={3} />
                  </div>
                  <span className="text-gray-500 font-medium text-sm md:text-base leading-snug">{row.others}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
