import { FC } from "react";
import { motion } from "framer-motion";
import { globalAnimationVariants } from "@/lib/types";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
}

const Reveal: FC<RevealProps> = ({ children, delay }) => {
  return (
    <motion.div
      variants={globalAnimationVariants()}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
