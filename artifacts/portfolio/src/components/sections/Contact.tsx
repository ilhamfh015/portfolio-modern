import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "ilhamfh015@gmail.com",
    href: "mailto:ilhamfh015@gmail.com",
  },
  {
    icon: <Phone size={20} />,
    label: "WhatsApp",
    value: "+62 859-4303-9420",
    href: "https://wa.me/6285943039420",
  },
  {
    icon: <Instagram size={20} />,
    label: "Instagram",
    value: "@lilhamm._",
    href: "https://instagram.com/lilhamm._",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm">
            Open for internship, collaboration, and project opportunities.
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-muted-foreground text-center mb-8 leading-relaxed"
          >
            Apakah kamu recruiter yang mencari backend developer, atau ingin berkolaborasi?
            Jangan ragu untuk menghubungi saya melalui salah satu platform berikut.
          </motion.p>

          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              whileHover={{ x: 6 }}
              data-testid={`contact-link-${link.label.toLowerCase()}`}
              className="flex items-center gap-4 p-5 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/30 hover:bg-card/60 transition-colors group"
            >
              <span className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                {link.icon}
              </span>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{link.label}</p>
                <p className="text-foreground font-medium">{link.value}</p>
              </div>
              <span className="text-muted-foreground group-hover:text-primary transition-colors text-lg">→</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
