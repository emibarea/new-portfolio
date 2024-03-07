import Link from "next/link";
import Image from "next/image";

import projects from "@/utils/projects";

import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

function Projects() {
  return (
    <div className="px-4  lex flex-col text-left justify-between relative">
      <div className="relative">
        <Image
          className="sqD absolute -right-6 -top-12"
          width={150}
          height={150}
          src="/icons/coder.svg"
          alt="decoration-icon"
        />
        <Image
          className="sqD absolute -left-6 -bottom-12"
          width={150}
          height={150}
          src="/icons/dino.svg"
          alt="decoration-icon"
        />
        <SectionTitle title="Here are a few of my favorite projects." />
      </div>
      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
        {projects.slice(0, 3).map((item) => {
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
