import ScrollReveal from "../components/animations/ScrollReveal";
import SectionLabel from "../components/ui/SectionLabel";
import ProductCard from "../components/ui/ProductCard";
import { projects, collaborations, publications, pastWorks } from "../data/works-data";

const WorkGrid = ({ items }: { items: typeof projects }) => (
  <div className="grid md:grid-cols-2 gap-6">
    {items.map((item) => (
      <ProductCard key={item.title} href={item.href} title={item.title} thumbnail={item.thumb}>
        {item.children || item.desc}
      </ProductCard>
    ))}
  </div>
);

const Works = () => {
  return (
    <div>
      <section className="section" style={{ paddingBottom: "2rem" }}>
        <div className="max-w-[84vw] mx-auto">
          <ScrollReveal delay={0.1}>
            <SectionLabel>作品</SectionLabel>
            <h1 className="section-title">Works</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "4rem", paddingBottom: "12rem", backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-[84vw] mx-auto">
          <ScrollReveal delay={0.2}>
            <SectionLabel>プロジェクト</SectionLabel>
            <h2 className="section-title mb-12">Projects</h2>
            <WorkGrid items={projects} />
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="max-w-[84vw] mx-auto">
          <ScrollReveal delay={0.3}>
            <SectionLabel>協力</SectionLabel>
            <h2 className="section-title mb-12">Collaborations</h2>
            <WorkGrid items={collaborations} />
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-[84vw] mx-auto">
          <ScrollReveal delay={0.4}>
            <SectionLabel>出版</SectionLabel>
            <h2 className="section-title mb-12">Publications</h2>
            <WorkGrid items={publications} />
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="max-w-[84vw] mx-auto">
          <ScrollReveal delay={0.5}>
            <SectionLabel>過去</SectionLabel>
            <h2 className="section-title mb-12">Past Works</h2>
            <WorkGrid items={pastWorks} />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Works;
