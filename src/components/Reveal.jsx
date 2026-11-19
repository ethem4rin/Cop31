import { motion, useReducedMotion } from "framer-motion";

/**
 * Aşağı kaydırdıkça içeriği açan sarmalayıcı.
 * <Reveal delay={0.1}>...</Reveal>
 */
export default function Reveal({
  children,
  delay = 0,
  y = 8,
  duration = 0.32,
  once = true,
  className = "",
  as = "div",
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2, margin: "0px 0px -80px 0px" }}
      transition={{ duration: reduceMotion ? 0 : duration, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
