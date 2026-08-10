"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, ThumbsUp, ChevronLeft, ChevronRight, Zap, Cpu, Wrench, Settings } from "lucide-react";

import Navbar from "@/components/navbar";
import About from "@/components/about";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const whyChooseUs = [
    { icon: Clock, title: "Fast Response & Delivery", desc: "Quick, reliable support to meet urgent needs." },
    { icon: ShieldCheck, title: "One-Stop Electrical Solutions", desc: "Complete services backed by technical expertise." },
    { icon: ThumbsUp, title: "Guaranteed Quality Work", desc: "Professional execution with assured results." }
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev === whyChooseUs.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? whyChooseUs.length - 1 : prev - 1));

  return (
    <>

      <AnimatePresence mode="wait">
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] bg-slate-900 flex flex-col items-center justify-center overflow-hidden"
          >
            {/* KONTEN SPLASH SCREEN */}
            <div className="relative z-10 flex flex-col items-center">
              
              {/* Ikon Petir */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-red-500 mb-6 z-20">
                <Zap size={40} className="drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
              </motion.div>

              {/* Kontainer Logo & Localized Spotlight */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="relative flex justify-center items-center"
              >
                {/* Cahaya putih yang difokuskan HANYA di belakang logo */}
                <div className="absolute inset-0 bg-white blur-[35px] rounded-full scale-125 z-0 pointer-events-none"></div>
                
                {/* Logo BNA */}
                <img
                  src="/logo-bna.png"
                  alt="Berkat Nusa Abadi Logo"
                  className="h-20 md:h-28 w-auto object-contain mix-blend-multiply relative z-10" 
                />
              </motion.div>
              
              {/* Teks Electrical Solutions - Sekarang warnanya terang dan jelas */}
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }} className="text-slate-300 mt-10 text-sm md:text-base tracking-[0.2em] uppercase font-semibold relative z-20 drop-shadow-md">
                Electrical Solutions
              </motion.p>
              
              {/* Loading Bar */}
              <div className="w-48 md:w-64 h-1 bg-slate-800/50 rounded-full mt-8 overflow-hidden backdrop-blur-sm relative z-20">
                <motion.div 
                  initial={{ width: "0%" }} 
                  animate={{ width: "100%" }} 
                  transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }} 
                  className="h-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,1)]" 
                />
              </div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN WEBSITE */}
      <main className={`min-h-screen bg-slate-50 text-slate-800 font-sans ${showSplash ? "h-screen overflow-hidden" : "overflow-x-hidden"}`}>
        <Navbar />
        
        {/* 1. HERO SECTION */}
        <section 
          className="relative h-screen flex items-center justify-center text-white px-6 overflow-hidden bg-slate-900"
          style={{backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-slate-900/80 z-0"></div>
          
          <div className="absolute inset-0 pointer-events-none z-0">
            {[
              { Icon: Zap, top: "15%", left: "10%", size: 64, delay: 0 },
              { Icon: Cpu, top: "70%", left: "85%", size: 80, delay: 1 },
              { Icon: Wrench, top: "80%", left: "15%", size: 54, delay: 2 },
              { Icon: Settings, top: "25%", left: "80%", size: 96, delay: 1.5 },
            ].map((particle, index) => (
              <motion.div
                key={index}
                animate={{ y: [0, -30, 0], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 8, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
                className="absolute text-slate-300"
                style={{ top: particle.top, left: particle.left }}
              >
                <particle.Icon size={particle.size} />
              </motion.div>
            ))}
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center mt-16">
            <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: showSplash ? 2.5 : 0 }} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
              Competitive Pricing. <br />
              <span className="text-red-500">Fast Electrical Solutions</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: showSplash ? 2.8 : 0.3 }} className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Premium electrical panel solutions, components, and services to support your industrial operations.
            </motion.p>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: showSplash ? 3.1 : 0.6 }}>
              <a href="https://wa.me/6285921774448" target="_blank" className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-red-500/20 group">
                Contact Our Experts <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>

        <About />
        <Services />
        <Portfolio />
        <Footer />
      </main>
    </>
  );
}