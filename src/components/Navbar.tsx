"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// INTERNAL IMPORTS
import { NavLinks } from "@/constants";
import ScrollIndicator from "./ScrollIndicator";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <header className="bg-dark fixed z-[100] w-full">
      <ScrollIndicator />
      <div className="main-container">
        <div className="flex items-center justify-between py-5 text-white">
          <div className="z-[101] flex text-lg font-bold tracking-wider">
            <motion.div
              initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                y: { stiffness: 1000 },
                duration: 0.7,
              }}
            >
              M
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                y: { stiffness: 1000 },
                duration: 0.7,
              }}
            >
              R
            </motion.div>
          </div>

          {/* main nav */}
          <nav
            className={`duration-600 bg-dark90 lg:bg-dark fixed left-0 right-0 top-0 z-[99] px-6 pb-7 transition ease-in-out sm:px-20 lg:static lg:translate-y-0 lg:p-0 lg:opacity-100 ${
              mobileMenu
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }`}
          >
            <ul className="text-gray space-y-6 pt-20 lg:flex lg:items-center lg:gap-8 lg:space-y-0 lg:pt-0">
              {NavLinks.map((item) => {
                const activeLink = item.href == pathname;
                return (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className={`hover:text-gray/90 ${
                        activeLink && "text-white hover:text-white"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="z-[101] lg:hidden"
          >
            <svg
              width="26"
              height="17"
              viewBox="0 0 26 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_332)">
                <path d="M26 0.875H0.410004V3.82812H26V0.875Z" fill="white" />
                <path d="M26 13.6719H9.26809V16.625H26V13.6719Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1_332">
                  <rect
                    width="25.59"
                    height="15.75"
                    fill="white"
                    transform="translate(0.410004 0.875)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
