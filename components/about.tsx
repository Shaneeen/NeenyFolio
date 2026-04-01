import { GlassCard, PageHeader, SectionHead, Tag } from "@/components/ui";
import type { AboutPanel, SkillItem } from "@/lib/types";

export function AboutPageContent({
  panels,
  skills
}: {
  panels: AboutPanel[];
  skills: SkillItem[];
}) {
  return (
    <main className="page-shell">
      <PageHeader eyebrow="About me" title={<>Hello, I&apos;m <em>Shaneen</em></>} />

      <section className="grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)]">
        <GlassCard className="bg-gradient-to-br from-dusty/20 to-white/55 p-8 text-center">
          <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-dusty to-rust font-serif text-4xl text-white shadow-[0_10px_28px_rgba(174,105,101,.28)]">
            S
          </div>
          <div className="font-serif text-3xl text-ink">Shaneen</div>
          <div className="mt-1 text-sm text-muted">IT Student · Software Builder</div>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Tag tone="sage">software</Tag>
            <Tag tone="rose">AI</Tag>
            <Tag tone="oak">interactive systems</Tag>
            <Tag tone="sage">design-minded</Tag>
            <Tag tone="rose">full-stack</Tag>
          </div>
          <div className="my-6 h-px bg-ink/10" />
          <div className="space-y-2 text-left text-sm">
            {[
              { label: "GitHub", icon: "💻" },
              { label: "LinkedIn", icon: "💼" },
              { label: "shaneen@email.com", icon: "✉" }
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/80 bg-white/65 px-4 py-3 font-medium text-ink"
              >
                {item.icon} {item.label}
              </div>
            ))}
          </div>
        </GlassCard>

        <div className="space-y-5">
          {panels.map((panel) => (
            <GlassCard key={panel.title} className="p-8">
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-rust">
                {panel.eyebrow}
              </div>
              <h2 className="mb-3 font-serif text-[28px] tracking-[-0.02em] text-ink">
                {panel.title}
              </h2>
              <p className="text-sm font-light leading-8 text-muted">{panel.body}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionHead title="What I work with" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <GlassCard key={skill.name} className="p-6 text-center">
              <div className="mb-3 text-3xl">{skill.icon}</div>
              <div className="mb-1 text-sm font-semibold text-ink">{skill.name}</div>
              <div className="text-xs text-muted">{skill.description}</div>
            </GlassCard>
          ))}
        </div>
      </section>
    </main>
  );
}
