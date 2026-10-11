import { useState, useEffect } from "react";
import "./Countdown.css";

// COP31 resmi açılış tarihi: 9 Kasım 2026, Antalya (UTC+3)
const TARGET = new Date("2026-11-09T09:00:00+03:00");

function pad(n) {
  return String(n).padStart(2, "0");
}

function getTimeLeft() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, started: true };
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
    started: false,
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="cdcard" aria-label="COP31 Açılışına Kalan Süre">
      {/* Üst bar: Başlık + Dış Bağlantı Oku */}
      <div className="cdcard__top">
        <span className="cdcard__title">AÇILIŞA KALAN</span>
        <a
          href="https://cop31.tr"
          target="_blank"
          rel="noopener noreferrer"
          className="cdcard__link"
          title="COP31 Resmi Sitesine Git"
          aria-label="COP31 Resmi Sitesine Git"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>

      {/* Ana gövde: Sol tarafta logo + halka, Sağ tarafta sayaç */}
      <div className="cdcard__body">
        {/* Sol: Halka içine yerleştirilmiş COP31 Logosu */}
        <div className="cdcard__badge">
          <svg className="cdcard__ring" viewBox="0 0 100 100" aria-hidden="true">
            {/* Arka plan çemberi */}
            <circle
              className="cdcard__ring-bg"
              cx="50"
              cy="50"
              r="44"
              fill="none"
              strokeWidth="3.5"
            />
            {/* Aktif yeşil çember yay */}
            <circle
              className="cdcard__ring-arc"
              cx="50"
              cy="50"
              r="44"
              fill="none"
              strokeWidth="4"
              strokeDasharray="276"
              strokeDashoffset="90"
              strokeLinecap="round"
            />
          </svg>
          <div className="cdcard__logo-wrap">
            <img
              src="/images/cop31-badge.jpg"
              alt="COP31 Türkiye Logosu"
              className="cdcard__logo-img"
            />
          </div>
        </div>

        {/* Sağ: Gün ve Saat/Dk/Sn */}
        <div className="cdcard__stats">
          {/* Gün satırı */}
          <div className="cdcard__days-row">
            <span className="cdcard__days-num">{time.days}</span>
            <span className="cdcard__days-label">GÜN</span>
          </div>

          {/* Alt zaman satırı: SAAT - DK - SN */}
          <div className="cdcard__units">
            <div className="cdcard__unit">
              <span className="cdcard__unit-num">{pad(time.hours)}</span>
              <span className="cdcard__unit-lbl">SAAT</span>
            </div>
            <div className="cdcard__unit">
              <span className="cdcard__unit-num">{pad(time.minutes)}</span>
              <span className="cdcard__unit-lbl">DK</span>
            </div>
            <div className="cdcard__unit">
              <span className="cdcard__unit-num">{pad(time.seconds)}</span>
              <span className="cdcard__unit-lbl">SN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
