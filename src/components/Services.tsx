"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, Activity, Video, Heart } from "lucide-react";

/**
 * WORKFLOW visual for "İş Akışı" (Restored to Live Site version)
 */
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

      {/* Outer nodes - 6 Nodes as per live site */}
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

/**
 * CHAT visual for "Müşteri Hizmetleri" (Restored to Static Live version)
 */
const ChatVisual = () => {
  return (
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
};

/**
 * CRM visual for "Satış/CRM" (Static version)
 */
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

/**
 * UGC visual for "UGC & İçerik" (Updated Modern Version PRESERVED)
 */
const InstagramIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.12 1 12 1 12s0 3.88.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.88 23 12 23 12s0-3.88-.42-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const TiktokIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const UGCVisual = ({ isHovered }: { isHovered: boolean }) => (
  <div className="relative w-full h-full min-h-[240px] bg-[#f8f9fa] rounded-t-[32px] flex items-center justify-center p-6 overflow-hidden">
    {/* Visual group with 3-level responsive scaling */}
    <div className="relative flex items-center justify-center w-full h-full transition-all duration-500 scale-90 sm:scale-100">
      {/* Smartphone Mockup - Responsive width for Phone, Tablet, Desktop */}
      <div className="relative w-[100px] h-[160px] md:w-[115px] md:h-[180px] lg:w-[125px] lg:h-[195px] bg-gray-900 rounded-[22px] border-[3px] border-gray-800 shadow-xl p-1.5 flex flex-col transition-all duration-500" style={{ transform: isHovered ? 'scale(1.05) rotate(-2deg)' : 'scale(1)' }}>
        <div className="flex-1 bg-white rounded-[16px] overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 to-transparent"></div>
          <div className="mt-3 px-2 space-y-1.5">
            <div className="h-1.5 w-full bg-gray-200 rounded-full"></div>
            <div className="h-1.5 w-4/5 bg-gray-100 rounded-full"></div>
          </div>
          <div className="mt-3 mx-2 h-16 bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
            <Video className="text-gray-400" size={20} />
          </div>
          <div className="absolute bottom-1.5 left-0 right-0 px-3 flex justify-between">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-fluxiqo"></div>
          </div>
        </div>
      </div>

      {/* Social Media Buttons - Fluid Percentage Based (Phone, Tablet, Desktop) */}
      <motion.div 
        animate={isHovered ? { y: 5, x: -2 } : {}} 
        className="absolute top-[22%] left-[10%] md:left-[8%] lg:left-[5%] w-11 h-11 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-red-500 overflow-hidden transition-all duration-500"
      >
        <Heart size={22} fill="currentColor" />
      </motion.div>
      <motion.div 
        animate={isHovered ? { y: 5, x: 2 } : {}} 
        className="absolute top-[22%] right-[10%] md:right-[8%] lg:right-[5%] w-11 h-11 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-900 overflow-hidden transition-all duration-500"
      >
        <InstagramIcon size={22} />
      </motion.div>

      <motion.div 
        animate={isHovered ? { y: -8, x: 5 } : {}} 
        className="absolute bottom-[20%] left-[14%] md:left-[11%] lg:left-[7%] w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-900 overflow-hidden transition-all duration-500"
      >
        <YoutubeIcon size={20} />
      </motion.div>
      <motion.div 
        animate={isHovered ? { y: -8, x: -5 } : {}} 
        className="absolute bottom-[20%] right-[14%] md:right-[11%] lg:right-[7%] w-10 h-10 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-900 overflow-hidden transition-all duration-500"
      >
        <TiktokIcon size={20} />
      </motion.div>
    </div>
  </div>
);

const ServiceCard = ({ service, idx }: { service: any, idx: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden relative"
    >
      <div className="w-full h-[260px] bg-[#f8f9fa] border-b border-gray-100 transition-colors duration-300 group-hover:bg-[#f3f5f8]">
        {service.renderVisual(isHovered)}
      </div>
      <div className="p-6 sm:p-10 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
        <p className="text-gray-500 text-base md:text-lg leading-relaxed mt-auto">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

const servicesData = [
  {
    title: "İş Akışı",
    description: "Süreçlerinizi analiz edip tekrarlayan işleri otomatikleştiriyoruz. Uygulamalarınızı birbirine bağlayarak zaman ve operasyonel maliyet tasarrufu sağlıyoruz",
    renderVisual: () => <WorkflowVisual />
  },
  {
    title: "Müşteri Hizmetleri",
    description: "Mesajlaşma kanallarınız için chatbot ve telefon hatlarınız sesli yapay zekâ asistanları kuruyoruz. Müşterileriniz 7/24 yanıt alırken, ekibiniz daha karmaşık taleplere odaklanır.",
    renderVisual: () => <ChatVisual />
  },
  {
    title: "Satış / CRM Otomasyonları",
    description: "Lead bulma, teklif takibi ve e-posta cevaplama gibi satış adımlarınızı uçtan uca otomatikleştiriyoruz. CRM'inizle entegre akışlarla hiçbir fırsat gözden kaçmaz, ekibiniz satışa odaklanır",
    renderVisual: () => <CRMVisual />
  },
  {
    title: "UGC & İçerik Stratejisi",
    description: "Dönüşüm odaklı kullanıcı içerikleri (UGC) ve yapay zekâ destekli medya sistemleri. Markanız için güven inşa eden, viral potansiyelli ve ölçeklenebilir içerik akışları geliştiriyoruz.",
    renderVisual: (isHovered: boolean) => <UGCVisual isHovered={isHovered} />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-fluxiqo font-semibold tracking-wider uppercase text-sm mb-3 block">Hizmetlerimiz</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
            <span className="text-fluxiqo">Yeni Nesil</span> Yapay Zekâ Çözümleri
          </h2>
          <p className="text-gray-500 text-lg md:text-xl">
            İşletmenizin ihtiyaçlarına göre tasarlanan, uçtan uca otomasyon ve yapay zekâ çözümleri
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {servicesData.map((service, idx) => (
            <ServiceCard key={idx} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
