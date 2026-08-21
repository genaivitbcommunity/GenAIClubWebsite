import { EventGrid } from "@/components/site/event-grid";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { getEvents } from "@/lib/data/public";

export const revalidate = 0;

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background py-14 text-foreground">
        <section className="container-wrap">
          <h1 className="text-4xl font-bold text-brand sm:text-5xl">Events</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Discover upcoming and live sessions from our club. Events created or edited from
            the admin dashboard appear here automatically.
          </p>
        </section>
        <div className="mt-8">
          <section className="container-wrap">
            <EventGrid events={events} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
