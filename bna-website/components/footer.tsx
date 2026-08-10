"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const brands = ["LS", "Fuji Electric", "Schneider", "ABB", "PMElectric", "FORT"];
  
  // Menggandakan array agar animasi berjalannya mulus (tidak terpotong)
  const marqueeBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <>
      {/* 1. Brands Section (Infinite Marquee Berjalan) */}
      <section className="py-12 bg-white overflow-hidden border-t border-slate-100 relative">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10 text-center">Trusted Parts Supply</p>
        
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className="flex gap-20 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
          >
            {marqueeBrands.map((brand, i) => (
              <h3 key={i} className="text-3xl font-black text-slate-800">{brand}</h3>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Google Maps Section (Full Width) */}
      <section className="w-full h-80 md:h-[400px] border-t border-slate-200 bg-slate-200 relative z-0">
        <iframe
          src="https://maps.google.com/maps?q=Harkot%20Trade%20Center,%20Tangerang&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="BNA Office Location Map"
          className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        ></iframe>
      </section>

      {/* 3. Main Footer */}
      <footer className="bg-[#0f172a] text-slate-400 py-16 px-6 border-t border-slate-800 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo BNA dengan Efek Spotlight */}
            <div className="relative flex items-center mb-6 w-fit">
              <div className="absolute inset-0 bg-white blur-[20px] rounded-full scale-125 z-0 pointer-events-none"></div>
              <img 
                src="/logo-bna.png" 
                alt="BNA Logo" 
                className="h-14 md:h-16 w-auto object-contain mix-blend-multiply relative z-10" 
              />
            </div>

            <p className="max-w-sm text-lg leading-relaxed mt-4">
              Berkat Nusa Abadi - Competitive Pricing. Fast Electrical Solutions.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 flex flex-col"
          >
            <h4 className="text-white font-bold mb-2 tracking-wider uppercase text-sm">Contact Information</h4>
            
            {/* Tautan Lokasi (Google Maps) */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Kompleks+Harkot+Trade+Centre+Lt.+Dasar,+Blok+B3/7,+Tangerang,+Banten+15114" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-start gap-4 text-slate-400 hover:text-white transition-colors cursor-pointer group w-fit"
            >
              <span className="text-red-500 group-hover:scale-125 transition-transform duration-300">📍</span> 
              <span className="group-hover:underline underline-offset-4 decoration-red-500/50">Kompleks Harkot Trade Centre Lt. Dasar, Blok B3/7, Tangerang, Banten 15114</span>
            </a>
            
            {/* Tautan Nomor Telepon (WhatsApp) */}
            <a 
              href="https://wa.me/6285921774448" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors cursor-pointer group w-fit"
            >
              <span className="text-red-500 group-hover:scale-125 transition-transform duration-300">📞</span> 
              <span className="group-hover:underline underline-offset-4 decoration-red-500/50">0859-2177-4448</span>
            </a>
            
            {/* Tautan Email (Gmail/Mail Client) */}
            <a 
              href="mailto:bna.elect2006@gmail.com" 
              className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors cursor-pointer group w-fit"
            >
              <span className="text-red-500 group-hover:scale-125 transition-transform duration-300">✉️</span> 
              <span className="group-hover:underline underline-offset-4 decoration-red-500/50">bna.elect2006@gmail.com</span>
            </a>
            
            {/* Tautan Website */}
            <a 
              href="https://www.berkatnusaabadi.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors cursor-pointer group w-fit"
            >
              <span className="text-red-500 group-hover:scale-125 transition-transform duration-300">🌐</span> 
              <span className="group-hover:underline underline-offset-4 decoration-red-500/50">www.berkatnusaabadi.com</span>
            </a>
            
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