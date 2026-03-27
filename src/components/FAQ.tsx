"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Yapay zekâ otomasyonu nedir, işime nasıl fayda sağlar?",
    answer: "Yapay zekâ otomasyonu, işletmenizdeki rutin, tekrarlayan ve zaman alan süreçlerin (müşteri desteği, veri girişi, randevu takibi) yapay zekâ tarafından otonom bir şekilde yürütülmesidir. Bu sayede insan hatası minimuma iner, operasyonel hızınız artar ve ekibiniz değerli vaktini şirketi büyütecek stratejik işlere harcayabilir.",
  },
  {
    question: "Fluxiqo hangi hizmetleri sunuyor?",
    answer: "Fluxiqo olarak; iş süreçlerinizin derinlemesine analizi, 7/24 hizmet veren akıllı chatbotlar, telefon aramalarını karşılayan sesli asistanlar, CRM sisteminizle konuşan satış otomasyonları ve saniyeler içinde sosyal medya/reklam içeriği üreten yapay zekâ sistemleri kuruyoruz.",
  },
  {
    question: "Bir otomasyon projesi ne kadar sürede hayata geçer?",
    answer: "Süreçlerin karmaşıklığına ve entegre edilecek sistem (CRM, ERP vb.) sayısına göre değişmekle birlikte; temel asistan ve basit iş akışı otomasyonlarını genellikle 1-2 hafta içerisinde, daha kapsamlı departman bazlı çözümleri ise 3-4 haftalık bir planlamayla kusursuz biçimde canlıya alıyoruz.",
  },
  {
    question: "Kurulumdan sonra ne tür destek veriyorsunuz?",
    answer: "Sistemleri kurup işi bırakmıyoruz. Çözümler canlıya alındıktan sonra da yapay zekâ modellerinin performansını izliyor, ekibinize gerekli eğitimleri veriyor ve değişen iş ihtiyaçlarınıza göre sistemleri sürekli eğitmeye ve iyileştirmeye devam ediyoruz.",
  },
  {
    question: "Yapay zekâ otomasyonunun maliyeti nedir?",
    answer: "Maliyetler kurulacak sistemin büyüklüğüne ve kapsamına göre şekillenir. Ancak otomasyon bir masraf değil, güçlü bir yatırımdır. Sistemin size kazandıracağı devasa zaman ve iş gücü tasarrufu sayesinde kurulum maliyetini genellikle ilk birkaç ay içinde fazlasıyla geri kazanmış olursunuz.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-fluxiqo font-semibold tracking-wider uppercase text-sm mb-3 block">Sorular & Cevaplar</span>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            Merak ettiklerinizin yanıtları.
          </h2>
          <p className="text-gray-500 text-lg">
            Aklınıza takılan soruları çözmek için buradayız. Aşağıda en çok sorulan soruları bulabilirsiniz.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden hover:border-fluxiqo/30 transition-colors"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900 tracking-tight pr-8">{faq.question}</span>
                <span className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${openIdx === idx ? "bg-fluxiqo text-white" : "bg-gray-200 text-gray-500"}`}>
                  {openIdx === idx ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed text-base pt-0 border-t border-gray-100/50 mt-2">
                      <div className="pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
