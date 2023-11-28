"use client";

import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

// INTERNAL IMPORTS
import { projects as allProjects } from "@/constants";
import FilterButton from "@/components/FilterButton";
import { staggerAnimationVariants } from "@/lib/types";

interface uniqueCategory {
  label: string;
  quantity: number;
}

const Work = () => {
  const [projects, setProjects] = useState(allProjects);
  const [activeFilter, setActiveFilter] = useState("All");
  const [categoryButton] = useState<uniqueCategory[]>(categoryType());

  // generate unique categories
  function categoryType() {
    const uniqueCategory: uniqueCategory[] = [
      { label: "All", quantity: allProjects.length },
    ];

    allProjects.map((project) => {
      const existingCategory = uniqueCategory.find(
        (object) => object.label === project.type,
      );

      if (existingCategory) {
        existingCategory.quantity++;
      } else {
        uniqueCategory.push({ label: project.type, quantity: 1 });
      }
    });

    return uniqueCategory;
  }

  const filterProjectHandler = (category: string) => {
    setActiveFilter(category);

    if (category === "All") {
      return setProjects(allProjects);
    }

    const filteredProject = allProjects.filter(
      (project) => project.type === category,
    );
    setProjects(filteredProject);
  };

  return (
    <section className="main-container">
      <div className="pt-32">
        <div className="font-roboto text-gray90 flex items-start gap-3">
          <div className="flex flex-wrap items-start gap-3 font-medium">
            <span className="whitespace-nowrap">Filter by</span>
            {categoryButton.map((category, index) => (
              <FilterButton
                key={category.label}
                label={category.label}
                quantity={category.quantity}
                filter={activeFilter}
                index={index}
                onClick={() => filterProjectHandler(category.label)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {projects.map((project) => (
              <motion.li
                key={project.id}
                className="group overflow-hidden rounded-sm"
                variants={staggerAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={project.id}
              >
                <div className="relative h-52 w-full">
                  <Image
                    src={project.imageUrl}
                    alt="project one"
                    fill
                    priority
                    sizes="(min-width: 1880px) 345px, (min-width: 1540px) calc(10.31vw + 153px), (min-width: 780px) 45vw, 90vw"
                    className="object-cover transition-all group-hover:scale-105"
                  />
                </div>
                <div className="h-full bg-[#172A45] px-3 py-4 pt-5">
                  <div className="space-y-4">
                    <h4>{project.title}</h4>
                    <p className="text-sm">{project.details}</p>
                    <div className="font-roboto flex flex-wrap gap-2 text-sm">
                      {project.technology.map((item, i) => (
                        <span
                          key={i}
                          className="rounded-sm bg-slate-600 px-2 py-1"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3 bg-[#162943] text-white">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="hover:text-primary"
                    >
                      <CodeBracketIcon className="h-5 w-5" />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="hover:text-primary"
                    >
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
