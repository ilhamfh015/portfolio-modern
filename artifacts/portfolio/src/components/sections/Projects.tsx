import { motion } from "framer-motion";
import { ExternalLink, Github, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "QR Attendance System",
    description:
      "Sistem absensi berbasis QR Code dengan dynamic token, GPS validation, device restriction, dan realtime attendance management.",
    tech: ["Laravel", "MySQL", "Vite", "html5-qrcode"],
    features: ["Dynamic QR Token", "GPS Validation", "Device Detection", "Admin Dashboard", "Realtime Attendance"],
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.15)",
    buttons: [
      { label: "Live Demo", icon: <ExternalLink size={14} />, disabled: true, variant: "default" as const },
      { label: "GitHub", icon: <Github size={14} />, disabled: false, variant: "outline" as const },
      { label: "Case Study", icon: <FileText size={14} />, disabled: false, variant: "ghost" as const },
    ],
  },
  {
    title: "UMKM Financial System",
    description:
      "Sistem keuangan UMKM berbasis web untuk pengelolaan transaksi, laporan laba rugi, pengelolaan stok, dan export data.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    features: ["Transaction Management", "Financial Reports", "Stock Management", "Export PDF & Excel"],
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16,185,129,0.15)",
    buttons: [
      { label: "GitHub", icon: <Github size={14} />, disabled: false, variant: "outline" as const },
      { label: "Case Study", icon: <FileText size={14} />, disabled: false, variant: "ghost" as const },
    ],
  },
  {
    title: "Trading Analysis Engine",
    description:
      "Trading analysis engine berbasis Python dengan market structure analysis, EMA trend filtering, RSI momentum analysis, dan liquidity sweep detection.",
    tech: ["Python", "MetaTrader5 API", "Pandas"],
    features: ["Market Structure Analysis", "EMA & RSI Logic", "Liquidity Sweep Detection", "Automated Signal Logic"],
    gradient: "from-violet-500 to-purple-500",
    glowColor: "rgba(139,92,246,0.15)",
    buttons: [
      { label: "GitHub", icon: <Github size={14} />, disabled: false, variant: "outline" as const },
      { label: "Case Study", icon: <FileText size={14} />, disabled: false, variant: "ghost" as const },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm">
            Real systems built to solve real problems — each one a lesson in architecture, logic, and user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              data-testid={`project-card-${i}`}
              className="relative group flex flex-col rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: `0 8px 32px ${project.glowColor}` }}
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

              {/* Thumbnail placeholder */}
              <div className="relative h-44 overflow-hidden bg-background/50">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6 font-mono text-xs text-muted-foreground space-y-1 opacity-70">
                    {project.tech.map((t) => (
                      <div key={t} className="flex items-center gap-2">
                        <span className="text-primary">›</span>
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-1.5 mb-6 flex-1">
                  {project.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 size={13} className="text-secondary shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.buttons.map((btn) => (
                    <Button
                      key={btn.label}
                      size="sm"
                      variant={btn.variant}
                      disabled={btn.disabled}
                      data-testid={`project-${i}-btn-${btn.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-xs rounded-lg"
                    >
                      {btn.icon}
                      <span className="ml-1.5">{btn.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
