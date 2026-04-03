"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Logo className="w-10 h-10" />
              <span className="font-bold text-xl tracking-tight text-black font-syne">
                Fluxiqo
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              İşletmelerin daha akıllı çalışması, daha hızlı ölçeklenmesi ve AI çözümleriyle cesurca yenilik yapması için gücümüzü kullanıyoruz.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4 tracking-tight">Ürün</h3>
            <ul className="space-y-3">
              <li><Link href="#services" className="text-gray-500 hover:text-fluxiqo text-sm transition-colors">Hizmetlerimiz</Link></li>
              <li><Link href="#process" className="text-gray-500 hover:text-fluxiqo text-sm transition-colors">İş Akışı Değerlendirmesi</Link></li>
              <li><Link href="#testimonials" className="text-gray-500 hover:text-fluxiqo text-sm transition-colors">Yorumlar</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4 tracking-tight">Şirket</h3>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-gray-500 hover:text-fluxiqo text-sm transition-colors">Hakkımızda</Link></li>
              <li><Link href="#reviews" className="text-gray-500 hover:text-fluxiqo text-sm transition-colors">Müşteri Yorumları</Link></li>
              <li><Link href="#contact" className="text-gray-500 hover:text-fluxiqo text-sm transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4 tracking-tight">İletişim</h3>
            <p className="text-gray-500 text-sm mb-4">
              Herhangi bir sorunuz için bizimle iletişime geçmekten çekinmeyin.
            </p>
            <a href="mailto:info@fluxiqo.com" className="inline-flex items-center gap-2 text-fluxiqo font-medium hover:text-fluxiqo-dark transition-colors">
              info@fluxiqo.com
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Fluxiqo Automation. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
            <button onClick={() => window.dispatchEvent(new CustomEvent('openLegalModal', { detail: { type: 'kvkk' }}))} className="text-gray-400 hover:text-fluxiqo transition-colors text-[13px] md:text-sm">KVKK Aydınlatma Metni</button>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openLegalModal', { detail: { type: 'privacy' }}))} className="text-gray-400 hover:text-fluxiqo transition-colors text-[13px] md:text-sm">Gizlilik Politikası</button>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openLegalModal', { detail: { type: 'terms' }}))} className="text-gray-400 hover:text-fluxiqo transition-colors text-[13px] md:text-sm">Kullanım Şartları</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
