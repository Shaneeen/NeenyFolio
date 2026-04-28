import Image from "next/image";
import { FaJava } from "react-icons/fa6";
import type { IconType } from "react-icons";
import {
  SiCloudflare,
  SiCisco,
  SiCss,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFigma,
  SiFlask,
  SiGithub,
  SiHackthebox,
  SiHtml5,
  SiJupyter,
  SiKotlin,
  SiMysql,
  SiNextdotjs,
  SiOpenvpn,
  SiPostman,
  SiPython,
  SiReact,
  SiSqlite,
  SiUnrealengine,
  SiWireguard
} from "react-icons/si";
import { TbBrandCSharp, TbChartBar, TbDatabase, TbServer2 } from "react-icons/tb";

import { CVPreviewButton } from "@/components/cv-preview-button";
import { GlassCard, PageHeader, Tag } from "@/components/ui";
import type { AboutPanel, SkillItem } from "@/lib/types";
import namecard from "../assets/shaneenCard.png";

const contactLinks = [
  { label: "Email", value: "Say hi", icon: "@", href: "mailto:shaneen@email.com" },
  { label: "LinkedIn", value: "Connect", icon: "in", href: "https://www.linkedin.com/" },
  { label: "GitHub", value: "Code", icon: "</>", href: "https://github.com/" }
];

type ToolItem = {
  label: string;
  icon: IconType;
};

const toolstackRows: ToolItem[][] = [
  [
    { label: "C#", icon: TbBrandCSharp },
    { label: "Java", icon: FaJava },
    { label: "Python", icon: SiPython },
    { label: "Kotlin", icon: SiKotlin },
    { label: "HTML", icon: SiHtml5 },
    { label: "CSS", icon: SiCss },
    { label: "React", icon: SiReact },
    { label: "Next.js", icon: SiNextdotjs }
  ],
  [
    { label: ".NET", icon: SiDotnet },
    { label: "Flask", icon: SiFlask },
    { label: "Express", icon: SiExpress },
    { label: "SQLite", icon: SiSqlite },
    { label: "MS SQL", icon: TbDatabase },
    { label: "MySQL", icon: SiMysql },
    { label: "Docker", icon: SiDocker },
    { label: "Cloudflare", icon: SiCloudflare }
  ],
  [
    { label: "GitHub", icon: SiGithub },
    { label: "Postman", icon: SiPostman },
    { label: "Figma", icon: SiFigma },
    { label: "Tableau", icon: TbChartBar },
    { label: "Jupyter Notebook", icon: SiJupyter },
    { label: "Unreal Engine", icon: SiUnrealengine },
    { label: "Ollama", icon: TbServer2 }
  ],
  [
    { label: "Cisco Packet Tracer", icon: SiCisco },
    { label: "OpenVPN", icon: SiOpenvpn },
    { label: "WireGuard", icon: SiWireguard },
    { label: "Hack The Box", icon: SiHackthebox }
  ]
];

function CollageCard({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <GlassCard className={`glass-panel-static overflow-hidden ${className ?? ""}`}>{children}</GlassCard>;
}

export function AboutPageContent({
  panels,
  skills
}: {
  panels: AboutPanel[];
  skills: SkillItem[];
}) {
  const introPanel = panels[0];
  const thinkingPanel = panels[2] ?? panels[1];

  return (
    <main className="page-shell">
      <PageHeader
        eyebrow="About me"
        title={
          <>
            A collage of <em>Shaneen</em>
          </>
        }
        subtitle="A little namecard, a little status board, and a lot of tiny details that make the page feel like me."
      />

      <section className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12 lg:auto-rows-[92px]">
        <CollageCard className="md:col-span-3 lg:col-span-3 lg:col-start-1 lg:row-span-4 lg:row-start-1">
          <div className="flex h-full min-h-[360px] items-center justify-center bg-gradient-to-br from-dusty/25 via-white/35 to-sage/15 p-4">
            <div className="relative aspect-[638/1063] max-h-full w-full max-w-[300px] overflow-hidden rounded-[18px] shadow-[0_18px_44px_rgba(174,105,101,.16)]">
              <Image
                src={namecard}
                alt="Shaneen Ho namecard"
                fill
                className="object-contain"
                priority
                sizes="(min-width: 1024px) 260px, (min-width: 768px) 42vw, 82vw"
              />
            </div>
          </div>
        </CollageCard>

        <CollageCard className="p-6 md:col-span-3 lg:col-span-5 lg:col-start-4 lg:row-span-2 lg:row-start-1">
          <div className="flex h-full flex-col justify-center">
            <div className="page-eyebrow mb-1.5">{introPanel?.eyebrow ?? "Who I am"}</div>
            <h2 className="max-w-[20ch] font-serif text-[18px] leading-[1] tracking-[-0.03em] text-ink sm:text-[24px]">
              {introPanel?.title ?? "Driven, Curious, and Always Up for a Challenge"}
            </h2>
            <p className="mt-2 max-w-[36rem] text-[12px] font-light leading-5 text-muted sm:text-[13px]">
              {introPanel?.body ??
                "I'm Shaneen, a student who enjoys challenges, learning new things, and turning ideas into something real. I'm competitive in a healthy way, while keeping things fun, playful, and creative."}
            </p>
          </div>
        </CollageCard>

        <CollageCard className="relative overflow-hidden bg-gradient-to-br from-dusty/18 via-white/80 to-oak/10 p-4 md:col-span-3 lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-rust/8 via-dusty/8 to-transparent" />
          <div className="pointer-events-none absolute -right-8 top-4 h-24 w-24 rounded-full bg-gradient-to-br from-rust/16 to-dusty/8 blur-2xl" />
          <div className="relative flex h-full min-h-[174px] flex-col">
            <div>
              <div className="page-eyebrow mb-0">
                Resume
              </div>
              <h2 className="mt-1.5 font-serif text-[18px] leading-none tracking-[-0.03em] text-ink sm:text-[20px]">
                View my Resume
              </h2>
              <p className="mt-1.5 max-w-[23ch] text-[11px] font-light leading-5 text-muted sm:text-[12px]">
                A quick look at my experience, projects, and more.
              </p>
            </div>
            <div className="mt-4">
              <CVPreviewButton />
            </div>
          </div>
        </CollageCard>

        <CollageCard className="p-6 md:col-span-3 lg:col-span-3 lg:col-start-4 lg:row-span-3 lg:row-start-3">
          <div className="page-eyebrow mb-0">
            {thinkingPanel?.eyebrow ?? "How I think"}
          </div>
          <h2 className="mt-2 font-serif text-[27px] leading-tight tracking-[-0.03em] text-ink">
            {thinkingPanel?.title ?? "Detail-first, always"}
          </h2>
          <p className="mt-4 text-xs font-light leading-6 text-muted">
            {thinkingPanel?.body ??
              "I care about readable code, purposeful visuals, and tiny interactions that make something feel alive."}
          </p>
        </CollageCard>

        <CollageCard className="relative p-6 md:col-span-3 lg:col-span-6 lg:col-start-7 lg:row-span-3 lg:row-start-3">
          <div className="mb-2 flex items-start justify-between gap-4">
            <div>
              <div className="page-eyebrow mb-0">
                Skills
              </div>
              <h2 className="mt-1 font-serif text-[28px] tracking-[-0.03em] text-ink">
                Tool stack, but softer
              </h2>
            </div>
            <span className="rounded-full bg-sage/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-sage">
              Build mode
            </span>
          </div>
          <div className="space-y-3 overflow-hidden rounded-[22px] border border-white/80 bg-white/35 px-3 pb-4 pt-0">
            {toolstackRows.map((row, rowIndex) => {
              const repeatedRow = [...row, ...row];
              const duration = 24 + rowIndex * 4;

              return (
                <div key={row.map((item) => item.label).join("-")} className="overflow-hidden">
                  <div
                    className="flex w-max gap-2"
                    style={{
                      animation: `ticker ${duration}s linear infinite`,
                      animationDirection: rowIndex % 2 === 0 ? "normal" : "reverse"
                    }}
                  >
                    {repeatedRow.map((item, itemIndex) => (
                      <span
                        key={`${item.label}-${itemIndex}`}
                        className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/85 bg-white/72 px-3 py-2 text-[11px] font-semibold text-ink shadow-[0_8px_20px_rgba(174,105,101,.05)]"
                      >
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rust/10 text-[13px] text-rust">
                          <item.icon />
                        </span>
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </CollageCard>

        <CollageCard className="relative p-6 md:col-span-6 lg:col-span-6 lg:col-start-4 lg:row-span-4 lg:row-start-6">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="page-eyebrow mb-0">
                Hobbies
              </div>
              <h2 className="mt-1 font-serif text-[28px] tracking-[-0.03em] text-ink">
                Little things I keep returning to
              </h2>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[24px] border border-white/80 bg-white/22 backdrop-blur-md">
            <div className="relative flex min-h-[260px] items-center justify-center">
              <Tag tone="rose">Coming soon</Tag>
            </div>
          </div>
        </CollageCard>

        <CollageCard className="p-5 md:col-span-3 lg:col-span-3 lg:col-start-1 lg:row-span-2 lg:row-start-5">
          <div className="page-eyebrow mb-4">
            Links
          </div>
          <div className="grid h-[calc(100%-1.75rem)] grid-cols-3 gap-2">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="interactive-link-pill flex min-h-20 flex-col justify-between rounded-2xl border border-white/80 bg-white/65 p-3 text-xs font-medium text-ink"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rust/10 text-[11px] font-bold text-rust">
                  {link.icon}
                </span>
                <span>
                  <span className="block">{link.label}</span>
                  <span className="block text-xs font-normal text-muted">{link.value}</span>
                </span>
              </a>
            ))}
          </div>
        </CollageCard>

        <CollageCard className="flex flex-col justify-between bg-gradient-to-br from-sage/20 to-white/60 p-6 md:col-span-3 lg:col-span-3 lg:col-start-1 lg:row-span-3 lg:row-start-7">
          <div>
            <div className="page-eyebrow mb-0">
              Currently
            </div>
            <h2 className="mt-2 font-serif text-[27px] leading-tight tracking-[-0.03em] text-ink">
              AI, simulation, and polished interfaces
            </h2>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Tag tone="sage">AI</Tag>
            <Tag tone="oak">ROS2</Tag>
            <Tag tone="rose">Next.js</Tag>
          </div>
        </CollageCard>

        <CollageCard className="flex flex-col justify-between bg-rust p-6 text-white md:col-span-3 lg:col-span-3 lg:col-start-10 lg:row-span-4 lg:row-start-6">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/75">
              Status
            </div>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]">
              <span className="h-2 w-2 rounded-full bg-white" />
              Live
            </div>
            <h2 className="mt-4 font-serif text-[34px] leading-none tracking-[-0.03em]">
              Open to opportunities
            </h2>
            <p className="mt-4 text-sm font-light leading-7 text-white/75">
              Looking for roles where software, design, and thoughtful systems meet.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em]">
              Internships
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em]">
              Full-time
            </span>
          </div>
        </CollageCard>
      </section>
    </main>
  );
}
