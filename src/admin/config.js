/* ---------------------------------------------------------------------------
 *  ADMIN PANELİ AYARLARI
 *
 *  ⚠️ ÖNEMLİ — GÜVENLİK NOTU
 *  Bu site tamamen frontend'dir; sunucu tarafı yoktur. Aşağıdaki parola
 *  tarayıcıya inen JavaScript dosyasının içinde yer alır, yani teknik bilgisi
 *  olan biri bunu görebilir. Bu parola sadece "yanlışlıkla girilmesin" diye
 *  konulmuş basit bir kapıdır, gerçek bir güvenlik önlemi DEĞİLDİR.
 *
 *  Panelde yapılan değişiklikler yalnızca o tarayıcıda saklanır; siteyi
 *  ziyaret eden başkalarını etkilemez. Kalıcı hale getirmek için panelden
 *  "site.js indir" deyip dosyayı src/content/site.js ile değiştir.
 * -------------------------------------------------------------------------*/

/** Panele giriş parolası — buradan değiştir. */
export const ADMIN_PASSCODE = "cop31klu";

/** Panelin açılacağı adres. */
export const ADMIN_PATH = "/cop31kluadmin";

/** Oturumun hatırlandığı anahtar (sekme kapanınca sıfırlanır). */
export const ADMIN_SESSION_KEY = "cop31-admin-session";
