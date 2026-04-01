import { AboutPageContent } from "@/components/about";
import { getAboutPanels, getSkills } from "@/lib/notion";

export default async function AboutPage() {
  const [panels, skills] = await Promise.all([getAboutPanels(), getSkills()]);
  return <AboutPageContent panels={panels} skills={skills} />;
}
