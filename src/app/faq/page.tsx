"use client";

import { motion } from "framer-motion";
import { FAQ as FAQS } from "@/constants";

const staggerAnimationFaq = {
  initial: { opacity: 0, x: 60 },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,

    transition: {
      delay: 0.1 * index,
      duration: 0.3,
    },
  }),
};

const FAQ = () => {
  return (
    <section className="main-container">
      <div className="pb-20 pt-32 md:w-4/5 lg:w-1/2 xl:w-[45%]">
        <h2 className="text-3xl font-bold xl:text-4xl">Freelance Questions</h2>

        <div className="mt-11">
          <div className="border-l border-primary">
            <div className="space-y-8 py-3">
              {FAQS.map((item, index) => (
                <motion.div
                  variants={staggerAnimationFaq}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                  key={index}
                  className="relative pl-11 before:absolute before:left-0 before:top-4 before:h-[1px] before:w-5 before:bg-primary after:absolute after:left-5 after:top-4 after:h-2 after:w-2 after:-translate-y-1/2 after:rounded-full after:bg-primary"
                >
                  <h4 className="text-lg font-bold xl:text-xl">
                    {item.question}
                  </h4>
                  <p className="pt-3 text-gray">{item.ans}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
