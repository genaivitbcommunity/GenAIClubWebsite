import Link from "next/link";
import { ArrowUpRight, BookOpen, FolderGit2, Globe } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  short_description: string;
  image_url: string | null;
  github_url: string | null;
  live_url: string | null;
  blog_url: string | null;
}

export function ProjectGrid({ projects }: { projects: ProjectItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.id}
          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-card shadow-[0_20px_50px_var(--shadow)] transition hover:-translate-y-1 hover:border-brand/45"
        >
          <div className="relative h-44 overflow-hidden border-b border-[color:var(--border)] bg-card-soft">
            {project.image_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image_url}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 bg-card-soft [background-image:radial-gradient(circle_at_top_left,rgba(245,182,66,0.2),transparent_55%)]" />
            )}
          </div>

          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
            <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-muted">
              {project.short_description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-sm">
            {project.github_url && (
              <Link
                href={project.github_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-brand/60 bg-brand/10 px-3 py-1.5 text-xs font-medium text-foreground transition hover:border-brand"
              >
                  <FolderGit2 className="h-3.5 w-3.5" aria-hidden />
                GitHub
                <ArrowUpRight className="h-3 w-3" aria-hidden />
              </Link>
            )}
            {project.live_url && (
              <Link
                href={project.live_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-700 transition hover:border-emerald-500 dark:text-emerald-300"
              >
                <Globe className="h-3.5 w-3.5" aria-hidden />
                Live
                <ArrowUpRight className="h-3 w-3" aria-hidden />
              </Link>
            )}
            {project.blog_url && (
              <Link
                href={project.blog_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[color:var(--border)] bg-card-soft px-3 py-1.5 text-xs font-medium text-foreground transition hover:border-brand/55"
              >
                <BookOpen className="h-3.5 w-3.5" aria-hidden />
                Blog
                <ArrowUpRight className="h-3 w-3" aria-hidden />
              </Link>
            )}
          </div>

            {!project.github_url && !project.live_url && !project.blog_url ? (
              <p className="mt-5 text-xs text-muted/80">No external links added yet.</p>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
