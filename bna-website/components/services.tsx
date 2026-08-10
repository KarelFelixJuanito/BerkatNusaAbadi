"use client";

import { motion } from "framer-motion";
import { Wrench, Cpu, Zap, Package, ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    { icon: Zap, title: "Electrical & Automation", desc: "Troubleshooting and system design." },
    { icon: Cpu, title: "Component Supply & Programming", desc: "High-quality components & system programming." },
    { icon: Wrench, title: "Electrical Wiring & Installation", desc: "Professional wiring ensuring safety and reliability." },
    { icon: Package, title: "General Supply", desc: "Wide range of industrial and electrical supplies." }
  ];

  // Varian untuk efek muncul berurutan (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
  };

  return (
    <section id="services" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Dekorasi Latar Belakang */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-50 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20" 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">Our Core Services</h2>
          <div className="w-24 h-1.5 bg-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Comprehensive solutions for your electrical systems and industrial automation needs.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ y: -15 }}
                className="group relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(239,68,68,0.2)] transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Efek garis atas saat hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-rose-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-slate-50 group-hover:bg-red-500 text-slate-800 group-hover:text-white rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500 shadow-sm">
                    <Icon size={32} className="group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-red-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 group-hover:text-slate-600 transition-colors">
                    {service.desc}
                  </p>
                  
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}