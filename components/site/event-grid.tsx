import Link from "next/link";
import { ArrowUpRight, CalendarDays, CircleDot, MapPin } from "lucide-react";

interface EventItem {
  id: string;
  title: string;
  description: string;
  venue: string;
  event_date: string;
  status: "upcoming" | "live";
  image_url: string | null;
  register_url: string | null;
}

export function EventGrid({ events }: { events: EventItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <article
          key={event.id}
          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-card shadow-[0_20px_50px_var(--shadow)] transition hover:-translate-y-1 hover:border-brand/45"
        >
          <div className="relative h-44 overflow-hidden border-b border-[color:var(--border)] bg-card-soft">
            {event.image_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={event.image_url}
                alt={`${event.title} poster`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 bg-card-soft [background-image:radial-gradient(circle_at_top_left,rgba(245,182,66,0.2),transparent_55%)]" />
            )}
          </div>

          <div className="flex flex-1 flex-col p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="line-clamp-2 text-xl font-semibold text-foreground">{event.title}</h3>
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                event.status === "live"
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  : "bg-muted/10 text-muted"
              }`}
            >
              <CircleDot className="h-3 w-3" aria-hidden />
              {event.status === "live" ? "Live" : "Upcoming"}
            </span>
            </div>

            <p className="line-clamp-4 text-sm leading-relaxed text-muted">{event.description}</p>

            <div className="mt-4 space-y-2 text-sm text-muted">
              <p className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand" aria-hidden />
                <span className="line-clamp-1">{event.venue}</span>
              </p>
              <p className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-brand" aria-hidden />
                <span>{new Date(event.event_date).toLocaleString()}</span>
              </p>
            </div>

            <div className="mt-5">
              {event.status === "live" && event.register_url ? (
                <Link
                  href={event.register_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-brand/60 bg-brand/10 px-3 py-2 text-xs font-medium text-foreground transition hover:border-brand"
                >
                  Register
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              ) : (
                <p className="text-xs text-muted/80">
                  {event.status === "live"
                    ? "No registration link available."
                    : "Registration opens when event goes live."}
                </p>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
