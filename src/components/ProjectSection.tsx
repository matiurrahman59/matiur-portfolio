import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

import { featureProjects } from "@/constants";
import { globalAnimationVariants } from "@/lib/types";
import Button from "./Button";
import Reveal from "./Reveal";

const imageAnimationVariants = {
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};

const ProjectSection = () => {
  return (
    <section className="mx-auto mt-32 lg:mt-40 xl:w-[85%]">
      <Reveal>
        <h2 className="relative pr-4  text-right text-4xl after:absolute after:ml-4 after:h-full after:w-1 after:-translate-x-full after:bg-primary md:pr-7 md:after:ml-7 xl:text-5xl">
          Featured Projects
        </h2>
      </Reveal>

      <div className="mt-10 lg:mt-20">
        <div className="flex flex-col gap-10 lg:gap-32">
          {/* item 1 */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-600/90 to-purple-600/60 md:bg-gradient-to-l" />
            <div className="flex flex-col items-center gap-7 md:flex-row md:px-7">
              <motion.div
                variants={imageAnimationVariants}
                initial={{ opacity: 0, x: 75 }}
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className="flex grow justify-center md:order-1"
              >
                <Image
                  src={featureProjects[0].url}
                  alt="desktop image screenshoot"
                  height={320}
                  width={307}
                  className="flex h-72 w-auto scale-110 justify-center object-contain pt-6 drop-shadow-2xl md:h-80 md:py-6"
                />
              </motion.div>

              <div className="md:basis-2/3 md:py-10">
                <div className="space-y-5 px-3 md:px-0">
                  <Reveal>
                    <h3 className="text-2xl font-bold">
                      {featureProjects[0].title}
                    </h3>
                  </Reveal>
                  <Reveal>
                    <p>{featureProjects[0].description}</p>
                  </Reveal>

                  {/* project technology */}
                  <Reveal>
                    <div className="flex flex-wrap items-center gap-3">
                      {featureProjects[0].technology.map((item) => (
                        <div
                          key={item}
                          className="rounded-full border border-white px-3 py-1 font-roboto text-sm"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </Reveal>

                  {/* button container */}
                  <Reveal>
                    <div className="mt-7 flex items-center gap-3 pb-6 font-roboto md:gap-5 md:pb-0">
                      <Button
                        href="https://nft-marketplace-matiur.vercel.app/"
                        label="Live Link"
                        active
                      >
                        <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                      </Button>
                      <Button
                        href="https://github.com/matiurrahman59/nft-marketplace"
                        label="Code Link"
                      >
                        <CodeBracketIcon className="h-5 w-5" />
                      </Button>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>

          {/* item 2 */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b  from-red-600/90 to-red-600/60 md:bg-gradient-to-l lg:[clip-path:polygon(0%_0%,100%_25%,100%_100%,0%_100%)]" />
            <div className="flex flex-col items-center gap-7 md:flex-row md:px-7">
              <motion.div
                variants={imageAnimationVariants}
                initial={{ opacity: 0, x: 75 }}
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className="flex grow justify-center md:order-1"
              >
                <Image
                  src={featureProjects[1].url}
                  alt="React Native app screen shoot"
                  height={320}
                  width={307}
                  className="flex h-72 w-auto justify-center object-contain pt-6 drop-shadow-2xl md:h-80 md:py-6"
                />
              </motion.div>

              <div className="md:basis-2/3 md:py-10">
                <div className="space-y-5 px-3 md:px-0">
                  <Reveal>
                    <h3 className="text-2xl font-bold">
                      {featureProjects[1].title}
                    </h3>
                  </Reveal>

                  <Reveal>
                    <p>{featureProjects[1].description}</p>
                  </Reveal>

                  {/* project technology */}
                  <Reveal>
                    <div className="flex flex-wrap items-center gap-3">
                      {featureProjects[1].technology.map((item, index) => (
                        <div
                          key={index}
                          className="rounded-full border border-white px-3 py-1 font-roboto text-sm"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </Reveal>

                  {/* button container */}
                  <Reveal>
                    <div className="mt-7 flex items-center gap-3 pb-6 font-roboto md:gap-5 md:pb-0">
                      <Button
                        href="https://youtu.be/kjOvaK1J1uI"
                        label="Live Link"
                        active
                      >
                        <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                      </Button>
                      <Button
                        href="https://github.com/matiurrahman59/food-recipe-app"
                        label="Code Link"
                      >
                        <CodeBracketIcon className="h-5 w-5" />
                      </Button>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>

          {/* item 3*/}
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b  from-cyan-600/90 to-cyan-600/60 md:bg-gradient-to-l lg:bg-gradient-to-r lg:[clip-path:polygon(0%_30%,100%_0%,100%_100%,0%_100%)]" />
            <div className="flex flex-col items-center gap-7 md:flex-row md:px-7">
              <motion.div
                variants={imageAnimationVariants}
                initial={{ opacity: 0, x: -75 }}
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className="flex grow justify-center md:order-1 lg:order-none"
              >
                <Image
                  src={featureProjects[2].url}
                  alt="React Native app screen shoot"
                  height={320}
                  width={307}
                  priority
                  className="flex h-72 w-auto justify-center object-contain pt-6 drop-shadow-2xl md:h-80 md:py-6"
                />
              </motion.div>

              <div className="md:basis-2/3 md:py-10">
                <div className="space-y-5 px-3 md:px-0 lg:text-right">
                  <Reveal>
                    <h3 className="text-2xl font-bold">
                      {featureProjects[2].title}
                    </h3>
                  </Reveal>

                  <Reveal>
                    <p>{featureProjects[2].description}</p>
                  </Reveal>

                  {/* project technology */}
                  <Reveal>
                    <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                      {featureProjects[2].technology.map((item, index) => (
                        <div
                          key={index}
                          className="rounded-full border border-white px-3 py-1 font-roboto text-sm"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </Reveal>

                  {/* button container */}
                  <Reveal>
                    <div className="mt-7 flex items-center gap-3 pb-6 font-roboto md:gap-5 md:pb-0 lg:justify-end lg:pl-8">
                      <div className="lg:order-1">
                        <Button
                          href="https://youtu.be/MsFVFGBHkM4"
                          label="Live Link"
                          active
                        >
                          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                        </Button>
                      </div>
                      <Button
                        href="https://github.com/matiurrahman59/realEstateApp"
                        label="Code Link"
                      >
                        <CodeBracketIcon className="h-5 w-5" />
                      </Button>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
