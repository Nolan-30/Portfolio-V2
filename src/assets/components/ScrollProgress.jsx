import { motion, useScroll } from "motion/react";

export function ScrollProgress({ className, ...props }) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={className}
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        originX: 0,
        zIndex: 50,
        background: "linear-gradient(to right, #570562, #FF9FFC)",
      }}
      {...props}
    />
  );
}

export default ScrollProgress;
