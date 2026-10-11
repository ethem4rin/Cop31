/* ---------------------------------------------------------------------------
 *  richText — metin içinde kalın yazı
 *  ---------------------------------------------------------------------------
 *  site.js'teki herhangi bir yazının içinde bir kelimeyi/ifadeyi iki yıldız
 *  arasına alırsan kalın görünür (WhatsApp'taki gibi):
 *
 *      "Projelerimiz **31 Fidan** ve **Öğrenciden İşletmeye**"
 *
 *  Yıldızların arasındaki kısım <strong> ile sarılır.
 * -------------------------------------------------------------------------*/
export function richText(text) {
  if (typeof text !== "string") return text;
  // **...** gruplarını ayır; yıldızlı olanları kalın yap
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  );
}
