import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Mail } from "lucide-react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-[100dvh] flex items-center relative overflow-hidden pt-20">
      {/* Background blobs — CSS animated, GPU-only */}
      <div className="animate-blob absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="animate-blob-alt absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: staggered text entrance (one-time, fine with Framer Motion) */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.p variants={fadeUp} className="text-secondary font-medium tracking-wider mb-4 uppercase text-sm">
            Mahasiswa Sistem Informasi · Backend Developer
          </motion.p>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Halo, Saya <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary">
              Ilham Farhanul Hakim
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-8">
            Mahasiswa Sistem Informasi Universitas Bina Sarana Informatika Tasikmalaya yang berfokus pada backend
            development, web application development, dan system analysis. Aktif dalam organisasi kampus serta memiliki
            pengalaman membangun berbagai project berbasis Laravel dan automation logic menggunakan Python.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={() => scrollTo("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-md"
            >
              Lihat Proyek <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-card font-medium rounded-md"
              asChild
            >
              <a href="/CV_Ilham_Farhanul_Hakim.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => scrollTo("contact")}
              className="text-muted-foreground hover:text-foreground font-medium rounded-md"
            >
              <Mail className="mr-2 h-4 w-4" /> Hubungi Saya
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: Profile photo — CSS animations only for loops */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:flex justify-center items-center relative"
        >
          {/* Glow blob behind photo — CSS pulse */}
          <div className="animate-glow-pulse absolute w-80 h-80 rounded-full bg-primary/10 blur-2xl" />

          {/* Rotating ring — CSS spin */}
          <div
            className="animate-spin-slow absolute w-72 h-72 rounded-full border border-primary/20"
            style={{
              background: "conic-gradient(from 0deg, transparent 70%, rgba(59,130,246,0.35) 100%)",
            }}
          />

          {/* Photo — CSS float */}
          <div className="animate-float relative z-10">
            <div
              className="w-64 h-64 rounded-full overflow-hidden border-2 border-primary/40 shadow-2xl"
              style={{ boxShadow: "0 0 60px rgba(59,130,246,0.22), 0 0 0 6px rgba(59,130,246,0.07)" }}
            >
              <img
                src="/profile.png"
                alt="Ilham Farhanul Hakim"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating badge — IPK */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="absolute -bottom-3 -right-4 bg-card border border-border/80 rounded-xl px-3 py-2 shadow-lg backdrop-blur-sm"
            >
              <p className="text-xs text-muted-foreground">IPK</p>
              <p className="text-lg font-bold text-primary leading-none">3.92</p>
            </motion.div>

            {/* Floating badge — Role */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
              className="absolute -top-3 -left-6 bg-card border border-border/80 rounded-xl px-3 py-2 shadow-lg backdrop-blur-sm"
            >
              <p className="text-xs text-secondary font-semibold">Backend Dev</p>
              <p className="text-xs text-muted-foreground">Laravel · MySQL</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
