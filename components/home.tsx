import { heroHighlights, heroMarquee } from "@/lib/site-data";
import { GlassCard, PrimaryLink, Tag } from "@/components/ui";

export function HomeHero() {
  return (
    <main className="page-shell flex min-h-screen flex-col items-center justify-center">
      <div className="mb-8 inline-flex items-center rounded-full bg-rust/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.09em] text-muted">
        portfolio · software · student vibe
      </div>
      <h1 className="text-center font-serif text-[clamp(3.8rem,10vw,7rem)] leading-[0.92] tracking-[-0.04em] text-ink">
        built by
        <br />
        <em className="text-rust">shaneen</em>
      </h1>
      <p className="mt-4 max-w-xl text-center text-[15px] font-light leading-7 text-muted sm:text-base">
        Building thoughtful digital experiences, intelligent systems, and playful little things on the internet.
      </p>

      <div className="mb-14 mt-8 flex flex-wrap justify-center gap-3">
        <PrimaryLink href="/projects">View Projects</PrimaryLink>
        <PrimaryLink href="/about" tone="ghost">
          About Me
        </PrimaryLink>
      </div>

      <div className="mb-10 grid w-full gap-4 md:grid-cols-3">
        {heroHighlights.map((item, index) => (
          <GlassCard key={item.title} className="p-6">
            <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
              {item.label}
            </div>
            <div className="mb-2 font-serif text-2xl text-ink">
              {item.title}
              {index === 1 ? <span className="text-rust"> ✦</span> : null}
            </div>
            <p className="text-sm font-light leading-6 text-muted">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag, tagIndex) => (
                <Tag
                  key={tag}
                  tone={tagIndex === 0 ? "sage" : index === 2 ? "oak" : "rose"}
                >
                  {tag}
                </Tag>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="w-full overflow-hidden border-y border-ink/10 py-3">
        <div className="flex w-max animate-[ticker_24s_linear_infinite]">
          {[...heroMarquee, ...heroMarquee].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-4 px-4 text-[11px] font-medium uppercase tracking-[0.08em] text-muted"
            >
              <span>{item}</span>
              <span className="h-1 w-1 rounded-full bg-dusty" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
