"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import { GlassCard, PageHeader, SectionHead, Tag } from "@/components/ui";
import type { Project } from "@/lib/types";

const categoryTones = ["sage", "rose", "oak"] as const;
const iconWraps = [
  "bg-sage/15 text-sage",
  "bg-dusty/25 text-rust",
  "bg-oak/15 text-oak"
] as const;

export function ProjectsPageContent({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects]
  );

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      const matchesQuery =
        !normalizedQuery ||
        [
          project.title,
          project.category,
          project.description,
          project.year,
          ...(project.stack ?? []),
          project.overview ?? ""
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, projects, query]);

  return (
    <main className="page-shell">
      <PageHeader
        eyebrow="My work"
        title={<>Projects I&apos;ve <em>built</em></>}
        subtitle="A collection of things I&apos;ve made, from intelligent systems to polished interfaces."
      />

      <section className="mb-8">
        <div className="glass-panel p-4 sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 flex-col gap-3">
              <label
                htmlFor="project-search"
                className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted"
              >
                Search Projects
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-muted">
                  ⌕
                </span>
                <input
                  id="project-search"
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by project, stack, or topic"
                  className="w-full rounded-full border border-white/85 bg-white/75 py-3 pl-11 pr-4 text-sm text-ink outline-none transition placeholder:text-muted/80 focus:bg-white"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 lg:max-w-[48%] lg:justify-end">
              {categories.map((category) => {
                const active = category === activeCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                      active
                        ? "border-rust bg-rust text-white"
                        : "border-ink/10 bg-white/65 text-muted hover:bg-white hover:text-ink"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-muted">
            <span>
              Showing {filteredProjects.length} of {projects.length} projects
            </span>
            {(query || activeCategory !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveCategory("All");
                }}
                className="font-medium text-rust transition hover:text-ink"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      <section>
        <SectionHead title="Selected Projects" />
        {filteredProjects.length ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <GlassCard key={project.slug} className="flex h-full flex-col p-7">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${
                      iconWraps[index % iconWraps.length]
                    }`}
                  >
                    {project.iconUrl ? (
                      <Image
                        src={project.iconUrl}
                        alt=""
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain"
                      />
                    ) : (
                      project.icon ?? "✦"
                    )}
                  </div>
                  <div className="text-base text-dusty">↗</div>
                </div>
                {project.category ? (
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.09em] text-muted">
                    {project.category}
                  </div>
                ) : null}
                <h2 className="mb-2 text-lg font-semibold text-ink">{project.title}</h2>
                <p className="mb-5 text-sm font-light leading-6 text-muted">
                  {project.description}
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Tag key={item} tone={categoryTones[index % categoryTones.length]}>
                      {item}
                    </Tag>
                  ))}
                </div>
                {project.footer ? (
                  <div className="mt-auto border-t border-ink/8 pt-4 text-sm text-muted">
                    <p className="font-light leading-6 text-muted">{project.footer}</p>
                  </div>
                ) : (
                  <div className="mt-auto" />
                )}
              </GlassCard>
            ))}
          </div>
        ) : (
          <GlassCard className="p-8">
            <div className="mb-2 font-serif text-2xl text-ink">No matches yet</div>
            <p className="text-sm font-light leading-7 text-muted">
              Try a different keyword or reset the category filter to see the full set again.
            </p>
          </GlassCard>
        )}
      </section>
    </main>
  );
}
