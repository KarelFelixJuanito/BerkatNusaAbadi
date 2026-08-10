"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const brands = ["LS", "Fuji Electric", "Schneider", "ABB", "PMElectric", "FORT"];
  
  // Menggandakan array agar animasi berjalannya mulus (tidak terpotong)
  const marqueeBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <>
      {/* Brands Section (Infinite Marquee Berjalan) */}
      <section className="py-12 bg-white overflow-hidden border-t border-slate-100 relative">
        {/* Efek pudar di kiri dan kanan layar */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10 text-center">Trusted Parts Supply</p>
        
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }} // Menggeser secara horizontal
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className="flex gap-20 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
          >
            {marqueeBrands.map((brand, i) => (
              <h3 key={i} className="text-3xl font-black text-slate-800">{brand}</h3>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#0f172a] text-slate-400 py-16 px-6 border-t border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black text-white mb-6 tracking-tight">
              B<span className="text-red-500">N</span>A
            </h2>
            <p className="max-w-sm text-lg leading-relaxed">
              Berkat Nusa Abadi - Competitive Pricing. Fast Electrical Solutions.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Contact Information</h4>
            <p className="flex items-start gap-4 hover:text-white transition-colors">
              <span className="text-red-500">📍</span> Kompleks Harkot Trade Centre Lt. Dasar, Blok B3/7, Tangerang, Banten 15114
            </p>
            <p className="flex items-center gap-4 hover:text-white transition-colors">
              <span className="text-red-500">📞</span> 0859-2177-4448
            </p>
            <p className="flex items-center gap-4 hover:text-white transition-colors">
              <span className="text-red-500">✉️</span> bna.elect2006@gmail.com
            </p>
            <p className="flex items-center gap-4 hover:text-white transition-colors">
              <span className="text-red-500">🌐</span> www.berkatnusaabadi.com
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800/50 text-center text-sm font-semibold tracking-wide"
        >
          <p>&copy; 2026 Berkat Nusa Abadi. All rights reserved.</p>
        </motion.div>
      </footer>
    </>
  );
}