import { motion } from "framer-motion";
import { MapPin, BookOpen, Code2, Users } from "lucide-react";

const stats = [
  { label: "Proyek", value: "4" },
  { label: "IPK", value: "3.92" },
  { label: "Organisasi", value: "3" },
  { label: "Siap Magang", value: "Ya" },
];

const info = [
  { icon: <BookOpen size={16} />, label: "Universitas", value: "Universitas Bina Sarana Informatika" },
  { icon: <MapPin size={16} />, label: "Lokasi", value: "Tasikmalaya, Indonesia" },
  { icon: <Code2 size={16} />, label: "Jurusan", value: "Sistem Informasi" },
  { icon: <Users size={16} />, label: "Organisasi", value: "Wakil Presiden BEM UBSI Tasikmalaya" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

const slideRight = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const slideLeft = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-14 text-center"
        >
          <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Tentang Saya</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Person Behind the Code</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: About text + stats */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={slideRight}
              className="relative p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm mb-8"
              style={{ boxShadow: "0 0 40px rgba(59,130,246,0.06)" }}
            >
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <p className="text-muted-foreground leading-relaxed text-base" data-testid="about-text">
                Mahasiswa Sistem Informasi Universitas Bina Sarana Informatika Tasikmalaya yang berfokus pada backend
                development, system analysis, dan pengembangan aplikasi berbasis web. Aktif dalam organisasi kampus
                serta memiliki pengalaman membangun berbagai project menggunakan Laravel, MySQL, dan Python dalam
                pengembangan solusi digital.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={container} className="grid grid-cols-4 gap-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.4)" }}
                  data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="p-4 rounded-xl border border-border/60 bg-card/30 text-center transition-colors cursor-default"
                >
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Info cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            {info.map((item) => (
              <motion.div
                key={item.label}
                variants={slideLeft}
                whileHover={{ x: 4 }}
                data-testid={`info-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-start gap-4 p-5 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/30 hover:bg-card/60 transition-colors group cursor-default"
              >
                <span className="mt-0.5 text-primary group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-foreground font-medium text-sm">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Focus area */}
            <motion.div
              variants={slideLeft}
              className="p-5 rounded-xl border border-secondary/30 bg-secondary/5 backdrop-blur-sm"
            >
              <p className="text-xs text-secondary uppercase tracking-wider font-semibold mb-2">Fokus Saat Ini</p>
              <p className="text-sm text-foreground">Backend Development & System Analysis</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["PHP", "Laravel", "HTML", "CSS", "MySQL", "JavaScript"].map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
