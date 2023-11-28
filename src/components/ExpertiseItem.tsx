import { FC } from "react";

type titleObject = {
  one: string;
  two: string;
};

interface ExpertiseItemProps {
  title: titleObject;
  subText: string;
  item: number;
  children: React.ReactNode;
}

const ExpertiseItem: FC<ExpertiseItemProps> = ({
  title,
  subText,
  children,
  item,
}) => {
  return (
    <div className="group px-8 py-6 xl:py-10">
      <div className="flex items-center gap-6">
        {children}
        <h3 className="flex flex-col text-xl">
          <div className="relative">
            <div
              className={`before:transition-height duration-500 before:absolute before:bottom-0 before:-z-10 before:h-1/2 before:w-full group-hover:before:h-full ${
                item == 1
                  ? "before:to-pink/60 before:from-pink before:bg-gradient-to-t"
                  : item == 2
                    ? "before:to-blue/60 before:from-blue before:bg-gradient-to-t"
                    : "before:to-orange/60 before:from-orange before:bg-gradient-to-t"
              }`}
            >
              {title.one}
            </div>
          </div>
          <div>{title.two}</div>
        </h3>
      </div>

      <div className="mt-4">
        <div className="relative">
          <div className="before:absolute before:left-4 before:top-1/2 before:h-3/5 before:-translate-y-1/2 before:border before:bg-white before:opacity-30">
            <div className="pl-9 before:-ml-9 before:text-[14px] before:opacity-30 before:content-['<h3>'] after:-ml-9 after:text-[14px] after:opacity-30 after:content-['<h3>']">
              <h4 className="font-roboto text-sm font-medium opacity-95">
                {subText}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseItem;
