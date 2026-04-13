"use client";

import { useState } from "react";

import { GlassCard, PageHeader, SectionHead, Tag } from "@/components/ui";
import type { EventItem, ExperienceItem } from "@/lib/types";

export function ExperiencePageContent({
  timeline,
  events
}: {
  timeline: ExperienceItem[];
  events: EventItem[];
}) {
  const [openHighlight, setOpenHighlight] = useState<string | null>(null);

  return (
    <main className="page-shell">
      <PageHeader
        eyebrow="My journey"
        title={<>Experience, <em>leadership</em> & growth</>}
        subtitle="A timeline of school, internships, and the communities that shaped how I build, lead, and collaborate."
      />

      <section className="mb-10 flex flex-wrap gap-2">
        <Tag tone="sage">{timeline.length} timeline moments</Tag>
        <Tag tone="rose">
          {timeline.reduce((count, item) => count + (item.highlights?.length ?? 0), 0)} embedded highlights
        </Tag>
        <Tag tone="oak">{events.length} featured events</Tag>
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_320px] xl:grid-cols-[minmax(0,1.15fr)_360px]">
        <div>
          <SectionHead title="Timeline" />
          <div className="relative pl-8">
            <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-dusty/60 via-dusty/35 to-transparent" />

            <div className="space-y-7">
              {timeline.map((item) => {
                return (
                  <div key={`${item.title}-${item.period}`} className="relative">
                    <div className="absolute -left-8 top-8 h-4 w-4 rounded-full border-4 border-cream bg-dusty shadow-[0_0_0_1px_rgba(209,169,165,.45)]" />
                    <GlassCard className="p-6 sm:p-7">
                      <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.06em] text-muted">
                        {item.period}
                      </div>
                      <div className="text-xl font-semibold tracking-[-0.02em] text-ink">
                        {item.title}
                      </div>
                      <div className="mb-4 text-sm text-rust">{item.organization}</div>
                      <p className="mb-5 text-sm font-light leading-7 text-muted">
                        {item.description}
                      </p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <Tag
                            key={tag}
                            tone={tagIndex === 0 ? "sage" : tagIndex === 1 ? "rose" : "oak"}
                          >
                            {tag}
                          </Tag>
                        ))}
                      </div>

                      {item.highlights?.length ? (
                        <div className="border-t border-ink/8 pt-4">
                          <div className="text-[10px] font-semibold uppercase tracking-[0.09em] text-rust">
                            Leadership & Recognition
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {item.highlights.map((highlight) => {
                              const key = `${item.period}-${highlight.label}`;
                              const isActive = openHighlight === key;

                              return (
                                <button
                                  key={key}
                                  type="button"
                                  onClick={() =>
                                    setOpenHighlight(isActive ? null : key)
                                  }
                                  className={`rounded-full border px-3 py-1.5 text-[11px] font-medium transition ${
                                    isActive
                                      ? "border-rust bg-rust text-white"
                                      : "border-ink/10 bg-white/65 text-muted hover:bg-white hover:text-ink"
                                  }`}
                                >
                                  {highlight.label}
                                </button>
                              );
                            })}
                          </div>

                          {item.highlights.map((highlight) => {
                            const key = `${item.period}-${highlight.label}`;
                            const isActive = openHighlight === key;

                            if (!isActive) return null;

                            return (
                              <div
                                key={`${key}-panel`}
                                className="mt-4 rounded-[20px] border border-white/85 bg-white/60 p-4"
                              >
                                <div className="mb-2 flex flex-wrap items-center gap-2">
                                  <div className="text-sm font-semibold text-ink">
                                    {highlight.label}
                                  </div>
                                  {highlight.role ? (
                                    <span className="pill border-sage/15 bg-sage/10 text-sage">
                                      {highlight.role}
                                    </span>
                                  ) : null}
                                  {highlight.kind ? (
                                    <span className="pill border-dusty/25 bg-dusty/20 text-rust">
                                      {highlight.kind}
                                    </span>
                                  ) : null}
                                </div>
                                <p className="text-sm font-light leading-7 text-muted">
                                  {highlight.description}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      ) : null}
                    </GlassCard>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <SectionHead title="Highlights" />
          <GlassCard className="p-5">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.09em] text-rust">
              Snapshot
            </div>
            <p className="text-sm font-light leading-7 text-muted">
              A mix of technical internships, academic consistency, and leadership roles that show both depth and reliability over time.
            </p>
          </GlassCard>

          <div className="grid gap-3">
            {[
              {
                label: "Diploma with Merit",
                detail: "Nanyang Polytechnic",
                description:
                  "Graduated with Merit in Information Technology, reflecting consistent academic performance and strong technical foundation."
              },
              {
                label: "Junior Software Developer Intern",
                detail: "Chang Cheng Holdings Pte Ltd",
                description:
                  "Contributed to enterprise web applications and internal systems supporting real-world business operations."
              },
              {
                label: "Specialisation in Cybersecurity",
                detail: "Year 3 Focus",
                description:
                  "Focused on cybersecurity concepts and practices, strengthening my understanding of secure systems and digital risk."
              }
            ].map((item, index) => (
              <GlassCard key={item.label} className="p-4">
                <div className="mb-2 flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm ${
                      index % 3 === 0
                        ? "bg-sage/15 text-sage"
                        : index % 3 === 1
                          ? "bg-dusty/20 text-rust"
                          : "bg-oak/15 text-oak"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="text-sm font-semibold text-ink">{item.label}</div>
                </div>
                <div className="text-xs font-medium leading-6 text-muted">{item.detail}</div>
                <p className="mt-2 text-xs font-light leading-6 text-muted">
                  {item.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14">
        <SectionHead title="Featured Events" />
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-[28px] bg-cream/30 backdrop-blur-[2px]"
          >
            <div className="rounded-full border border-white/80 bg-white/85 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-rust shadow-sm">
              Coming Soon
            </div>
          </div>
          <div className="grid gap-4 blur-[5px] md:grid-cols-2 xl:grid-cols-3">
          {events.map((event, index) => (
            <GlassCard key={`${event.title}-${event.year}`} className="flex h-full flex-col p-6">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/55 text-2xl">
                    {event.icon}
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
                    {event.year}
                  </div>
                </div>
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.09em] text-rust">
                  {event.category}
                </div>
                <div className="mb-1 text-lg font-semibold text-ink">{event.title}</div>
                <div className="mb-3 text-sm text-muted">{event.organization}</div>
                <p className="mb-4 flex-1 text-sm font-light leading-6 text-muted">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <Tag key={tag} tone={index % 2 === 0 ? "rose" : "sage"}>
                      {tag}
                    </Tag>
                  ))}
                </div>
            </GlassCard>
          ))}
          </div>
        </div>
      </section>
    </main>
  );
}
