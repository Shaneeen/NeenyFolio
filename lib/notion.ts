import { Client } from "@notionhq/client";

import {
  aboutPanelsFallback,
  currentClubsFallback,
  eventsFallback,
  experienceTimelineFallback,
  playgroundFactsFallback,
  playgroundFavoritesFallback,
  projectsFallback,
  skillsFallback
} from "@/lib/site-data";
import type {
  AboutPanel,
  ClubItem,
  EventItem,
  ExperienceItem,
  PlaygroundFact,
  PlaygroundFavorite,
  Project,
  SkillItem
} from "@/lib/types";

const notion =
  process.env.NOTION_TOKEN ? new Client({ auth: process.env.NOTION_TOKEN }) : null;

type NotionPropertyMap = Record<string, any>;

function getTitle(properties: NotionPropertyMap, key = "Name") {
  const prop = properties[key];
  if (!prop || prop.type !== "title") return "";
  return prop.title.map((item: any) => item.plain_text).join("");
}

function getText(properties: NotionPropertyMap, key: string) {
  const prop = properties[key];
  if (!prop) return "";
  if (prop.type === "rich_text") return prop.rich_text.map((item: any) => item.plain_text).join("");
  if (prop.type === "title") return prop.title.map((item: any) => item.plain_text).join("");
  if (prop.type === "select") return prop.select?.name ?? "";
  if (prop.type === "status") return prop.status?.name ?? "";
  if (prop.type === "url") return prop.url ?? "";
  return "";
}

function getTags(properties: NotionPropertyMap, key: string) {
  const prop = properties[key];
  if (!prop || prop.type !== "multi_select") return [];
  return prop.multi_select.map((item: any) => item.name);
}

function getCheckbox(properties: NotionPropertyMap, key: string) {
  const prop = properties[key];
  if (!prop || prop.type !== "checkbox") return false;
  return Boolean(prop.checkbox);
}

function getIcon(page: any) {
  if (!page?.icon) return undefined;
  if (page.icon.type === "emoji") return page.icon.emoji;
  return undefined;
}

function getIconUrl(page: any) {
  if (!page?.icon) return undefined;
  if (page.icon.type === "external") return page.icon.external?.url;
  if (page.icon.type === "file") return page.icon.file?.url;
  return undefined;
}

async function queryDatabase(databaseId: string | undefined) {
  if (!notion || !databaseId) return [];
  const result = await notion.databases.query({
    database_id: databaseId
  });
  return result.results;
}

export async function getProjects(): Promise<Project[]> {
  const pages = await queryDatabase(process.env.NOTION_PROJECTS_DATABASE_ID);
  if (!pages.length) return projectsFallback;

  const mapped = pages
    .map((page: any) => {
      const title = getTitle(page.properties, "Name") || getTitle(page.properties);
      const category =
        getText(page.properties, "category") || getText(page.properties, "Category");
      const description =
        getText(page.properties, "short description") ||
        getText(page.properties, "Short Description") ||
        getText(page.properties, "Description");
      const footer =
        getText(page.properties, "footer") ||
        getText(page.properties, "Footer");
      const tags = [
        ...getTags(page.properties, "tag"),
        ...getTags(page.properties, "Tag"),
        ...getTags(page.properties, "tags"),
        ...getTags(page.properties, "Tags"),
        ...getTags(page.properties, "Stack")
      ];
      const featured = getCheckbox(page.properties, "featured") || getCheckbox(page.properties, "Featured");

      return {
        slug:
          getText(page.properties, "Slug") ||
          title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") ||
          page.id.replace(/-/g, ""),
        category: category || "",
        title: title || "Untitled Project",
        icon: getIcon(page),
        iconUrl: getIconUrl(page),
        description,
        year: "",
        stack: Array.from(new Set(tags)),
        footer,
        featured
      };
    })
    .filter((project) => project.title !== "Untitled Project" || project.description || project.stack.length)
    .sort((a, b) => Number(b.featured) - Number(a.featured));

  return mapped;
}

export async function getExperienceTimeline(): Promise<ExperienceItem[]> {
  const pages = await queryDatabase(process.env.NOTION_EXPERIENCE_DATABASE_ID);
  if (!pages.length) return experienceTimelineFallback;

  return pages
    .filter((page: any) => getText(page.properties, "Type") === "Timeline")
    .map((page: any) => ({
      period: getText(page.properties, "Period"),
      title: getTitle(page.properties),
      organization: getText(page.properties, "Organization"),
      description: getText(page.properties, "Description"),
      tags: getTags(page.properties, "Tags")
    }));
}

export async function getCurrentClubs(): Promise<ClubItem[]> {
  const pages = await queryDatabase(process.env.NOTION_EXPERIENCE_DATABASE_ID);
  if (!pages.length) return currentClubsFallback;

  const clubs = pages
    .filter((page: any) => getText(page.properties, "Type") === "Club")
    .map((page: any) => ({
      name: getTitle(page.properties),
      role: getText(page.properties, "Role"),
      icon: getText(page.properties, "Icon") || "•"
    }));

  return clubs.length ? clubs : currentClubsFallback;
}

export async function getEvents(): Promise<EventItem[]> {
  const pages = await queryDatabase(process.env.NOTION_EXPERIENCE_DATABASE_ID);
  if (!pages.length) return eventsFallback;

  const events = pages
    .filter((page: any) => getText(page.properties, "Type") === "Event")
    .map((page: any) => ({
      year: getText(page.properties, "Year"),
      category: getText(page.properties, "Category"),
      title: getTitle(page.properties),
      organization: getText(page.properties, "Organization"),
      description: getText(page.properties, "Description"),
      tags: getTags(page.properties, "Tags"),
      icon: getText(page.properties, "Icon") || "✦"
    }));

  return events.length ? events : eventsFallback;
}

export async function getAboutPanels(): Promise<AboutPanel[]> {
  const pages = await queryDatabase(process.env.NOTION_ABOUT_DATABASE_ID);
  if (!pages.length) return aboutPanelsFallback;

  return pages
    .filter((page: any) => getText(page.properties, "Type") !== "Skill")
    .map((page: any) => ({
      eyebrow: getText(page.properties, "Eyebrow"),
      title: getTitle(page.properties),
      body: getText(page.properties, "Body")
    }));
}

export async function getSkills(): Promise<SkillItem[]> {
  const pages = await queryDatabase(process.env.NOTION_ABOUT_DATABASE_ID);
  if (!pages.length) return skillsFallback;

  const skills = pages
    .filter((page: any) => getText(page.properties, "Type") === "Skill")
    .map((page: any) => ({
      name: getTitle(page.properties),
      description: getText(page.properties, "Description"),
      icon: getText(page.properties, "Icon") || "•"
    }));

  return skills.length ? skills : skillsFallback;
}

export async function getPlaygroundFacts(): Promise<PlaygroundFact[]> {
  const pages = await queryDatabase(process.env.NOTION_PLAYGROUND_DATABASE_ID);
  if (!pages.length) return playgroundFactsFallback;

  const facts = pages
    .filter((page: any) => getText(page.properties, "Type") === "Fact")
    .map((page: any, index: number) => ({
      id: getText(page.properties, "ID") || String(index + 1).padStart(2, "0"),
      text: getText(page.properties, "Description")
    }));

  return facts.length ? facts : playgroundFactsFallback;
}

export async function getPlaygroundFavorites(): Promise<PlaygroundFavorite[]> {
  const pages = await queryDatabase(process.env.NOTION_PLAYGROUND_DATABASE_ID);
  if (!pages.length) return playgroundFavoritesFallback;

  const favorites = pages
    .filter((page: any) => getText(page.properties, "Type") === "Favorite")
    .map((page: any) => ({
      name: getTitle(page.properties),
      type: getText(page.properties, "Category"),
      tag: getText(page.properties, "Tag"),
      icon: getText(page.properties, "Icon") || "•"
    }));

  return favorites.length ? favorites : playgroundFavoritesFallback;
}
