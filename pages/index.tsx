import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import ScrollReveal from "../components/animations/ScrollReveal";
import SectionLabel from "../components/ui/SectionLabel";
import AnimatedHeading from "../components/ui/AnimatedHeading";

const HeroScene = dynamic(() => import("../components/three/HeroScene"), {
  ssr: false,
});

const timeline: [string, string][] = [
  ["2003", "Born in Ho Chi Minh City, Vietnam"],
  ["2018", "Started high school @ VNU-HCM High School for the Gifted"],
  ["2021", "Started Bachelor's in CS @ HCMUS"],
  ["2022", "Interned in Fullstack Engineering @ Tiki — LEAN Social"],
  ["2023", "Interned in Algorithmic Design @ Autonomous.ai"],
  ["2024", "AI Engineer @ Autonomous.ai — Research @ HySonLab, UAB"],
  ["2025", "Founding Engineer @ Zalos"],
  ["2026", "Master's in CS @ NUS — Research @ ASI Lab, NUS"],
];

const worksItems: { num: string; title: string; desc: string }[] = [
  { num: "01", title: "ENTRep", desc: "ACMMM 2025" },
  { num: "02", title: "Halfway to 3D", desc: "CVPRW 2026" },
  { num: "03", title: "UNet-HoVerGNN", desc: "ICMV 2025" },
  { num: "04", title: "DepthFusion", desc: "MDEC 2025" },
];

export default function Home() {
  return (
    <>
      <HeroScene />

      <section className="section relative" style={{ paddingTop: "16rem", paddingBottom: "12rem" }}>
        <div className="max-w-[84vw] mx-auto relative">
          <p className="section-label mb-8" style={{ color: "var(--text-light)" }}>
            MINIMAL · JAPANESE · PRECISE
          </p>

          <div className="relative">
            <h1 className="hero-title leading-none mb-8">
              静寂
            </h1>
            <p className="text-lg md:text-xl" style={{ color: "var(--text-secondary)", maxWidth: "480px", lineHeight: "1.8" }}>
              Stillness Creates Focus
            </p>
          </div>

          <div className="mt-16 flex items-center gap-8">
            <Link href="/works">
              <span className="btn-outline" role="button" tabIndex={0}>
                View Works
                <span aria-hidden="true">→</span>
              </span>
            </Link>
            <Link
              href="/news"
              className="text-sm tracking-[0.15em]"
              style={{ color: "var(--text-secondary)" }}
            >
              About →
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-[84vw] mx-auto">
          <ScrollReveal>
            <SectionLabel>第一章</SectionLabel>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            <ScrollReveal delay={0.1}>
              <AnimatedHeading>About</AnimatedHeading>
              <div className="space-y-4 body-text mt-8">
                <p>
                  I grew up in Ho Chi Minh City, Vietnam. I&apos;m Vietnamese-Taiwanese, and I
                  graduated from the VNUHCM — University of Science under the Advanced Program
                  of Computer Science.
                </p>
                <p>
                  I&apos;m pursuing positions in both industry and academia within Software
                  Engineering and Data Science. My interests include Efficient Computing,
                  Computer Vision, Graph Neural Networks, AI4Sci, and developing robust
                  software systems.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="relative">
              <div className="card overflow-hidden">
                <Image
                  src="/images/profile.jpeg"
                  alt="Profile portrait of Yang Tuấn Anh"
                  width={800}
                  height={1000}
                  className="w-full aspect-[4/5] object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="max-w-[84vw] mx-auto text-center">
          <ScrollReveal>
            <SectionLabel>第二章</SectionLabel>
            <p
              className="text-2xl md:text-4xl leading-relaxed font-light max-w-3xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              &ldquo;The interface should breathe.
              <br />
              Confidence through restraint.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-[84vw] mx-auto">
          <ScrollReveal>
            <SectionLabel>第三章</SectionLabel>
            <AnimatedHeading className="mb-16">Timeline</AnimatedHeading>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {timeline.map(([year, text], i) => (
              <ScrollReveal key={year} delay={0.1 + i * 0.05} className="flex gap-4 items-start">
                <span className="text-xs font-medium tracking-widest shrink-0 w-16" style={{ color: "var(--accent-red)" }}>
                  {year}
                </span>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                  {text}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="max-w-[84vw] mx-auto">
          <ScrollReveal>
            <SectionLabel>第四章</SectionLabel>
            <AnimatedHeading className="mb-8">Interests</AnimatedHeading>
            <p className="body-text max-w-2xl leading-relaxed">
              Graph Neural Networks, Computer Vision, MLOps, Databases,
              Competitive Programming, Minecraft, Music (Kpop, Europop, Classical,
              OSTs, Breakcore), Languages (Vietnamese, English, Mandarin, Spanish),
              Powerlifting, Communities, Career Prep
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-[84vw] mx-auto">
          <ScrollReveal>
            <SectionLabel>第五章</SectionLabel>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal delay={0.1}>
              <AnimatedHeading className="mb-8">Selected Work</AnimatedHeading>
              <p className="body-text mb-8">
                A collection of projects, publications, and collaborations spanning
                computer vision, graph neural networks, full-stack engineering, and more.
              </p>
              <Link href="/works">
                <span className="btn-outline" role="button" tabIndex={0}>
                  View All Works
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4">
                {worksItems.map((item) => (
                  <div
                    key={item.num}
                    className="card p-6 flex items-center justify-between group cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label={`${item.title}: ${item.desc}`}
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-2xl font-light" style={{ color: "var(--text-light)" }}>
                        {item.num}
                      </span>
                      <div>
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-xs" style={{ color: "var(--text-light)" }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <span
                      className="text-xs tracking-widest group-hover:translate-x-1 transition-transform duration-300"
                      style={{ color: "var(--text-light)" }}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="max-w-[84vw] mx-auto">
          <ScrollReveal>
            <SectionLabel>連絡</SectionLabel>
            <AnimatedHeading className="mb-12">Contact</AnimatedHeading>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <a
                href="mailto:yangtuananh2003@gmail.com"
                className="block card p-8 group"
              >
                <p className="micro-label mb-2">Email</p>
                <p className="text-sm group-hover:underline underline-offset-4 decoration-1">
                  yangtuananh2003@gmail.com
                </p>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <a
                href="https://github.com/YangTuanAnh"
                target="_blank"
                rel="noreferrer"
                className="block card p-8 group"
              >
                <p className="micro-label mb-2">GitHub</p>
                <p className="text-sm group-hover:underline underline-offset-4 decoration-1">
                  YangTuanAnh
                </p>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <a
                href="https://www.linkedin.com/in/yang-tuan-anh-375759218/"
                target="_blank"
                rel="noreferrer"
                className="block card p-8 group"
              >
                <p className="micro-label mb-2">LinkedIn</p>
                <p className="text-sm group-hover:underline underline-offset-4 decoration-1">
                  Yang Tuấn Anh
                </p>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
