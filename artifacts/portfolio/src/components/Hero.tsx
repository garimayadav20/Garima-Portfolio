import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@assets/garima_pfp_1780741237430.jpeg";

export default function Hero() {
  return (
    <section id="top" className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          <div className="w-full md:w-3/5 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-6">
                CSE Undergraduate · SRMCEM '27
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-['Outfit'] text-slate-900 leading-tight mb-6"
            >
              Turning ideas into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                working software.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0"
            >
              Hi, I'm Garima Yadav. A motivated Computer Science student passionate about software development and building real-world web applications with modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 group"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/Garima_Yadav_Resume.pdf"
                download="Garima_Yadav_Resume.pdf"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-200 bg-white text-slate-700 font-medium hover:border-primary hover:text-primary transition-colors shadow-sm group"
              >
                <Download className="mr-2 w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                Resume
              </a>
              <div className="flex items-center gap-4 ml-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-primary shadow-sm border border-slate-100 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/garima-yadav-8686b227a" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-primary shadow-sm border border-slate-100 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <button
                  onClick={() => window.open("https://mail.google.com/mail/?view=cm&to=garimayadav.et@gmail.com", "_blank")}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-primary shadow-sm border border-slate-100 transition-colors cursor-pointer"
                  aria-label="Send email"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-2/5 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-72 md:w-72 md:h-80 xl:w-80 xl:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-300 rounded-3xl rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                <img
                  src={profilePhoto}
                  alt="Garima Yadav"
                  className="w-full h-full object-cover object-top scale-150 origin-top"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
