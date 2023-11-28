"use client";

import BannerSection from "@/components/BannerSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProjectSection from "@/components/ProjectSection";
import TechnologySection from "@/components/TechnologySection";

export default function Home() {
  return (
    <main>
      <BannerSection />
      <div className="main-container">
        <ExpertiseSection />
        <ProjectSection />
        <TechnologySection />
      </div>
    </main>
  );
}
