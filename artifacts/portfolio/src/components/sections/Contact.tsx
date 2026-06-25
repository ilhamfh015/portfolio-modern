import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactLinks = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "ilhamfh015@gmail.com",
    href: "mailto:ilhamfh015@gmail.com",
  },
  {
    icon: <Phone size={18} />,
    label: "WhatsApp",
    value: "+62 859-4303-9420",
    href: "https://wa.me/6285943039420",
  },
  {
    icon: <Instagram size={18} />,
    label: "Instagram",
    value: "@lilhamm._",
    href: "https://instagram.com/lilhamm._",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm">
            Open for internship, collaboration, and project opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Whether you're a recruiter looking for a backend developer, a team building something cool, or just want
              to collaborate — I'd love to hear from you.
            </p>
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                data-testid={`contact-link-${link.label.toLowerCase()}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/30 hover:bg-card/60 hover:text-primary transition-all group block"
              >
                <span className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                  {link.icon}
                </span>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{link.label}</p>
                  <p className="text-sm text-foreground font-medium">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm"
            style={{ boxShadow: "0 0 40px rgba(59,130,246,0.06)" }}
          >
            <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <h3 className="font-semibold text-foreground mb-6">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-muted-foreground uppercase tracking-wider">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          data-testid="input-name"
                          className="bg-background/50 border-border/60 focus:border-primary/50 rounded-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-muted-foreground uppercase tracking-wider">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          data-testid="input-email"
                          className="bg-background/50 border-border/60 focus:border-primary/50 rounded-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-muted-foreground uppercase tracking-wider">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message..."
                          rows={4}
                          data-testid="input-message"
                          className="bg-background/50 border-border/60 focus:border-primary/50 rounded-lg resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full rounded-lg font-medium"
                  data-testid="button-submit"
                  disabled={form.formState.isSubmitting}
                >
                  <Send size={15} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
