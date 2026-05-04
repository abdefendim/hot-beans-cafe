import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail } from "lucide-react";
import { toast } from "sonner";

export default function Apply() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully! We'll be in touch soon.");
  };

  return (
    <div className="min-h-[100dvh] py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl relative"
          >
            {/* Decorative element could go here, simulating the yellow ribbon */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent rounded-full opacity-20 blur-xl" />
            
            <h2 className="text-3xl font-black mb-8">Send Application</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/80">Name</label>
                <Input required className="h-12 rounded-xl bg-background/50 border-black/10" placeholder="John Doe" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/80">Email</label>
                <Input required type="email" className="h-12 rounded-xl bg-background/50 border-black/10" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/80">Phone Number</label>
                <Input required type="tel" className="h-12 rounded-xl bg-background/50 border-black/10" placeholder="+44 0000 000000" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/80">Message / Cover Letter</label>
                <Textarea required className="min-h-[120px] rounded-xl bg-background/50 border-black/10 resize-none" placeholder="Tell us why you're a great fit..." />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full font-bold h-14 text-base">
                Submit Application
              </Button>
            </form>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-10 lg:pt-10"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1]">
                Apply for a position
              </h1>
              <p className="text-xl text-foreground/70 font-medium">
                We're excited to meet you. Fill out the form and our team will get back to you within 48 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-lg font-bold">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                +44 0047382930
              </div>
              <div className="flex items-center gap-4 text-lg font-bold">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                hello@reallygreatsite.com
              </div>
            </div>
            
            {/* Abstract decorative squiggles can be represented with CSS shapes */}
            <div className="flex gap-4 opacity-50 pt-8">
              <div className="w-16 h-4 rounded-full bg-primary" />
              <div className="w-8 h-4 rounded-full bg-accent" />
              <div className="w-12 h-4 rounded-full bg-secondary" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
