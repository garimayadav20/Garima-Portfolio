import React from "react";
import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Python", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Redux", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST APIs", "GraphQL"] },
  { category: "Tools & DevOps", items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-['Outfit']">Technical Arsenal</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-6 font-['Outfit']">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((item) => (
                  <li key={item} className="flex items-center text-slate-700 font-medium text-sm">
                    <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
