import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "3rd Year (2025–2026)",
    role: "Full Stack Python Training & Internship",
    company: "Internship Program",
    description:
      "Completed a Full Stack Python training and internship program where I worked on building web applications and learned backend development with Flask along with frontend integration.",
    tech: ["HTML", "CSS", "Flask", "MySQL", "Git"],
  },
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-['Outfit']">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8"></div>
        </motion.div>

        <div className="max-w-3xl relative border-l-2 border-blue-200 pl-8 space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              <div className="absolute -left-[2.6rem] top-1 w-7 h-7 rounded-full bg-white border-4 border-primary flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-bold text-primary tracking-wider uppercase block mb-1">
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium flex items-center gap-1 mt-0.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.company}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-700"
                    >
                      {t}
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
