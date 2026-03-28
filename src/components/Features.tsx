"use client";

import { motion } from "framer-motion";
import { LineChart, Zap, Workflow, Code } from "lucide-react";

const features = [
  {
    title: "Veri Odaklı Kararlar",
    description: "Ham veriyi eyleme dönüştürülebilir içgörülere çevirerek daha akıllı kararlar almanızı ve ölçülebilir bir büyüme elde etmenizi sağlıyoruz.",
    icon: LineChart,
  },
  {
    title: "Verimli Büyüme",
    description: "Daha çok çalışarak değil, akıllıca çalışarak ilerleyin. AI destekli verimlilik ile maliyetleri düşürürken sonuç alma hızınızı artırın.",
    icon: Zap,
  },
  {
    title: "İş Akışı Otomasyonu",
    description: "Zaman alan ve tekrarlanan görevleri sisteme yaptırarak iş yükünüzü hafifletin, işinizi otomatik pilota bağlayın.",
    icon: Workflow,
  },
  {
    title: "Özel AI Model Geliştirme",
    description: "Benzersiz iş ihtiyaçlarınıza göre sıfırdan oluşturulmuş, sürece özel yapay zeka modelleriyle rekabette bir adım öne geçin.",
    icon: Code,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-fluxiqo/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <span className="text-fluxiqo font-semibold tracking-wider uppercase text-sm mb-3 block">Avantajlarımız</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
            Zorluğu kolaya çeviren AI yetenekleri
          </h2>
          <p className="text-gray-600 text-lg">
            İşletmenizin sırtındaki yükü almak için en ince ayrıntısına kadar düşünülmüş otomasyon özellikleri sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-fluxiqo/10 hover:border-fluxiqo-light transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 text-gray-900 flex items-center justify-center mb-6 group-hover:bg-fluxiqo group-hover:text-white transition-colors duration-500 shadow-inner">
                <feature.icon size={30} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
