import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const jobs = [
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

export default function Careers() {
  return (
    <div className="min-h-[100dvh] py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16 space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-black">Careers</h1>
          <p className="text-lg md:text-xl text-foreground/70">
            Find your place in our growing society. We're always looking for passionate individuals to join our mission.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {jobs.map((job, idx) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow rounded-2xl bg-white overflow-hidden">
                <CardContent className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-bold px-3 py-1">
                        {job.category}
                      </Badge>
                      <span className="text-sm font-medium text-foreground/50">Posted {job.posted}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black">{job.title}</h2>
                    <p className="font-bold text-foreground/70">
                      £{job.salary}
                    </p>
                  </div>
                  <Link href="/apply">
                    <Button size="lg" className="rounded-full font-bold px-8 w-full md:w-auto">
                      Apply Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
