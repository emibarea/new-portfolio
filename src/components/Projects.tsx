import Link from "next/link";
import React from "react";

import projects from "@/utils/projects";

import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

function Projects() {
  return (
    <div className="px-4 md:px-0 lex flex-col text-left justify-between pt-8 relative">
      <div>
        <SectionTitle title="Here are a few of my favorite projects." />
      </div>
      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
        {projects.slice(-3).map((item) => {
          return <ProjectCard key={item.id} project={item} />;
        })}
      </div>
      <div className="relative w-full mt-2">
        <Link href="/projects">
          <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
            View All
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
