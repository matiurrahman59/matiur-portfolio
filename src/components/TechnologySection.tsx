import Image from "next/image";
import { motion } from "framer-motion";

import { Icons } from "@/constants";
import Reveal from "./Reveal";
import { staggerAnimationVariants } from "@/lib/types";

const TechnologySection = () => {
  return (
    <section className="mt-32 lg:mt-40">
      <Reveal>
        <h2 className="text-4xl xl:text-5xl">Technology Stack</h2>
      </Reveal>
      <Reveal>
        <p className="text-gray mt-4 leading-[33px]">
          I utilize multiple tried and tested technologies to deliver top-notch
          services, <br className="hidden lg:block" /> allowing you to
          concentrate on your business.
        </p>
      </Reveal>

      <div className="mt-12">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
          {Icons.map((item, index) => (
            <motion.div
              key={index}
              className="text-gray flex items-center gap-4 text-sm"
              variants={staggerAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <Image
                src={item.url}
                alt={`${item.title} icon`}
                width={48}
                height={48}
                priority
              />
              <span>{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
