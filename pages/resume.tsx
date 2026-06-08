import ScrollReveal from "../components/animations/ScrollReveal";
import SectionLabel from "../components/ui/SectionLabel";

const Resume = () => {
  return (
    <div>
      <section className="section" style={{ paddingBottom: "2rem" }}>
        <div className="max-w-[84vw] mx-auto">
          <ScrollReveal delay={0.1}>
            <SectionLabel>履歴書</SectionLabel>
            <h1 className="section-title">Resume</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section text-center" style={{ paddingTop: "4rem" }}>
        <div className="max-w-[84vw] mx-auto">
          <ScrollReveal delay={0.2}>
            <a href="YangTuanAnh_English_CV_Academic.pdf" download>
              <span className="btn-outline mb-16" role="button" tabIndex={0}>
                Download CV
              </span>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="card overflow-hidden">
              <iframe
                src="YangTuanAnh_English_CV_Academic.pdf"
                width="100%"
                height="800px"
                className="border-0"
                title="Academic resume of Yang Tuấn Anh"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Resume;
