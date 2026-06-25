import { Instagram } from "lucide-react";

const socials = [
  { icon: <Instagram size={18} />, href: "https://instagram.com/lilhamm._", label: "Instagram" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-bold text-primary">IFH</span>
          <span className="text-secondary font-bold">.</span>
          <p className="text-xs text-muted-foreground mt-1">
            &copy; {year} Ilham Farhanul Hakim. Hak cipta dilindungi.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              data-testid={`footer-social-${s.label.toLowerCase()}`}
              className="w-9 h-9 rounded-lg border border-border/60 bg-card/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-card/80 transition-all"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
