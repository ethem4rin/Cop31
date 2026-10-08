import Reveal from "./Reveal";

/** İnce çizgiyle ayrılmış bölüm başlığı. */
export default function SectionHead({ label }) {
  return (
    <Reveal className="sechead" y={14}>
      <span className="seclabel">{label}</span>
    </Reveal>
  );
}
