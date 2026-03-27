"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "10k+", label: "Mutlu Kullanıcılar", delay: 0 },
    { value: "5k+", label: "Tasarruf Edilen Saat", delay: 0.1 },
    { value: "4.8", label: "Ortalama Puan", delay: 0.2 },
  ];

  return (
    <section className="py-16 bg-fluxiqo dark:bg-gray-900 border-y border-fluxiqo-light/20 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.delay }}
              className={`flex flex-col items-center justify-center text-center p-6 ${idx === 0 ? "pt-0 md:pt-6" : ""} ${idx === 2 ? "pb-0 md:pb-6" : ""}`}
            >
              <h3 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter drop-shadow-md">
                {stat.value}
              </h3>
              <p className="text-white/80 font-medium text-lg uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
