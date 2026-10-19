import { motion } from "framer-motion";

const projects = [
  {
    title: "AgroMart E-Commerce System",
    role: "System Designer",
    description:
      "Platform e-commerce berbasis web yang dirancang untuk membantu proses penjualan dan pengelolaan produk pertanian secara digital. Bertanggung jawab dalam perancangan alur sistem, struktur database, analisis kebutuhan, serta desain proses bisnis aplikasi.",
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16,185,129,0.15)",
  },
  {
    title: "QR Attendance System",
    role: "Backend & System Developer",
    description:
      "Sistem absensi berbasis QR Code untuk kebutuhan kampus atau organisasi dengan fokus pada keamanan, validasi lokasi, dan pengelolaan absensi secara realtime. Menggunakan dynamic QR token untuk meminimalkan penyalahgunaan absensi serta mendukung validasi perangkat dan lokasi pengguna.",
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5", "CSS3", "Vite", "html5-qrcode"],
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.15)",
  },
  {
    title: "UMKM Financial System",
    role: "Web Developer & System Analyst",
    description:
      "Sistem keuangan berbasis web untuk membantu pengelolaan transaksi dan laporan keuangan UMKM secara digital. Mendukung pencatatan pemasukan dan pengeluaran, pengelolaan stok, serta pembuatan laporan keuangan untuk monitoring bisnis yang lebih efisien.",
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    gradient: "from-violet-500 to-purple-500",
    glowColor: "rgba(139,92,246,0.15)",
  },
  {
    title: "Trading Analysis Engine",
    role: "Python Developer",
    description:
      "Trading analysis engine berbasis Python untuk analisis market structure, trend, momentum, dan liquidity pada market forex menggunakan integrasi MetaTrader5 API. Dirancang untuk membantu proses monitoring market dan analisis trading secara lebih terstruktur.",
    tech: ["Python", "Pandas", "NumPy", "MetaTrader5 API"],
    gradient: "from-orange-500 to-amber-500",
    glowColor: "rgba(249,115,22,0.15)",
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
          <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Portofolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Proyek Unggulan</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm">
            Sistem nyata yang dibangun untuk menyelesaikan masalah nyata — setiap proyek mengajarkan tentang arsitektur, logika, dan pengalaman pengguna.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-testid={`project-card-${i}`}
              className="relative group flex flex-col rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: `0 8px 32px ${project.glowColor}` }}
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Role badge */}
                <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white mb-3 opacity-90`}>
                  {project.role}
                </span>

                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
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
