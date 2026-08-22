import { cache } from "react";
import { createServerSupabase } from "@/lib/supabase/server";

export const getTeamsWithMembers = cache(async () => {
  try {
    const supabase = await createServerSupabase();
    const { data, error } = await supabase
      .from("teams")
      .select("*, members(*)")
      .order("created_at", { ascending: true });

    if (error) return [];
    return data ?? [];
  } catch (error) {
    console.warn("Supabase fetch failed for teams (using fallback UI data):", error);
    return [
      {
        id: "mock-team-1",
        name: "Core Team (Frontend Only)",
        description: "This is mock data since Supabase is not connected.",
        created_at: new Date().toISOString(),
        members: [
          { id: "mock-member-1", name: "Demo User", role: "Developer" }
        ]
      }
    ];
  }
});

export const getProjects = cache(async () => {
  try {
    const supabase = await createServerSupabase();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) return [];
    return data ?? [];
  } catch (error) {
    console.warn("Supabase fetch failed for projects.");
    return [];
  }
});

export const getEvents = cache(async () => {
  try {
    const supabase = await createServerSupabase();
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("event_date", { ascending: true });

    if (error) return [];
    return data ?? [];
  } catch (error) {
    console.warn("Supabase fetch failed for events.");
    return [];
  }
});
