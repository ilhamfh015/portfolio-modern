import { motion } from "framer-motion";
import { ArrowDownRight, Download, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const fade = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative flex min-h-[92dvh] items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute right-0 top-0 h-full w-px bg-border/40" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-border/20 hidden xl:block" />
        <div className="absolute left-0 right-0 bottom-12 h-px bg-border/35" />
      </div>
      <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={fade} className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <p className="eyebrow">Profil profesional · Bandung, Indonesia</p>
          </motion.div>
          <motion.h1 variants={fade} className="font-serif text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-foreground md:text-7xl lg:text-[5.6rem]">
            Ilham Farhanul
            <br />
            <span className="text-primary">Hakim.</span>
          </motion.h1>
          <motion.p variants={fade} className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/75 md:text-xl">
            Mahasiswa Sistem Informasi yang nyaman bekerja dengan dokumen, informasi, dan data secara akurat serta terorganisir. Terbiasa berkoordinasi, menggunakan perangkat digital, dan cepat beradaptasi.
          </motion.p>
          <motion.div variants={fade} className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><MapPin size={15} className="text-secondary" />Bandung</span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <span>Administrasi & dukungan operasional</span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <span>Software Engineering</span>
          </motion.div>
          <motion.div variants={fade} className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => scrollTo("experience")} className="rounded-md bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary/90">
              Lihat pengalaman <ArrowDownRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-md border-border bg-transparent px-5 text-foreground hover:bg-card">
              <a href="/CV_Ilham_Farhanul_Hakim.pdf" download="CV_Ilham_Farhanul_Hakim.pdf" data-testid="link-download-cv">
                <Download className="mr-2 h-4 w-4" /> Unduh CV
              </a>
            </Button>
            <Button size="lg" variant="ghost" onClick={() => scrollTo("contact")} className="rounded-md text-muted-foreground hover:text-foreground">
              <Mail className="mr-2 h-4 w-4" /> Hubungi saya
            </Button>
          </motion.div>
          <motion.div variants={fade} className="mt-11 border-t border-border/70 pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Kekuatan utama</p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-foreground/85">
              <span>Ketelitian data</span><span>Pengelolaan dokumen</span><span>Koordinasi tim</span><span>Microsoft Office</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[390px] lg:ml-auto"
        >
          <div className="absolute -left-5 -top-5 z-10 hidden h-20 w-20 border-l border-t border-primary/70 sm:block" />
          <div className="aspect-[0.88] overflow-hidden bg-card">
            <img src="/profile.png" alt="Potret Ilham Farhanul Hakim" className="h-full w-full object-cover object-center" />
          </div>
          <div className="absolute -bottom-5 -right-4 border border-border bg-card px-5 py-4 shadow-xl sm:-right-8">
            <p className="eyebrow !text-[0.62rem]">Sistem Informasi</p>
            <p className="mt-1 font-serif text-2xl font-semibold tracking-tight">IPK 3,94</p>
            <p className="text-xs text-muted-foreground">Universitas Bina Sarana Informatika</p>
          </div>
          <p className="mt-9 text-right font-mono text-[0.65rem] tracking-[0.18em] text-muted-foreground">01 / PROFIL</p>
        </motion.div>
      </div>
    </section>
  );
}
