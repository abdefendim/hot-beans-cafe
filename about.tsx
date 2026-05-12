import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import aboutTeamImg from "@/assets/about-team.png";

export default function About() {
  return (
    <div className="min-h-[100dvh] bg-about-cream">
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-primary font-bold tracking-widest uppercase">
                Who We Are?
              </h2>
              <h1 className="text-4xl md:text-6xl font-black text-foreground leading-[1.1]">
                Empowering future developers.
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
              Established in 2020, we operate as an independent company aiding future entrepreneurs and web developers in chasing their careers and meeting their dream goals.
            </p>
            
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
              Benjamin Shah has personally invested $2M in this project, building a nurturing environment right here in East London.
            </p>

            <div className="pt-4">
              <Link href="/team">
                <Button size="lg" className="rounded-full font-bold h-14 px-8 text-base shadow-lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] transform translate-x-4 translate-y-4 -z-10" />
            <img 
              src={aboutTeamImg} 
              alt="Company team working" 
              className="w-full h-auto object-cover rounded-[3rem] shadow-2xl"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
