import Link from "next/link";
import Image from "next/image";

import projects from "@/utils/projects";

import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

function Projects() {
  return (
    <div className="px-4 mt-8 flex flex-col text-left justify-between relative ">
      <Image
        className="hidden md:block sqD absolute -right-6 bottom-0"
        width={150}
        height={150}
        src="/icons/coder.svg"
        alt="decoration-icon"
      />
      <div className="relative">
        <Image
          className="md:hidden sqD absolute -right-6 -top-12"
          width={150}
          height={150}
          src="/icons/coder.svg"
          alt="decoration-icon"
        />
        <Image
          className="sqD absolute -left-6 -bottom-12 md:bottom-8"
          width={150}
          height={150}
          src="/icons/dino.svg"
          alt="decoration-icon"
        />
        <SectionTitle title="Algunos de mis proyectos favoritos." />
      </div>
      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
        {projects.slice(0, 3).map((item) => {
          return <ProjectCard key={item.id} project={item} />;
        })}
      </div>
      <div className="relative w-full mt-2">
        <Link href="/proyectos">
          <div className="mt-8 max-w-sm md:max-w-2xl border-2 bg-black/10 hover:border-[#00c7ff] hover:text-[#00c7ff] mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full cursor-pointer">
            Ver todos
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
