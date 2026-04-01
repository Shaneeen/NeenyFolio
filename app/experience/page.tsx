import { ExperiencePageContent } from "@/components/experience";
import { getEvents, getExperienceTimeline } from "@/lib/notion";

export default async function ExperiencePage() {
  const [timeline, events] = await Promise.all([getExperienceTimeline(), getEvents()]);

  return <ExperiencePageContent timeline={timeline} events={events} />;
}
