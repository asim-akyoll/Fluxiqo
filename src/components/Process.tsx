"use client";

import { motion } from "framer-motion";
import { Search, Zap, Headphones } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Keşif & Analiz",
    description: "İş süreçlerinizi derinlemesine inceliyoruz. Otomasyona uygun adımları tespit ediyor, ekibinizle görüşüyor, mevcut iş akışlarını analiz ediyor ve yapay zekânın en büyük etkiyi yaratacağı noktaları netleştiriyoruz.",
    icon: Search,
  },
  {
    number: "2",
    title: "Tasarım & Geliştirme",
    description: "Bu aşamada size özel çözümleri tasarlayıp hayata geçiriyoruz. İş akışlarınıza sorunsuz uyum sağlayan arayüzler ve otomasyon senaryoları oluşturuyor, gelişmiş yapay zekâ teknolojilerini adım adım sisteme entegre ediyoruz.",
    icon: Zap,
  },
  {
    number: "3",
    title: "Kurulum & Devreye Alma",
    description: "Çözümleri işleyişinize entegre ediyor, ekibinize eğitim veriyor ve sorunsuz bir geçiş için yanınızda oluyoruz. Süreçler stabil çalıştıktan sonra da performansı izleyip gerekli iyileştirmeleri yapmaya devam ediyoruz.",
    icon: Headphones,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-fluxiqo font-semibold tracking-wider uppercase text-sm mb-3 block">Sürecimiz</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Ölçülebilir sonuçlar için adımlarımız.
            </h2>
          </div>
          <p className="text-gray-600 text-lg md:text-right max-w-md">
            Stratejik, yapay zeka destekli süreçlerle işinizi daha hızlı, daha akıllı ve daha güçlü büyütün.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-fluxiqo-light transition-colors group overflow-hidden"
            >
              <div className={`absolute -top-8 text-9xl font-black text-fluxiqo/10 group-hover:text-fluxiqo/20 transition-colors select-none ${step.number === "1" ? "-right-4 md:-right-2" : "-right-8"}`}>
                {step.number}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-fluxiqo mb-8 relative z-10 group-hover:scale-110 group-hover:bg-fluxiqo group-hover:text-white transition-all duration-300">
                <step.icon size={26} strokeWidth={1.5} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
