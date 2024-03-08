import PageTitles from "@/components/PageTitles";

export default function Page() {
  return (
    <section className="w-screen min-h-screen pt-24">
      <PageTitles
        title="Certificados"
        subtitle="Todos mis certificados de cursos y proyectos."
        icon="/skills/laptop.svg"
      />
      <div className="w-full h-full p-2 mt-24 md:12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"></div>
    </section>
  );
}
