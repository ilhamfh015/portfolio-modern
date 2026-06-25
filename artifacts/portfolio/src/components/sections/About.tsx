import { motion } from "framer-motion";
import { MapPin, BookOpen, Code2, Users } from "lucide-react";

const stats = [
  { label: "Projects", value: "3" },
  { label: "Org Roles", value: "3" },
  { label: "Languages", value: "2+" },
  { label: "Internship Ready", value: "Yes" },
];

const info = [
  { icon: <BookOpen size={16} />, label: "University", value: "Universitas Bina Sarana Informatika" },
  { icon: <MapPin size={16} />, label: "Location", value: "Tasikmalaya, Indonesia" },
  { icon: <Code2 size={16} />, label: "Major", value: "Sistem Informasi" },
  { icon: <Users size={16} />, label: "Organization", value: "Wakil Presiden BEM UBSI Tasikmalaya" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Person Behind the Code</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: About text + stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
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
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="p-4 rounded-xl border border-border/60 bg-card/30 text-center hover:border-primary/40 transition-colors"
                >
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Info cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {info.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                data-testid={`info-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-start gap-4 p-5 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/30 hover:bg-card/60 transition-all group"
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
            <div className="p-5 rounded-xl border border-secondary/30 bg-secondary/5 backdrop-blur-sm">
              <p className="text-xs text-secondary uppercase tracking-wider font-semibold mb-2">Current Focus</p>
              <p className="text-sm text-foreground">Backend Development & System Analysis</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Laravel", "PHP", "MySQL", "Python", "REST API"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
