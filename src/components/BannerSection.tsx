import { motion } from "framer-motion";
import Lottie from "lottie-react";

import mouseAnimation from "../../public/mouse.json";
import Meteors from "./Meteors";
import Reveal from "./Reveal";

const BannerSection = () => {
  return (
    <section className="relative h-screen text-center">
      <div className="relative">
        <Meteors number={50} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          y: { stiffness: 1000 },
          duration: 1,
          delay: 0.5,
        }}
        className="absolute bottom-20 flex w-full justify-center"
      >
        <Lottie
          animationData={mouseAnimation}
          loop={true}
          className="h-16 w-16"
        />
      </motion.div>
      <div className="grid h-full place-content-center">
        <div className="text-white">
          <h1 className="text-5xl font-semibold uppercase md:text-5xl xl:text-8xl">
            Matiur Rahman
          </h1>
          <Reveal>
            <p className="font-roboto pt-6 text-xl font-medium uppercase xl:text-[22px]">
              Software Engineer, Front end & App Developer.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
