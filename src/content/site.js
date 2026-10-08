/* ============================================================================
 *  COP31 — İÇERİK DOSYASI
 *  ---------------------------------------------------------------------------
 *  SİTEDEKİ TÜM YAZILAR BU DOSYADADIR.
 *  Metinleri değiştirmek için sadece buradaki tırnak içlerini düzenle.
 *  Hiçbir component dosyasına dokunmana gerek yok.
 *
 *  GÖRSELLER:  public/images/ klasörüne at, sonra buraya "/images/dosya.jpg"
 *              şeklinde yaz. Boş bırakırsan ("") otomatik degrade arka plan gelir.
 * ==========================================================================*/

/* ---------------------------------------------------------------------------
 *  1) GENEL / MARKA
 * -------------------------------------------------------------------------*/
export const brand = {
  short: "COP31",
  name: "Kırklareli Üniversitesi",
  tagline: "İklim İçin Ortak Eylem",
  // Tarayıcı sekmesinde görünen başlık
  documentTitle: "COP31 | Kırklareli Üniversitesi — İklim İçin Ortak Eylem",
  // Navbar'daki logolar. Değiştirmek için public/images/ içine yeni dosya at
  // ve yolunu buraya yaz. Boş bırakırsan o logo gizlenir.
  logoCop31: "/images/logo-cop31.jpg",
  logoUniversity: "/images/logo-klu.webp",
};

/* ---------------------------------------------------------------------------
 *  2) NAVBAR MENÜSÜ
 *  id -> sayfadaki bölümün id'si. Sırayı değiştirebilir, label'ları düzenleyebilirsin.
 * -------------------------------------------------------------------------*/
export const navLinks = [
  { id: "cop31", label: "COP Nedir?" },
  { id: "universite", label: "Üniversitemiz" },
  { id: "projeler", label: "Projelerimiz" },
  { id: "hukuk", label: "Çevre Hukuku" },
  { id: "harita", label: "Kampüs Haritası" },
  { id: "ekip", label: "Ekibimiz" },
];

/* ---------------------------------------------------------------------------
 *  3) AÇILIŞ UYARISI (sitenin ilk açılışında çıkan kutu)
 * -------------------------------------------------------------------------*/
export const welcome = {
  // Kutu bir kez gösterilir; tekrar görmek için tarayıcı verisini temizle
  // ya da aşağıdaki storageKey'i değiştir.
  storageKey: "cop31-welcome-v1",
  titleAccent: "Düşük Karbon",
  titleRest: "Modu Aktif",
  body:
    "Şu an bu siteyi Karanlık Mod'da görüntüleyerek ekran enerjisinden tasarruf " +
    "ediyor ve dijital karbon ayak izimizi küçültüyorsunuz.",
  thanks: "Gezegen için teşekkürler.",
  button: "Harika",
};

/* ---------------------------------------------------------------------------
 *  4) HERO — COP31 NEDİR? (tam ekran, arka planda kayan fotoğraflar)
 * -------------------------------------------------------------------------*/
export const hero = {
  // Boş bırakılırsa başlığın üstündeki küçük etiket hiç görünmez.
  eyebrow: "",
  titleLines: ["İklim için", "ortak eylem"],
  // Başlığın altındaki tek satırlık alt başlık. Boş bırakırsan görünmez.
  subtitle: "Kampüsten Başlayan İklim Eylemi",

  // Başlığın altındaki bilgi satırları. icon: "pin" | "calendar" | "" (nokta)
  info: [
    { icon: "pin", text: "Kırklareli Üniversitesi · 8 Yerleşke" },
    { icon: "calendar", text: "19 – 22 Ekim 2026 · Fidan Dikimi ve Katalog Dağıtımı" },
  ],

  // Aşağı ok düğmesinin etrafındaki yazı. Boş bırakırsan ok da gizlenir.
  scrollHint: "Keşfet",

  // Arka planda sırayla kayan fotoğraflar. İstediğin kadar ekle/çıkar.
  // Boş bırakırsan ("") o slayt degrade arka planla gösterilir.
  slides: [
    { image: "/images/banner.webp", caption: "Kırklareli Üniversitesi Kampüsü" },
    // Yeni fotoğraf eklemek için: dosyayı public/images/ içine at ve
    // aşağıdaki gibi bir satır ekle (tek slayt varsa geçiş yapılmaz):
    // { image: "/images/hero-2.jpg", caption: "Kampüste fidan dikimi" },
  ],
  slideDurationMs: 3500, // her fotoğrafın ekranda kalma süresi

  // Hero'nun altındaki canlı sayaç şeridi
  stats: [
    { value: 31, suffix: "", label: "Dikilecek Fidan" },
    { value: 8, suffix: "", label: "Yerleşke" },
    { value: 6, suffix: "", label: "Ekip Üyesi" },
    { value: 240, suffix: "+", label: "Hedef Öğrenci" },
  ],
};

/* ---------------------------------------------------------------------------
 *  5) COP NEDİR — giriş başlığı ve açıklama metni
 * -------------------------------------------------------------------------*/
export const about = {
  eyebrow: "COP Nedir?",
  title: "Dünya iklim masasına oturuyor, biz kampüsten başlıyoruz.",
  lead:
    "COP (Conference of the Parties — Taraflar Konferansı), Birleşmiş Milletler " +
    "İklim Değişikliği Çerçeve Sözleşmesi'nin en yüksek karar organıdır. " +
    "Sözleşmeye taraf ülkeler her yıl bir araya gelerek sözleşmenin uygulanmasını " +
    "gözden geçirir ve iklim krizine karşı ortak kararlar alır.",
};

/* ---------------------------------------------------------------------------
 *  5b) COP ZİRVELERİ — "COP Nedir?" bölümünün altındaki tarihçe
 *  highlight: true olan satır vurgulu gösterilir (şu an COP31).
 * -------------------------------------------------------------------------*/
export const copHistory = {
  eyebrow: "COP Zirveleri",
  title: "Berlin'den Antalya'ya",
  lead:
    "İlk Taraflar Konferansı 1995'te Berlin'de toplandı. O günden bu yana " +
    "zirveler, iklim politikasının dönüm noktalarını üretti.",
  scrollHint: "Kaydırarak keşfet",
  // highlight: true olan zirve yeşil olarak öne çıkar.
  // text alanı şeritte görünmez; fareyle üzerine gelince ipucu olarak çıkar.
  items: [
    { code: "COP 1", year: "1995", city: "Berlin, Almanya", text: "İlk Taraflar Konferansı toplandı; sözleşmenin uygulanma süreci başladı.", highlight: false },
    { code: "COP 2", year: "1996", city: "Cenevre, İsviçre", text: "Bilimsel değerlendirmelerin müzakerelere esas alınması benimsendi.", highlight: false },
    { code: "COP 3", year: "1997", city: "Kyoto, Japonya", text: "Kyoto Protokolü kabul edildi; sanayileşmiş ülkelere sayısal emisyon azaltım yükümlülüğü getirildi.", highlight: false },
    { code: "COP 4", year: "1998", city: "Buenos Aires, Arjantin", text: "Kyoto Protokolü'nün uygulama kurallarına dair eylem planı belirlendi.", highlight: false },
    { code: "COP 5", year: "1999", city: "Bonn, Almanya", text: "Teknik müzakereler sürdürüldü.", highlight: false },
    { code: "COP 6", year: "2000", city: "Lahey, Hollanda", text: "Müzakereler uzlaşmazlıkla kesildi; süreç ertesi yıl Bonn'da sürdürüldü.", highlight: false },
    { code: "COP 7", year: "2001", city: "Marakeş, Fas", text: "Marakeş Uzlaşıları ile Kyoto Protokolü'nün uygulama kuralları tamamlandı.", highlight: false },
    { code: "COP 8", year: "2002", city: "Yeni Delhi, Hindistan", text: "Uyum ve sürdürülebilir kalkınma vurgusu öne çıktı.", highlight: false },
    { code: "COP 9", year: "2003", city: "Milano, İtalya", text: "Yutak alanları ve fon mekanizmalarına ilişkin kararlar alındı.", highlight: false },
    { code: "COP 10", year: "2004", city: "Buenos Aires, Arjantin", text: "Uyum ve karşı önlemler çalışma programı kabul edildi.", highlight: false },
    { code: "COP 11", year: "2005", city: "Montreal, Kanada", text: "Kyoto Protokolü yürürlüğe girdikten sonraki ilk taraflar toplantısı yapıldı.", highlight: false },
    { code: "COP 12", year: "2006", city: "Nairobi, Kenya", text: "Uyum konusunda Nairobi çalışma programı başlatıldı.", highlight: false },
    { code: "COP 13", year: "2007", city: "Bali, Endonezya", text: "Bali Yol Haritası ile yeni bir müzakere süreci başlatıldı.", highlight: false },
    { code: "COP 14", year: "2008", city: "Poznań, Polonya", text: "Uyum Fonu'nun işler hale getirilmesi kararlaştırıldı.", highlight: false },
    { code: "COP 15", year: "2009", city: "Kopenhag, Danimarka", text: "Yüksek beklentiyle toplandı; bağlayıcı bir anlaşma çıkmasa da sonraki süreci şekillendirdi.", highlight: false },
    { code: "COP 16", year: "2010", city: "Cancún, Meksika", text: "Cancún Anlaşmaları ile Yeşil İklim Fonu'nun kurulması kararlaştırıldı.", highlight: false },
    { code: "COP 17", year: "2011", city: "Durban, Güney Afrika", text: "Tüm ülkeleri kapsayacak yeni bir anlaşma için Durban Platformu oluşturuldu.", highlight: false },
    { code: "COP 18", year: "2012", city: "Doha, Katar", text: "Kyoto Protokolü'nün ikinci yükümlülük dönemi kabul edildi.", highlight: false },
    { code: "COP 19", year: "2013", city: "Varşova, Polonya", text: "Kayıp ve zarar için Varşova Mekanizması kuruldu.", highlight: false },
    { code: "COP 20", year: "2014", city: "Lima, Peru", text: "Ulusal katkı beyanlarının hazırlanmasına ilişkin çerçeve belirlendi.", highlight: false },
    { code: "COP 21", year: "2015", city: "Paris, Fransa", text: "Paris Anlaşması kabul edildi: küresel sıcaklık artışını 2 °C'nin altında, mümkünse 1,5 °C ile sınırlama hedefi.", highlight: false },
    { code: "COP 22", year: "2016", city: "Marakeş, Fas", text: "Paris Anlaşması'nın uygulanmasına yönelik çalışmalar başlatıldı.", highlight: false },
    { code: "COP 23", year: "2017", city: "Bonn, Almanya", text: "Fiji başkanlığında toplandı; Talanoa Diyaloğu başlatıldı.", highlight: false },
    { code: "COP 24", year: "2018", city: "Katowice, Polonya", text: "Paris Anlaşması'nın uygulama kuralları (Katowice Kural Kitabı) kabul edildi.", highlight: false },
    { code: "COP 25", year: "2019", city: "Madrid, İspanya", text: "Şili başkanlığında toplandı; karbon piyasaları konusunda uzlaşı sağlanamadı.", highlight: false },
    { code: "COP 26", year: "2021", city: "Glasgow, İskoçya", text: "Glasgow İklim Paktı ile ülkelerin ulusal katkı beyanlarını güçlendirmesi çağrısı yapıldı.", highlight: false },
    { code: "COP 27", year: "2022", city: "Şarm El-Şeyh, Mısır", text: "İklim kaynaklı kayıp ve zararların karşılanması için ayrı bir fon kurulması kararlaştırıldı.", highlight: false },
    { code: "COP 28", year: "2023", city: "Dubai, BAE", text: "İlk Küresel Durum Değerlendirmesi tamamlandı; fosil yakıtlardan uzaklaşma ilk kez metne girdi.", highlight: false },
    { code: "COP 29", year: "2024", city: "Bakü, Azerbaycan", text: "Gelişmekte olan ülkelere aktarılacak iklim finansmanı için yeni bir hedef belirlendi.", highlight: false },
    { code: "COP 30", year: "2025", city: "Belém, Brezilya", text: "Amazon bölgesinde düzenlenen ilk COP oldu; COP31'in Antalya'da yapılması bu zirvede kabul edildi.", highlight: false },
    // Vurgulu zirve, nokta yerine logolu madalyonla gösterilir.
    // badgeTitle / badgeSubtitle yalnızca vurgulu zirvede görünür.
    { code: "COP 31", year: "2026", city: "Antalya, Türkiye", text: "9–20 Kasım 2026'da Antalya'da toplanıyor. Başkanlık Türkiye ile Avustralya arasında paylaşılıyor; müzakerelere Avustralya başkanlık ediyor.", badgeTitle: "COP31", badgeSubtitle: "Türkiye", highlight: true },
  ],
};

/* ---------------------------------------------------------------------------
 *  6) ÜNİVERSİTEMİZİN COP31 ÇALIŞMALARI
 * -------------------------------------------------------------------------*/
export const university = {
  eyebrow: "Kırklareli Üniversitesi",
  title: "COP31 Çalışmalarımız",
  lead:
    "Üniversitemiz, COP31 kapsamında öğrenci odaklı bir çalışma programı " +
    "yürütüyor. Amacımız; farkındalığı sahaya, sahayı da kalıcı çıktıya " +
    "dönüştürmek.",
  // Sağdaki görsel (boş bırakırsan degrade desen gelir)
  image: "/images/universite.jpg",
  imageCaption: "Kırklareli Üniversitesi Kampüsü",
};

/* ---------------------------------------------------------------------------
 *  7) PROJELERİMİZ (2 proje)
 * -------------------------------------------------------------------------*/
export const projectsSection = {
  eyebrow: "Projelerimiz",
  title: "Sözden eyleme iki somut adım",
  lead:
    "COP31 gündemini Kırklareli ölçeğinde uygulanabilir iki projeye indirgedik: " +
    "biri kampüste kalıcı bir yeşil miras, diğeri şehrin işletmelerine ulaşan " +
    "bir bilgi köprüsü.",
};

export const projects = [
  {
    number: "01",
    badge: "Öğrenci Etkinliği / Farkındalık",
    title: "COP31 İçin 31 Fidan",
    subtitle: "Kırklareli Üniversitesi Öğrencilerinden İklim İçin Kalıcı Bir Miras",
    image: "/images/proje-1.jpg",
    summary:
      "COP31'e doğrudan gönderme yapacak şekilde 31 fidan dikiyoruz. Her fidan, " +
      "iklim değişikliğiyle mücadele ve sürdürülebilirlik kapsamında belirlenmiş " +
      "bir temayı temsil ediyor. Fidanların yanındaki QR kodlar, ziyaretçileri o " +
      "temaya ait bilgilendirme sayfasına yönlendiriyor.",
    facts: [
      { label: "Tarih", value: "19 – 20 Ekim 2026" },
      { label: "Süre", value: "Yerleşke başına ~1 saat" },
      { label: "Alan", value: "8 yerleşke" },
      { label: "Hedef Katılım", value: "Yerleşke başına 30 öğrenci" },
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
    // "31 Tema" listesi — alttaki açılır panelde gösterilir
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
    summary:
      "Kırklareli'nde faaliyet gösteren işletmelerin günlük operasyonlarında " +
      "uygulayabilecekleri, sade ve uygulanabilir sürdürülebilirlik önerilerinden " +
      "oluşan bir katalog hazırlıyoruz. İçerikler öğretim üyelerimiz tarafından " +
      "doğrulanıyor, katalog işletmelere ücretsiz ulaştırılıyor.",
    facts: [
      { label: "Tarih", value: "21 – 22 Ekim 2026" },
      { label: "Format", value: "Dijital PDF + Basılı" },
      { label: "Ziyaret", value: "Üçerli öğrenci grupları" },
      { label: "Ücret", value: "İşletmeler için ücretsiz" },
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

/* ---------------------------------------------------------------------------
 *  8) ÇEVRE HUKUKU YAZISI
 * -------------------------------------------------------------------------*/
export const law = {
  eyebrow: "Çevre Hukuku",
  title: "İklim eyleminin hukuki zemini",
  author: "Hukuk Fakültesi Çalışma Grubu",
  readingTime: "4 dk okuma",
  pullQuote:
    "Çevre hakkı, yalnızca bugünün değil; henüz doğmamış kuşakların da hak sahibi " +
    "olduğu nadir hukuki alanlardan biridir.",
  // Her eleman bir paragraf. İstediğin kadar paragraf ekleyebilirsin.
  paragraphs: [
    "Çevre hukuku, doğal kaynakların korunması ve sürdürülebilir kullanımı amacıyla kişilere, işletmelere ve devlete yüklenen yükümlülükleri düzenleyen hukuk dalıdır. İklim krizi, bu alanı teorik bir tartışma olmaktan çıkarıp günlük hayatın ve ticari faaliyetin doğrudan bir parçası haline getirmiştir.",
    "Türkiye hukukunda çevrenin korunması, Anayasa'nın 56. maddesinde \"herkes sağlıklı ve dengeli bir çevrede yaşama hakkına sahiptir\" ifadesiyle temel hak olarak güvence altına alınmıştır. Bu hak, devlete yalnızca müdahale etmeme değil, aynı zamanda çevreyi aktif olarak koruma ve iyileştirme ödevi yükler.",
    "Uluslararası düzlemde Birleşmiş Milletler İklim Değişikliği Çerçeve Sözleşmesi ve Paris Anlaşması, taraf devletlere ulusal katkı beyanları hazırlama ve bunları periyodik olarak güncelleme yükümlülüğü getirmektedir. COP toplantıları, bu yükümlülüklerin müzakere edildiği ve denetlendiği platformlardır.",
    "İşletmeler açısından ise sürdürülebilirlik artık gönüllü bir tercih değildir. Atık yönetimi, emisyon raporlaması, genişletilmiş üretici sorumluluğu ve Sıfır Atık mevzuatı gibi düzenlemeler, çevresel yükümlülükleri idari yaptırımlarla desteklenen somut hukuki ödevlere dönüştürmüştür.",
    "Projemizin hukuki boyutu da tam olarak buradan doğmaktadır: Yeşil Dönüşüm Kataloğu'nda yer alan teknik önerilerin her biri, yürürlükteki mevzuatla uyumlu olacak şekilde Hukuk Fakültemizin öğretim üyeleri tarafından kontrol edilmektedir. Amacımız, işletmelere yalnızca \"iyi fikir\" değil, hukuken de doğru yol haritaları sunmaktır.",
  ],
  // Yan kolondaki mevzuat kutusu
  referencesTitle: "İlgili Mevzuat",
  references: [
    { name: "T.C. Anayasası m. 56", note: "Sağlıklı ve dengeli çevrede yaşama hakkı" },
    { name: "2872 sayılı Çevre Kanunu", note: "Çevre kirliliğinin önlenmesi ve yaptırımlar" },
    { name: "Paris Anlaşması", note: "Ulusal katkı beyanları ve 1,5 °C hedefi" },
    { name: "Sıfır Atık Yönetmeliği", note: "Kaynağında ayrıştırma yükümlülüğü" },
    { name: "Atık Yönetimi Yönetmeliği", note: "Üretici sorumluluğu ve bertaraf esasları" },
  ],
};

/* ---------------------------------------------------------------------------
 *  9) KAMPÜS HARİTASI
 *  mapImage'i boş bırakırsan yer tutucu bir alan görünür.
 *  Görseli public/images/ içine atıp yolunu buraya yaz.
 * -------------------------------------------------------------------------*/
export const campusMap = {
  eyebrow: "Nerede?",
  title: "Kırklareli Üniversitesi Yerleşke Haritası",
  lead:
    "31 fidan, ağaç dikimine elverişli alanların durumuna göre 8 yerleşkeye " +
    "paylaştırılacaktır. Dikim noktaları harita üzerinde işaretlenecektir.",
  mapImage: "/images/harita.jpg", // ← kendi harita görselini buraya koy
  placeholderText: "Harita görseli buraya gelecek",
  placeholderHint: "public/images/harita.jpg olarak ekleyin",
  legend: [
    { label: "Fidan dikim noktası", tone: "green" },
    { label: "Bilgilendirme standı", tone: "blue" },
    { label: "Toplanma alanı", tone: "soft" },
  ],
};

/* ---------------------------------------------------------------------------
 *  10) EKİBİMİZ (6 kişi)
 *  photo: public/images/ekip-1.jpg gibi. Boş bırakırsan baş harfler görünür.
 * -------------------------------------------------------------------------*/
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
    quote:
      "İklim eylemini bir konferans salonundan çıkarıp kampüsün toprağına " +
      "dokundurduğumuzda, farkındalık kalıcı bir alışkanlığa dönüşüyor.",
  },
  {
    name: "Ekip Üyesi İki",
    role: "Saha Sorumlusu",
    meta: "Kırklareli Üniversitesi · Bölüm Adı",
    photo: "/images/ekip-2.jpg",
    quote:
      "Sekiz yerleşkeye dağılan 31 fidan, aslında 31 ayrı sohbetin başlangıcı. " +
      "Asıl ektiğimiz şey fikir.",
  },
  {
    name: "Ekip Üyesi Üç",
    role: "İçerik ve Araştırma",
    meta: "Kırklareli Üniversitesi · Bölüm Adı",
    photo: "/images/ekip-3.jpg",
    quote:
      "Kataloğa yazdığımız her maddenin arkasında bir kaynak, bir mevzuat " +
      "hükmü ve bir akademisyen onayı var.",
  },
  {
    name: "Ekip Üyesi Dört",
    role: "Tasarım ve Dijital",
    meta: "Kırklareli Üniversitesi · Bölüm Adı",
    photo: "/images/ekip-4.jpg",
    quote:
      "Bir QR kod, bir fidanı dijital bir ansiklopedi sayfasına bağlıyor. " +
      "Teknoloji burada süs değil, köprü.",
  },
  {
    name: "Ekip Üyesi Beş",
    role: "Kurumsal İletişim",
    meta: "Kırklareli Üniversitesi · Bölüm Adı",
    photo: "/images/ekip-5.jpg",
    quote:
      "Belediyeden Orman Müdürlüğü'ne kadar her kapı, öğrenci olduğumuzu " +
      "söylediğimizde biraz daha kolay açılıyor.",
  },
  {
    name: "Ekip Üyesi Altı",
    role: "Lojistik ve Organizasyon",
    meta: "Kırklareli Üniversitesi · Bölüm Adı",
    photo: "/images/ekip-6.jpg",
    quote:
      "İki gün, sekiz yerleşke, 31 fidan. Planlama doğru olursa gerisi " +
      "kendiliğinden geliyor.",
  },
];

/* ---------------------------------------------------------------------------
 *  11) ALT BİLGİ (FOOTER)
 * -------------------------------------------------------------------------*/
export const footer = {
  title: "İklim için ortak eylem",
  text:
    "Bu site, Kırklareli Üniversitesi öğrencilerinin COP31 kapsamında yürüttüğü " +
    "projeleri tanıtmak amacıyla hazırlanmıştır.",
  columns: [
    {
      title: "Bölümler",
      links: [
        { label: "COP Nedir?", href: "#cop31" },
        { label: "Üniversitemiz", href: "#universite" },
        { label: "Projelerimiz", href: "#projeler" },
        { label: "Çevre Hukuku", href: "#hukuk" },
      ],
    },
    // Yeni kolon eklemek istersen yukarıdakinin aynısını kopyalaman yeterli
    // (ya da admin panelinden "Alt Bilgi > Kolonlar > + Yeni ekle").
  ],
  copyright: "© 2026 Kırklareli Üniversitesi COP31 Öğrenci Ekibi. Tüm hakları saklıdır.",
};
