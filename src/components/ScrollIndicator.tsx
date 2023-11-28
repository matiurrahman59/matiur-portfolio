import { useAnimation, motion } from "framer-motion";
import { useState, useEffect } from "react";

const ScrollIndicator = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const scrollListener = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setScrollY((currentProgress / scrollHeight) * 100);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  useEffect(() => {
    controls.start({
      width: `${scrollY}%`,
      transition: { duration: 0.7, ease: "easeIn" },
    });
  }, [scrollY, controls]);

  return (
    <motion.div
      className="absolute h-1 w-full bg-primary"
      initial={{ width: "0%" }}
      animate={controls}
    ></motion.div>
  );
};

export default ScrollIndicator;
