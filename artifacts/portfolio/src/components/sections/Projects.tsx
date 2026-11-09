import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Logbook Desktop – Internal Activity Management System",
    role: "Frontend Developer",
    description: "Mengembangkan antarmuka sistem pencatatan aktivitas harian berbasis linimasa. Mendukung pencatatan beberapa proyek dan task yang berlangsung bersamaan, dengan panduan pengisian serta ringkasan aktivitas.",
    tags: ["Next.js", "TypeScript", "Responsive Web"],
  },
  {
    title: "Employee Time Tracking & Task Management System",
    role: "Full-Stack Developer",
    description: "Sistem untuk mencatat waktu kerja dan mengelola tugas karyawan. Peran full-stack mencakup pengembangan sisi frontend dan backend sesuai kebutuhan sistem.",
    tags: ["Full-Stack Development", "Time Tracking", "Task Management"],
  },
  {
    title: "Backend Service for Mobile Application",
    role: "Backend Developer",
    description: "Layanan backend untuk mendukung aplikasi mobile, termasuk penyediaan REST API dan pemrosesan data yang dibutuhkan aplikasi.",
    tags: ["Backend", "REST API", "API Integration"],
  },
  {
    title: "Employee Data Migration & ETL Processing",
    role: "ETL / Data Processing",
    description: "Pemindahan dan pemrosesan data karyawan melalui alur ETL, dengan perhatian pada transformasi, validasi, dan konsistensi data.",
    tags: ["ETL", "Data Migration", "Data Validation"],
  },
  { title: "AgroMart E-Commerce System", role: "System Designer", description: "Platform e-commerce berbasis web untuk proses penjualan dan pengelolaan produk pertanian. Mencakup perancangan alur sistem, struktur basis data, analisis kebutuhan, dan desain proses bisnis.", tags: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"] },
  { title: "QR Attendance System", role: "Backend & System Developer", description: "Sistem absensi berbasis QR Code dengan fokus pada keamanan, validasi lokasi, dan pengelolaan absensi secara real-time. Menggunakan dynamic QR token serta validasi perangkat dan lokasi.", tags: ["PHP", "Laravel", "MySQL", "Vite", "html5-qrcode"] },
  { title: "UMKM Financial System", role: "Web Developer & System Analyst", description: "Sistem keuangan berbasis web untuk pencatatan transaksi dan laporan keuangan UMKM, termasuk pemasukan, pengeluaran, stok, serta monitoring bisnis.", tags: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"] },
  { title: "Trading Analysis Engine", role: "Python Developer", description: "Engine analisis market forex berbasis Python dengan integrasi MetaTrader5 API untuk monitoring market structure, trend, momentum, dan liquidity.", tags: ["Python", "Pandas", "NumPy", "MetaTrader5 API"] },
];

export default function Projects() {
  return (
    <section id="projects" className="section-rule py-24 md:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Pilihan karya</p>
            <h2 className="font-serif text-4xl font-semibold tracking-[-0.04em] text-foreground md:text-5xl">Proyek & sistem</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">Pekerjaan digital yang mempertemukan kebutuhan pengguna, alur sistem, dan pengelolaan data.</p>
        </div>

        <div className="border-t border-border">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: index < 3 ? index * 0.05 : 0 }}
              className="group grid gap-4 border-b border-border py-6 md:grid-cols-[50px_1fr_1.1fr_24px] md:items-start md:gap-6 md:py-7"
              data-testid={`project-${index}`}
            >
              <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
              <div>
                <h3 className="font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">{project.title}</h3>
                <p className="mt-1 text-xs font-medium text-secondary">{project.role}</p>
              </div>
              <div>
                <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => <span key={tag} className="border border-border/80 px-2 py-1 text-[0.65rem] text-muted-foreground">{tag}</span>)}
                </div>
              </div>
              <ArrowUpRight size={16} className="hidden text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary md:block" aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
