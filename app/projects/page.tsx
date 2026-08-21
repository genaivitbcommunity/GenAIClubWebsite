import { Footer } from "@/components/site/footer";
import { ProjectGrid } from "@/components/site/project-grid";
import { Navbar } from "@/components/site/navbar";
import { getProjects } from "@/lib/data/public";

export const revalidate = 0;

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background py-14 text-foreground">
        <section className="container-wrap">
          <h1 className="text-4xl font-bold text-brand sm:text-5xl">Projects</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Explore open-source and production-ready builds from our club. New projects
            added from the admin dashboard appear here automatically.
          </p>
        </section>
        <div className="mt-8">
          <section className="container-wrap">
            <ProjectGrid projects={projects} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
