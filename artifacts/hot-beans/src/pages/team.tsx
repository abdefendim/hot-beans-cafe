import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";
import team3 from "@/assets/team-3.png";
import team4 from "@/assets/team-4.png";

const teamMembers = [
  {
    name: "Benjamin Shah",
    role: "Managing Director",
    bio: "Established the company, has passionately trained 50+ developers single handedly.",
    image: team1
  },
  {
    name: "Juliana Silva",
    role: "Senior developer",
    bio: "Contributed to the developing of 20+ e commerce ongoing websites.",
    image: team2
  },
  {
    name: "Claudia Alves",
    role: "Senior programmer",
    bio: "10 years of experience in the programming field, provides training for students.",
    image: team3
  },
  {
    name: "Avery Davis",
    role: "UI/UX Designer",
    bio: "Developed 10 modern apps used by reputable business, contributes such expertise.",
    image: team4
  }
];

export default function Team() {
  return (
    <div className="min-h-[100dvh]">
      {/* Header with gradient blobs */}
      <section className="bg-team-gradient py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-black text-foreground">
              About Our Team
            </h1>
            <p className="text-xl text-foreground/80 font-medium">
              Meet the passionate individuals behind Hot Beans Web Society, dedicated to shaping the next generation of developers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-32 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl bg-white text-center h-full pt-12 pb-8 px-6">
                <CardContent className="space-y-6 p-0 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/10 mb-2">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">{member.name}</h3>
                    <p className="text-primary font-bold mt-1 text-sm uppercase tracking-wider">{member.role}</p>
                  </div>
                  <p className="text-foreground/70 font-medium leading-relaxed">
                    "{member.bio}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
