/* ============================================================================
 *  COP31 — İÇERİK DOSYASI
 *  Bu dosya admin panelinden (11.10.2026) güncellenmiştir.
 *  Görseller: public/images/ klasörüne atılıp yolu "/images/ad.webp" yazılır.
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
  button: "Harika",
  thanks: "Gezegen için teşekkürler.",
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
  video: "/videos/cop-animasyon.mp4",
};

export const copHistory = {
  eyebrow: "COP Zirveleri",
  title: "COP31 Nedir ? ",
  lead: "COP31, Birleşmiş Milletler İklim Değişikliği Konferanslarının 31’incisidir ve Kasım \n2026’da Antalya’da düzenlenecektir.Türkiye’nin ev sahipliği yapacağı bu konferans, küresel iklim politikaları \naçısından önemli bir buluşma olacaktır.",
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

export const sdg = {
  eyebrow: "Sürdürülebilir Kalkınma",
  title: "Birleşmiş Milletler Kalkınma Amaçları",
  lead: "Sürdürülebilir Kalkınma Amaçları (SKA), Birleşmiş Milletler tarafından 2015 yılında kabul edilen ve 2030 yılına kadar dünyada yoksulluğu bitirmek, gezegeni korumak ve refahı güvence altına almak için belirlenen 17 küresel amaçtan oluşur. Projemiz, bu 17 amaçtan başlıca şunların gerçekleştirilmesine katkı sağlamayı hedefler:",
  items: [
    {
      code: "6",
      name: "Temiz Su ve Sanitasyon",
      icon: "/images/ska-6.webp",
      body: "Herkes için su ve sanitasyonun erişilebilirliğini ve sürdürülebilir yönetimini güvence altına almak.",
    },
    {
      code: "7",
      name: "Erişilebilir ve Temiz Enerji",
      icon: "/images/ska-7.webp",
      body: "Herkes için güvenilir, sürdürülebilir ve modern enerjiye erişimi sağlamak.",
    },
    {
      code: "11",
      name: "Sürdürülebilir Şehirler ve Topluluklar",
      icon: "/images/ska-11.webp",
      body: "Şehirleri ve insan yerleşimlerini kapsayıcı, güvenli, dayanıklı ve sürdürülebilir kılmak.",
    },
    {
      code: "12",
      name: "Sorumlu Üretim ve Tüketim",
      icon: "/images/ska-12.webp",
      body: "Sürdürülebilir üretim ve tüketim kalıplarını garanti altına almak.",
    },
    {
      code: "13",
      name: "İklim Eylemi",
      icon: "/images/ska-13.webp",
      body: "İklim değişikliği ve etkileriyle mücadele etmek için acil eyleme geçmek.",
    },
    {
      code: "14",
      name: "Sudaki Yaşam",
      icon: "/images/ska-14.webp",
      body: "Okyanusları, denizleri ve deniz kaynaklarını sürdürülebilir kalkınma için korumak ve sürdürülebilir şekilde kullanmak.",
    },
    {
      code: "15",
      name: "Karasal Yaşam",
      icon: "/images/ska-15.webp",
      body: "Karasal ekosistemleri korumak ve sürdürülebilir kullanımını desteklemek; ormanları sürdürülebilir yönetmek, çölleşmeyle mücadele etmek ve biyolojik çeşitlilik kaybını durdurmak.",
    },
  ],
};

export const university = {
  eyebrow: "Kırklareli Üniversitesi",
  title: "COP31 Çalışmalarımız",
  lead: "Okulumuzda, 9-20 Kasım 2026 tarihleri arasında Antalya’da gerçekleştirilecek COP31 kapsamında \nüniversitemiz tarafından planlanan etkinlik ve faaliyetlere ilişkin bildirimler alındı. Projelerimiz **“COP31 \nİÇİN 31 FİDAN”** ve **“Öğrenciden İşletmeye”** bu etkinlik ve faaliyet çağrısı üzerine düzenlenmektedir.",
  image: "/images/rektor.webp",
  imageCaption: "",
  imageBadge: "Rektörümüz",
  imageName: "Prof. Dr. Rengin Ak",
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
    image: "/images/proje-1.webp",
    summary: "COP31'e doğrudan gönderme yapacak şekilde 31 fidan dikiyoruz. Her fidan, iklim değişikliğiyle mücadele ve sürdürülebilirlik kapsamında belirlenmiş bir temayı temsil ediyor. Fidanların yanındaki QR kodlar, ziyaretçileri o temaya ait bilgilendirme sayfasına yönlendiriyor.",
    facts: [
      {
        label: "Tarih",
        value: "19 – 20 Ekim 2026",
      },
      {
        label: "Süre",
        value: "Yerleşke başına ~2 saat",
      },
      {
        label: "Alan",
        value: "3 yerleşke",
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
    image: "/images/proje-2.webp",
    summary: "Kırklareli'nde faaliyet gösteren işletmelerin günlük operasyonlarında uygulayabilecekleri, sade ve uygulanabilir sürdürülebilirlik önerilerinden oluşan bir katalog hazırlıyoruz. İçerikler öğretim üyelerimiz tarafından doğrulanıyor, katalog işletmelere ücretsiz ulaştırılıyor.",
    facts: [
      {
        label: "Tarih",
        value: "22 Ekim 2026",
      },
      {
        label: "Format",
        value: "Basılı",
      },
      {
        label: "Ziyaret",
        value: "Üçerli öğrenci grupları",
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
  source: "Prof. Dr. Ahmet Mithat Güneş · Çevre Hukuku",
  intro: [
    "Çevre Kanununun ikinci maddesinde çevrenin korunmasına ilişkin oldukça kapsamlı bir tanıma yer verildiği dikkat çekmektedir. Buna göre çevre korunması çevresel değerlerin ve ekolojik dengenin tahribini, bozulmasını ve yok olmasını önlemeye, mevcut bozulmaları gidermeye, çevreyi iyileştirmeye ve geliştirmeye, çevre kirliliğini önlemeye yönelik çalışmaların bütününü tanımlar. Dikkat çekilmesi gereken diğer bir husus, çevrenin korunmasına yönelik girişimlerin insanlardan ve insan gereksinimlerinden soyutlanmadan gerçekleştirilmesi gerektiğidir. Zira çevre hukukunun amacı çevresel varlıkları insanlardan soyutlayarak korumak değildir; aksine çevresel denge bozulmayacak şekilde insanların çevreden yararlanmalarının düzenlenmesi amaçlanmaktadır.",
    "Çevre hukukunun temel ilkeleri, çevre hukukuna temel oluşturan, bu hukuk dalının bağımsız bir alan olarak gelişmesinde ve kendine özgü bir karakter kazanmasında belirleyici olan ilkelerdir. Önleme ilkesi, ihtiyat ilkesi, kirleten öder ilkesi, sürdürülebilir kalkınma ilkesi, katılım ilkesi, entegrasyon ilkesi ve iş birliği ilkesi, bu bağlamda karşımıza çıkan başlıca ilkelerdir. İlkeler, modern bir çevre politikasının taşıyıcı sütunlarına benzetilebilir.",
  ],
  principlesTitle: "Çevre Hukukunun Temel İlkeleri",
  principles: [
    {
      no: "1",
      title: "Önleme İlkesi",
      body: "Önleme ilkesi, günümüzde çevre hukukuna temel oluşturan en önemli ilkelerden biridir. Önleyici bir yaklaşıma esas alan önleme ilkesi, ilgili makamların henüz çevresel sorunlar ortaya çıkmadan harekete geçerek çevresel tehditleri bertaraf etmesini öngörür. Önleme ilkesinin doktrinde altın ilke olarak nitelendirildiği dikkat çekmektedir. Nitekim Avrupa Birliği'nin kurucu antlaşmalarında bu ilkeden doğrudan söz edilmektedir.\n\nÇevresel kirliliğin öncelikle doğduğu yerde önlenmesi gerektiğini ifade eden kaynakta önleme ilkesi, önleme ilkesinin bir alt ilkesidir. Kaynakta önleme ilkesi uyarınca, çevresel zararlarla ortaya çıkışlarından mümkün mertebe hemen sonra ve öncelikle ortaya çıktıkları yerde mücadele edilmelidir.",
    },
    {
      no: "2",
      title: "İhtiyat İlkesi",
      body: "İhtiyat ilkesi genel olarak, bir madde veya faaliyetin çevre açısından olumsuz neticeler doğuracağı hususunda ciddi bir şüphenin varlığı halinde bilimsel bir kanıtın ortaya çıkışı beklenmeden önleyici tedbirlerin alınmasını öngörmektedir. İhtiyat ilkesi birçok yönden önleme ilkesine benzemektedir. Ancak ihtiyat ilkesi, önleme ilkesinden farklı olarak bilimsel belirsizlik ve düşük düzeydeki çevresel zarar olasılıkları hallerinde de önleyici tedbirlerin alınmasını öngörür.",
    },
    {
      no: "3",
      title: "Kirleten Öder İlkesi",
      body: "Kirleten öder ilkesi genel olarak, çevresel zararlara neden olan kişilere sebep oldukları zararlarla mücadelenin bedelinin ödettirilmesini amaçlamaktadır. Kirleten öder ilkesi, kirletenlere sebep oldukları kirlilikle mücadelenin bedelinin ödettirilmesinin yanı sıra çevresel zararlara yol açan kişileri bu zararları azaltmaya ve daha az zarara neden olacak yöntemler bulmaya da teşvik etmektedir. Kirleten öder ilkesine, resmi düzeyde ilk defa OECD tarafından 1972 yılında kabul edilen bir tavsiye kararında yer verilmiştir.\n\nKirleten kavramına ilişkin ilk tanımlardan biri 1975 yılında Avrupa Konseyi tarafından yapılmıştır. Kirleten burada, doğrudan veya dolaylı bir şekilde çevrenin bozulmasına neden olan veya bozulmaya sebebiyet verecek bir koşulu ortaya çıkaran kişi olarak tanımlanmıştır. Çevre Kanununun 2. maddesi de benzer şekilde kirleteni, faaliyetleri sırasında veya sonrasında doğrudan veya dolaylı olarak çevre kirliliğine, ekolojik dengenin ve çevrenin bozulmasına neden olan gerçek ve tüzel kişiler olarak tanımlamaktadır.",
    },
    {
      no: "4",
      title: "Sürdürülebilir Kalkınma İlkesi",
      body: "Sürdürülebilir kalkınma ilkesi, doksanlı yılların başından itibaren çevre hukukunun etkisini ve ağırlığını en fazla hissettiren ilkesidir. Ekonomik büyüme ile doğal kaynakların korunması arasında bir denge kurulmasını öngören sürdürülebilir kalkınma ilkesi, bu doğrultuda şimdiki kuşakların ihtiyaçlarının; gelecek kuşakların kendi gereksinim ve beklentilerini karşılayabilme yeteneğini tehlikeye düşürmeden karşılanması gerektiği düşüncesine dayanır. Sürdürülebilir kalkınma ilkesi bu bakımdan, doğal varlıkların taşıma kapasitesini ve kendilerini yenileyebilme olanağını dikkate alan bir ekonomik büyüme modelini hedeflemektedir.",
    },
    {
      no: "5",
      title: "Katılım İlkesi",
      body: "Katılım, bireylerin çevresel yönetim sürecinde rol oynaması, etkide bulunması ve böylelikle kendi yaşamlarını şekillendirecek bu süreci yönlendirmesini tanımlamaktadır. Katılım, çevresel kararların demokratik meşruiyetini ve etkililiğini artırmanın yanı sıra halka idari kararların alınması ve yürütülmesi sürecinde denetleme olanağı sunmakta, devlet idaresinde şeffaflığı artırmakta, ilgili idari birimlere kararlarına temel oluşturacak sağlam bilgilere erişme olanağı yaratmakta ve idari kararların yerel koşullar da göz önünde bulundurularak alınmasını sağlamaktadır. Stockholm Bildirgesi, çevresel konularda katılımın gerekliliğine dikkat çeken ilk metinlerden biridir. 1982 Anayasası'nın 56. maddesinde, çevrenin korunması devletin ve vatandaşların ortak ödevi olarak belirtilmiştir.",
    },
    {
      no: "6",
      title: "İş Birliği İlkesi",
      body: "İş birliği ilkesi genel olarak, çevrenin korunmasının yalnızca devlet eliyle yerine getirilmesi gereken bir ödev olmadığını, aksine çevre sorunlarının çözümünde kamusal birimler ve toplumun ortaklaşa hareket etmesi gerektiğini öngörmektedir. Dolayısıyla iş birliği ilkesi; kamusal birimleri, sivil toplum örgütlerini ve diğer bütün özel işletme ve kişileri, çevrenin korunmasına katkıda bulunmak ve bu konuda ortaklaşa hareket etmekle yükümlü kılmaktadır.",
    },
  ],
  national: {
    title: "Ulusal Düzenlemeler",
    items: [
      {
        name: "Türkiye Cumhuriyeti Anayasası",
        year: "1982",
        intro: "Türkiye Cumhuriyeti'nin devlet yapısını, devlet organlarının görev ve yetkilerini ve bireylerin temel hak ve özgürlüklerini düzenleyen Anayasa;",
        detail: "56. maddeyle herkesin sağlıklı ve dengeli bir çevrede yaşama hakkını güvence altına alırken çevrenin geliştirilmesini, çevre sağlığının korunmasını ve çevre kirliliğinin önlenmesini devletin ve vatandaşların ödevi olarak belirler. 169. maddeyle ise ormanların korunması ve geliştirilmesi, orman alanlarının genişletilmesi ve ormanlara zarar verebilecek faaliyetlerin önlenmesine ilişkin esasları düzenler.",
      },
      {
        name: "2872 Sayılı Çevre Kanunu",
        year: "1983",
        intro: "Çevrenin korunmasına ilişkin temel yasal düzenlemelerden biri olan bu kanun;",
        detail: "1. maddeyle çevrenin, sürdürülebilir çevre ve sürdürülebilir kalkınma ilkeleri doğrultusunda korunmasını amaçlarken 28. maddeyle çevreyi kirleten ve çevreye zarar verenlerin, sebep oldukları kirlilik ve bozulmadan doğan zararlardan kusur şartı aranmaksızın sorumlu tutulmasını öngörür.",
      },
      {
        name: "7552 Sayılı İklim Kanunu",
        year: "2025",
        intro: "Türkiye'nin iklim değişikliğiyle mücadelesine ilişkin yasal çerçeveyi oluşturan bu kanun;",
        detail: "3. maddeyle iklim adaleti, ihtiyatlılık, katılım, sürdürülebilirlik, şeffaflık ve adil geçiş gibi ilkeleri esas alır. Ayrıca ortak fakat farklılaştırılmış sorumluluklar ve göreceli kabiliyetler ilkesini dikkate alarak kamu kurumları, kuruluşlar ve kişilerin alınan tedbirlere uyma yükümlülüğünü belirler; Ulusal Katkı Beyanı ve net sıfır emisyon hedefi doğrultusunda ülkenin kalkınma önceliklerinin ve özel koşullarının gözetilmesini öngörür.",
      },
    ],
    othersTitle: "Diğer Bazı Ulusal Düzenlemeler",
    others: [
      "6831 sayılı Orman Kanunu",
      "2873 sayılı Milli Parklar Kanunu",
      "2863 sayılı Kültür ve Tabiat Varlıklarını Koruma Kanunu",
      "5403 sayılı Toprak Koruma ve Arazi Kullanımı Kanunu",
      "3621 sayılı Kıyı Kanunu",
      "Çevresel Etki Değerlendirmesi Yönetmeliği",
      "Sıfır Atık Yönetmeliği",
    ],
  },
  international: {
    title: "Uluslararası Düzenlemeler",
    items: [
      {
        name: "BM İklim Değişikliği Çerçeve Sözleşmesi",
        en: "United Nations Framework Convention on Climate Change",
        year: "UNFCCC · 1992",
        intro: "COP zirvelerinin hukuki zeminini hazırlayan bu belge;",
        detail: "2. başlıkta açıklandığı üzere atmosferdeki sera gazı yoğunluklarının, iklim sistemine yönelik tehlikeli insan kaynaklı müdahaleleri önleyecek bir düzeyde dengelenmesini sağlamayı amaçlamaktadır. Bu doğrultuda taraflar, 3. başlıkta yer alan ilkelere uygun eylemlerde bulunur. 7. başlıkta ise oluşturulan Taraflar Konferansı'nın görevleri belirlenmiştir.",
      },
      {
        name: "Kyoto Protokolü",
        en: "The Kyoto Protocol",
        year: "1997",
        intro: "BM İklim Değişikliği Çerçeve Sözleşmesi'nin uygulanmasına yönelik bu protokol;",
        detail: "sürdürülebilir kalkınma kapsamında tarafların 3. başlık altında belirlenen nicelleştirilmiş emisyon sınırlama ve azaltım taahhütlerini yerine getirmelerini ve bu doğrultuda 2. başlıkta belirtilen politika ve önlemleri uygulamalarını öngörür. Protokol, atmosferdeki sera gazı yoğunluklarının azaltılmasına ve iklim sistemi üzerindeki tehlikeli müdahalelerin önlenmesine katkıda bulunurken 12. maddeyle birlikte temiz kalkınma mekanizması oluşturur; bu mekanizmanın amacı tarafları nihai amaca ulaşma doğrultusunda desteklemektir.",
      },
      {
        name: "Paris Anlaşması",
        en: "The Paris Agreement",
        year: "2015",
        intro: "BM İklim Değişikliği Çerçeve Sözleşmesi kapsamında kabul edilen bu anlaşma;",
        detail: "sürdürülebilir kalkınma ve yoksulluğun ortadan kaldırılması amacıyla küresel iklim değişikliği tehdidine karşı mücadeleyi güçlendirir. 2. başlık altında küresel sıcaklık artışının sanayi öncesi seviyelere kıyasla 2°C'nin oldukça altında tutulması ve 1,5°C ile sınırlandırılması hedeflenirken 4. başlıkla beraber tarafların ulusal katkı beyanları aracılığıyla sera gazı emisyonlarını azaltmaya yönelik hedefler belirlemeleri ve bu hedefleri zaman içinde geliştirmeleri öngörülür. Anlaşmanın nihai amacı doğrultusunda ise 15. madde ile birlikte \"Anlaşmanın Uygulanmasını Kolaylaştırma ve Anlaşmaya Uyumu Teşvik Komitesi\" (PAICC) kurulmuştur.",
      },
    ],
    othersTitle: "Diğer Bazı Uluslararası Düzenlemeler",
    others: [
      "2003/4 sayılı Halkın Çevresel Bilgilere Erişimine İlişkin Yönerge",
      "1049/2001 sayılı Belgelere Erişime İlişkin Tüzük",
      "2003/35 sayılı Halkın Katılımına İlişkin Yönerge",
      "2000/60 sayılı Su Çerçeve Yönergesi",
      "98/83 sayılı İçme Suyu Kalitesi Yönergesi",
      "1013/2006 sayılı Atıkların Taşınımı Tüzüğü",
      "99/31 sayılı Atık Depolama Yönergesi",
      "2000/53 sayılı Ömrünü Tamamlamış Araçlar Yönergesi",
      "2006/66 sayılı Atık Piller ve Bataryalar Yönergesi",
      "2008/50 sayılı Hava Kalitesi Yönergesi",
      "2003/17 sayılı Yakıt Kalitesi Yönergesi",
    ],
  },
  impacts: [
    {
      title: "İklim Değişikliğinin Tarımsal Süreç Üzerindeki Etkisi",
      intro: [
        "Tarım, insanların temel gıda ihtiyaçlarının karşılanmasını sağlayan ve ekonomik faaliyetlerin önemli bir bölümünü oluşturan stratejik bir sektördür. Tarımsal üretim; sıcaklık, yağış, toprak nemi ve su kaynakları gibi iklim koşullarıyla doğrudan ilişkilidir. İklim değişikliğiyle birlikte artan sıcaklıklar, yağış rejimindeki değişimler ve aşırı hava olaylarının daha sık görülmesi, tarımsal üretimin verimliliğini ve sürdürülebilirliğini olumsuz etkilemektedir. Hükümetlerarası İklim Değişikliği Paneli'nin (IPCC) 2022 yılında yayımlanan raporuna göre, insan kaynaklı küresel ısınma son 50 yılda özellikle orta ve düşük enlemlerde tarımsal verimlilik artışını yavaşlatmıştır. İklim değişikliğinin tarımsal süreç üzerindeki başlıca etkileri şunlardır:",
      ],
      points: [
        "Sıcaklık ve yağış rejimindeki değişimler, bitkilerin büyüme ve gelişme süreçlerini, çiçeklenme dönemlerini, ürünlerin olgunlaşma zamanlarını ve hasat miktarlarını etkilemektedir. Aşırı sıcaklıklar ve düzensiz yağışlar, bitkilerin ihtiyaç duyduğu suya erişimini zorlaştırarak verim ve ürün kalitesinde düşüşlere neden olabilmektedir. Kuraklık ve aşırı yağışlar ise tarım alanlarında ürün kayıplarını artırmaktadır.",
        "Kuraklık ve su kaynaklarının azalması, tarımsal üretimde sulama ihtiyacını artırmakta ve üretim maliyetlerini yükseltmektedir. Bitkilerin gelişme dönemlerinde ihtiyaç duydukları suya ulaşamaması, tarımsal kuraklığa ve verim kaybına yol açmaktadır. Türkiye Tarımsal Kuraklıkla Mücadele Stratejisi ve Eylem Planı'nda da kuraklığın tarımsal üretimi doğrudan ve dolaylı olarak etkileyerek verimliliği azalttığı belirtilmektedir.",
        "Toprak yapısı ve tarımsal ekosistemlerde meydana gelen değişimler, toprak neminin azalmasına, erozyon riskinin artmasına ve toprak verimliliğinin olumsuz etkilenmesine neden olabilmektedir. Bunun yanında sıcaklık ve nem koşullarındaki değişimler, bitki hastalıklarının ve tarımsal zararlıların yayılımını etkileyerek bitki koruma uygulamalarına duyulan ihtiyacı artırabilmektedir.",
        "Hayvansal üretim üzerindeki etkiler de iklim değişikliğinin tarımsal süreçteki önemli sonuçları arasındadır. Aşırı sıcaklıklar hayvanlarda ısı stresine neden olarak yem tüketimini, üreme performansını, süt ve et verimini olumsuz etkileyebilmektedir. Kuraklık nedeniyle meraların ve yem kaynaklarının zayıflaması da hayvancılık faaliyetlerini zorlaştırmaktadır.",
      ],
      after: [
        "Türkiye, büyük ölçüde yarı kurak iklim koşullarının etkisinde olması nedeniyle iklim değişikliğinin tarımsal etkilerine karşı hassas bir konumdadır. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı tarafından yayımlanan İklim Değişikliğine Uyum Stratejisi ve Eylem Planı (2024–2030) kapsamında, Türkiye'de tarım sektörünü etkileyen başlıca risklerden birinin kuraklık olduğu belirtilmektedir. Kuraklık riskinin özellikle İç Anadolu, Güneydoğu Anadolu ve Doğu Anadolu bölgelerinde yüksek olduğu ifade edilmektedir. Bu koşullar, tarımsal üretimin devamlılığını, çiftçilerin gelirlerini ve gıda arzının güvenilirliğini tehdit etmektedir.",
      ],
    },
    {
      title: "İklim Değişikliğinin Su Varlıkları Üzerindeki Etkisi",
      intro: [
        "Su kaynakları insanlığın temel yaşam kaynağıdır. Günümüzde dünyanın iklim sistemini oluşturan atmosfer, hidrosfer ve litosferde bozulmalarla birlikte doğal denge de bozulmuş, bunun sonuçları da iklimi etkilemiştir. İklim değişikliğinin önemli sonuçlarından birisi, hatta belki de en önemlisi su kaynakları üzerinde yarattığı olumsuz etkileridir. İklim değişikliğinin en önemli etkisinin su döngüsü üzerinde olacağı tüm bilimsel raporlarda ispatlanmıştır. Araştırmalar 2025 yılından itibaren 3 milyardan fazla insanın su kıtlığı yaşayacağını ortaya koymaktadır. İklim değişikliği nedeniyle;",
      ],
      points: [
        "Su döngüsünde değişimler (artan atmosferik su buharı, yağış rejiminde değişiklik, kuraklık ve seller gibi aşırı sonuçlar, dağ buzullarının geniş ölçüde erimesi, kurak dönemlerde suya erişebilirliği engelleyen buzul örtüsü, toprak neminde değişiklikler),",
        "yüksek hava sıcaklıkları su kalitesini etkilemesi ve",
        "deniz seviyesi yüksekliğinin nehir ağzı ve kıyı yer altı sularının tuzlanmasına yol açması, bu nedenle kıyı alanlarında insanların ve ekosistemlerin tatlı suya erişiminin azalması söz konusudur.",
      ],
      after: [
        "İklim değişikliğinin su kaynakları üzerindeki etkileri, Hükümetlerarası İklim Değişikliği Paneli'nin (IPCC) 2022 yılında yayımlanan raporunda geniş bir kapsamda ele alınmaktadır. Buna göre, kabaca dünya nüfusunun (8 milyar kişi) yarısının en azından yılın bir bölümünde iklimsel ya da iklimsel olmayan nedenlere bağlı olarak ciddi su sıkıntısı çekeceği tahmin edilmektedir. İnsan kaynaklı iklim değişikliğinin etkisiyle, etkili taşkınlara ve kuraklıklara neden olan aşırı hava olaylarının ortaya çıkma sıklığı ve şiddeti artmaktadır.",
        "Birleşmiş Milletler tarafından 2020 yılında yayımlanan Dünya Su Gelişim Raporu'na göre iklim değişikliği etkisiyle dünya genelinde dönemsel su kıtlığı yaşanma ihtimali ve ısı dalgaları, daha önce görülmemiş şiddette yağışlar, fırtınalar ve fırtına dalgası gibi aşırı hava olaylarının görülme sıklığının artacağı tahmin edilmektedir.",
        "Türkiye, iklim değişikliği etkilerinden yoğun olarak etkileneceği tahmin edilen Akdeniz iklim kuşağında yer almaktadır. Türkiye'de iklim değişikliğinden kaynaklanan yaz sıcaklıklarının artması, kış yağışlarının azalması, yüzey sularının kaybı, kuraklıkların sıklaşması, toprağın bozulması, kıyılarda erozyon, taşkın ve su baskınları gibi etkiler doğrudan su kaynaklarının varlığını tehdit etmektedir.",
        "Unutmayalım, su tasarrufu sadece bugünü değil, geleceğimizi de korumak demektir. Hep birlikte bilinçli adımlar atarak, sürdürülebilir bir gelecek için su kaynaklarımızı koruyabiliriz.",
      ],
    },
  ],
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
  campuses: [
    {
      name: "Kayalı Yerleşkesi",
      image: "/images/yerleske-kayali.webp",
    },
    {
      name: "Lüleburgaz Yerleşkesi",
      image: "/images/yerleske-luleburgaz.webp",
    },
    {
      name: "Karahıdır Yerleşkesi",
      image: "/images/yerleske-karahidir.webp",
    },
  ],
  legend: [],
  mapImage: "",
  placeholderText: "Harita görseli buraya gelecek",
  placeholderHint: "public/images/harita.jpg olarak ekleyin",
};

export const teamSection = {
  eyebrow: "Değişime Yön Verenler",
  title: "Ekibimiz",
};

export const team = [
  {
    name: "Gaye Başaran",
    role: "Ekip Üyesi",
    meta: "Kırklareli Üniversitesi · Hukuk ",
    photo: "/images/ekip-1.jpg",
    quote: "İklim eylemini bir konferans salonundan çıkarıp kampüsün toprağına dokundurduğumuzda, farkındalık kalıcı bir alışkanlığa dönüşüyor.",
  },
  {
    name: "Zehra Ceren Coşar",
    role: "Ekip Üyesi",
    meta: "Kırklareli Üniversitesi · Hukuk",
    photo: "/images/ekip-2.jpg",
    quote: "Sekiz yerleşkeye dağılan 31 fidan, aslında 31 ayrı sohbetin başlangıcı. Asıl ektiğimiz şey fikir.",
  },
  {
    name: "Bilal Çetinkaya",
    role: "Ekip Üyesi",
    meta: "Kırklareli Üniversitesi · Hukuk",
    photo: "/images/ekip-3.jpg",
    quote: "Kataloğa yazdığımız her maddenin arkasında bir kaynak, bir mevzuat hükmü ve bir akademisyen onayı var.",
  },
  {
    name: "Aleyna Karakurt",
    role: "Ekip Üyesi",
    meta: "Kırklareli Üniversitesi · İşletme",
    photo: "/images/ekip-4.jpg",
    quote: "Bir QR kod, bir fidanı dijital bir ansiklopedi sayfasına bağlıyor. Teknoloji burada süs değil, köprü.",
  },
  {
    name: "Kerem Aydın",
    role: "Ekip Üyesi",
    meta: "Kırklareli Üniversitesi · Mekatronik Mühendisliği",
    photo: "/images/ekip-5.jpg",
    quote: "Belediyeden Orman Müdürlüğü'ne kadar her kapı, öğrenci olduğumuzu söylediğimizde biraz daha kolay açılıyor.",
  },
  {
    name: "İbrahim Ethem Arın",
    role: "Ekip Üyesi",
    meta: "Kırklareli Üniversitesi · Yazılım Mühendisliği",
    photo: "/images/ekip-6.jpg",
    quote: "İki gün, sekiz yerleşke, 31 fidan. Planlama doğru olursa gerisi kendiliğinden geliyor.",
  },
];

export const thanks = {
  eyebrow: "Emeği Geçenler",
  title: "Teşekkür",
  lead: "Etkinlik ve faaliyetlerimizin hayata geçirilmesinde büyük emeği olan Kırklareli Üniversitesi Akademisyenlerimize içten teşekkürlerimizi sunarız:",
  people: [
    "Bu tarz çalışmaların meydana getirilmesinde oldukça büyük rolü olan Sayın Rektörümüz **Prof. Dr. Rengin Ak**,",
    "Fikirlerimizi ve projelerimizi her daim destekleyen Sayın Rektör Yardımcımız **Prof. Dr. Meryem Çamur Demir**,",
    "Çevre Hukuku alanında uzmanlaşmış Türkiye'deki sayılı akademisyenlerden biri olan Sayın **Prof. Dr. Ahmet Mithat Güneş**,",
    "Uluslararası Hukuk alanında uzmanlaşmış, aynı zamanda Hukuk Fakültesi Dekan Yardımcımız Sayın **Dr. Öğr. Üyesi Tuğçe İsayev**,",
    "Çevre Politikası konusunda değerli çalışmaları olan Sayın **Dr. Öğr. Üyesi İlknur Gül**,",
    "Her konuda destek olan, Ar-Ge Koordinatörlüğü'nde görevli Sayın **Dr. Öğr. Üyesi Nihat Akkurt**,",
    "ve bizden desteğini hiç esirgemeyen Öğrenci Kulüpleri Koordinatörümüz Sayın **Arş. Gör. Eren Aydın**.",
  ],
};

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
