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
    <div className="cdw" aria-label="COP31'e kalan süre">
      {/* Sol: etiket */}
      <div className="cdw__label">
        <span className="cdw__pulse" aria-hidden="true" />
        <span>COP31&apos;E KALAN</span>
      </div>

      <div className="cdw__divider" aria-hidden="true" />

      {/* Sayaç birimleri */}
      <div className="cdw__units">
        <div className="cdw__unit">
          <span className="cdw__num">{time.days}</span>
          <span className="cdw__sub">GÜN</span>
        </div>

        <span className="cdw__sep" aria-hidden="true">:</span>

        <div className="cdw__unit">
          <span className="cdw__num">{pad(time.hours)}</span>
          <span className="cdw__sub">SAAT</span>
        </div>

        <span className="cdw__sep" aria-hidden="true">:</span>

        <div className="cdw__unit">
          <span className="cdw__num">{pad(time.minutes)}</span>
          <span className="cdw__sub">DK</span>
        </div>

        <span className="cdw__sep" aria-hidden="true">:</span>

        <div className="cdw__unit">
          <span className="cdw__num cdw__num--sec">{pad(time.seconds)}</span>
          <span className="cdw__sub">SN</span>
        </div>
      </div>

      {/* Sağ: konum etiketi */}
      <div className="cdw__divider" aria-hidden="true" />
      <div className="cdw__location">
        <svg className="cdw__pin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
            stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"
          />
          <circle cx="12" cy="10" r="2.5" fill="currentColor" />
        </svg>
        <span>Antalya, Türkiye</span>
      </div>
    </div>
  );
}
