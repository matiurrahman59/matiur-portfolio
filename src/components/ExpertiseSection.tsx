import Reveal from "./Reveal";
import ExpertiseItem from "./ExpertiseItem";
import DesktopSvgIcon from "./DesktopSvgIcon";
import { ReactSvgIcon } from "./ReactSvgIcon";

const ExpertiseSection = () => {
  return (
    <section className="mt-16 font-semibold lg:mt-40">
      <Reveal>
        <h2 className="text-center text-4xl xl:text-5xl">My Expertise</h2>
      </Reveal>

      <div className="mt-10 space-y-4 md:grid md:grid-cols-2 md:space-y-0 lg:grid-cols-3">
        <Reveal delay={0.1}>
          <div className="h-full border-2 border-gray">
            <ExpertiseItem
              item={1}
              title={{ one: "Software", two: "Development" }}
              subText="Experienced in both functional and OOP: Dart, Python, Java JavaScript, TypeScript."
            >
              <DesktopSvgIcon />
            </ExpertiseItem>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="h-full border-2 border-gray md:border-l-0 lg:border-r-0">
            <ExpertiseItem
              item={2}
              title={{ one: "Frontend Dev", two: "React, NextJS" }}
              subText="Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks."
            >
              <ReactSvgIcon />
            </ExpertiseItem>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="h-full border-2 border-gray md:border-t-0 lg:border-t-2">
            <ExpertiseItem
              item={3}
              title={{ one: "Native Dev", two: "Android, IOS" }}
              subText="Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework."
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
