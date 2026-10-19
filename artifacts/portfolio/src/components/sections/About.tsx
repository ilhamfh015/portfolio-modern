import { motion } from "framer-motion";
import { BookOpen, GraduationCap, MapPin } from "lucide-react";

const education = [
  { name: "Universitas Bina Sarana Informatika (UBSI)", program: "S1 Sistem Informasi", period: "2024–Sekarang", detail: "IPK 3,94 / 4,00" },
  { name: "SMA Negeri 1 Ciawi", program: "Ilmu Pengetahuan Alam", period: "Lulus 2024", detail: "Peminatan IPA" },
];

export default function About() {
  return (
    <section id="about" className="section-rule py-24 md:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
            <p className="eyebrow mb-5">Tentang saya</p>
            <h2 className="font-serif text-3xl font-semibold leading-tight tracking-[-0.035em] text-foreground md:text-4xl">
              The Person Behind the Code
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
              Saya nyaman menangani pekerjaan yang menuntut ketelitian, kerapian, dan koordinasi. Pengalaman saya mencakup sistem, dokumen, data, serta penggunaan tools digital untuk mendukung kebutuhan tim. Saya mudah beradaptasi dan tetap terbuka untuk belajar hal baru.
            </p>
            <div className="mt-9 flex items-start gap-4 border-l-2 border-primary pl-5">
              <MapPin className="mt-1 shrink-0 text-secondary" size={18} />
              <div>
                <p className="text-sm font-semibold text-foreground">Berbasis di Bandung</p>
                <p className="mt-1 text-sm text-muted-foreground">Terbuka untuk peran administrasi, operasional, dan teknologi.</p>
              </div>
            </div>
          </motion.div>

          <div>
            <div className="mb-5 flex items-center gap-3">
              <GraduationCap size={19} className="text-primary" />
              <p className="eyebrow">Pendidikan</p>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {education.map((item, index) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:gap-5"
                  data-testid={`education-${index}`}
                >
                  <div>
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.program}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-sm font-medium text-foreground">{item.period}</p>
                    <p className="mt-1 text-sm text-secondary">{item.detail}</p>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="mt-7 flex items-center gap-3 text-sm text-muted-foreground">
              <BookOpen size={16} className="text-secondary" />
              <span>Belajar dengan terstruktur, bekerja dengan cermat.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
