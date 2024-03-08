import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  link?: string;
  github?: string;
  img: string;
  title: string;
  desc: string;
  tags: string[];
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center"
      key={project.id}
    >
      <a
        href={project.link || project.github}
        target="_blank"
        className={`w-full relative rounded-xl border-[#00c7ff] border p-2 transition hover:-translate-y-2 hover:opacity-75`}
      >
        <Image
          width={100}
          height={100}
          alt="project-img"
          className="w-full rounded-xl object-cover"
          src={project.img}
        />
      </a>
      <div className="w-full mt-5">
        <div className="flex projects-center justify-between">
          <a href={project.link || project.github} target="_blank">
            <h3 className="text-lg font-bold">{project.title}</h3>
          </a>
          <div className="space-x-2 flex">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <Image
                  src="/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Image
                  src="/icons/github.svg"
                  width={16}
                  height={16}
                  alt="Github Icon"
                />
              </a>
            )}
          </div>
        </div>
        <p className="text-[#7b89a8] text-left text-sm">{project.desc}</p>
        <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
          {project.tags.map((tag) => {
            return (
              <li key={tag}>
                <div className="m-1 rounded-lg text-sm bg-[#192742] py-1 px-2 cursor-default hover:opacity-75">
                  {tag}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
