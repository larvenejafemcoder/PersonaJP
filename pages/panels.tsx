import { useState } from "react";
import ScrollReveal from "../components/animations/ScrollReveal";
import SectionLabel from "../components/ui/SectionLabel";

interface Panel {
  title: string;
}

const panels: Panel[] = [
  { title: "Panel A" },
  { title: "Panel B" },
  { title: "Panel C" },
  { title: "Panel D" },
  { title: "Panel E" },
];

const Panels = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <section className="section" style={{ paddingBottom: "2rem" }}>
        <div className="max-w-[84vw] mx-auto">
          <ScrollReveal delay={0.1}>
            <SectionLabel>パネル</SectionLabel>
            <h1 className="section-title">Panels</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "4rem" }}>
        <div className="max-w-[84vw] mx-auto">
          <ScrollReveal delay={0.2}>
            <div className="flex justify-between gap-2 h-80" role="tablist" aria-label="Interactive panels">
              {panels.map((panel, index) => (
                <button
                  key={panel.title}
                  className={`${index === selected ? "flex-grow" : "w-10"} relative transition-all duration-500 ease-in-out min-w-[2.5rem]`}
                  onClick={() => setSelected(index)}
                  role="tab"
                  aria-selected={index === selected}
                  aria-label={panel.title}
                  style={{
                    backgroundColor: index === selected ? "var(--ink)" : "var(--border)",
                  }}
                >
                  <span
                    className={`${index !== selected && "hidden"} absolute left-4 bottom-4 text-white text-sm tracking-wider`}
                  >
                    {panel.title}
                  </span>
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Panels;
