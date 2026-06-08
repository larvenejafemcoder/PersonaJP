import ScrollReveal from "../components/animations/ScrollReveal";
import SectionLabel from "../components/ui/SectionLabel";
import microblog from "../data/microblog.json";
import type { MicroblogEntry } from "../components/ui/types";

const Microblog = () => {
  const entries = microblog as MicroblogEntry[];

  return (
    <div>
      <section className="section" style={{ paddingBottom: "2rem" }}>
        <div className="max-w-[84vw] mx-auto">
          <ScrollReveal delay={0.1}>
            <SectionLabel>和の心</SectionLabel>
            <h1 className="section-title">Microblog</h1>
            <p className="body-text mt-8 max-w-xl">
              Microblogging since 2023
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "4rem", backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-[84vw] mx-auto">
          {entries.map((item: MicroblogEntry) => (
            <ScrollReveal delay={0.2} key={item.title}>
              <div className="mb-16">
                <h2
                  className="text-sm font-medium tracking-wider mb-8"
                  style={{ color: "var(--accent-red)" }}
                >
                  {item.title}
                </h2>
                <div className="space-y-6">
                  {item.data.map((entry: { date: string; content: string }) => (
                    <div
                      key={entry.date}
                      className="flex gap-4 text-sm items-start"
                    >
                      <span
                        className="text-xs shrink-0 w-24 font-mono"
                        style={{ color: "var(--text-light)" }}
                      >
                        {entry.date}
                      </span>
                      <div className="hairline mt-2 flex-1" />
                      <p
                        className="leading-relaxed max-w-xl"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {entry.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Microblog;
