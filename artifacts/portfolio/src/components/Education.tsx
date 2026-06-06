import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    period: "2023 – 2027",
    degree: "B.Tech in Computer Science",
    institution: "Shri Ramswaroop Memorial College of Engineering and Management",
    location: "Lucknow",
    detail: "Currently pursuing a Bachelor of Technology with a focus on software development, data structures, algorithms, and web technologies.",
  },
  {
    period: "2021 – 2022",
    degree: "Intermediate (Class 12)",
    institution: "New Public School",
    location: "Lucknow",
    detail: null,
  },
  {
    period: "2019 – 2020",
    degree: "High School (Class 10)",
    institution: "New Public School",
    location: "Lucknow",
    detail: null,
  },
];

const certifications = [
  "DATA CHAT Workshop",
  "Level 1: E-Commerce & Tech Quiz",
  "TATA Crucible Campus Quiz 2024",
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-['Outfit']">Education & Certifications</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-8 font-['Outfit'] flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Academic Background
            </h3>
            <div className="relative border-l-2 border-blue-200 pl-8 space-y-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[2.6rem] top-1 w-7 h-7 rounded-full bg-white border-4 border-primary flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  </div>
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                    <span className="text-xs font-bold text-primary mb-1 block tracking-wider uppercase">{edu.period}</span>
                    <h4 className="text-base font-bold text-slate-900 mb-1 font-['Outfit']">{edu.degree}</h4>
                    <p className="text-sm text-slate-700 font-medium">{edu.institution}, {edu.location}</p>
                    {edu.detail && (
                      <p className="text-slate-500 text-xs leading-relaxed mt-2">{edu.detail}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-8 font-['Outfit'] flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800">{cert}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-5 rounded-2xl"
            >
              <h4 className="text-sm font-bold text-slate-900 mb-2 font-['Outfit']">Community</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Co-Organizer, GeeksforGeeks On-Campus Body, SRMCEM — helping students grow in competitive programming and technology.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
