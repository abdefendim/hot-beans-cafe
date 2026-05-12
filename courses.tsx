import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import course1 from "@/assets/course-1.png";
import course2 from "@/assets/course-2.png";

const courses = [
  {
    title: "Junior Web developer",
    desc: "This is a level 3 integrated course which allows you to get an integrated level degree",
    date: "Jan 18, 2023",
    image: course1
  },
  {
    title: "Programming in Website Development",
    desc: "CSS, javascript, C#, and modern programming level 4 module online course",
    date: "Jan 18, 2023",
    image: course2
  }
];

const posts = [
  { title: "Learn Web Design UI", date: "Jan 18, 2023" },
  { title: "Teamwork and resilience skills", date: "Jan 18, 2023" },
  { title: "Python programming", date: "Jan 18, 2023" }
];

export default function Courses() {
  return (
    <div className="min-h-[100dvh] py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4">Web Development Courses</h1>
          <p className="text-xl text-foreground/70 font-medium">Level up your skills with our comprehensive programs.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Main Content: Courses */}
          <div className="lg:col-span-2 space-y-8">
            {courses.map((course, idx) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="border-none shadow-md overflow-hidden rounded-[2rem] bg-white group">
                  <div className="aspect-[21/9] overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-8 space-y-4">
                    <div className="text-sm font-bold text-primary tracking-wider uppercase">
                      {course.date}
                    </div>
                    <h2 className="text-3xl font-black">{course.title}</h2>
                    <p className="text-foreground/70 font-medium text-lg leading-relaxed">
                      {course.desc}
                    </p>
                    <div className="pt-4">
                      <Button className="rounded-full font-bold px-8">View Course</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Sidebar: Latest Posts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-[2rem] p-8 shadow-md sticky top-24"
          >
            <h3 className="text-2xl font-black mb-8 pb-4 border-b border-black/5">Latest Post</h3>
            <div className="space-y-6">
              {posts.map((post, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <h4 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm font-medium text-foreground/50 mt-2">
                    {post.date}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
