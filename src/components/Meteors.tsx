"use client";

import { FC } from "react";

interface MeteorsProps {
  number?: number;
}

const Meteors: FC<MeteorsProps> = ({ number }) => {
  const meteors = new Array(number || 20).fill(true);

  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className="
           absolute left-1/2 top-1/2 -z-[9999] h-0.5 w-0.5 rotate-[315deg] animate-meteor-effect rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']
        "
          style={{
            top: 0,
            left: Math.floor(Math.random() * (2000 - -2000) + -2000) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};

export default Meteors;
