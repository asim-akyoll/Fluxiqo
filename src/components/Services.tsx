"use client";

import { motion } from "framer-motion";
import { Send, Users, Activity, FileText } from "lucide-react";

const WorkflowVisual = () => (
  <div className="relative w-full h-full min-h-[240px] bg-[#f8f9fa] rounded-t-[32px] flex items-center justify-center overflow-hidden">
    <div className="relative w-full h-full flex items-center justify-center scale-90 sm:scale-100">
      {/* Center node */}
      <div className="absolute z-10 w-16 h-16 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center">
        <Activity className="text-gray-900" size={28} />
      </div>
      
      {/* Lines */}
      <div className="absolute w-[200px] h-[2px] bg-gray-200 rotate-0"></div>
      <div className="absolute w-[200px] h-[2px] bg-gray-200 rotate-45"></div>
      <div className="absolute w-[200px] h-[2px] bg-gray-200 -rotate-45"></div>

      {/* Outer nodes */}
      <div className="absolute -translate-x-[100px] w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center">
        <div className="w-5 h-5 bg-fluxiqo rounded-sm"></div>
      </div>
      <div className="absolute translate-x-[100px] w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center">
        <div className="w-5 h-5 bg-green-500 rounded-sm"></div>
      </div>
      <div className="absolute -translate-y-[70px] -translate-x-[70px] w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center">
        <div className="w-5 h-5 bg-yellow-500 rounded-sm"></div>
      </div>
      <div className="absolute translate-y-[70px] translate-x-[70px] w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center">
        <div className="w-5 h-5 bg-black rounded-sm"></div>
      </div>
      <div className="absolute -translate-y-[70px] translate-x-[70px] w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center">
        <div className="w-5 h-5 bg-orange-500 rounded-sm"></div>
      </div>
      <div className="absolute translate-y-[70px] -translate-x-[70px] w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center">
        <div className="w-5 h-5 bg-red-500 rounded-sm"></div>
      </div>
    </div>
  </div>
);

const ChatVisual = () => (
  <div className="relative w-full h-full min-h-[240px] bg-[#f8f9fa] rounded-t-[32px] p-6 flex flex-col justify-end">
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Bot message */}
      <div className="self-start bg-fluxiqo text-white px-5 py-3 rounded-2xl rounded-bl-none text-[13px] shadow-sm max-w-[85%]">
        Merhaba, size nasıl yardımcı olabilirim?
      </div>
      
      {/* User message */}
      <div className="self-end bg-white border border-gray-200 text-gray-700 px-5 py-3 rounded-2xl rounded-br-none text-[13px] shadow-sm max-w-[85%]">
        Merhaba, hizmetleriniz hakkında bilgi almak istiyorum
      </div>

      {/* Input area */}
      <div className="mt-2 bg-white border border-gray-200 rounded-full py-2.5 px-4 flex items-center justify-between shadow-sm">
        <div className="h-1.5 w-1/3 bg-gray-200 rounded-full"></div>
        <div className="text-fluxiqo">
          <Send size={16} className="ml-2" />
        </div>
      </div>
    </div>
  </div>
);

const CRMVisual = () => (
  <div className="relative w-full h-full min-h-[240px] bg-[#f8f9fa] rounded-t-[32px] flex items-center justify-center p-6">
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
          <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
          <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
        </div>
        <div className="px-2 py-1 bg-fluxiqo text-white text-[10px] font-bold rounded-full">
          4K+
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="h-2 w-16 bg-gray-200 rounded-full mb-2"></div>
          <div className="h-4 w-full bg-gray-100 rounded-md"></div>
        </div>
        <div>
          <div className="h-2 w-16 bg-gray-200 rounded-full mb-2"></div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-gray-100 rounded-full"></div>
            <div className="h-2 w-4/5 bg-gray-100 rounded-full"></div>
            <div className="h-2 w-[90%] bg-gray-100 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-end pt-2">
          <div className="w-10 h-6 bg-fluxiqo rounded-md flex items-center justify-center">
            <Send size={12} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContentVisual = () => (
  <div className="relative w-full h-full min-h-[240px] bg-[#f8f9fa] rounded-t-[32px] flex items-center justify-center p-6">
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
      <div className="flex gap-4">
        <div className="w-20 h-20 bg-gray-200 rounded-xl shrink-0"></div>
        <div className="flex-1 space-y-3 pt-1">
          <div className="h-3 w-4/5 bg-gray-200 rounded-full"></div>
          <div className="h-3 w-full bg-gray-100 rounded-full"></div>
          <div className="h-3 w-[85%] bg-gray-100 rounded-full"></div>
        </div>
      </div>
      <div className="mt-6 space-y-3">
        <div className="h-3 w-full bg-gray-100 rounded-full"></div>
        <div className="h-3 w-full bg-gray-100 rounded-full"></div>
        <div className="h-3 w-[60%] bg-gray-100 rounded-full"></div>
        
        <div className="flex gap-4 pt-3">
           <div className="h-10 w-full bg-gray-100 rounded-xl"></div>
           <div className="h-10 w-12 bg-gray-200 rounded-xl shrink-0"></div>
        </div>
      </div>
    </div>
  </div>
);


const servicesData = [
  {
    title: "İş Akışı",
    description: "Süreçlerinizi analiz edip tekrarlayan işleri otomatikleştiriyoruz. Uygulamalarınızı birbirine bağlayarak zaman ve operasyonel maliyet tasarrufu sağlıyoruz",
    visual: <WorkflowVisual />
  },
  {
    title: "Müşteri Hizmetleri",
    description: "Mesajlaşma kanallarınız için chatbot ve telefon hatlarınız sesli yapay zekâ asistanları kuruyoruz. Müşterileriniz 7/24 yanıt alırken, ekibiniz daha karmaşık taleplere odaklanır.",
    visual: <ChatVisual />
  },
  {
    title: "Satış / CRM Otomasyonları",
    description: "Lead bulma, teklif takibi ve e-posta cevaplama gibi satış adımlarınızı uçtan uca otomatikleştiriyoruz. CRM'inizle entegre akışlarla hiçbir fırsat gözden kaçmaz, ekibiniz satışa odaklanır",
    visual: <CRMVisual />
  },
  {
    title: "İçerik Üretimi",
    description: "Metin, görsel ve video içeriklerini üretken yapay zekâ ile ölçekliyoruz. İçerik yazılarından ürün görsellerine ve reklam videolarına kadar markanıza uygun içerikleri hızlıca oluşturmanızı sağlayan sistemler",
    visual: <ContentVisual />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-fluxiqo font-semibold tracking-wider uppercase text-sm mb-3 block">Hizmetlerimiz</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
            <span className="text-fluxiqo">Yeni Nesil</span> Yapay Zekâ Çözümleri
          </h2>
          <p className="text-gray-500 text-lg md:text-xl">
            İşletmenizin ihtiyaçlarına göre tasarlanan, uçtan uca otomasyon ve yapay zekâ çözümleri
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              {/* Visual Area */}
              <div className="w-full bg-[#f8f9fa] border-b border-gray-100 transition-colors duration-300 group-hover:bg-[#f3f5f8]">
                {service.visual}
              </div>
              
              {/* Content Area */}
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed mt-auto">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
