# COP31 — Kırklareli Üniversitesi

React + Vite ile yazılmış, tamamen frontend bir tanıtım sitesi.
Koyu tema varsayılan; navbar'dan açık/koyu tema geçişi yapılabilir.

## Çalıştırma

```bash
npm install
npm run dev
```

Site: `http://localhost:5173`
Yönetim paneli: `http://localhost:5173/cop31kluadmin`

Yayına almak için:

```bash
npm run build
```

Çıktı `dist/` klasörüne gelir; herhangi bir statik hosting'e atılabilir.

---

## 🔐 YÖNETİM PANELİ

Adres: **`/cop31kluadmin`** · Parola: **`cop31klu`**

Parolayı `src/admin/config.js` dosyasından değiştirebilirsin.

> **Güvenlik notu — önemli:** Bu site tamamen frontend'dir, sunucu yoktur.
> Parola tarayıcıya inen JavaScript'in içindedir; teknik bilgisi olan biri
> görebilir. Bu, "yanlışlıkla girilmesin" diye konmuş basit bir kapıdır,
> gerçek bir güvenlik önlemi değildir. Gizli bilgi koyma.

### Panelde neler var

- Sol menüden bölüm seç, sağdaki formdan bütün metinleri düzenle.
- **Görseller:** her görsel alanında *Bilgisayardan seç* ile JPEG/PNG/WebP
  yükleyebilirsin (otomatik olarak en fazla 1600px'e küçültülür ve
  sıkıştırılır), ya da `public/images/` içindeki bir dosyanın yolunu yazarsın.
  ⚠️ Yüklenen görsel **sadece senin tarayıcına** kaydedilir; siteyi ziyaret
  edenler göremez. Hızlı denemek için yükle, yayına alırken dosyayı
  `public/images/` içine atıp yolunu yaz.
- Listelerde (ekip, projeler, zaman çizelgesi, menü…) **↑ ↓** ile sıra
  değiştir, **✕** ile sil, **+ Yeni ekle** ile ekle.
- **Kaydet** — değişiklikleri tarayıcıya yazar, siteyi açınca görürsün.
- **Geri al** — kaydedilmemiş değişiklikleri iptal eder.
- **Varsayılana dön** — her şeyi `site.js`'teki hâline döndürür.
- **JSON indir / JSON yükle** — yedek al, başka cihaza taşı.
- **site.js indir** — değişiklikleri kalıcı hale getirmek için.

### ⚠️ Değişiklikler nasıl kalıcı olur

Panelde yaptığın değişiklikler **sadece o tarayıcıda** saklanır. Siteyi
ziyaret eden başkaları eski metinleri görür. Kalıcı yapmak için:

1. Panelde **Kaydet**
2. **site.js indir**
3. İnen dosyayı `src/content/site.js` ile değiştir
4. `npm run build` → `dist/` klasörünü yeniden yayınla

> İndirilen `site.js` dosyasında özgün Türkçe açıklama satırları (yorumlar)
> bulunmaz; yalnızca veriler aktarılır.

### Yayına alırken /cop31kluadmin açılmıyorsa

Statik hosting'lerin tek sayfa uygulamalar için yönlendirme ayarı gerekir.

- **Netlify:** `public/_redirects` dosyası zaten hazır, bir şey yapmana gerek yok.
- **Vercel:** proje köküne `vercel.json` ekle:
  ```json
  { "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
  ```
- **Apache / cPanel:** `dist/.htaccess` oluştur:
  ```apache
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteRule ^ index.html [L]
  ```
- **Hiçbiri olmazsa:** `siteadresi.com/#/cop31kluadmin` adresi her zaman çalışır.

---

## ✍️ KOD ÜZERİNDEN YAZI DEĞİŞTİRME

Panel kullanmak istemezsen tüm metinler hâlâ tek dosyada:

```
src/content/site.js
```

Tırnak içlerini değiştir, kaydet, site anında güncellenir.

| Bölüm | Ne işe yarar |
|---|---|
| `brand` | Site adı, sekme başlığı, **navbar logoları** |
| `navLinks` | Navbar menü başlıkları ve sırası |
| `welcome` | İlk açılıştaki "Düşük Karbon" kutusu |
| `hero` | Giriş başlığı, açıklama, kayan fotoğraflar, rakamlar |
| `about` | "COP31 Nedir?" dört madde |
| `university` | Üniversite çalışmaları + zaman çizelgesi |
| `projectsSection`, `projects` | 2 proje |
| `law` | Çevre hukuku yazısı ve mevzuat listesi |
| `campusMap` | Kampüs haritası bölümü |
| `teamSection`, `team` | Ekip (6 kişi) |
| `footer` | Alt bilgi |

---

## 🖼️ FOTOĞRAF EKLEME

Fotoğrafları `public/images/` klasörüne at, yolunu panelden ya da
`site.js`'ten `"/images/dosya.jpg"` biçiminde yaz.

**Fotoğraf eklemek zorunlu değil** — eksik görsellerin yerine ince çerçeveli
bir yer tutucu çıkar, tasarım bozulmaz. Beklenen dosya adları
`public/images/README.txt` içinde.

**Kampüs haritası:** `public/images/harita.jpg` olarak ekle.

**Navbar logoları:** `public/images/logo-cop31.jpg` ve
`public/images/logo-klu.webp`. Değiştirmek için ya aynı adla üzerine yaz, ya da
admin panelinde *Genel / Marka* bölümünden yeni yolu gir. Logolar her iki temada
da aynı görünsün diye beyaz yuvarlak madalyon içinde gösterilir; bir dosya
bulunamazsa o logo sessizce gizlenir.

---

## 🎨 TASARIM

Yaklaşım editöryel/matbaa düzeni: düz renk blokları, ince ayraç çizgileri,
numaralı bölüm başlıkları. Parıltı, cam bulanıklığı ve degrade yığını yok.

Renkler `src/index.css` en üstte:

```css
--green:        #06C377;   /* ana renk */
--blue-deep:    #00479B;
--blue-bright:  #0060F5;
--blue-mid:     #004F8E;
--red:          #ED0400;   /* sadece uyarı/hata */
```

Koyu tema `:root[data-theme="dark"]`, açık tema `:root[data-theme="light"]`
bloklarında. Bir rengi değiştirirsen tüm site boyunca değişir.

Yazı tipi tek: **Inter** (sans-serif). Başlıklar extra bold (800), ara başlık ve
etiketler bold (700), gövde metni normal. Numara ve küçük etiketlerde monospace.

Bölüm zeminleri sırayla değişir, böylece geçişler net görünür:
kâğıt → beyaz → gri → koyu yeşil → beyaz → kâğıt → gri (footer).
`--bg`, `--bg-alt`, `--bg-mute` ve `--band` değişkenleri bunu belirler;
bir bölümün zeminini değiştirmek için `section--alt` / `section--mute` /
`section--band` sınıfını değiştirmen yeterli.

---

## 📁 Dosya Yapısı

```
src/
├── content/
│   ├── site.js             ← VARSAYILAN İÇERİK (tüm yazılar)
│   └── ContentContext.jsx    İçerik sağlayıcı (panel + site ortak kullanır)
├── admin/
│   ├── Admin.jsx             Panel arayüzü
│   ├── FieldEditor.jsx       Alanları otomatik forma çeviren editör
│   ├── config.js             ← PAROLA ve panel adresi
│   ├── labels.js             Alan adlarının Türkçe karşılıkları
│   └── serialize.js          site.js üretici
├── components/
│   ├── Navbar.jsx            Üst menü
│   ├── ThemeToggle.jsx       Açık/koyu tema anahtarı
│   ├── WelcomeModal.jsx      İlk açılış kutusu
│   ├── Hero.jsx              1 · Giriş (tam ekran)
│   ├── About.jsx             COP31 açıklama maddeleri
│   ├── University.jsx        2 · Üniversite + zaman çizelgesi
│   ├── Projects.jsx          3 · Projeler
│   ├── Law.jsx               4 · Çevre hukuku (koyu blok)
│   ├── CampusMap.jsx         5 · Harita
│   ├── Team.jsx              6 · Ekibimiz
│   ├── Footer.jsx            Alt bilgi
│   ├── SectionHead.jsx       Numaralı bölüm başlığı
│   ├── Reveal.jsx            Kaydırdıkça açılma animasyonu
│   └── SmartImage.jsx        Fotoğraf yoksa yer tutucu
├── hooks/
│   ├── useTheme.js
│   └── useScrollSpy.js
├── index.css                 Renkler, tipografi, ortak stiller
└── main.jsx                  Yönlendirme (site / admin)
```

**Bölüm sırasını değiştirmek** için `src/App.jsx` içindeki component
sırasını değiştir. Bölüm numaraları (01–06) `SectionHead` bileşenine
`num` olarak veriliyor.

---

## Notlar

- Açılış kutusu bir kez gösterilir. Tekrar görmek için panelden
  `welcome.storageKey` değerini değiştir (örn. `cop31-welcome-v2`).
- Tema tercihi tarayıcıda saklanır; ilk ziyarette koyu tema açılır.
- `prefers-reduced-motion` açık cihazlarda animasyonlar kapanır.
