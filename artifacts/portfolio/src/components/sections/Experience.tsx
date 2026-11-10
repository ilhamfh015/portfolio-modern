import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, ClipboardCheck, FileText, UsersRound } from "lucide-react";

const experienceGroups = [
  {
    title: "Magang",
    entries: [
      {
        role: "Software Engineer Intern",
        organization: "PT Padepokan Tujuh Sembilan",
        period: "Agustus–November 2026",
        icon: BriefcaseBusiness,
        points: [
          "Berkontribusi dalam siklus pengembangan sistem, mulai dari analisis kebutuhan, implementasi fitur, hingga pengujian fungsional.",
          "Mengembangkan fitur aplikasi web dan layanan backend berdasarkan spesifikasi proyek.",
          "Mendukung pengelolaan basis data, integrasi API, debugging, dan validasi sistem.",
          "Berkoordinasi dengan tim pengembang dan Project Manager untuk meninjau spesifikasi, implementasi, serta penyelesaian kendala.",
        ],
      },
    ],
  },
  {
    title: "Organisasi & Kepemimpinan",
    entries: [
      {
        role: "Wakil Presiden",
        organization: "BEM Universitas Bina Sarana Informatika",
        period: "2026–2027",
        icon: UsersRound,
        points: [
          "Mendukung perencanaan dan pelaksanaan program kerja organisasi.",
          "Mengoordinasikan komunikasi dan kolaborasi antarbidang serta memantau tindak lanjut kegiatan.",
          "Berkontribusi dalam evaluasi pelaksanaan program bersama pengurus.",
        ],
      },
      {
        role: "Sekretaris",
        organization: "UKM Bahasa Inggris & Jepang",
        period: "2025–2026",
        icon: ClipboardCheck,
        points: [
          "Mengelola administrasi dan dokumentasi organisasi secara terstruktur.",
          "Menyusun notulen rapat serta menyampaikan informasi dan tindak lanjut kepada anggota.",
          "Mendukung koordinasi kebutuhan administrasi untuk kegiatan organisasi.",
        ],
      },
      {
        role: "Ketua Pelaksana — BSI Flash",
        organization: "Kegiatan kampus",
        period: "2026",
        icon: UsersRound,
        points: [
          "Mengoordinasikan persiapan dan pelaksanaan kegiatan bersama panitia.",
          "Mengatur pembagian tugas serta komunikasi dengan pihak terkait.",
          "Mengoordinasikan sosialisasi kegiatan kepada sekolah.",
        ],
      },
    ],
  },
  {
    title: "Pengabdian Masyarakat & Publikasi",
    entries: [
      {
        role: "Dukungan Pelaksanaan Pelatihan Konten Digital Karang Taruna sebagai Agen Promosi Potensi Lokal",
        organization: "Jurnal Pengabdian Masyarakat Bangsa · 2025",
        period: "2025",
        icon: FileText,
        href: "https://doi.org/10.59837/jpmba.v3i9.3372",
        points: [
          "Menyiapkan lokasi dan kebutuhan kegiatan untuk mendukung kesiapan pelaksanaan.",
          "Mendukung dosen dalam koordinasi kegiatan dan pemenuhan kebutuhan peserta.",
          "Menyambut tamu serta membantu proses penerimaan peserta.",
          "Mendokumentasikan rangkaian kegiatan melalui foto dan video.",
        ],
      },
      {
        role: "Pengembang Sistem Keuangan UMKM",
        organization: "Pendampingan Inovasi Produk Kreatif Hibrida Limbah Tekstil-Mendong dengan Penguatan Manajemen Usaha Berbasis IT pada UMKM Jempol Jaya Tasikmalaya Provinsi Jawa Barat",
        period: "2026",
        icon: FileText,
        href: "https://doi.org/10.54082/jippm.1216",
        points: [
          "Mengembangkan sistem keuangan berbasis teknologi informasi untuk mendukung pengelolaan usaha UMKM.",
          "Mendukung dosen dalam pelaksanaan kegiatan pendampingan.",
          "Mendokumentasikan rangkaian kegiatan melalui foto dan video.",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-rule py-24 md:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12">
          <p className="eyebrow mb-4">Perjalanan profesional</p>
          <h2 className="font-serif text-4xl font-semibold tracking-[-0.04em] text-foreground md:text-5xl">Pengalaman</h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
            Pengalaman magang, kepemimpinan, dan pengabdian yang membentuk kemampuan koordinasi, administrasi, serta pengembangan sistem.
          </p>
        </div>

        <div className="space-y-12">
          {experienceGroups.map((group, groupIndex) => (
            <section key={group.title} aria-labelledby={`experience-group-${groupIndex}`}>
              <div className="mb-5 flex items-center gap-4 border-b border-border pb-3">
                <h3 id={`experience-group-${groupIndex}`} className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                  {group.title}
                </h3>
                <span className="h-px flex-1 bg-border/70" aria-hidden="true" />
              </div>

              <div className="space-y-4">
                {group.entries.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.article
                      key={item.role + item.organization}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.15) }}
                      className="border border-border bg-card/45 p-5 md:p-7"
                      data-testid={`experience-${groupIndex}-${index}`}
                    >
                      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                        <div className="flex gap-3">
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-primary/35 text-primary">
                            <Icon size={16} aria-hidden="true" />
                          </span>
                          <div>
                            <h4 className="text-base font-semibold leading-snug text-foreground md:text-lg">{item.role}</h4>
                            <p className="mt-1 max-w-3xl text-sm leading-6 text-muted-foreground">{item.organization}</p>
                          </div>
                        </div>
                        <span className="ml-12 self-start border border-border px-3 py-1.5 text-xs text-muted-foreground sm:ml-0">
                          {item.period}
                        </span>
                      </div>

                      <ul className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2 sm:pl-12">
                        {item.points.map((point) => (
                          <li key={point} className="flex gap-2 text-sm leading-6 text-muted-foreground">
                            <span className="mt-[0.58rem] h-1 w-1 shrink-0 bg-primary" aria-hidden="true" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      {"href" in item && item.href && (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary transition-colors hover:text-foreground sm:ml-12"
                        >
                          Lihat publikasi <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      )}
                    </motion.article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
