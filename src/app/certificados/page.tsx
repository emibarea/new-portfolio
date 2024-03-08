import Certifications from "@/components/Certifications";
import PageTitles from "@/components/PageTitles";

export default function Page() {
  return (
    <section className="overflow-x-hidden w-screen min-h-screen pt-24">
      <PageTitles
        title="Certificados"
        subtitle="Todos mis certificados de cursos y proyectos."
        icon="/skills/laptop.svg"
      />
      <div>
        <Certifications />
      </div>
    </section>
  );
}
