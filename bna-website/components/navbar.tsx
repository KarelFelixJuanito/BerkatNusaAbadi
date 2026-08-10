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
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO BNA ASLI (Gambar) */}
        <a href="#" className="block cursor-pointer">
          <img 
            src="/logo-bna.png" 
            alt="Logo Berkat Nusa Abadi" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>
        
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")} className="hover:text-red-500 transition-colors">
            About Us
          </a>
          <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")} className="hover:text-red-500 transition-colors">
            Services
          </a>
          <a href="#portfolio" onClick={(e) => handleSmoothScroll(e, "portfolio")} className="hover:text-red-500 transition-colors">
            Portfolio
          </a>
        </div>
        
        <a 
          href="https://wa.me/6285921774448" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 hover:bg-red-500 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-md"
        >
          Contact Us
        </a>
      </div>
    </motion.nav>
  );
}