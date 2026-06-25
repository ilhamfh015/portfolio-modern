import { motion } from "framer-motion";
import {
  SiPhp, SiLaravel, SiMysql, SiPython, SiGit, SiGithub, SiVite,
  SiTailwindcss, SiBootstrap, SiHtml5, SiJavascript
} from "react-icons/si";
import { Database, Code2, Wrench, Cpu, Globe, Terminal, FileCode } from "lucide-react";

const categories = [
  {
    title: "Backend Development",
    icon: <Code2 size={20} />,
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "hover:border-blue-500/40",
    skills: [
      { name: "PHP", icon: <SiPhp size={18} /> },
      { name: "Laravel", icon: <SiLaravel size={18} /> },
      { name: "REST API", icon: <Globe size={18} /> },
      { name: "Authentication", icon: <Cpu size={18} /> },
      { name: "Session Management", icon: <Cpu size={18} /> },
    ],
  },
  {
    title: "Frontend Development",
    icon: <Globe size={20} />,
    color: "from-emerald-500/20 to-emerald-600/5",
    borderColor: "hover:border-emerald-500/40",
    skills: [
      { name: "HTML", icon: <SiHtml5 size={18} /> },
      { name: "CSS", icon: <FileCode size={18} /> },
      { name: "JavaScript", icon: <SiJavascript size={18} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={18} /> },
      { name: "Bootstrap", icon: <SiBootstrap size={18} /> },
    ],
  },
  {
    title: "Database & System Design",
    icon: <Database size={20} />,
    color: "from-violet-500/20 to-violet-600/5",
    borderColor: "hover:border-violet-500/40",
    skills: [
      { name: "MySQL", icon: <SiMysql size={18} /> },
      { name: "ERD", icon: <Database size={18} /> },
      { name: "UML", icon: <Database size={18} /> },
      { name: "Relational DB", icon: <Database size={18} /> },
    ],
  },
  {
    title: "Tools & Environment",
    icon: <Wrench size={20} />,
    color: "from-orange-500/20 to-orange-600/5",
    borderColor: "hover:border-orange-500/40",
    skills: [
      { name: "Git", icon: <SiGit size={18} /> },
      { name: "GitHub", icon: <SiGithub size={18} /> },
      { name: "Composer", icon: <Terminal size={18} /> },
      { name: "Vite", icon: <SiVite size={18} /> },
      { name: "VS Code", icon: <FileCode size={18} /> },
    ],
  },
  {
    title: "Other Technical Skills",
    icon: <Cpu size={20} />,
    color: "from-rose-500/20 to-rose-600/5",
    borderColor: "hover:border-rose-500/40",
    skills: [
      { name: "QR Code System", icon: <Cpu size={18} /> },
      { name: "GPS Validation", icon: <Cpu size={18} /> },
      { name: "Python", icon: <SiPython size={18} /> },
      { name: "MetaTrader5 API", icon: <Cpu size={18} /> },
      { name: "Trading Analysis", icon: <Cpu size={18} /> },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Technical Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What I Work With</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm">
            A breakdown of technologies and tools I use to build backend systems and web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              data-testid={`skill-category-${catIdx}`}
              className={`relative p-6 rounded-2xl border border-border/60 bg-gradient-to-br ${cat.color} bg-card/30 backdrop-blur-sm transition-all duration-300 ${cat.borderColor} hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-primary">{cat.icon}</span>
                <h3 className="font-semibold text-foreground text-sm">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background/50 border border-border/50 text-xs font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                  >
                    <span className="text-primary/70">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
