"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Footer() {
  const [isMapDark, setIsMapDark] = useState(true); // default to dark to match the site

  const brands = ["LS", "Fuji Electric", "Schneider", "ABB", "PMElectric", "FORT"];
  const marqueeBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <>
      {/* 1. Brands Section (Infinite Marquee Berjalan) */}
      {/* 1. Brands Section (Infinite Marquee Berjalan) */}
      <section className="py-12 bg-slate-900 overflow-hidden border-t border-white/10 relative">
        {/* Dot pattern - same language as other sections */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.045] pointer-events-none z-0" />

        {/* Subtle ambient glows */}
        <div className="absolute -top-20 left-1/4 w-[500px] h-[400px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none z-0" />
        <div className="absolute -bottom-20 right-1/4 w-[500px] h-[400px] bg-red-500/[0.05] rounded-full blur-[130px] pointer-events-none z-0" />

        {/* Fade edges - now dark instead of white */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
        
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10 text-center relative z-10">Trusted Parts Supply</p>
        
        <div className="flex whitespace-nowrap relative z-10">
          <motion.div 
            animate={{ x: [0, -1000] }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className="flex gap-20 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-70 transition-all duration-700"
          >
            {marqueeBrands.map((brand, i) => (
              <h3 key={i} className="text-3xl font-black text-slate-300">{brand}</h3>
            ))}
          </motion.div>
        </div>
      </section>

  {/* 2. Google Maps Section (Full Width) */}
      <section className="w-full h-80 md:h-[400px] border-t border-slate-800 bg-slate-900 relative z-0 overflow-hidden">
        
        {/* Dark mode toggle button */}
        <button
          onClick={() => setIsMapDark(!isMapDark)}
          className="
            absolute top-4 right-4 z-20
            flex items-center gap-2
            px-4 py-2.5
            rounded-full
            bg-slate-900/80
            backdrop-blur-xl
            border border-white/15
            text-white
            text-xs font-bold tracking-wide uppercase
            shadow-[0_8px_25px_rgba(0,0,0,0.4)]
            transition-all duration-500
            hover:bg-slate-800
            hover:border-white/25
            hover:scale-105
            active:scale-95
          "
        >
          {isMapDark ? (
            <>
              <Sun size={15} className="text-amber-400" />
              Light Map
            </>
          ) : (
            <>
              <Moon size={15} className="text-blue-400" />
              Dark Map
            </>
          )}
        </button>

        <iframe
          src="https://maps.google.com/maps?q=Harkot%20Trade%20Center,%20Tangerang&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="BNA Office Location Map"
          className={`
            transition-all duration-700
            ${isMapDark ? "invert-[0.9] hue-rotate-180 contrast-[0.85] brightness-[0.9]" : "grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"}
          `}
        ></iframe>

        {/* Subtle overlay to blend the map edge with the dark theme */}
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none z-10" />
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