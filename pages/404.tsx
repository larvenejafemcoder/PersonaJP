import Link from "next/link";

const Custom404 = () => {
  return (
    <section className="section min-h-screen flex items-center justify-center">
      <div className="max-w-[84vw] mx-auto text-center">
        <p className="section-label mb-8" style={{ color: "var(--text-light)" }}>
          此処には無い
        </p>
        <h1 className="hero-title mb-8" role="alert">
          404
        </h1>
        <p className="body-text mb-16">
          Not in this place
        </p>
        <Link href="/">
          <span className="btn-outline" role="button" tabIndex={0}>
            Return Home →
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Custom404;
