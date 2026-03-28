"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, FileText, Scale } from "lucide-react";

type LegalType = "kvkk" | "privacy" | "terms" | null;

export default function LegalModal() {
  const [activeLegal, setActiveLegal] = useState<LegalType>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (activeLegal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeLegal]);

  // Listen for custom events to open the modal with a specific legal text
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.type) {
        setActiveLegal(customEvent.detail.type as LegalType);
      }
    };

    window.addEventListener("openLegalModal", handleOpen);
    return () => window.removeEventListener("openLegalModal", handleOpen);
  }, []);

  const close = () => setActiveLegal(null);

  const getIcon = () => {
    switch (activeLegal) {
      case "kvkk":
        return <ShieldCheck size={24} className="text-fluxiqo" />;
      case "privacy":
        return <FileText size={24} className="text-fluxiqo" />;
      case "terms":
        return <Scale size={24} className="text-fluxiqo" />;
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (activeLegal) {
      case "kvkk":
        return "KVKK Aydınlatma Metni";
      case "privacy":
        return "Gizlilik Politikası";
      case "terms":
        return "Kullanım Koşulları";
      default:
        return "";
    }
  };

  return (
    <AnimatePresence>
      {activeLegal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 md:px-8 py-5 border-b border-gray-100 bg-gray-50/50 shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                  {getIcon()}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight">
                    {getTitle()}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">
                    Fluxiqo Automation Son Güncelleme: Mart 2026
                  </p>
                </div>
              </div>
              <button
                onClick={close}
                className="w-10 h-10 bg-white border border-gray-200 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-full flex items-center justify-center transition-colors shadow-sm"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto px-6 md:px-10 py-8 prose prose-gray prose-headings:font-bold prose-h3:text-gray-900 max-w-none text-sm md:text-base leading-relaxed text-gray-600">
              
              {/* === KVKK CONTENT === */}
              {activeLegal === "kvkk" && (
                <div className="space-y-6">
                  <p className="font-medium text-gray-900">
                    Kişisel Verilerin Korunması ve İşlenmesi Hakkında Aydınlatma Metni
                  </p>
                  <p>
                    Fluxiqo Otomasyon Ajansı ("Fluxiqo", "Şirket" veya "Biz") olarak, müşterilerimizin, potansiyel müşterilerimizin ve web sitemizi (şu anda bulunduğunuz siteyi) ziyaret eden kullanıcılarımızın kişisel verilerinin Türkiye Cumhuriyeti 6698 Sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve ilgili sair mevzuat kapsamında güvence altına alınmasına ve hukuka uygun olarak işlenmesine büyük önem veriyoruz.
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">1. Veri Sorumlusunun Kimliği</h3>
                  <p>
                    KVKK uyarınca, muhatap olduğunuz "Veri Sorumlusu", dijital otomasyon ve yapay zeka hizmetleri sunan Fluxiqo Otomasyon Ajansı'dır. 
                    <br/>İletişim: <strong>info@fluxiqo.com</strong>
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. İşlenen Kişisel Verileriniz Nelerdir?</h3>
                  <p>
                    Randevu oluşturma, iletişim formları veya projelerimizin sunumu süreçlerinde; adınız, soyadınız, işletme/kurum bilginiz, e-posta adresiniz ve telefon numaranız gibi temel iletişim bilgilerinizi bizimle doğrudan paylaşmanız halinde işlemekteyiz.
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. Kişisel Verilerinizin İşlenme Amaçları</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>Sizlere sunacağımız yapay zeka otomasyon hizmetleri için 15 dakikalık ücretsiz dijital toplantıların (Cal.com entegrasyonu üzerinden) organize edilmesi,</li>
                    <li>Taleplerinize yönelik özel iş akışı tasarımları ve fiyat tekliflerinin hazırlanıp iletilmesi,</li>
                    <li>Hizmet sonrası teknik destek ve acil durum operasyonlarının sürdürülebilmesi.</li>
                  </ul>
                  <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">4. Verilerinizin Kimlere ve Hangi Amaçla Aktarılabileceği</h3>
                  <p>
                    Fluxiqo; güveninizin temel bir prensip olduğuna inanır. Verileriniz reklam ajanslarına veya veri tüccarlarına <strong>kesinlikle satılmaz veya devredilmez</strong>. Gerekli teknik servis gereksinimleri dahilinde yurtiçi/yurtdışı bulut altyapı servislerimizde (örn. randevu için Cal.com) sadece hizmeti size ulaştırmak maksadıyla barındırılır.
                  </p>
                </div>
              )}

              {/* === PRIVACY CONTENT === */}
              {activeLegal === "privacy" && (
                <div className="space-y-6">
                  <p className="font-medium text-gray-900">
                    Gizlilik Politikası
                  </p>
                  <p>
                    Fluxiqo olarak dijital güvenliğe olan tutkumuzla geliştirdiğimiz web sitemize hoş geldiniz. Bu sayfa, bizimle paylaştığınız verilerin gizliliğini nasıl koruduğumuzu açıklamaktadır.
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Çerezler (Cookies) ve Web Teknolojileri</h3>
                  <p>
                    Sitemizin performansını takip edebilmek ve randevu sürecinin doğru çalışabilmesi amacıyla, sayfamızı ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza küçük veri dosyaları (çerezler) yerleştirebiliriz. Bu çerezler sitenin sadece çekirdek fonksiyonları için kullanılmakta olup agresif pazarlama takipçileri içermemektedir.
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Veri Güvenliği</h3>
                  <p>
                    Fluxiqo üzerinde gerçekleştirdiğiniz tüm veri aktarımları güçlü endüstri standartlarında (HTTPS/SSL) şifrelenmektedir. Ekibimizin yetkisiz kişilerin sunucularımıza veya müşteri veri tabanlarımıza erişmesini engelleyecek idari ve elektronik prosedürleri mevcuttur.
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">Üçüncü Taraf Bağlantıları</h3>
                  <p>
                    Web sitemiz, randevu alma araçları (Cal.com vb.) dahil olmak üzere üçüncü taraf hizmet sağlayıcılarına pencereler veya bağlantılar içerebilir. Fluxiqo olarak söz konusu üçüncü partilerin sitelerinin sunduğu koşullar veya içerik üzerinde mutlak bir kontrole sahip olmadığımızdan, ilgili platformların gizlilik politikalarını da okumanızı tavsiye ederiz.
                  </p>
                </div>
              )}

              {/* === TERMS CONTENT === */}
              {activeLegal === "terms" && (
                <div className="space-y-6">
                  <p className="font-medium text-gray-900">
                    Kullanım Şartları ve Koşulları
                  </p>
                  <p>
                    Bu web sitesini ziyaret ederek veya Fluxiqo Otomasyon Ajansı tarafından sunulan herhangi bir bilgi, belge veya hizmetten yararlanarak, aşağıdaki genel hüküm ve koşulları peşinen kabul etmiş sayılırsınız.
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">1. Fikri Mülkiyet Hakları</h3>
                  <p>
                    Bu web sitesinde yer alan tüm tasarım, metin, yazılım kodları, logo, grafik ve marka kimliği ögeleri (açık kaynak sistemler hariç) Fluxiqo Otomasyon Ajansı'na aittir ve uluslararası telif hakları yasalarıyla korunmaktadır. İzinsiz kopyalanması, çoğaltılması veya ticari bir menfaat için Fluxiqo adı kullanılması yasaktır.
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">2. Hizmetin Niteliği</h3>
                  <p>
                    Bu sitede belirtilen Yapay Zeka (AI) Otomasyonu, Chatbot veya Operasyonel entegrasyonlar hakkında verilen performans ölçütleri, sektörel ve tahmini ortalamalara dayanmaktadır. Otomasyon verimliliği, her markanın sahip olduğu veri kalitesi ve kurumsal iş kültürüne göre farklı şekillerde optimize edilebilmektedir.  
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">3. Sorumluluğun Sınırlandırılması</h3>
                  <p>
                    Fluxiqo, sitenin kesintisiz olarak ve sıfır hatayla çalışacağını kesin bir biçimde (olası internet çökmeleri veya host problemleri sebebiyle) garanti etmemektedir. Siteden aldığınız bilgilerle atacağınız ticari adımlar tamamen kullanıcının özgür iradesine bağlıdır.
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">4. Güncellemeler ve Değişiklikler</h3>
                  <p>
                    Sitemizde yer alan hizmet paketleri, politikalar veya teknolojik metodolojiler, AI dünyasının aşırı hızı sebebiyle önceden haber verilmeksizin Fluxiqo yönetim ekibi tarafından anında güncellenebilir.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
