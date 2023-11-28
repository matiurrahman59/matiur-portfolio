import React from "react";
import { socialLinks } from "@/constants";

export default function Footer() {
  return (
    <div className="bg-dark90">
      <div className="main-container">
        <div className="mt-28 py-8">
          <footer>
            <div className="mx-auto md:w-4/5 xl:flex xl:w-full xl:items-start xl:justify-between">
              <div className="text-center xl:basis-1/3 xl:text-left">
                <h4 className="text-[28px] font-semibold md:text-3xl">
                  Available for select freelance opportunities
                </h4>
                <p className="font-roboto mt-10 text-xl font-medium">
                  Have an exciting project you need help with? Send me an email
                  or contact me via instant message!
                </p>
              </div>
              <div className="font-roboto mt-20 xl:mt-0">
                <div className="text-center xl:text-right">
                  <a
                    href="mailto:matiurrahman5559@gmail.com"
                    className="before:bg-primary before:transition-height relative z-0 text-xl font-bold tracking-wider before:absolute before:bottom-0 before:-z-10 before:h-2/5 before:w-full before:scale-x-[1.03] hover:before:h-full"
                  >
                    matiurrahman5559@gmail.com
                  </a>
                  <div className="mt-3 flex flex-col space-y-2 text-lg">
                    {socialLinks.map((media) => (
                      <div key={media.title}>
                        <a
                          href={media.url}
                          target="_blank"
                          className="hover:text-blue font-bold transition-all"
                        >
                          {media.title}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
