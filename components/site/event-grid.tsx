import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Sparkles,
  Users,
  Zap,
  Star,
  Bell,
} from "lucide-react";

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

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatTime(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function EventGrid({ events }: { events: EventItem[] }) {
  return (
    <section className="min-h-screen bg-black text-white">
      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(245,182,66,0.12),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f5b642]/30 bg-[#f5b642]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5b642]">
                <Sparkles className="h-3.5 w-3.5" />
                Event Portal
              </div>

              <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                Explore{" "}
                <span className="text-[#f5b642]">Events</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
                From hacking to prompting, join exciting events organized by
                the Generative AI Community.
                <br />
                Learn, build, innovate and grow together.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src="/event-calendar.png"
                alt="GenAI Community events"
                className="w-full max-w-xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* EVENTS */}
      <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              All Events
            </h2>
            <div className="mt-3 h-1 w-10 bg-[#f5b642]" />
          </div>

          <div className="hidden rounded-xl border border-[#3a301b] bg-[#11100d] px-5 py-3 text-sm text-zinc-300 sm:block">
            All Events
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {events.map((event) => {
            const isLive = event.status === "live";
            const isMasterPrompter =
              event.id === "master-prompter" ||
              event.title.toLowerCase().includes("master");

            const artwork = isMasterPrompter
              ? "/master-prompter.png"
              : "/gen-ai-hackathon.png";

            return (
              <article
                key={event.id}
                className={`group overflow-hidden rounded-3xl border bg-[#0b0b0a] transition duration-300 ${
                  isLive
                    ? "border-[#f5b642]/60 shadow-[0_0_35px_rgba(245,182,66,0.08)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(245,182,66,0.12)]"
                    : "border-red-500/40 hover:-translate-y-1 hover:border-red-500/60"
                }`}
              >
                {/* ARTWORK — FIXED CONTAINER */}
                <div className="relative w-full overflow-hidden">
                  <img
                    src={artwork}
                    alt={`${event.title} artwork`}
                    className="block h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* CONTENT — COMPLETELY SEPARATE FROM ARTWORK */}
                <div className="p-6 sm:p-7">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {isMasterPrompter ? (
                      <>
                        <span className="rounded-full border border-[#f5b642]/50 px-3 py-1 text-xs font-medium text-[#f5b642]">
                          AI / ML
                        </span>
                        <span className="rounded-full border border-[#f5b642]/50 px-3 py-1 text-xs font-medium text-[#f5b642]">
                          Prompt Engineering
                        </span>
                        <span className="rounded-full border border-[#f5b642]/50 px-3 py-1 text-xs font-medium text-[#f5b642]">
                          Challenge
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="rounded-full border border-red-500/50 px-3 py-1 text-xs font-medium text-red-400">
                          Hackathon
                        </span>
                        <span className="rounded-full border border-red-500/50 px-3 py-1 text-xs font-medium text-red-400">
                          AI
                        </span>
                        <span className="rounded-full border border-red-500/50 px-3 py-1 text-xs font-medium text-red-400">
                          Innovation
                        </span>
                      </>
                    )}
                  </div>

                  <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                    {event.title}
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                    {event.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-300">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-[#f5b642]" />
                      {isLive ? formatDate(event.event_date) : "Coming Soon"}
                    </span>

                    {isLive && (
                      <span className="inline-flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-[#f5b642]" />
                        {formatTime(event.event_date)} Onwards
                      </span>
                    )}

                    <span className="inline-flex items-center gap-2">
                      <MapPin
                        className={`h-4 w-4 ${
                          isLive ? "text-[#f5b642]" : "text-red-400"
                        }`}
                      />
                      {event.venue}
                    </span>
                  </div>

                  {/* BOTTOM ACTION */}
                  {isLive ? (
                    <div className="mt-7 flex items-center justify-between gap-4 rounded-2xl border border-[#3a301b] bg-[#11100d] p-4">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-zinc-500">
                          Registration Fee
                        </p>
                        <p className="mt-1 text-2xl font-black text-[#f5b642]">
                          ₹200
                        </p>
                        <p className="text-xs text-zinc-500">
                          One-time entry pass
                        </p>
                      </div>

                      <Link
                        href="/events/master-prompter"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#f5b642] px-5 py-3.5 text-sm font-bold text-black transition hover:bg-[#ffd477]"
                      >
                        View Details & Register
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  ) : (
                    <div className="mt-7 flex items-center justify-between rounded-2xl border border-red-500/30 bg-red-950/10 p-4">
                      <div>
                        <p className="flex items-center gap-2 font-semibold text-red-400">
                          <Bell className="h-4 w-4" />
                          Coming Soon
                        </p>
                        <p className="mt-1 text-xs text-zinc-500">
                          Registration will open soon
                        </p>
                      </div>

                      <button
                        type="button"
                        className="rounded-xl border border-red-500/40 px-5 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500/10"
                      >
                        Notify Me
                      </button>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* TRUST STRIP */}
        <div className="mt-6 grid gap-4 rounded-2xl border border-[#3a301b] bg-[#0d0d0b] p-5 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-[#f5b642]" />
            <div>
              <p className="text-sm font-semibold">Instant Registration</p>
              <p className="text-xs text-zinc-500">Simple and quick</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users className="h-6 w-6 text-[#f5b642]" />
            <div>
              <p className="text-sm font-semibold">Community Driven</p>
              <p className="text-xs text-zinc-500">Built for VIT Bhopal</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Star className="h-6 w-6 text-[#f5b642]" />
            <div>
              <p className="text-sm font-semibold">Build & Grow</p>
              <p className="text-xs text-zinc-500">Learn with the community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}