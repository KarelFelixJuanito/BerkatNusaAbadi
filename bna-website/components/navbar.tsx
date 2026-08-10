"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/40 backdrop-blur-md border-b border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden"
    >
      {/* Garis Kilap Kaca Tipis di Bagian Paling Atas Navbar */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        
        {/* LOGO BNA DENGAN EFEK SPOTLIGHT (PERSIS SEPERTI DI FOOTER) */}
        <a href="#" className="block cursor-pointer py-1 relative">
          <div className="absolute inset-0 bg-white blur-[20px] rounded-full scale-125 z-0 pointer-events-none"></div>
          <img 
            src="/logo-bna.png" 
            alt="Logo Berkat Nusa Abadi" 
            className="h-10 md:h-12 w-auto object-contain mix-blend-multiply relative z-10" 
          />
        </a>
        
        {/* MENU NAVIGASI BERSIH MINIMALIS DENGAN ANIMASI GARIS BAWAH */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: "About Us", id: "about" },
            { name: "Services", id: "services" },
            { name: "Portfolio", id: "portfolio" }
          ].map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              onClick={(e) => handleSmoothScroll(e, item.id)} 
              className="relative text-sm font-semibold text-slate-300 hover:text-white transition-colors py-2 group"
            >
              {item.name}
              {/* Garis Merah Kecil yang Muncul Mulus Saat Di-hover */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        
        {/* Tombol Contact Us dengan Efek Glassmorphism */}
        <a 
          href="https://wa.me/6285921774448" 
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center px-6 py-2.5 rounded-full font-black text-sm text-white transition-all duration-500 ease-out hover:scale-105 group overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-red-600/40 hover:border-red-500/50 hover:shadow-[0_12px_40px_rgba(239,68,68,0.3)]"
        >
          {/* Kilapan Cahaya Tipis di Atas Tombol */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>
          
          <span className="tracking-wide">Contact Us</span>
        </a>

      </div>
    </motion.nav>
  );
}