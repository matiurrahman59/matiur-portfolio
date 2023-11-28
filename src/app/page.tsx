"use client";

// INTERNAL IMPORTS
import BannerSection from "@/components/BannerSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProjectSection from "@/components/ProjectSection";
import TechnologySection from "@/components/TechnologySection";

export default function Home() {
  return (
    <main className="main-container">
      <BannerSection />
      <ExpertiseSection />
      <ProjectSection />
      <TechnologySection />
    </main>
  );
}
