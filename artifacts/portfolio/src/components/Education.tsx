import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-['Outfit']">Education & Background</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative border-l-2 border-blue-200 pl-8 py-2 mb-10"
          >
            <div className="absolute -left-[17px] top-4 w-8 h-8 rounded-full bg-white border-4 border-primary flex items-center justify-center">
              <GraduationCap className="w-3 h-3 text-primary" />
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <span className="text-sm font-bold text-primary mb-2 block tracking-wider uppercase">2018 - 2022</span>
              <h3 className="text-xl font-bold text-slate-900 mb-1 font-['Outfit']">Bachelor of Technology in Computer Science</h3>
              <p className="text-lg text-slate-700 font-medium mb-3">National Institute of Technology</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Graduated with Honors. Focused on Data Structures, Algorithms, Web Technologies, and Software Engineering principles. Led the university coding club and organized multiple hackathons.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
