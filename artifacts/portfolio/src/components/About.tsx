import React from "react";
import { motion } from "framer-motion";
import { Code, Users, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-['Outfit']">About Me</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a motivated Computer Science student at SRMCEM, Lucknow, with a strong interest in software development and problem solving. I'm skilled in building web applications using modern technologies and eager to apply my knowledge in real-world projects. A quick learner with adaptability and a collaborative mindset — currently serving as Co-Organizer of the GeeksforGeeks On-Campus Body at SRMCEM.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-primary flex items-center justify-center mb-6">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Outfit']">Clean Code</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Writing well-structured, maintainable code with a focus on scalability and best practices in every project I build.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-primary flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Outfit']">Problem Solver</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Passionate about Data Structures and Algorithms — approaching challenges with a structured mindset to deliver efficient solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-primary flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Outfit']">Team Leader</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Strong communication and leadership skills, demonstrated as Co-Organizer of the GFG On-Campus Body at SRMCEM.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
