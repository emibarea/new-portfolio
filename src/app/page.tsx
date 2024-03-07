import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="w-screen h-auto flex-1 text-center ">
        <div className="mt-20 space-y-32  w-full flex flex-col justify-center items-center">
          <Projects />
          <Skills />
        </div>

        <CTA />
      </main>
    </>
  );
}
