import { EventGrid } from "@/components/site/event-grid";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";

const testEvents = [
  {
    id: "master-prompter",
    title: "Master Prompter",
    description:
      "AI Prompt Engineering Challenge. Put your prompting skills to the test and solve real-world challenges with AI.",
    venue: "VIT Bhopal",
    event_date: "2026-08-22T10:41:00",
    status: "live" as const,
    image_url: null,
    register_url: "#",
  },
  {
    id: "gen-ai-hackathon",
    title: "Gen AI Hackathon",
    description:
      "48 hours of building, collaborating and innovating with AI.",
    venue: "VIT Bhopal",
    event_date: "2026-10-01T10:00:00",
    status: "upcoming" as const,
    image_url: null,
    register_url: null,
  },
];

export default function EventsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black">
        <EventGrid events={testEvents} />
      </main>

      <Footer />
    </>
  );
}