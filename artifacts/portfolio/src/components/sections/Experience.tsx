import { motion } from "framer-motion";

const experiences = [
  {
    role: "Wakil Presiden BEM UBSI Tasikmalaya",
    period: "2026 – Present",
    type: "Leadership",
    points: [
      "Mengelola koordinasi internal organisasi",
      "Membantu pengambilan keputusan kegiatan kampus",
      "Mengatur komunikasi antar kementerian",
    ],
    accent: "primary",
  },
  {
    role: "Ketua Pelaksana — BSI Flash",
    period: "2026",
    type: "Event Management",
    points: [
      "Mengatur konsep acara",
      "Koordinasi panitia",
      "Sosialisasi ke sekolah",
    ],
    accent: "secondary",
  },
  {
    role: "Secretary — UKM Bahasa",
    period: "2025",
    type: "Administration",
    points: [
      "Administrasi organisasi",
      "Dokumentasi kegiatan",
      "Pengelolaan surat dan arsip",
    ],
    accent: "primary",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Organizational Journey</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-border/60" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`experience-${i}`}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-3.5 top-1.5 w-3 h-3 rounded-full border-2 border-background"
                  style={{
                    background: exp.accent === "primary"
                      ? "rgba(59,130,246,1)"
                      : "rgba(16,185,129,1)",
                    boxShadow: exp.accent === "primary"
                      ? "0 0 10px rgba(59,130,246,0.6)"
                      : "0 0 10px rgba(16,185,129,0.6)",
                  }}
                />

                <div className="p-6 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/30 hover:bg-card/60 transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground text-base">{exp.role}</h3>
                      <span className="inline-block mt-1 px-2.5 py-0.5 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        {exp.type}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono bg-background/60 px-3 py-1 rounded-full border border-border/50 shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-secondary mt-1 shrink-0">–</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
