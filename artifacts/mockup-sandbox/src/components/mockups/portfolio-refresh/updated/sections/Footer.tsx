import { Instagram, Linkedin } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://instagram.com/lilhamm._", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ilham-farhanul-hakim-5467bb322", label: "LinkedIn" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-7">
      <div className="container mx-auto flex flex-col items-center justify-between gap-5 px-6 sm:flex-row md:px-12">
        <div>
          <span className="font-serif text-sm font-semibold tracking-wide text-primary">IFH</span>
          <p className="mt-1 text-xs text-muted-foreground">&copy; {year} Ilham Farhanul Hakim. Hak cipta dilindungi.</p>
        </div>
        <div className="flex items-center gap-2">
          <a href="/CV_Ilham_Farhanul_Hakim.pdf" download="CV_Ilham_Farhanul_Hakim.pdf" className="mr-2 px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary" data-testid="footer-download-cv">Unduh CV</a>
          {socials.map(({ icon: Icon, ...social }) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} data-testid={`footer-social-${social.label.toLowerCase()}`} className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
