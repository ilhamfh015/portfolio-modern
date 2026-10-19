import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  { title: "Web Application Development", issuer: "Dicoding Indonesia", date: "2025", badge: "Backend" },
  { title: "Programming with Python", issuer: "Dicoding Indonesia", date: "2025", badge: "Python" },
  { title: "Version Control with Git", issuer: "Dicoding Indonesia", date: "2024", badge: "Tools" },
  { title: "Database Design Fundamentals", issuer: "Coursera", date: "2024", badge: "Database" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Certificates</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              data-testid={`cert-card-${i}`}
              className="group p-6 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/30 hover:bg-card/60 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Award size={22} className="text-primary" />
              </div>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20 mb-3">
                {cert.badge}
              </span>
              <h3 className="font-semibold text-foreground text-sm leading-snug mb-2">{cert.title}</h3>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground/60 mt-1 font-mono">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
