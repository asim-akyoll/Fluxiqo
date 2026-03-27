"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    client: "Satış İş Akışı Optimizasyonu",
    date: "2024",
    title: "Satış Süreci Verimliliği",
    description: "Müşteri takip ve CRM görevlerini otomatikleştirerek manuel iş yükünü %70 azalttık ve nitelikli müşteri dönüşüm oranlarını büyük ölçüde artırdık.",
    color: "from-fluxiqo to-fluxiqo-light",
  },
  {
    client: "Sağlık Hizmetleri Otomasyonu",
    date: "2024",
    title: "Klinik Kabul Sistemi",
    description: "Tüm kliniklerde yönetici süresini %55 azaltan ve hasta kayıt verimliliğini %38 artıran bir yapay zeka destekli kabul sistemi inşa ettik.",
    color: "from-gray-800 to-gray-600",
  },
  {
    client: "E-ticaret Kategori Etiketleme",
    date: "2023",
    title: "Akıllı Ürün Sınıflandırma",
    description: "10 binden fazla ürünü %92 doğrulukla otomatik etiketleyen, zaman maliyetini %80 kesen güçlü bir AI aracı yarattık.",
    color: "from-fluxiqo-dark to-fluxiqo",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-fluxiqo font-semibold tracking-wider uppercase text-sm mb-3 block">Projeler</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Ölçülebilir sonuçlar doğuran otomasyonlar.
            </h2>
          </div>
          <p className="text-gray-600 max-w-md text-lg md:text-right">
            Cesur fikirleri nasıl optimize, ölçeklenebilir ve sonuç odaklı zeki AI çözümlerine dönüştürdüğümüze göz atın.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative flex flex-col md:flex-row gap-8 items-center bg-gray-50 rounded-3xl p-8 lg:p-12 overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-fluxiqo/10 transition-all duration-500"
            >
              {/* Decorative gradient orb */}
              <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${project.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>

              <div className="w-full md:w-1/2 flex flex-col justify-center relative z-10">
                <div className="flex items-center gap-4 mb-6 text-sm font-medium text-gray-500">
                  <span className="bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100 uppercase tracking-wider text-xs font-bold text-fluxiqo">{project.client}</span>
                  <span>{project.date}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-fluxiqo transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-fluxiqo transition-colors group/link w-fit">
                  Hemen İncele
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover/link:bg-fluxiqo group-hover/link:text-white group-hover/link:border-fluxiqo transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </Link>
              </div>

              {/* Visual abstraction for the project since we don't have images */}
              <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden relative border border-gray-200/50 bg-white/50 backdrop-blur-sm p-4">
                <div className={`w-full h-full rounded-xl bg-gradient-to-br ${project.color} opacity-10 flex items-center justify-center shadow-inner`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-tr ${project.color} blur-2xl opacity-40 animate-pulse`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
