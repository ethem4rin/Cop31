import { motion } from "framer-motion";

/**
 * Aşağı kaydırdıkça içeriği açan sarmalayıcı.
 * <Reveal delay={0.1}>...</Reveal>
 */
export default function Reveal({
  children,
  delay = 0,
  y = 34,
  duration = 0.75,
  once = true,
  className = "",
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2, margin: "0px 0px -80px 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
