import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, ArrowUpRight } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", value: "ilhamfh015@gmail.com", href: "mailto:ilhamfh015@gmail.com" },
  { icon: Phone, label: "Telepon / WhatsApp", value: "+62 859-4303-9420", href: "https://wa.me/6285943039420" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/ilham-farhanul-hakim-5467bb322", href: "https://www.linkedin.com/in/ilham-farhanul-hakim-5467bb322" },
  { icon: MapPin, label: "Lokasi", value: "Bandung, Indonesia", href: "https://maps.google.com/?q=Bandung" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-rule py-24 md:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <p className="eyebrow mb-4">Kontak</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight tracking-[-0.04em] text-foreground md:text-5xl">Mari mulai percakapan.</h2>
            <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
              Untuk peluang Software Developer, administrasi, dukungan operasional, atau kolaborasi—silakan hubungi saya melalui kanal berikut.
            </p>
          </motion.div>
          <div className="border-t border-border">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="group flex items-center gap-4 border-b border-border py-5"
                  data-testid={`contact-link-${index}`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-border text-secondary transition-colors group-hover:border-primary/50 group-hover:text-primary"><Icon size={17} /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">{link.label}</span>
                    <span className="mt-1 block break-all text-sm font-medium text-foreground">{link.value}</span>
                  </span>
                  <ArrowUpRight size={16} className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
