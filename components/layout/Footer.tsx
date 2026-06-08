import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState("2024");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className="section">
      <div className="max-w-[84vw] mx-auto">
        <div className="hairline mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-sm font-medium tracking-[0.15em] mb-4">
              YANG TUẤN ANH
            </p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Tokyo Inspired Digital Experiences
            </p>
          </div>

          <div>
            <p className="micro-label mb-4">Contact</p>
            <div className="space-y-2">
              <a
                href="mailto:yangtuananh2003@gmail.com"
                className="block text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                yangtuananh2003@gmail.com
              </a>
              <a
                href="https://github.com/YangTuanAnh"
                target="_blank"
                rel="noreferrer"
                className="block text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/yang-tuan-anh-375759218/"
                target="_blank"
                rel="noreferrer"
                className="block text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <p className="micro-label mb-4">Index</p>
            <div className="space-y-2">
              <Link href="/" className="block text-sm" style={{ color: "var(--text-secondary)" }}>Home</Link>
              <Link href="/works" className="block text-sm" style={{ color: "var(--text-secondary)" }}>Work</Link>
              <Link href="/posts" className="block text-sm" style={{ color: "var(--text-secondary)" }}>Posts</Link>
              <Link href="/news" className="block text-sm" style={{ color: "var(--text-secondary)" }}>News</Link>
            </div>
          </div>
        </div>

        <div className="hairline my-12" />

        <p className="text-xs" style={{ color: "var(--text-light)" }}>
          &copy; {year} Yang Tuấn Anh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
