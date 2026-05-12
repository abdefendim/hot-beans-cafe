import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const featuredJobs = [
  {
    title: "Junior Web Dev",
    category: "Design",
    salary: "30000 per annum",
    posted: "1 month ago"
  },
  {
    title: "Senior Web Dev",
    category: "Websiter",
    salary: "35000 per annum",
    posted: "2 months ago"
  },
  {
    title: "Programmer",
    category: "Programming",
    salary: "70000 per annum",
    posted: "1 hour ago"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] w-full">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 pt-20 pb-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm md:text-base">
              HOT BEANS Web Society
            </h2>
            <h1 className="text-5xl md:text-7xl font-black text-foreground leading-[1.1]">
              Launch Your Career in Web Development.
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              We are an East London based agency looking for fresh talent. Join our community and build the web of tomorrow.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <div className="relative w-full sm:max-w-md flex items-center">
              <Search className="absolute left-3 w-5 h-5 text-muted-foreground" />
              <Input 
                className="pl-10 h-14 rounded-full border-black/10 bg-white shadow-sm text-base" 
                placeholder="Search jobs..." 
              />
              <Button className="absolute right-1.5 h-11 rounded-full px-6 font-bold">
                Search
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Link href="/careers">
              <Button size="lg" variant="outline" className="rounded-full font-bold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground h-14 px-8 text-base">
                View Careers
              </Button>
            </Link>
            <Link href="/apply">
              <Button size="lg" className="rounded-full font-bold h-14 px-8 text-base shadow-lg">
                Join our team
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="ghost" className="rounded-full font-bold h-14 px-8 text-base text-foreground/80 hover:text-foreground">
                Learn About Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Banner */}
      <div className="w-full bg-accent text-accent-foreground py-4 overflow-hidden whitespace-nowrap border-y border-black/10 shadow-sm relative z-10">
        <div className="animate-[marquee_20s_linear_infinite] inline-block">
          <span className="text-2xl font-black mx-4 tracking-wider uppercase">
            WE ARE LOOKING FOR NEW PASSIONATE JUNIOR DEVELOPERS • WE ARE LOOKING FOR NEW PASSIONATE JUNIOR DEVELOPERS • WE ARE LOOKING FOR NEW PASSIONATE JUNIOR DEVELOPERS • 
          </span>
        </div>
      </div>

      {/* Featured Jobs */}
      <section className="container mx-auto px-4 md:px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Featured Opportunities</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Explore our latest open positions and join a team that values creativity and community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job, idx) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm group">
                <CardContent className="p-8 space-y-6 flex flex-col h-full justify-between">
                  <div className="space-y-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1 font-bold">
                      {job.category}
                    </Badge>
                    <h3 className="text-2xl font-black group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="space-y-2 text-sm text-foreground/70 font-medium">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent/50" />
                        £{job.salary}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary/30" />
                        Posted {job.posted}
                      </div>
                    </div>
                  </div>
                  <Link href="/apply" className="w-full">
                    <Button variant="secondary" className="w-full rounded-full font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      Apply Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
