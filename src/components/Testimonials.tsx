"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Bora Arslan",
    role: "Müşteri İlişkileri Yöneticisi",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Fluxiqo’nun kurduğu chatbot, destek taleplerimizin büyük kısmını otomatik karşıladı; hem iş yükümüz azaldı hem de müşterilerimiz anında cevap alır hâle geldi.",
  },
  {
    name: "Tuğçe Kara",
    role: "Klinik Koordinatörü",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    content: "Fluxiqo’nun sesli asistanı kliniğimizde randevu ve bilgilendirme aramalarını otomatik karşılıyor. Hastalarımız 7/24 ulaşabiliyor, danışma ekibimizin eli ciddi anlamda rahatladı.",
  },
  {
    name: "Berna Yıldız",
    role: "Kreatif Direktör",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    content: "Fluxiqo’nun görsel üretim sistemiyle yeni koleksiyonlarımızın ürün fotoğrafları ve kombinlerini dakikalar içinde oluşturuyoruz. Çekim maliyetimiz düştü, site ve reklam görsellerimiz çok daha profesyonel görünüyor.",
  },
  {
    name: "Çağatay Şanlı",
    role: "Dijital Pazarlama Uzmanı",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    content: "Fluxiqo’nun AI video sistemi ile Instagram ve TikTok için haftalık reklam videolarını otomatik üretiyoruz; içerik üretim süremiz saatlerden dakikalara indi.",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-fluxiqo font-semibold tracking-wider uppercase text-sm mb-3 block">Müşteri Yorumları</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
            Bizi onlardan dinleyin
          </h2>
          <p className="text-gray-600 text-lg">
            İşletmelerinin büyümesini bize emanet eden şirket ve ekiplerin gerçek deneyimleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:border-fluxiqo-light transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6 text-amber-400">
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                </div>
                <p className="text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md ring-offset-2 ring-2 ring-fluxiqo/20 shrink-0 bg-gray-100 relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm font-medium text-fluxiqo">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
