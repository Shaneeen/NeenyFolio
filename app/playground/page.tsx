import { PlaygroundPageContent } from "@/components/playground";
import { getPlaygroundFacts, getPlaygroundFavorites } from "@/lib/notion";

export default async function PlaygroundPage() {
  const [facts, favorites] = await Promise.all([
    getPlaygroundFacts(),
    getPlaygroundFavorites()
  ]);

  return <PlaygroundPageContent facts={facts} favorites={favorites} />;
}
