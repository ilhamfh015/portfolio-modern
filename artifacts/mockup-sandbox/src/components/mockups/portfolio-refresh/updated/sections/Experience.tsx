import { motion } from "framer-motion";
import { BriefcaseBusiness, ClipboardCheck, UsersRound } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer Intern",
    organization: "PT Padepokan Tujuh Sembilan",
    period: "Agustus–November 2026 · Berlangsung",
    type: "Magang",
    icon: BriefcaseBusiness,
    points: [
      "Memahami kebutuhan tugas dan menyelesaikannya di bawah arahan Project Manager.",
      "Menggunakan tools digital untuk menangani informasi sistem dan kebutuhan tim.",
      "Memeriksa serta memvalidasi hasil, lalu mendokumentasikan perubahan dan kendala.",
      "Berkoordinasi dengan tim dan memantau pekerjaan hingga selesai dengan cermat.",
    ],
  },
  {
    role: "Wakil Presiden",
    organization: "BEM Universitas Bina Sarana Informatika",
    period: "Organisasi kampus",
    type: "Kepemimpinan & koordinasi",
    icon: UsersRound,
    points: ["Pengalaman organisasi sebagai Wakil Presiden BEM UBSI."],
  },
  {
    role: "Sekretaris",
    organization: "UKM Bahasa Inggris & Jepang",
    period: "Organisasi kampus",
    type: "Administrasi",
    icon: ClipboardCheck,
    points: ["Pengalaman organisasi sebagai Sekretaris UKM Bahasa Inggris & Jepang."],
  },
  {
    role: "Ketua Pelaksana — BSI Flash",
    organization: "Kegiatan kampus",
    period: "2026",
    type: "Koordinasi acara",
    icon: UsersRound,
    points: ["Mengatur konsep acara, koordinasi panitia, dan sosialisasi ke sekolah."],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-rule py-24 md:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12">
          <p className="eyebrow mb-4">Pengalaman & organisasi</p>
          <h2 className="font-serif text-4xl font-semibold tracking-[-0.04em] text-foreground md:text-5xl">Menjaga alur tetap berjalan.</h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">Tanggung jawab yang bertumpu pada ketelitian, komunikasi, dan tindak lanjut sampai pekerjaan tuntas.</p>
        </div>

        <div className="relative">
          <div className="absolute bottom-4 left-[11px] top-4 w-px bg-border md:left-[15px]" />
          <div className="space-y-5">
            {experiences.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.role + item.organization}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative pl-9 md:pl-12"
                  data-testid={`experience-${index}`}
                >
                  <span className="absolute left-0 top-6 z-10 flex h-6 w-6 items-center justify-center border border-primary/50 bg-background text-primary md:left-1 md:h-8 md:w-8">
                    <Icon size={14} />
                  </span>
                  <div className="border border-border bg-card/45 p-5 md:p-7">
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                      <div>
                        <span className="eyebrow !text-[0.62rem]">{item.type}</span>
                        <h3 className="mt-2 text-lg font-semibold text-foreground">{item.role}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{item.organization}</p>
                      </div>
                      <span className={`self-start border px-3 py-1.5 text-xs ${index === 0 ? "border-secondary/50 text-secondary" : "border-border text-muted-foreground"}`}>{item.period}</span>
                    </div>
                    <ul className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2 text-sm leading-6 text-muted-foreground">
                          <span className="mt-[0.58rem] h-1 w-1 shrink-0 bg-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
