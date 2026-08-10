"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wrench, Cpu, Zap, Package, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    { 
      num: "01",
      icon: Zap, 
      title: "Electrical & Automation", 
      desc: "Troubleshooting and system design.",
      href: "/services/electrical-automation"
    },
    { 
      num: "02",
      icon: Cpu, 
      title: "Component Supply & Programming", 
      desc: "High-quality components & system programming.",
      href: "/services/component-supply"
    },
    { 
      num: "03",
      icon: Wrench, 
      title: "Electrical Wiring & Installation", 
      desc: "Professional wiring ensuring safety and reliability.",
      href: "/services/wiring-installation"
    },
    { 
      num: "04",
      icon: Package, 
      title: "General Supply", 
      desc: "Wide range of industrial and electrical supplies.",
      href: "/services/general-supply"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden bg-white border-b border-slate-50">
      
      {/* --- BACKGROUND GLOW & DOTS --- */}
      {/* 1. Cahaya Atas (Di belakang teks "Our Core Services") */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[800px] h-[600px] bg-red-100/60 rounded-full blur-[100px] pointer-events-none z-0"></div>
      
      {/* 2. Cahaya Bawah (Di bagian bawah tengah kartu) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-[800px] h-[600px] bg-red-100/60 rounded-full blur-[100px] pointer-events-none z-0"></div>
      
      {/* 3. Pola Titik-Titik Abu-Abu (Dipertegas) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.4] z-0"
        style={{ backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }}
      ></div>
      {/* ------------------------------------------- */}

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div 
          className="text-center mb-20" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="inline-block bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-2 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md font-bold text-sm tracking-widest uppercase mb-6 shadow-md border border-red-500/20">
              Services
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight relative z-10">
            Our <span className="text-red-500">Core</span> Services
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed relative z-10">
            Comprehensive solutions for your electrical systems and industrial automation needs.
          </p>
        </motion.div>

        {/* GRID LAYOUT KARTU MINIMALIS */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={cardVariants} className="h-full">
                <Link 
                  href={service.href}
                  className="group relative bg-white/70 backdrop-blur-md p-8 rounded-[2rem] border border-slate-100 hover:border-red-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(239,68,68,0.12)] transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between h-full min-h-[320px] z-10"
                >
                  {/* GIANT FAINT NUMBER (Watermark 01, 02) */}
                  <div className="absolute -bottom-4 -right-2 text-[140px] font-black text-slate-50 group-hover:text-red-50/40 transition-colors duration-500 select-none z-0">
                    {service.num}
                  </div>
                  
                  <div className="relative z-10">
                    {/* ICON BOX */}
                    <div className="w-12 h-12 text-slate-700 group-hover:text-red-500 rounded-xl flex items-center mb-6 transition-all duration-500">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    
                    {/* TEXT CONTENT */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-500 transition-colors duration-300 pr-4 leading-snug">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors">
                      {service.desc}
                    </p>
                  </div>
                  
                  {/* BOTTOM ACTION LINK */}
                  <div className="relative z-10 mt-8 flex items-center text-xs font-black tracking-widest text-slate-400 group-hover:text-red-500 transition-colors uppercase">
                    Explore Detail 
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}