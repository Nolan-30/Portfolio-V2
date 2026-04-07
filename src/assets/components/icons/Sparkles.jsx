import { forwardRef, useImperativeHandle, useCallback } from "react";
import { motion, useAnimate } from "motion/react";

const SparklesIcon = forwardRef(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const start = useCallback(() => {
      const sparkles = [".sparkle-1", ".sparkle-2", ".sparkle-3"];

      sparkles.forEach((selector, index) => {
        animate(
          selector,
          {
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          },
          {
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.15,
            ease: "easeInOut",
          },
        );
      });
    }, [animate]);

    const stop = useCallback(() => {
      animate(
        ".sparkle-1, .sparkle-2, .sparkle-3",
        { scale: 1, opacity: 1 },
        { duration: 0.3 },
      );
    }, [animate]);

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop,
    }));

    return (
      <motion.svg
        ref={scope}
        onHoverStart={start}
        onHoverEnd={stop}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`cursor-pointer ${className}`}
      >
        {/* Grande étoile */}
        <motion.path
          className="sparkle-1"
          style={{ transformOrigin: "9px 9px" }}
          d="M9 3l2.4 4.8L16.2 9l-4.8 2.4L9 16.2l-2.4-4.8L1.8 9l4.8-2.4L9 3z"
        />
        {/* Étoile moyenne */}
        <motion.path
          className="sparkle-2"
          style={{ transformOrigin: "18px 16px" }}
          d="M18 13l1.2 2.4L21.6 16l-2.4 1.2L18 19.6l-1.2-2.4L14.4 16l2.4-1.2L18 13z"
        />
        {/* Petite étoile */}
        <motion.path
          className="sparkle-3"
          style={{ transformOrigin: "17px 6px" }}
          d="M17 4l.6 1.2L18.8 5.8l-1.2.6L17 7.6l-.6-1.2L15.2 5.8l1.2-.6L17 4z"
        />
      </motion.svg>
    );
  },
);

SparklesIcon.displayName = "SparklesIcon";

export default SparklesIcon;
