import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarProps {
  path: string;
}

interface LinkItemProps {
  href: string;
  path: string;
  children: React.ReactNode;
}

const LinkItem = ({ href, path, children }: LinkItemProps) => {
  const active = path.startsWith(href);
  return (
    <Link href={href} className={`nav-link ${active ? "active" : ""}`}>
      {children}
    </Link>
  );
};

const Navbar = ({ path }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "navbar-solid" : "navbar-transparent"}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[84vw] mx-auto h-full flex items-center justify-between">
        <Link href="/" className="tracking-[0.15em] text-sm font-medium">
          YANG TUẤN ANH
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <LinkItem href="/" path={path}>HOME</LinkItem>
          <LinkItem href="/works" path={path}>WORK</LinkItem>
          <LinkItem href="/posts" path={path}>PRODUCTS</LinkItem>
          <LinkItem href="/news" path={path}>ABOUT</LinkItem>
          <LinkItem href="/microblog" path={path}>CONTACT</LinkItem>
        </div>

        <button
          className="md:hidden w-11 h-11 flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="2" y1="6" x2="18" y2="6" />
                <line x1="2" y1="14" x2="18" y2="14" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden"
          style={{ backgroundColor: "var(--paper)", borderBottom: "1px solid var(--border)" }}
          role="menu"
        >
          <div className="px-[8vw] py-6 space-y-4">
            <Link href="/" className="block text-sm tracking-[0.3em] uppercase" onClick={() => setMenuOpen(false)} role="menuitem">HOME</Link>
            <Link href="/works" className="block text-sm tracking-[0.3em] uppercase" onClick={() => setMenuOpen(false)} role="menuitem">WORK</Link>
            <Link href="/posts" className="block text-sm tracking-[0.3em] uppercase" onClick={() => setMenuOpen(false)} role="menuitem">PRODUCTS</Link>
            <Link href="/news" className="block text-sm tracking-[0.3em] uppercase" onClick={() => setMenuOpen(false)} role="menuitem">ABOUT</Link>
            <Link href="/microblog" className="block text-sm tracking-[0.3em] uppercase" onClick={() => setMenuOpen(false)} role="menuitem">CONTACT</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
