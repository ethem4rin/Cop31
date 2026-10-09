/* ============================================================================
 *  COP31 — İÇERİK DOSYASI
 *  ---------------------------------------------------------------------------
 *  Bu dosya admin panelinden (09.10.2026) dışa aktarılmıştır.
 *  Mevcut src/content/site.js dosyasının yerine koyarak değişiklikleri
 *  kalıcı hale getirebilirsin.
 *
 *  Metinleri buradan da elle düzenleyebilirsin.
 *  Görseller: public/images/ klasörüne at, yolu "/images/ad.jpg" biçiminde yaz.
 * ==========================================================================*/

export const brand = {
  short: "COP31",
  name: "Kırklareli Üniversitesi",
  tagline: "İklim İçin Ortak Eylem",
  documentTitle: "COP31 | Kırklareli Üniversitesi — İklim İçin Ortak Eylem",
  logoCop31: "/images/logo-cop31.jpg",
  logoUniversity: "/images/logo-klu.webp",
};

export const navLinks = [
  {
    id: "cop31",
    label: "COP Nedir?",
  },
  {
    id: "universite",
    label: "Üniversitemiz",
  },
  {
    id: "projeler",
    label: "Projelerimiz",
  },
  {
    id: "hukuk",
    label: "Çevre Hukuku",
  },
  {
    id: "harita",
    label: "Kampüs Haritası",
  },
  {
    id: "ekip",
    label: "Ekibimiz",
  },
];

export const welcome = {
  storageKey: "cop31-welcome-v1",
  titleAccent: "Düşük Karbon",
  titleRest: "Modu Aktif",
  body: "Şu an bu siteyi Karanlık Mod'da görüntüleyerek ekran enerjisinden tasarruf ediyor ve dijital karbon ayak izimizi küçültüyorsunuz.",
  thanks: "Gezegen için teşekkürler.",
  button: "Harika",
};

export const hero = {
  eyebrow: "",
  titleLines: [
    "İklim İçin",
    "Ortak Eylem",
  ],
  subtitle: "Kampüsten Başlayan İklim Eylemi",
  info: [
    {
      icon: "pin",
      text: "Kırklareli Üniversitesi · 8 Yerleşke",
    },
    {
      icon: "calendar",
      text: "19 – 22 Ekim 2026 · Fidan Dikimi ve Katalog Dağıtımı",
    },
  ],
  slides: [
    {
      image: "/images/banner.webp",
      caption: "Kırklareli Üniversitesi Kampüsü",
    },
  ],
  slideDurationMs: 3500,
  stats: [
    {
      value: 31,
      suffix: "",
      label: "Dikilecek Fidan",
    },
    {
      value: 8,
      suffix: "",
      label: "Yerleşke",
    },
    {
      value: 6,
      suffix: "",
      label: "Ekip Üyesi",
    },
    {
      value: 240,
      suffix: "+",
      label: "Hedef Öğrenci",
    },
  ],
  scrollHint: "Keşfet",
};

export const about = {
  eyebrow: "",
  title: "COP Nedir ? ",
  lead: "COP (Conference of the Parties – Taraflar Konferansı) Birleşmiş Milletler İklim Değişikliği \nÇerçeve Sözleşmesi'ne (UNFCCC) taraf ülkeler ve AB'nin her yıl bir araya gelerek küresel \niklim politikalarını değerlendirdiği ve yeni hedefler belirlediği en üst düzey uluslararası \niklim toplantısıdır.",
};

export const copHistory = {
  eyebrow: "COP Zirveleri",
  title: "COP31 Nedir ? ",
  lead: "COP31, Birleşmiş Milletler İklim Değişikliği Konferanslarının 31’incisidir ve Kasım \n2026’da Antalya’da düzenlenecektir. Zirvede dünya liderleri, uzmanlar ve sivil toplum \ntemsilcileri iklim değişikliğiyle mücadele ve sürdürülebilir gelecek için ortak çözümleri \ntartışacaktır. Türkiye’nin ev sahipliği yapacağı bu konferans, küresel iklim politikaları \naçısından önemli bir buluşma olacaktır.",
  scrollHint: "COP Zirveleri",
  items: [
    {
      code: "COP 1",
      year: "1995",
      city: "Berlin, Almanya",
      text: "İlk Taraflar Konferansı toplandı; sözleşmenin uygulanma süreci başladı.",
      highlight: false,
    },
    {
      code: "COP 2",
      year: "1996",
      city: "Cenevre, İsviçre",
      text: "Bilimsel değerlendirmelerin müzakerelere esas alınması benimsendi.",
      highlight: false,
    },
    {
      code: "COP 3",
      year: "1997",
      city: "Kyoto, Japonya",
      text: "Kyoto Protokolü kabul edildi; sanayileşmiş ülkelere sayısal emisyon azaltım yükümlülüğü getirildi.",
      highlight: false,
    },
    {
      code: "COP 4",
      year: "1998",
      city: "Buenos Aires, Arjantin",
      text: "Kyoto Protokolü'nün uygulama kurallarına dair eylem planı belirlendi.",
      highlight: false,
    },
    {
      code: "COP 5",
      year: "1999",
      city: "Bonn, Almanya",
      text: "Teknik müzakereler sürdürüldü.",
      highlight: false,
    },
    {
      code: "COP 6",
      year: "2000",
      city: "Lahey, Hollanda",
      text: "Müzakereler uzlaşmazlıkla kesildi; süreç ertesi yıl Bonn'da sürdürüldü.",
      highlight: false,
    },
    {
      code: "COP 7",
      year: "2001",
      city: "Marakeş, Fas",
      text: "Marakeş Uzlaşıları ile Kyoto Protokolü'nün uygulama kuralları tamamlandı.",
      highlight: false,
    },
    {
      code: "COP 8",
      year: "2002",
      city: "Yeni Delhi, Hindistan",
      text: "Uyum ve sürdürülebilir kalkınma vurgusu öne çıktı.",
      highlight: false,
    },
    {
      code: "COP 9",
      year: "2003",
      city: "Milano, İtalya",
      text: "Yutak alanları ve fon mekanizmalarına ilişkin kararlar alındı.",
      highlight: false,
    },
    {
      code: "COP 10",
      year: "2004",
      city: "Buenos Aires, Arjantin",
      text: "Uyum ve karşı önlemler çalışma programı kabul edildi.",
      highlight: false,
    },
    {
      code: "COP 11",
      year: "2005",
      city: "Montreal, Kanada",
      text: "Kyoto Protokolü yürürlüğe girdikten sonraki ilk taraflar toplantısı yapıldı.",
      highlight: false,
    },
    {
      code: "COP 12",
      year: "2006",
      city: "Nairobi, Kenya",
      text: "Uyum konusunda Nairobi çalışma programı başlatıldı.",
      highlight: false,
    },
    {
      code: "COP 13",
      year: "2007",
      city: "Bali, Endonezya",
      text: "Bali Yol Haritası ile yeni bir müzakere süreci başlatıldı.",
      highlight: false,
    },
    {
      code: "COP 14",
      year: "2008",
      city: "Poznań, Polonya",
      text: "Uyum Fonu'nun işler hale getirilmesi kararlaştırıldı.",
      highlight: false,
    },
    {
      code: "COP 15",
      year: "2009",
      city: "Kopenhag, Danimarka",
      text: "Yüksek beklentiyle toplandı; bağlayıcı bir anlaşma çıkmasa da sonraki süreci şekillendirdi.",
      highlight: false,
    },
    {
      code: "COP 16",
      year: "2010",
      city: "Cancún, Meksika",
      text: "Cancún Anlaşmaları ile Yeşil İklim Fonu'nun kurulması kararlaştırıldı.",
      highlight: false,
    },
    {
      code: "COP 17",
      year: "2011",
      city: "Durban, Güney Afrika",
      text: "Tüm ülkeleri kapsayacak yeni bir anlaşma için Durban Platformu oluşturuldu.",
      highlight: false,
    },
    {
      code: "COP 18",
      year: "2012",
      city: "Doha, Katar",
      text: "Kyoto Protokolü'nün ikinci yükümlülük dönemi kabul edildi.",
      highlight: false,
    },
    {
      code: "COP 19",
      year: "2013",
      city: "Varşova, Polonya",
      text: "Kayıp ve zarar için Varşova Mekanizması kuruldu.",
      highlight: false,
    },
    {
      code: "COP 20",
      year: "2014",
      city: "Lima, Peru",
      text: "Ulusal katkı beyanlarının hazırlanmasına ilişkin çerçeve belirlendi.",
      highlight: false,
    },
    {
      code: "COP 21",
      year: "2015",
      city: "Paris, Fransa",
      text: "Paris Anlaşması kabul edildi: küresel sıcaklık artışını 2 °C'nin altında, mümkünse 1,5 °C ile sınırlama hedefi.",
      highlight: false,
    },
    {
      code: "COP 22",
      year: "2016",
      city: "Marakeş, Fas",
      text: "Paris Anlaşması'nın uygulanmasına yönelik çalışmalar başlatıldı.",
      highlight: false,
    },
    {
      code: "COP 23",
      year: "2017",
      city: "Bonn, Almanya",
      text: "Fiji başkanlığında toplandı; Talanoa Diyaloğu başlatıldı.",
      highlight: false,
    },
    {
      code: "COP 24",
      year: "2018",
      city: "Katowice, Polonya",
      text: "Paris Anlaşması'nın uygulama kuralları (Katowice Kural Kitabı) kabul edildi.",
      highlight: false,
    },
    {
      code: "COP 25",
      year: "2019",
      city: "Madrid, İspanya",
      text: "Şili başkanlığında toplandı; karbon piyasaları konusunda uzlaşı sağlanamadı.",
      highlight: false,
    },
    {
      code: "COP 26",
      year: "2021",
      city: "Glasgow, İskoçya",
      text: "Glasgow İklim Paktı ile ülkelerin ulusal katkı beyanlarını güçlendirmesi çağrısı yapıldı.",
      highlight: false,
    },
    {
      code: "COP 27",
      year: "2022",
      city: "Şarm El-Şeyh, Mısır",
      text: "İklim kaynaklı kayıp ve zararların karşılanması için ayrı bir fon kurulması kararlaştırıldı.",
      highlight: false,
    },
    {
      code: "COP 28",
      year: "2023",
      city: "Dubai, BAE",
      text: "İlk Küresel Durum Değerlendirmesi tamamlandı; fosil yakıtlardan uzaklaşma ilk kez metne girdi.",
      highlight: false,
    },
    {
      code: "COP 29",
      year: "2024",
      city: "Bakü, Azerbaycan",
      text: "Gelişmekte olan ülkelere aktarılacak iklim finansmanı için yeni bir hedef belirlendi.",
      highlight: false,
    },
    {
      code: "COP 30",
      year: "2025",
      city: "Belém, Brezilya",
      text: "Amazon bölgesinde düzenlenen ilk COP oldu; COP31'in Antalya'da yapılması bu zirvede kabul edildi.",
      highlight: false,
    },
    {
      code: "COP 31",
      year: "2026",
      city: "Antalya, Türkiye",
      text: "9–20 Kasım 2026'da Antalya'da toplanıyor. Başkanlık Türkiye ile Avustralya arasında paylaşılıyor; müzakerelere Avustralya başkanlık ediyor.",
      badgeTitle: "COP31",
      badgeSubtitle: "Türkiye",
      highlight: true,
    },
  ],
};

export const university = {
  eyebrow: "Kırklareli Üniversitesi",
  title: "COP31 Çalışmalarımız",
  lead: "Üniversitemiz, COP31 kapsamında öğrenci odaklı bir çalışma programı yürütüyor. Amacımız; farkındalığı sahaya, sahayı da kalıcı çıktıya dönüştürmek.",
  image: "/images/universite.jpg",
  imageCaption: "Kırklareli Üniversitesi Kampüsü",
  activitiesTitle: "Gerçekleştirilen ve Planlanan Çalışmalar",
  activities: [
    {
      title: "Rektörümüz, “COP31 Yolunda Bilim Diplomasisi: Akademi Lansmanı” Programına Katıldı",
      summary: "Rektörümüz Prof. Dr. Rengin Ak, YÖK tarafından düzenlenen programa katıldı. COP31 Başkanı ve Çevre, Şehircilik ve İklim Değişikliği Bakanı Murat Kurum ile YÖK Başkanı Erol Özvar'ın katılımıyla, COP31 hazırlık sürecinde üniversitelerin rolü ve bilim diplomasisinin önemi ele alındı.",
      href: "https://kurumsaliletisim.klu.edu.tr/Sayfalar/45718-rektorumuz-prof-dr-rengin-ak-cop31-yolunda-bilim-diplomasisi-akademi-lansmani-programina-katildi.klu",
    },
    {
      title: "COP31 Kapsamında Üniversitemizde Etkinlik ve Faaliyet Çağrısı",
      summary: "9–20 Kasım 2026'da Antalya'da gerçekleştirilecek COP31 kapsamında üniversitemizce planlanan etkinlik ve faaliyetlere ilişkin bildirimler alındı. “COP31 İçin 31 Fidan” ve “Öğrenciden İşletmeye” projelerimiz bu çağrı üzerine düzenlenmektedir.",
      href: "https://shmyo.klu.edu.tr/Sayfalar/45781-cop31-kapsaminda-universitemizde-etkinlik-ve-faaliyet-cagrisi.klu",
    },
    {
      title: "COP31 Genç Akademi Takımı Başvuruları",
      summary: "Üniversitelerin akademik birikimini gençlerin enerjisi ve katkısıyla buluşturmayı amaçlayan COP31 Genç Akademi Takımı için başvurular alındı. İklim, sürdürülebilirlik ve çevre alanlarında proje ve etkinliklerde görev almak isteyen öğrenciler programa başvurdu.",
      href: "https://kurumsaliletisim.klu.edu.tr/Sayfalar/45969-cop31-genc-akademi-takimi-basvurulari-basladi.klu",
    },
    {
      title: "Rektörümüz, COP31 Farkındalık Etkinliğine Katıldı",
      summary: "Türkiye'nin 81 ilinde eş zamanlı gerçekleştirilen COP31 Farkındalık Etkinlikleri kapsamında Kırklareli'nde çevre ve iklim değişikliğine yönelik bir farkındalık etkinliği düzenlendi. Çocukların çevre duyarlılığının artırılması ve gelecek nesillere daha yeşil bir dünya bırakılması hedeflendi.",
      href: "https://kurumsaliletisim.klu.edu.tr/Sayfalar/46290-rektorumuz-prof-dr-rengin-ak-cop31-farkindalik-etkinligine-katildi.klu",
    },
    {
      title: "TÜBİTAK 2209-A Proje Geliştirme Eğitimi Verildi",
      summary: "Proje Geliştirme ve Koordinasyon Ofisi ile Sürdürülebilirlik Koordinatörlüğü iş birliğinde, COP31 kapsamında TÜBİTAK 2209-A eğitimi düzenlendi. Ön lisans ve lisans öğrencilerinin araştırma projesi geliştirme ve başvuru süreçlerine ilişkin yetkinlikleri artırıldı.",
      href: "https://kurumsaliletisim.klu.edu.tr/Sayfalar/46773-ogrencilerimize-tubitak-2209-a-proje-gelistirme-egitimi-verildi.klu",
    },
    {
      title: "Rektörümüz, “İklim Bilim Kadın 2035 Çalıştayı”na Katıldı",
      summary: "Rektörümüz Prof. Dr. Rengin Ak, COP31 toplantıları kapsamında Hasan Kalyoncu Üniversitesi ev sahipliğinde Gaziantep'te düzenlenen çalıştaya katıldı. İklim değişikliği, toplumsal kırılganlık, teknoloji ve kadın liderliği konuları ele alındı.",
      href: "https://kurumsaliletisim.klu.edu.tr/Sayfalar/46807-rektorumuz-iklim-bilim-kadin-2035-calistayina-katildi.klu",
    },
    {
      title: "Rektörümüz, “İklim, Çevre, Kadın 2030 – Yöneten Kadın Liderler Forumu”na Katıldı",
      summary: "Rektörümüz Prof. Dr. Rengin Ak ve Uluslararası İlişkiler Koordinatörümüz Prof. Dr. Berna Ak Bingül, Birleşmiş Milletler Kadın Birimi (UN Women) iş birliğinde düzenlenen foruma katıldı. Kadınların karar süreçlerindeki etkisi ve kadın liderliğinin iklim eylemlerine yansıtılması konuşuldu.",
      href: "https://kurumsaliletisim.klu.edu.tr/Sayfalar/46826-rektorumuz-iklim-cevre-kadin-2030---yoneten-kadin-liderler-forumuna-katildi.klu",
    },
    {
      title: "COP31 İklim Çalıştayı Düzenlendi",
      summary: "Bu bölüm, çalıştay düzenlendikten sonra doldurulacaktır.",
      href: "",
    },
    {
      title: "Öğrenci Kulüplerimizden Çevre ve İklim Alanında Dört Proje Başarısı",
      summary: "Öğrenci kulüplerimiz; Gençlik ve Spor Bakanlığı Kırklareli Gençlik Merkezi, ÜNİDES ve COP31 Türkiye iş birliğiyle yürütülen “Çevre ve İklim COP31 Özel Çağrı Dönemi” kapsamında destek almaya hak kazandı. Dört kulübün projesi desteklenecek: “Atık Değil, Hammadde: Atıktan Tasarıma”, “Yeşil Mentörlük ve Minik Ayak İzleri”, “Longoz'un Sesi: İğneada Taşkın Ormanları” ve “Güneşten Geleceğe”.",
      href: "https://kurumsaliletisim.klu.edu.tr/Sayfalar/46754-ogrenci-kuluplerimizden-cevre-ve-iklim-alaninda-dort-proje-basarisi.klu",
    },
  ],
};

export const projectsSection = {
  eyebrow: "Projelerimiz",
  title: "Sözden eyleme iki somut adım",
  lead: "COP31 gündemini Kırklareli ölçeğinde uygulanabilir iki projeye indirgedik: biri kampüste kalıcı bir yeşil miras, diğeri şehrin işletmelerine ulaşan bir bilgi köprüsü.",
};

export const projects = [
  {
    number: "01",
    badge: "Öğrenci Etkinliği / Farkındalık",
    title: "COP31 İçin 31 Fidan",
    subtitle: "Kırklareli Üniversitesi Öğrencilerinden İklim İçin Kalıcı Bir Miras",
    image: "/images/proje-1.jpg",
    summary: "COP31'e doğrudan gönderme yapacak şekilde 31 fidan dikiyoruz. Her fidan, iklim değişikliğiyle mücadele ve sürdürülebilirlik kapsamında belirlenmiş bir temayı temsil ediyor. Fidanların yanındaki QR kodlar, ziyaretçileri o temaya ait bilgilendirme sayfasına yönlendiriyor.",
    facts: [
      {
        label: "Tarih",
        value: "19 – 20 Ekim 2026",
      },
      {
        label: "Süre",
        value: "Yerleşke başına ~1 saat",
      },
      {
        label: "Alan",
        value: "8 yerleşke",
      },
      {
        label: "Hedef Katılım",
        value: "Yerleşke başına 30 öğrenci",
      },
    ],
    bulletsTitle: "Projenin kapsamı",
    bullets: [
      "31 fidanın kampüslerdeki uygun alanlara dikilmesi.",
      "Her fidana bir iklim veya sürdürülebilirlik teması verilmesi.",
      "Fidanların yanında kısa bilgilendirici tabelalar kullanılması.",
      "Öğrencilerin etkinliğe aktif olarak katılması.",
      "Etkinliğin fotoğraf ve video ile belgelenmesi.",
      "QR kodlar aracılığıyla COP31 ve iklim temaları hakkında bilgilendirme.",
    ],
    themesTitle: "31 Fidan · 31 Tema",
    themes: [
      "İklim değişikliğiyle mücadele",
      "Ormanların korunması",
      "Biyoçeşitlilik",
      "Su kaynaklarının korunması",
      "Yenilenebilir enerji",
      "Enerji verimliliği",
      "Sıfır atık",
      "Geri dönüşüm",
      "Sürdürülebilir ulaşım",
      "Sürdürülebilir tüketim",
      "Karbon ayak izinin azaltılması",
      "İklim okuryazarlığı",
      "Doğa temelli çözümler",
      "Toprak sağlığı",
      "Ekosistemlerin korunması",
      "İklim dostu kampüs",
      "Yeşil alanların artırılması",
      "Sürdürülebilir tarım",
      "Gıda israfının azaltılması",
      "Yerel üretimin desteklenmesi",
      "Döngüsel ekonomi",
      "Temiz üretim",
      "Çevre eğitimi",
      "Gençlerin iklim eylemi",
      "İklim adaleti",
      "İklim dirençliliği",
      "Sürdürülebilir şehirler",
      "Temiz hava",
      "Su ayak izinin azaltılması",
      "Gelecek nesiller",
      "İklim için ortak eylem",
    ],
  },
  {
    number: "02",
    badge: "Üniversite–Sanayi İş Birliği",
    title: "Öğrenciden İşletmeye",
    subtitle: "Kırklareli İçin Yeşil Dönüşüm Kataloğu",
    image: "/images/proje-2.jpg",
    summary: "Kırklareli'nde faaliyet gösteren işletmelerin günlük operasyonlarında uygulayabilecekleri, sade ve uygulanabilir sürdürülebilirlik önerilerinden oluşan bir katalog hazırlıyoruz. İçerikler öğretim üyelerimiz tarafından doğrulanıyor, katalog işletmelere ücretsiz ulaştırılıyor.",
    facts: [
      {
        label: "Tarih",
        value: "21 – 22 Ekim 2026",
      },
      {
        label: "Format",
        value: "Dijital PDF + Basılı",
      },
      {
        label: "Ziyaret",
        value: "Üçerli öğrenci grupları",
      },
      {
        label: "Ücret",
        value: "İşletmeler için ücretsiz",
      },
    ],
    bulletsTitle: "Projenin kapsamı",
    bullets: [
      "Enerji verimliliği ve karbon ayak izi araştırması.",
      "Su tasarrufu ve su yönetimi önerileri.",
      "Atık yönetimi ve geri dönüşüm uygulamaları.",
      "Sürdürülebilir ulaşım, ürün ve ambalaj başlıkları.",
      "Yenilenebilir enerji ve temiz üretim seçenekleri.",
      "İçeriklerin akademik değerlendirmeden geçirilmesi.",
    ],
    themesTitle: "İşletmenizi 10 Adımda Yeşilleştirin",
    themes: [
      "Enerji tüketimini takip et.",
      "Gereksiz enerji kullanımını azalt.",
      "Su tüketimini kontrol et.",
      "Atıkları ayrı topla.",
      "Tek kullanımlık plastikleri azalt.",
      "Sürdürülebilir ürünleri tercih et.",
      "Çalışanları bilinçlendir.",
      "Ulaşım kaynaklı emisyonları azalt.",
      "Yenilenebilir enerji seçeneklerini değerlendir.",
      "Çevresel iyileştirmeleri düzenli olarak takip et.",
    ],
  },
];

export const law = {
  eyebrow: "Çevre Hukuku",
  title: "İklim eyleminin hukuki zemini",
  author: "Hukuk Fakültesi Çalışma Grubu",
  readingTime: "4 dk okuma",
  pullQuote: "Çevre hakkı, yalnızca bugünün değil; henüz doğmamış kuşakların da hak sahibi olduğu nadir hukuki alanlardan biridir.",
  paragraphs: [
    "Çevre hukuku, doğal kaynakların korunması ve sürdürülebilir kullanımı amacıyla kişilere, işletmelere ve devlete yüklenen yükümlülükleri düzenleyen hukuk dalıdır. İklim krizi, bu alanı teorik bir tartışma olmaktan çıkarıp günlük hayatın ve ticari faaliyetin doğrudan bir parçası haline getirmiştir.",
    "Türkiye hukukunda çevrenin korunması, Anayasa'nın 56. maddesinde \"herkes sağlıklı ve dengeli bir çevrede yaşama hakkına sahiptir\" ifadesiyle temel hak olarak güvence altına alınmıştır. Bu hak, devlete yalnızca müdahale etmeme değil, aynı zamanda çevreyi aktif olarak koruma ve iyileştirme ödevi yükler.",
    "Uluslararası düzlemde Birleşmiş Milletler İklim Değişikliği Çerçeve Sözleşmesi ve Paris Anlaşması, taraf devletlere ulusal katkı beyanları hazırlama ve bunları periyodik olarak güncelleme yükümlülüğü getirmektedir. COP toplantıları, bu yükümlülüklerin müzakere edildiği ve denetlendiği platformlardır.",
    "İşletmeler açısından ise sürdürülebilirlik artık gönüllü bir tercih değildir. Atık yönetimi, emisyon raporlaması, genişletilmiş üretici sorumluluğu ve Sıfır Atık mevzuatı gibi düzenlemeler, çevresel yükümlülükleri idari yaptırımlarla desteklenen somut hukuki ödevlere dönüştürmüştür.",
    "Projemizin hukuki boyutu da tam olarak buradan doğmaktadır: Yeşil Dönüşüm Kataloğu'nda yer alan teknik önerilerin her biri, yürürlükteki mevzuatla uyumlu olacak şekilde Hukuk Fakültemizin öğretim üyeleri tarafından kontrol edilmektedir. Amacımız, işletmelere yalnızca \"iyi fikir\" değil, hukuken de doğru yol haritaları sunmaktır.",
  ],
  referencesTitle: "İlgili Mevzuat",
  references: [
    {
      name: "T.C. Anayasası m. 56",
      note: "Sağlıklı ve dengeli çevrede yaşama hakkı",
    },
    {
      name: "2872 sayılı Çevre Kanunu",
      note: "Çevre kirliliğinin önlenmesi ve yaptırımlar",
    },
    {
      name: "Paris Anlaşması",
      note: "Ulusal katkı beyanları ve 1,5 °C hedefi",
    },
    {
      name: "Sıfır Atık Yönetmeliği",
      note: "Kaynağında ayrıştırma yükümlülüğü",
    },
    {
      name: "Atık Yönetimi Yönetmeliği",
      note: "Üretici sorumluluğu ve bertaraf esasları",
    },
  ],
};

export const campusMap = {
  eyebrow: "Nerede?",
  title: "Kırklareli Üniversitesi Yerleşke Haritası",
  lead: "31 fidan, ağaç dikimine elverişli alanların durumuna göre 8 yerleşkeye paylaştırılacaktır. Dikim noktaları harita üzerinde işaretlenecektir.",
  mapImage: "/images/harita.jpg",
  placeholderText: "Harita görseli buraya gelecek",
  placeholderHint: "public/images/harita.jpg olarak ekleyin",
  legend: [
    {
      label: "Fidan dikim noktası",
      tone: "green",
    },
    {
      label: "Bilgilendirme standı",
      tone: "blue",
    },
    {
      label: "Toplanma alanı",
      tone: "soft",
    },
  ],
};

export const teamSection = {
  eyebrow: "Değişime Yön Verenler",
  title: "Ekibimiz",
};

export const team = [
  {
    name: "Gaye Başaran",
    role: "Proje Koordinatörü",
    meta: "Kırklareli Üniversitesi · Hukuk Fakültesi",
    photo: "/images/ekip-1.jpg",
    quote: "İklim eylemini bir konferans salonundan çıkarıp kampüsün toprağına dokundurduğumuzda, farkındalık kalıcı bir alışkanlığa dönüşüyor.",
  },
  {
    name: "Ekip Üyesi İki",
    role: "Saha Sorumlusu",
    meta: "Kırklareli Üniversitesi · Bölüm Adı",
    photo: "/images/ekip-2.jpg",
    quote: "Sekiz yerleşkeye dağılan 31 fidan, aslında 31 ayrı sohbetin başlangıcı. Asıl ektiğimiz şey fikir.",
  },
  {
    name: "Ekip Üyesi Üç",
    role: "İçerik ve Araştırma",
    meta: "Kırklareli Üniversitesi · Bölüm Adı",
    photo: "/images/ekip-3.jpg",
    quote: "Kataloğa yazdığımız her maddenin arkasında bir kaynak, bir mevzuat hükmü ve bir akademisyen onayı var.",
  },
  {
    name: "Ekip Üyesi Dört",
    role: "Tasarım ve Dijital",
    meta: "Kırklareli Üniversitesi · Bölüm Adı",
    photo: "/images/ekip-4.jpg",
    quote: "Bir QR kod, bir fidanı dijital bir ansiklopedi sayfasına bağlıyor. Teknoloji burada süs değil, köprü.",
  },
  {
    name: "Ekip Üyesi Beş",
    role: "Kurumsal İletişim",
    meta: "Kırklareli Üniversitesi · Bölüm Adı",
    photo: "/images/ekip-5.jpg",
    quote: "Belediyeden Orman Müdürlüğü'ne kadar her kapı, öğrenci olduğumuzu söylediğimizde biraz daha kolay açılıyor.",
  },
  {
    name: "Ekip Üyesi Altı",
    role: "Lojistik ve Organizasyon",
    meta: "Kırklareli Üniversitesi · Bölüm Adı",
    photo: "/images/ekip-6.jpg",
    quote: "İki gün, sekiz yerleşke, 31 fidan. Planlama doğru olursa gerisi kendiliğinden geliyor.",
  },
];

export const footer = {
  title: "İklim için ortak eylem",
  text: "Bu site, Kırklareli Üniversitesi öğrencilerinin COP31 kapsamında yürüttüğü projeleri tanıtmak amacıyla hazırlanmıştır.",
  columns: [
    {
      title: "Bölümler",
      links: [
        {
          label: "COP Nedir?",
          href: "#cop31",
        },
        {
          label: "Üniversitemiz",
          href: "#universite",
        },
        {
          label: "Projelerimiz",
          href: "#projeler",
        },
        {
          label: "Çevre Hukuku",
          href: "#hukuk",
        },
      ],
    },
  ],
  copyright: "© 2026 Kırklareli Üniversitesi COP31 Öğrenci Ekibi. Tüm hakları saklıdır.",
};
