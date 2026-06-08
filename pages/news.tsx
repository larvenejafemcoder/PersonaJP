import ScrollReveal from "../components/animations/ScrollReveal";
import SectionLabel from "../components/ui/SectionLabel";
import news from "../data/news.json";
import Link from "next/link";
import type { NewsItem } from "../components/ui/types";

const News = () => {
  const items = news as NewsItem[];

  return (
    <div>
      <section className="section" style={{ paddingBottom: "2rem" }}>
        <div className="max-w-[84vw] mx-auto">
          <ScrollReveal delay={0.1}>
            <SectionLabel>お知らせ</SectionLabel>
            <h1 className="section-title">News</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "4rem", backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-[84vw] mx-auto">
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              {items.map((item: NewsItem) => (
                <div key={item.date} className="card p-6">
                  <div className="flex items-start gap-4">
                    <span
                      className="micro-label shrink-0 mt-0.5"
                      style={{ color: "var(--accent-red)" }}
                    >
                      {item.date}
                    </span>
                    <div className="space-y-2">
                      {item.events.map((event: string) => (
                        <p
                          key={event}
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {event}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="max-w-[84vw] mx-auto text-center">
          <ScrollReveal delay={0.3}>
            <Link href="/microblog">
              <span className="btn-outline" role="button" tabIndex={0}>
                Microblog →
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default News;
