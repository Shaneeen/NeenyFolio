export type NavItem = {
  href: string;
  label: string;
};

export type HighlightCard = {
  label: string;
  title: string;
  description: string;
  tags: string[];
};

export type Project = {
  slug: string;
  category: string;
  title: string;
  description: string;
  year: string;
  icon?: string;
  iconUrl?: string;
  stack: string[];
  footer?: string;
  overview?: string;
  challenge?: string;
  impact?: string;
  featured?: boolean;
};

export type ExperienceItem = {
  period: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
  highlights?: {
    label: string;
    role?: string;
    kind?: string;
    description: string;
  }[];
};

export type ClubItem = {
  name: string;
  role: string;
  icon: string;
  description?: string;
};

export type EventItem = {
  year: string;
  category: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
  icon: string;
};

export type AboutPanel = {
  eyebrow: string;
  title: string;
  body: string;
};

export type SkillItem = {
  name: string;
  description: string;
  icon: string;
};

export type PlaygroundFact = {
  id: string;
  text: string;
};

export type PlaygroundFavorite = {
  name: string;
  type: string;
  tag: string;
  icon: string;
};
