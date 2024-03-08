import PageTitles from "@/components/PageTitles";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/utils/projects";
import Image from "next/image";
export default function Page() {
  return (
    <section className="w-screen min-h-screen pt-24 flex flex-col items-center justify-center">
      <PageTitles
        title="Proyectos"
        subtitle="Todos mis proyectos desarrollados con diversas tecnologias."
        icon="/skills/coding.svg"
      />
      <div className="max-w-[1200px] h-full p-2 mt-24 md:12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((item) => {
          return <ProjectCard key={item.id} project={item} />;
        })}
      </div>
      <Image
        src="/doodles/lineBreak.svg"
        alt="decoration-line"
        width={300}
        height={300}
        className="my-12"
      />
    </section>
  );
}
