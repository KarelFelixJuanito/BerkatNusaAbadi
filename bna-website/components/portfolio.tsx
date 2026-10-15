"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; // TAMBAHAN IMPORT LINK

export default function Portfolio() {
  const portfolios = [
    { id: 1, title: "Safety System Inspection", category: "Safety & Inspection", image: "/portfolio1.jpg" },
    { id: 2, title: "Electrical Retrofit", category: "Electrical Engineering", image: "/portfolio2.jpg" },
    { id: 3, title: "Modul Repair", category: "Repair & Maintenance", image: "/portfolio3.jpg" },
    { id: 4, title: "Electric Motor Service", category: "Maintenance", image: "/portfolio4.jpg" },
    { id: 5, title: "Electrical Control Part Refreshment", category: "Control System", image: "/portfolio5.jpg" },
    { id: 6, title: "Electro-Hydraulic Handling", category: "On-Site Repair", image: "/portfolio6.jpg" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="portfolio" className="relative py-28 sm:py-32 px-6 overflow-hidden bg-slate-950">
      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>

      {/* Background Elements (Grid & Glow) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]" style={{ backgroundImage: `linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)`, backgroundSize: "120px 120px" }} />
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-blue-950/[0.45] blur-[170px] pointer-events-none" />
      <div className="absolute bottom-[-300px] right-[-150px] w-[650px] h-[650px] rounded-full bg-indigo-950/[0.35] blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-[-250px] w-[500px] h-[500px] rounded-full bg-red-500/[0.035] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}>
          <div className="relative inline-block mb-6">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-red-500 via-rose-500 to-red-600 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md blur-lg opacity-60 animate-pulse" />
            <div className="relative bg-gradient-to-r from-red-400 via-rose-500 to-red-600 p-[2px] rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md shadow-lg">
              <div className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-2 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md font-bold text-sm tracking-widest uppercase overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full animate-[shine_3s_ease-in-out_infinite]" />
                <span className="relative z-10">Our Portfolio</span>
              </div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Portfolio <span className="text-red-500">Highlights</span></h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">A glimpse into our completed projects, technical expertise, and specialized electrical maintenance services.</p>
        </motion.div>

        {/* PROJECT GRID MENGGUNAKAN NEXT/LINK UNTUK PINDAH HALAMAN */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {portfolios.map((port) => (
            <Link href={`/portfolio/${port.id}`} key={port.id} 
            onClick={() => {
                sessionStorage.setItem("skipSplash", "true");
                sessionStorage.setItem("scrollPos", window.scrollY.toString());
            }}
            className="block group relative h-[380px] sm:h-[420px] rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900 shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:border-blue-900/50 hover:-translate-y-1 transition-all duration-700">
              <img src={port.image} alt={port.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110" />
              <div className="absolute inset-0 bg-blue-950/20 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/10" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-blue-950/55 backdrop-blur-xl border border-blue-800/40 text-slate-200/90 text-[10px] font-black tracking-widest uppercase shadow-[0_8px_30px_rgba(0,0,0,0.18)] group-hover:bg-blue-900/65 group-hover:border-blue-700/50 transition-all duration-500 z-20">
                {port.category}
              </div>

              <div className="absolute left-0 right-0 bottom-0 p-8 sm:p-9 z-10">
                <div className="w-10 h-1 bg-red-500 mb-5 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700" />
                <h3 className="text-2xl sm:text-[1.65rem] font-black text-white leading-tight mb-5 max-w-xl">{port.title}</h3>
                
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-950/55 backdrop-blur-xl border border-blue-800/40 text-slate-200 text-sm font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-[0_8px_25px_rgba(0,0,0,0.2)]">
                  View Project
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}