import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <a href="#top" className="text-2xl font-bold font-['Outfit'] text-white tracking-tight block mb-2">
            GY.
          </a>
          <p className="text-sm text-slate-400">
            Designed & Built by Garima Yadav.
          </p>
        </div>
        
        <div className="flex items-center gap-6 mb-6 md:mb-0">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/garima-yadav-8686b227a" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        
        <div className="text-sm text-slate-500">
          &copy; {year} Garima Yadav. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
