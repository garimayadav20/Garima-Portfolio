import React from "react";
import { motion } from "framer-motion";


const projects = [
  {
    title: "Live Bus Location Tracking System",
    description: "Developed a real-time tracking system to monitor bus locations and improve transportation efficiency. Designed a user-friendly interface to help passengers track buses and reduce waiting time. Enhanced safety and accessibility using location-based services.",
    tech: ["JavaScript", "Node.js", "Express.js", "Maps API", "MongoDB"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Built a full-stack web application for online product browsing and purchasing. Developed the frontend using HTML, CSS, and JavaScript, and the backend using Node.js and Express.js. Integrated MongoDB and SQL databases for efficient data storage and management.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "SQL"],
    liveLink: "#",
    githubLink: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-['Outfit']">Projects</h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group rounded-3xl bg-slate-50 border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full"
            >
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/40 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-50/80 to-transparent"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Outfit'] group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
