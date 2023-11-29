import Reveal from "./Reveal";
import ExpertiseItem from "./ExpertiseItem";
import DesktopSvgIcon from "./DesktopSvgIcon";
import { ReactSvgIcon } from "./ReactSvgIcon";
import { yrsOfExperience } from "@/constants";

const ExpertiseSection = () => {
  return (
    <section className="mt-16 font-semibold lg:mt-40">
      <Reveal>
        <h2 className="text-center text-4xl xl:text-5xl">My Expertise</h2>
      </Reveal>

      <div className="mt-10 space-y-4 md:grid md:grid-cols-2 md:space-y-0 lg:grid-cols-3">
        <Reveal>
          <div className="h-full border-2 border-gray">
            <ExpertiseItem
              item={1}
              title={{ one: "Software", two: "Development" }}
              subText="Experienced in functional programming: JavaScript, TypeScript."
            >
              <DesktopSvgIcon />
            </ExpertiseItem>
          </div>
        </Reveal>

        <Reveal>
          <div className="h-full border-2 border-gray md:border-l-0 lg:border-r-0">
            <ExpertiseItem
              item={2}
              title={{ one: "Frontend Dev", two: "React, NextJS" }}
              subText={`Over ${yrsOfExperience.years} years of development experience in HTML, CSS, Tailwind, JS, React and NextJS frameworks.`}
            >
              <ReactSvgIcon />
            </ExpertiseItem>
          </div>
        </Reveal>

        <Reveal>
          <div className="h-full border-2 border-gray md:border-t-0 lg:border-t-2">
            <ExpertiseItem
              item={3}
              title={{ one: "Native Dev", two: "Android, IOS" }}
              subText="Skilled in developing cross-platform mobile apps and solutions using the React Native framework."
            >
              <ReactSvgIcon />
            </ExpertiseItem>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ExpertiseSection;
