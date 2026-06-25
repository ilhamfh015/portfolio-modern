import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-[100dvh] flex items-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="text-secondary font-medium tracking-wider mb-4 uppercase text-sm">
            Backend & System Development Enthusiast
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Ilham Farhanul Hakim
            </span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Mahasiswa Sistem Informasi Universitas Bina Sarana Informatika Tasikmalaya yang berfokus pada backend development, web application development, dan system analysis. Aktif dalam organisasi kampus serta memiliki pengalaman membangun berbagai project berbasis Laravel dan automation logic menggunakan Python.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              onClick={() => scrollTo('projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-md"
            >
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border hover:bg-card font-medium rounded-md"
            >
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
            <Button 
              size="lg" 
              variant="ghost"
              onClick={() => scrollTo('contact')}
              className="text-muted-foreground hover:text-foreground font-medium rounded-md"
            >
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:flex justify-center items-center relative"
        >
          <div className="relative w-full max-w-md aspect-square">
            {/* Abstract Geometric Avatar/Illustration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl rotate-6 blur-xl" />
            <div className="absolute inset-0 bg-card border border-border rounded-2xl -rotate-3 overflow-hidden flex items-center justify-center shadow-2xl backdrop-blur-sm">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-4/5 h-4/5 text-primary opacity-80">
                <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.1,-46.1C90.4,-33.1,96,-16.5,95.5, -0.3C95,15.9,88.4,31.8,79.1,44.8C69.8,57.8,57.8,67.9,44.4,75.4C31,82.9,15.5,87.8,0.4,87.1C-14.7,86.4,-29.4,80.8,-42.6,73.1C-55.8,65.4,-67.5,55.6,-75.8,43.2C-84.1,30.8,-89,15.4,-88.9,0.1C-88.8,-15.2,-83.7,-30.4,-74.6,-42.1C-65.5,-53.8,-52.4,-62,-39.1,-68.8C-25.8,-75.6,-12.9,-81,2.1,-84.6C17.1,-88.2,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-foreground font-mono text-xs opacity-70 p-6">
                <div className="w-full text-left text-secondary mb-1">{"{"}</div>
                <div className="w-full pl-4 mb-1">
                  <span className="text-primary">"role"</span>: <span className="text-emerald-400">"Backend Developer"</span>,
                </div>
                <div className="w-full pl-4 mb-1">
                  <span className="text-primary">"tools"</span>: [<span className="text-emerald-400">"Laravel"</span>, <span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"MySQL"</span>],
                </div>
                <div className="w-full pl-4 mb-1">
                  <span className="text-primary">"focus"</span>: <span className="text-emerald-400">"System Architecture"</span>
                </div>
                <div className="w-full text-left text-secondary">{"}"}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
