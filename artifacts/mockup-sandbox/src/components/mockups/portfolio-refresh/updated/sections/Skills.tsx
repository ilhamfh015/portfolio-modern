import { motion } from "framer-motion";
import { BriefcaseBusiness, ChartNoAxesColumnIncreasing, Code2, Database, Files, GitBranch, Layers3, UsersRound } from "lucide-react";

const groups = [
  { title: "Administrasi & Office", icon: Files, lead: true, skills: ["Microsoft Excel", "Microsoft Word", "Power BI"] },
  { title: "Keterampilan pendukung", icon: BriefcaseBusiness, lead: true, skills: ["Manajemen waktu", "Pemecahan masalah", "Komunikasi", "Koordinasi", "Ketelitian", "Adaptabilitas", "Kemauan belajar"] },
  { title: "Bahasa pemrograman", icon: Code2, skills: ["Java", "JavaScript", "Python", "PHP", "HTML", "CSS"] },
  { title: "Framework & pengembangan aplikasi", icon: Layers3, skills: ["Spring Boot", "Next.js", "Laravel", "Full-Stack Development"] },
  { title: "API", icon: GitBranch, skills: ["REST API", "API Integration", "API Testing"] },
  { title: "Data & basis data", icon: Database, skills: ["PostgreSQL", "MySQL", "SQL", "Database Management System", "ETL", "Data Migration"] },
  { title: "Tools", icon: ChartNoAxesColumnIncreasing, skills: ["Git", "GitLab", "DBeaver", "Swagger/OpenAPI", "Docker", "Pentaho Data Integration (Kettle)"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section-rule py-24 md:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="eyebrow mb-4">Keahlian</p>
            <h2 className="font-serif text-4xl font-semibold tracking-[-0.04em] text-foreground md:text-5xl">Kerja rapi. Data terjaga.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground md:justify-self-end">
            Fondasi administrasi dan koordinasi menjadi prioritas; keterampilan sistem dan pemrograman melengkapinya.
          </p>
        </div>

        <div className="grid gap-x-12 lg:grid-cols-2">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.38, delay: (index % 2) * 0.07 }}
                className={`border-t border-border py-6 ${group.lead ? "lg:col-span-2" : ""}`}
                data-testid={`skill-group-${index}`}
              >
                <div className="grid gap-4 sm:grid-cols-[220px_1fr] sm:items-start">
                  <div className="flex items-center gap-3">
                    <Icon size={17} className={group.lead ? "text-primary" : "text-secondary"} />
                    <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className={`rounded-sm border px-3 py-1.5 text-xs ${group.lead ? "border-primary/35 bg-primary/[0.07] font-medium text-foreground" : "border-border bg-card/50 text-muted-foreground"}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
        <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
          <UsersRound size={15} className="text-secondary" />
          <span>Keterampilan diterapkan dalam kolaborasi, organisasi, dan penyelesaian tugas.</span>
        </div>
      </div>
    </section>
  );
}
