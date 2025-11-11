import { motion } from "framer-motion";

export default function ScrollReveal({ children, delay = 0.2, stagger = 0.4 }) {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: -15,
      scale: 0.96,
      filter: "blur(10px)",
      transformOrigin: "center center",
      willChange: "transform, opacity, filter",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1], // smooth cubic-bezier easing
      },
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      style={{
        width: "100%",
        perspective: 1000, // subtle 3D depth
        transformStyle: "preserve-3d",
      }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={item}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={item}>{children}</motion.div>}
    </motion.section>
  );
}
