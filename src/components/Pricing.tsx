"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Başlangıç",
    price: "$750",
    period: "/ay",
    description: "Sürece yeni dahil olanlar için temel yapay zeka entegrasyonu.",
    features: [
      "Temel AI araçları kullanımı",
      "Sınırlı otomasyon özellikleri",
      "Gerçek zamanlı temel raporlama",
      "Basit Chatbot entegrasyonu",
    ],
    isPopular: false,
  },
  {
    name: "Profesyonel",
    price: "$1700",
    period: "/ay",
    description: "Hızlı büyüyen ajanslar ve ekipler için gelişmiş otomasyon planı.",
    features: [
      "Başlangıç planındaki her şey",
      "Üçüncü parti yazılım entegrasyonu",
      "Gelişmiş analitikler ve panolar",
      "Premium Chatbot özellikleri",
      "Çapraz platform otomasyonları",
    ],
    isPopular: true,
  },
  {
    name: "Kurumsal",
    price: "$4700",
    period: "/ay",
    description: "Sınırsız güç arayan büyük ölçekli ve kurumsal şirketler için tamamen özel.",
    features: [
      "Profesyonel planındaki her şey",
      "Size özel atanmış büyüme uzmanı",
      "Tamamen özel rapor tasarımları",
      "Şirkete özel AI çözümleri ve LLM modelleri",
      "Ölçeklenebilir altyapı garantisi",
    ],
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50 border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-fluxiqo font-semibold tracking-wider uppercase text-sm mb-3 block">Fiyatlandırma</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
            Gizli ücretler olmadan düz planlar.
          </h2>
          <p className="text-gray-600 text-lg">
            Hizmetlerimiz için net, öngörülebilir ve işletmenizin büyüklüğüne göre ölçeklenen doğrudan paketler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-[32px] border relative flex flex-col bg-white ${
                plan.isPopular 
                ? "border-fluxiqo/50 shadow-2xl shadow-fluxiqo/10 md:-translate-y-4" 
                : "border-gray-100 shadow-sm hover:border-fluxiqo-light transition-colors"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-fluxiqo to-fluxiqo-light text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                  En Popüler
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-end gap-1">
                <span className="text-5xl font-extrabold text-gray-900 tracking-tight">{plan.price}</span>
                <span className="text-gray-500 font-medium mb-1">{plan.period}</span>
              </div>

              <Link
                href="#contact"
                className={`w-full py-4 rounded-xl font-bold text-base transition-all flex justify-center items-center mb-8 ${
                  plan.isPopular 
                  ? "bg-fluxiqo text-white hover:bg-fluxiqo-dark shadow-lg shadow-fluxiqo/30" 
                  : "bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                Hemen Başlayın
              </Link>

              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-4">{plan.name} planında bulunanlar:</p>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-fluxiqo shrink-0" />
                      <span className="text-gray-600 text-sm leading-tight pt-0.5">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
