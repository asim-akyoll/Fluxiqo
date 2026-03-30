"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Rocket, Shield, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-fluxiqo/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fluxiqo-light/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            <span className="text-fluxiqo font-semibold tracking-wider uppercase text-sm mb-4 block">
              BİZ KİMİZ?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
              Sıradanlığı reddediyor,<br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fluxiqo to-fluxiqo-light">
                geleceğin iş modellerini 
              </span> inşa ediyoruz.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Fluxiqo olarak; işletmelerin dijital potansiyelini zirveye taşımak için veri ile çalışan, kendi kendine öğrenebilen ve yorulmak bilmeyen yapay zeka otomasyonları kuruyoruz. 
              <br/><br/>
              Biz sadece teknoloji entegre etmiyoruz; şirketinizin DNA'sına yapay zekayı aşılıyoruz. Amacımız sizi manuel iş yükünden kurtarıp asıl stratejik hedeflerinize odaklanmanızı sağlamaktır.
            </p>
            
            <button onClick={() => window.dispatchEvent(new CustomEvent('openCalModal'))} className="inline-flex items-center gap-2 font-semibold text-fluxiqo hover:text-fluxiqo-dark transition-colors group">
              Bizimle Tanışın
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right Column: Visual Value Cards */}
          <div className="relative">
            {/* Desktop Only Connection Line */}
            <div className="hidden lg:block absolute left-[50px] top-[10%] bottom-[10%] w-0.5 bg-gradient-to-b from-transparent via-fluxiqo/20 to-transparent -z-10"></div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 md:p-8 rounded-[24px] border border-gray-100 shadow-lg shadow-gray-200/40 relative group hover:border-fluxiqo/30 transition-colors"
                style={{ marginLeft: '0px' }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-fluxiqo/10 text-fluxiqo flex items-center justify-center shrink-0">
                    <BrainCircuit size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Özel AI Mimarları</h3>
                    <p className="text-gray-600 leading-relaxed md:text-lg">Her firmanın kültürü farklıdır. Sizin kodlarınıza ve yöntemlerinize özel dil modelleri sunarız.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 md:p-8 rounded-[24px] border border-gray-100 shadow-lg shadow-gray-200/40 relative group hover:border-fluxiqo/30 transition-colors"
                style={{ marginLeft: '40px' }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-fluxiqo/10 text-fluxiqo flex items-center justify-center shrink-0">
                    <Rocket size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Kurulum Değil, Evrim</h3>
                    <p className="text-gray-600 leading-relaxed md:text-lg">Bir aracı bırakıp gitmeyiz, sizinle birlikte ekibinizi yeni çağa adapte edecek otomasyon evrimini yaşatırız.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white p-6 md:p-8 rounded-[24px] border border-gray-100 shadow-lg shadow-gray-200/40 relative group hover:border-fluxiqo/30 transition-colors"
                style={{ marginLeft: '0px' }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-fluxiqo/10 text-fluxiqo flex items-center justify-center shrink-0">
                    <Shield size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Etik ve Güvenlik Odaklı</h3>
                    <p className="text-gray-600 leading-relaxed md:text-lg">AI operasyonlarında şirketinizin gizli veri setlerinin sızmamasını sağlayan %100 kapalı devre sistemleri benimseriz.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
