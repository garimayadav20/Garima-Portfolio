import React from "react";
import { motion } from "framer-motion";
import { Code, Layout, Lightbulb } from "lucide-react";

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
              I am a software engineer driven by a passion for creating elegant, efficient, and user-centric applications. With a strong foundation in frontend and full-stack development, I bridge the gap between design and complex technical implementation. I believe that good code is clean, maintainable, and ultimately serves to create exceptional human experiences.
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
                Writing scalable, typed, and well-documented code that future developers (including myself) will thank me for.
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
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Outfit']">Pixel Perfect</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Translating designs into responsive, accessible interfaces that look and feel great across all devices.
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
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Outfit']">Problem Solver</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Approaching architectural challenges strategically to deliver robust and performant solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
