import { useState, useEffect, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang", href: "#about" },
  { name: "Keahlian", href: "#skills" },
  { name: "Proyek", href: "#projects" },
  { name: "Pengalaman", href: "#experience" },
  { name: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      let current = "home";
      for (const { href } of NAV_LINKS) {
        const section = document.getElementById(href.slice(1));
        if (section && window.scrollY >= section.offsetTop - 150) current = href.slice(1);
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", href);
  };

  return (
    <nav className={cn("fixed left-0 top-0 z-50 w-full border-b transition-colors duration-300", isScrolled ? "border-border/80 bg-background/95 backdrop-blur" : "border-transparent bg-background/80 backdrop-blur-sm")}>
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-12">
        <a href="#home" onClick={(event) => handleNavClick(event, "#home")} className="group flex items-center gap-3" aria-label="Kembali ke beranda">
          <span className="flex h-9 w-9 items-center justify-center border border-primary/60 font-serif text-sm font-bold text-primary">IF</span>
          <span className="hidden text-xs font-semibold tracking-[0.14em] text-foreground sm:inline">ILHAM FARHANUL HAKIM</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} onClick={(event) => handleNavClick(event, link.href)} className={cn("px-3 py-2 text-xs font-medium transition-colors hover:text-primary", activeSection === link.href.slice(1) ? "text-primary" : "text-muted-foreground")} aria-current={activeSection === link.href.slice(1) ? "location" : undefined}>
              {link.name}
            </a>
          ))}
        </div>
        <button type="button" className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-primary/60 md:hidden" onClick={() => setMobileMenuOpen((open) => !open)} aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"} aria-expanded={mobileMenuOpen} data-testid="button-mobile-menu">
          {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} onClick={(event) => handleNavClick(event, link.href)} className={cn("block border-b border-border/70 py-3 text-sm transition-colors last:border-0", activeSection === link.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-foreground")}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
