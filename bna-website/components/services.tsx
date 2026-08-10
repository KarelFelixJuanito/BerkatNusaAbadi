"use client";

import { motion } from "framer-motion";
import { Wrench, Cpu, Zap, Package, Settings, PenTool } from "lucide-react";

export default function Services() {
  const services = [
    { id: "01", icon: Zap, title: "Electrical & Automation", desc: "Troubleshooting and system design." },
    { id: "02", icon: Cpu, title: "Component Supply & Programming", desc: "High-quality components & system programming." },
    { id: "03", icon: Wrench, title: "Electrical Wiring & Installation", desc: "Professional wiring ensuring safety and reliability." },
    { id: "04", icon: Package, title: "General Supply", desc: "Wide range of industrial and electrical supplies." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <section id="services" className="py-24 px-6 bg-slate-50 relative overflow-hidden z-0">
      
      {/* ================= AMBIENT GLOW (PENTING UNTUK EFEK KACA) ================= */}
      {/* Warna-warni tipis di background ini yang akan dibiaskan/diblur oleh kartu kaca */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-red-400/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-300/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* ================= BACKGROUND ENGINEERING TOOLS ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-20 flex items-center justify-center">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute -top-20 -left-20 text-slate-300/40">
          <Settings size={400} strokeWidth={1} />
        </motion.div>
        <motion.div animate={{ rotate: -360, y: [0, -30, 0] }} transition={{ rotate: { duration: 80, repeat: Infinity, ease: "linear" }, y: { duration: 10, repeat: Infinity, ease: "easeInOut" } }} className="absolute top-1/3 -right-32 text-slate-300/30">
          <Wrench size={350} strokeWidth={1} />
        </motion.div>
        <motion.div animate={{ y: [0, 40, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-10 left-10 text-slate-300/40">
          <Zap size={250} strokeWidth={1} />
        </motion.div>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} className="absolute -bottom-32 right-1/4 text-slate-300/30">
          <PenTool size={300} strokeWidth={1} />
        </motion.div>
        
        {/* Dot matrix pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
      </div>

      {/* ================= KONTEN UTAMA ================= */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div 
          className="text-center mb-20 flex flex-col items-center" 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="inline-block bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-2 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md font-bold text-sm tracking-widest uppercase mb-6 shadow-md border border-red-500/20">
            Our Services
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Our <span className="relative inline-block">
              <span className="relative z-10 text-red-500">Core Services</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-red-100 -z-10 transform -rotate-1"></span>
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Comprehensive solutions for your electrical systems and industrial automation needs.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                // Hapus bg color dari sini agar layer kaca bisa bekerja maksimal
                className="group relative p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(31,38,135,0.05)] border border-white/60 hover:border-white hover:shadow-[0_20px_50px_rgba(239,68,68,0.15)] transition-all duration-500 ease-out cursor-pointer overflow-hidden flex flex-col min-h-[320px] z-10"
              >
                {/* 1. LAYER KACA UTAMA (Sangat transparan + Blur kuat) */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-xl transition-colors duration-500 group-hover:bg-white/60 -z-20"></div>

                {/* 2. KILAPAN CAHAYA KACA (Glossy Reflection - Muncul saat di-hover) */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                
                {/* Garis Kilap Kaca di Atas (Memberi kesan 3D) */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                {/* Garis merah tebal di atas saat hover */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20 rounded-t-[2rem]"></div>
                
                {/* Watermark Angka Raksasa */}
                <div className="absolute -right-4 -bottom-6 text-[10rem] font-black text-slate-200/50 leading-none select-none z-0 transform transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-1 group-hover:text-red-500/5">
                  {service.id}
                </div>
                
                <div className="relative z-20 flex flex-col h-full">
                  <div>
                    <div className="w-14 h-14 bg-white/80 group-hover:bg-red-500 text-slate-700 group-hover:text-white rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ease-out shadow-sm border border-white group-hover:border-red-500 group-hover:shadow-lg group-hover:shadow-red-500/30">
                      <Icon size={28} className="group-hover:scale-110 transition-transform duration-500 ease-out" strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-300 ease-out">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 group-hover:text-slate-700 transition-colors duration-300">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-auto pt-5 border-t border-slate-200/60 group-hover:border-red-200 transition-colors duration-300 ease-out">
                    <button className="flex items-center gap-2 text-slate-500 group-hover:text-red-600 font-bold text-xs uppercase tracking-widest transition-colors duration-300 ease-out">
                      Explore Detail
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transform transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}