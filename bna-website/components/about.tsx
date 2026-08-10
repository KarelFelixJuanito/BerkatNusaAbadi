"use client";

import { motion } from "framer-motion";
import { Award, ChevronRight } from "lucide-react"; 

export default function About() {
  // 1. Varian Induk untuk mengatur urutan muncul (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Jeda 0.15 detik antar elemen
        delayChildren: 0.2,
      }
    }
  };

  // 2. Varian Anak untuk efek masuk dari kiri
  const itemLeftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  // 3. Varian khusus untuk garis merah (efek menggambar)
  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: 80, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // 4. Varian untuk gambar (efek memantul dan berputar 3D)
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5, y: 50 },
    visible: { opacity: 1, scale: 1, rotate: 0, y: 0, transition: { duration: 0.8, type: "spring", bounce: 0.4 } }
  };

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* BAGIAN KIRI: TEKS (Dengan Staggered Animation) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }} 
          className="space-y-6"
        >
          <motion.h2 variants={itemLeftVariants} className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
            About Us
          </motion.h2>
          
          <motion.div variants={lineVariants} className="h-1.5 bg-red-500 rounded-full"></motion.div>
          
          <motion.p variants={itemLeftVariants} className="text-lg leading-relaxed text-slate-600">
            We provide electrical panel solutions, including component supply and services such as installation, troubleshooting, and design. With competitive pricing and fast response, we deliver reliable support for your operations.
          </motion.p>
          
          <motion.ul variants={containerVariants} className="space-y-4 mt-8">
            {["Professional Execution", "High Quality Component", "Rapid Diagnosis"].map((item, i) => (
              <motion.li 
                key={i} 
                variants={itemLeftVariants}
                whileHover={{ x: 10 }} // Efek geser kanan saat di-hover
                className="flex items-center gap-4 text-slate-700 font-bold text-lg cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-full bg-red-50 group-hover:bg-red-500 transition-colors flex items-center justify-center border border-red-100 group-hover:border-red-500 shadow-sm">
                  <ChevronRight size={18} className="text-red-500 group-hover:text-white transition-colors" />
                </div>
                <span className="group-hover:text-red-500 transition-colors">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        
        {/* BAGIAN KANAN: GAMBAR & DEKORASI */}
        <div className="relative mt-10 md:mt-0">
          
          {/* Kotak Gambar Utama dengan Efek Masuk yang Bouncy */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl bg-slate-200 group border-4 border-white z-10"
          >
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all duration-700 z-10 pointer-events-none"></div>
            <img 
              src="/about-image.jpg" 
              alt="BNA Technician at Work" 
              className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 group-hover:rotate-1"
            />
          </motion.div>

          {/* Lencana Mengambang (Lebih Dinamis) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            className="absolute -bottom-8 -left-4 md:-left-12 z-20"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="bg-white px-6 py-5 rounded-2xl shadow-2xl border-b-4 border-red-500 flex items-center gap-4"
            >
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-500"
              >
                <Award size={28} />
              </motion.div>
              <div>
                <div className="text-2xl font-black text-slate-800 uppercase tracking-tight">Since</div>
                <div className="text-sm font-bold text-slate-500 leading-tight">2006</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Elemen Latar Belakang yang "Bernapas" (Pulse & Scale) */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-red-500 rounded-full blur-3xl z-0"
          ></motion.div>
          
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [12, 0, 12] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute -bottom-16 -right-10 w-56 h-56 bg-slate-800/5 rounded-[3rem] z-0"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}