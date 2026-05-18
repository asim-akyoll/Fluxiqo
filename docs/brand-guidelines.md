# Fluxiqo Brand Guidelines v1.0

> Son güncelleme: 2026-05-18
> Durum: Aktif

## Hızlı Referans

| Element | Değer |
|---------|-------|
| Primary Color | #b400ff (Fluxiqo Purple) |
| Secondary Color | #6a0099 (Fluxiqo Dark) |
| Accent Color | #d666ff (Fluxiqo Light) |
| Başlık Fontu | Syne |
| Gövde Fontu | Inter |
| Ses Tonu | Cesur, Teknolojik, Güvenilir |
| Dil | Türkçe (birincil) |

---

## 1. Renk Paleti

### Primary Colors

| İsim | Hex | RGB | Kullanım |
|------|-----|-----|----------|
| **Fluxiqo Purple** | #b400ff | rgb(180, 0, 255) | CTA butonları, vurgular, linkler, animasyonlar |
| **Fluxiqo Light** | #d666ff | rgb(214, 102, 255) | Gradyanlar, hover'dan önce, arka plan efektleri |
| **Fluxiqo Dark** | #6a0099 | rgb(106, 0, 153) | Hover durumları, derin vurgular |

### Nötr Palet

| İsim | Hex | RGB | Kullanım |
|------|-----|-----|----------|
| Arka Plan | #ffffff | rgb(255, 255, 255) | Sayfa arka planı |
| Yüzey | #f8f9fa | rgb(248, 249, 250) | Kart ve bölüm arka planları |
| Yüzey Koyu | #f3f4f6 | rgb(243, 244, 246) | Hover, disabled, ikincil yüzeyler |
| Metin Birincil | #111827 | rgb(17, 24, 39) | Başlıklar, önemli metin |
| Metin İkincil | #6b7280 | rgb(107, 114, 128) | Alt yazılar, yardımcı metin |
| Metin Üçüncül | #9ca3af | rgb(156, 163, 175) | Etiketler, çok sessiz metin |
| Kenarlık | #e5e7eb | rgb(229, 231, 235) | Bölücüler, kart kenarlıkları |
| Kenarlık Açık | #f3f4f6 | rgb(243, 244, 246) | İnce ayrıştırıcılar |

### Anlamsal Renkler

| Durum | Hex | Kullanım |
|-------|-----|----------|
| Başarı | #22c55e | Olumlu aksiyonlar, onaylar |
| Uyarı | #f59e0b | Dikkat gerektiren durumlar |
| Hata | #ef4444 | Hatalar, yıkıcı aksiyonlar |
| Bilgi | #3b82f6 | Bilgilendirme mesajları |

### Erişilebilirlik

- Koyu metin (#111827) beyaz üzeri: **15.5:1** (WCAG AAA)
- Fluxiqo Purple (#b400ff) beyaz üzeri: **5.2:1** (WCAG AA büyük metin)
- İkincil metin (#6b7280) beyaz üzeri: **4.6:1** (WCAG AA)
- Tüm interaktif elemanlar WCAG 2.1 AA standartlarını karşılar

### Gradyan Kullanımı

```css
/* Hero başlık gradyanı */
background: linear-gradient(to right, #b400ff, #d666ff, #b400ff);

/* Avatar / rozet gradyanları */
from-violet-500 to-purple-700     /* BA tarzı */
from-fuchsia-500 to-pink-700      /* TK tarzı */
from-purple-500 to-indigo-700     /* BY tarzı */
from-violet-600 to-fuchsia-700    /* ÇŞ tarzı */
```

---

## 2. Tipografi

### Font Stack

```css
--font-heading: 'Syne', sans-serif;        /* Başlıklar, logo adı, vurgular */
--font-body: 'Inter', ui-sans-serif, system-ui, sans-serif; /* Gövde metni, UI */
```

### Tip Skalası

| Element | Font | Ağırlık | Masaüstü | Mobil | Satır Yüksekliği |
|---------|------|---------|----------|-------|------------------|
| H1 (Hero) | Syne | 800 | 72px / 4.5rem | 48px / 3rem | 1.1 |
| H2 (Bölüm) | Syne | 700 | 36-48px | 28-32px | 1.15 |
| H3 (Alt başlık) | Inter | 600 | 24-28px | 20-24px | 1.3 |
| Gövde Büyük | Inter | 400 | 18px | 16px | 1.6 |
| Gövde | Inter | 400 | 16px | 16px | 1.5 |
| Küçük | Inter | 400-500 | 14px | 14px | 1.5 |
| Alt yazı | Inter | 400 | 12-13px | 12px | 1.4 |
| Rozet/Etiket | Inter | 600 | 11-12px | 11-12px | 1 |

### Tracking (Letter Spacing)

| Bağlam | Değer | Tailwind |
|--------|-------|---------|
| Logo adı | -0.05em | `tracking-tight` |
| Bölüm başlıkları | -0.025em | `tracking-tight` |
| Rozet etiketleri | +0.1em | `tracking-wider` |
| Küçük etiketler | +0.15em | `tracking-widest` |
| Gövde metin | default | — |

### Font Yükleme

Next.js `next/font/google` ile yüklenir; `display: swap` otomatik uygulanır:

```tsx
import { Inter, Syne } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["400","500","600","700","800"] });
```

---

## 3. Logo Kullanımı

### Varyantlar

| Varyant | Dosya | Kullanım |
|---------|-------|----------|
| Tam (ikon + metin) | `sonolsunartık.png` + "Fluxiqo" metni | Navbar, footer, dokümanlar |
| Yalnızca ikon | `sonolsunartık.png` | Favicon, küçük alanlarda |
| Metin ağırlıklı | "Fluxiqo" Syne Bold | Sosyal medya başlıkları |

### Boyut Kuralları

| Bağlam | Minimum | Önerilen |
|--------|---------|---------|
| Navbar ikonu | 36px | 40px |
| Footer ikonu | 36px | 40px |
| Favicon | 32px | 48px |

### Kullanım Yasakları

- Logoya gölge veya efekt ekleme
- Rengi dışında renk kullanma
- Eğme veya çarpıtma
- Beyaz veya şeffaf arkaplan olmadan karmaşık görseller üzerine yerleştirme
- "Fluxiqo" marka adını Syne fontu dışında yazma

### Logo + Marka Adı Kompozisyonu

```tsx
<Link href="/" className="flex items-center gap-2">
  <Logo className="w-10 h-10" />
  <span className="font-bold text-xl tracking-tight text-black font-syne">
    Fluxiqo
  </span>
</Link>
```

---

## 4. Ses Tonu (Voice & Tone)

### Marka Kişiliği

| Özellik | Açıklama |
|---------|----------|
| **Cesur** | Dönüştürücü olduğunu söylemekten çekinmez; büyük iddialar atar ve kanıtlar |
| **Teknolojik** | Yapay zeka ve otomasyon dilini doğal kullanır; ama jargona boğmaz |
| **Güvenilir** | Somut avantajlar sunar, müşteri referansları öne çıkar |
| **Pratik** | "Ne işe yarar?" sorusunu her zaman yanıtlar |
| **İnsan odaklı** | Teknoloji araçtır, amaç iş sahiplerinin hayatını kolaylaştırmaktır |

### Ses Grafiği

| Özellik | Biziz | Değiliz |
|---------|-------|---------|
| Cesur | Dönüştürücü, iddialı | Kibir, müşteriyi küçümseme |
| Teknolojik | Net, bilinçli | Jargon dolu, anlaşılmaz |
| Güvenilir | Samimi, kanıtlı | Aşırı vaatler, belirsiz iddialar |
| Pratik | Somut, uygulanabilir | Belirsiz, genel sözler |
| Sıcak | Samimi, erişilebilir | Robotik, soğuk kurumsal |

### Bağlama Göre Ton

| Bağlam | Ton | Örnek |
|--------|-----|-------|
| Ana sayfa hero | İlham verici, büyük | "Geleceğin Teknolojisiyle İşinizi Otomatiğe Bağlayın" |
| CTA butonları | Eyleme çağrı, net | "Ücretsiz Görüşme Ayarla" |
| Hizmet açıklamaları | Fayda odaklı, somut | "Müşteri sorularının %80'ini otomatik yanıtlar" |
| Hata mesajları | Sakin, çözüm odaklı | "Bir sorun oluştu, lütfen tekrar deneyin." |
| Başarı durumları | Kısa, pekiştirici | "Görüşmeniz planlandı!" |
| Yasal metinler | Resmi ama anlaşılır | — |

### Yasak Terimler

| Kaçın | Neden |
|-------|-------|
| "Devrimsel" / "Çığır açan" | Aşırı kullanım, inandırıcılık azalır |
| "Kesintisiz entegrasyon" | Anlamsız teknik jargon |
| "Dünyaca ünlü" | Kanıtlanamaz iddia |
| "Benzersiz" | Herkes söylüyor |
| "Yapay zeka destekli" (tek başına) | Ne işe yaradığını söyle |
| "Çözümlerimiz" | Muğlak; neyin çözümü? |

### Türkçe Yazım Kuralları

- Resmi hitap: **siz** (çoğul/saygı) — "İşletmenizi büyütmenize yardımcı oluyoruz"
- Kısaltma yok: "olmaz" değil "olm.", "değil" değil "deil"
- Türkçe noktalama: "yapay zekâ" veya "yapay zeka" (tutarlı ol)
- Sayılar: binlik ayraç nokta "1.000", ondalık virgül "1,5"

---

## 5. Görsel Tasarım Sistemi

### Border Radius (Köşe Yarıçapı)

| Element | Değer | Tailwind |
|---------|-------|---------|
| CTA / Pill butonlar | 9999px | `rounded-full` |
| Büyük kartlar, modal | 24-32px | `rounded-3xl` |
| Orta kartlar | 16-20px | `rounded-2xl` |
| Küçük elemanlar, badge | 8-12px | `rounded-xl` |
| İkon kutucukları | 12px | `rounded-xl` |
| Input alanları | 8px | `rounded-lg` |

### Gölge Sistemi

| Seviye | Kullanım | Tailwind |
|--------|---------|---------|
| Yok | Düz yüzeyler, dekoratif çizgiler | — |
| sm | Küçük kartlar, butonlar | `shadow-sm` |
| md | Navbar, aktif kartlar | `shadow-md` |
| lg | Modal'lar, açılır paneller | `shadow-lg` |
| CTA özel | Mor glow efekti | `shadow-xl shadow-fluxiqo/30` |

### Boşluk Skalası

Tailwind'in 4px grid'ini kullanır:

| Token | px | Kullanım |
|-------|-----|---------|
| 1 | 4px | İkon-metin aralığı |
| 2 | 8px | Dar öğe aralıkları |
| 3 | 12px | Kompakt liste öğeleri |
| 4 | 16px | Standart padding |
| 6 | 24px | Bölüm iç boşluğu |
| 8 | 32px | Büyük bölücüler |
| 12 | 48px | Section padding |
| 16 | 64px | Büyük section boşluğu |
| 24 | 96px | Bölümler arası |

### İkon Kullanımı

- Kütüphane: **Lucide React** (outline stili, 24px grid)
- Boyut: UI'da 16-20px, hero/feature'da 24-32px
- Renk: Bağlama göre `text-fluxiqo`, `text-gray-400`, `text-gray-900`
- Emoji yasak: Tüm ikonlar SVG tabanlı olmalı

---

## 6. Bileşen Standartları

### Birincil CTA Butonu

```tsx
className="inline-flex items-center justify-center gap-2 px-8 py-4 
  border border-transparent text-base font-semibold rounded-full 
  text-white bg-gray-900 hover:bg-fluxiqo 
  hover:shadow-xl hover:shadow-fluxiqo/30 
  transition-all duration-300 group"
```

### İkincil CTA Butonu

```tsx
className="inline-flex items-center justify-center gap-2 px-8 py-4 
  border border-gray-200 text-base font-semibold rounded-full 
  text-gray-900 bg-white hover:bg-gray-50 hover:border-gray-300 
  transition-all shadow-sm"
```

### Bölüm Başlığı Bloğu

```tsx
<span className="text-fluxiqo font-semibold text-sm uppercase tracking-widest mb-3 block">
  {üst etiket}
</span>
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
  {başlık} <span className="text-fluxiqo">{vurgulu kısım}</span>
</h2>
<p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
  {açıklama}
</p>
```

### Kart

```tsx
className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 
  hover:shadow-md transition-shadow"
```

### Rozet / Etiket

```tsx
className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full 
  bg-fluxiqo/10 text-fluxiqo text-xs font-semibold tracking-wide"
```

### Focus Görünürlüğü (Erişilebilirlik)

Tüm interaktif elemanlarda:
```tsx
className="focus-visible:outline-none focus-visible:ring-2 
  focus-visible:ring-fluxiqo focus-visible:ring-offset-2 rounded-*"
```

---

## 7. Animasyon

### Zamanlama

| Tür | Süre | Kullanım |
|-----|------|---------|
| Mikro etkileşim | 150-200ms | Hover, renk değişimi |
| Standart geçiş | 300ms | Kart hover, buton state |
| Sayfa girişi | 500ms | Bölüm reveal animasyonları |
| Karmaşık geçiş | 400-600ms | Modal açılış, panel geçişi |

### Framer Motion Standart Pattern

```tsx
// Scroll-triggered bölüm elemanı
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: index * 0.1 }}

// Stagger (birden fazla kart)
transition={{ duration: 0.5, delay: index * 0.1 }}

// Modal açılış
initial={{ opacity: 0, scale: 0.95, y: 20 }}
animate={{ opacity: 1, scale: 1, y: 0 }}
exit={{ opacity: 0, scale: 0.95, y: 20 }}
transition={{ type: "spring", damping: 25, stiffness: 300 }}
```

### Motion Kuralları

- `prefers-reduced-motion` her zaman CSS seviyesinde yönetilir (`globals.css`)
- Yalnızca `transform` ve `opacity` animate edilir (width/height yasak)
- Her animasyon bir sebep-sonuç ilişkisi taşımalı, dekoratif olmamalı
- Hover animasyonları hover'a özel (`hover:` prefix) olmalı, global state değil

---

## 8. Görüntü Yönergeleri

### next/image Kullanımı

Tüm görüntüler `next/image` bileşeni kullanılarak yüklenmeli:

```tsx
import Image from "next/image";
<Image 
  src="/path/to/image.webp" 
  alt="Açıklayıcı metin" 
  width={800} 
  height={600}
  className="w-full h-auto object-cover"
/>
```

### Avatar / Profil Görseli

Harici URL (randomuser.me vb.) kullanılmaz. Baş harf + gradyan sistemi kullanılır:

```tsx
<div className={`w-12 h-12 rounded-full bg-gradient-to-br ${color} 
  flex items-center justify-center border-2 border-white shadow-md 
  ring-offset-2 ring-2 ring-fluxiqo/20 shrink-0`}>
  <span className="text-white font-bold text-sm select-none">{initials}</span>
</div>
```

### Görüntü Formatlı Yasak

- `<img>` HTML etiketi kullanılmaz
- Harici CDN görüntüleri kullanılmaz (avatar, ikon, vb.)
- Boyutsuz görüntü (width/height belirtilmemiş) kullanılmaz

---

## 9. SEO ve Meta Standartları

### Sayfa Title Formatı

```
{Sayfa Adı} | Fluxiqo – Yapay Zeka Otomasyon Ajansı
```

### Open Graph

```tsx
openGraph: {
  title: "...",
  description: "...",
  url: "https://www.fluxiqo.com",
  siteName: "Fluxiqo",
  locale: "tr_TR",
  type: "website",
}
```

### Schema.org

ProfessionalService tipi kullanılır. `knowsAbout` dizisi güncel tutulur:
AI Automation, ChatBot Development, Workflow Automation, Make.com, n8n, Zapier, OpenAI API, Business Process Optimization

---

## 10. AI Görüntü Üretimi

### Temel Prompt Şablonu

```
Professional AI technology agency, deep purple (#b400ff) brand color,
clean white background, modern minimalist style, soft studio lighting,
high contrast, sharp focus, no people unless specified
```

### Stil Anahtar Kelimeleri

| Kategori | Kelimeler |
|----------|-----------|
| Aydınlatma | soft studio light, cinematic, gradient backlighting |
| Atmosfer | modern, cutting-edge, professional, trustworthy |
| Renk | deep purple, white, gray, minimal color palette |
| Kompozisyon | centered, rule of thirds, clean negative space |
| İşleme | photorealistic, high detail, 4K, no grain |

### Kaçınılacaklar

| Kaçın | Neden |
|-------|-------|
| Robot figürleri | Klişe, marka kişiliğiyle uyumsuz |
| Neon renkler (marka dışı) | Brand tutarsızlığı |
| Karmaşık arka planlar | Dikkat dağıtır |
| Stok fotoğraf görünümü | Özgünlük azalır |

---

## Değişiklik Geçmişi

| Versiyon | Tarih | Değişiklikler |
|----------|-------|---------------|
| 1.0 | 2026-05-18 | İlk sürüm — site kodundan çıkarılan standartlar |
