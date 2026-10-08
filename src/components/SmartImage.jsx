import { useState } from "react";

/**
 * Görsel varsa gösterir; yoksa (ya da yüklenemezse) degrade yer tutucuya düşer.
 * Böylece public/images/ klasörü boşken de site düzgün görünür.
 */
export default function SmartImage({
  src,
  alt = "",
  label,
  className = "",
  imgClassName = "",
  children,
}) {
  const [failed, setFailed] = useState(false);
  const show = src && !failed;

  return (
    <div className={`${className} ${show ? "" : "ph"}`.trim()}>
      {show ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={imgClassName}
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="ph__label">{label || alt || "Görsel"}</span>
      )}
      {children}
    </div>
  );
}
