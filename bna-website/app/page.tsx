"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

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

  const heroSlides = [
    {
      image: "/elektrik1.jpg",
      titleTop: "Competitive Pricing.",
      titleBottom: "Fast Electrical Solutions",
      desc: "Premium electrical panel solutions, components, and services to support your industrial operations with guaranteed safety."
    },
    {
      image: "/elektrik2.jpeg",
      titleTop: "Reliable Engineering.",
      titleBottom: "Excellence In Every Detail",
      desc: "Comprehensive electrical system design, installation, and rapid troubleshooting backed by certified technical expertise."
    },
    {
      image: "/elektrik3.jpg",
      titleTop: "Trusted Quality.",
      titleBottom: "Seamless Panel Integration",
      desc: "Delivering high-performance industrial electrical systems and dedicated support to keep your business running efficiently."
    }
  ];

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [heroSlides.length]);

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
            <div className="relative z-10 flex flex-col items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-red-500 mb-6 z-20">
                <Zap size={40} className="drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="relative flex justify-center items-center"
              >
                <div className="absolute inset-0 bg-white blur-[35px] rounded-full scale-125 z-0 pointer-events-none"></div>
                <img
                  src="/logo-bna.png"
                  alt="Berkat Nusa Abadi Logo"
                  className="h-20 md:h-28 w-auto object-contain mix-blend-multiply relative z-10" 
                />
              </motion.div>
              
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }} className="text-slate-300 mt-10 text-sm md:text-base tracking-[0.2em] uppercase font-semibold relative z-20 drop-shadow-md">
                Electrical Solutions
              </motion.p>
              
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
        
        {/* ================= 1. HERO SECTION FULL SCREEN DENGAN BACKGROUND BLUR ================= */}
        <section className="relative w-full h-screen bg-slate-950 overflow-hidden flex items-center justify-center">
          
          {/* Background Gambar Full Screen */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center z-0 blur-sm md:blur-md scale-105"
              style={{ backgroundImage: `url(${heroSlides[currentHeroIndex].image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/50"></div>
            </motion.div>
          </AnimatePresence>

          {/* Konten Teks Full Screen */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center h-full pt-20">
            <div className="max-w-3xl text-left text-white">
              
              <motion.h1 
                key={`title-${currentHeroIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight drop-shadow-xl"
              >
                {heroSlides[currentHeroIndex].titleTop} <br />
                <span className="text-red-500">{heroSlides[currentHeroIndex].titleBottom}</span>
              </motion.h1>

              <motion.p 
                key={`desc-${currentHeroIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="text-base sm:text-xl text-slate-200 font-medium mb-10 max-w-xl leading-relaxed drop-shadow"
              >
                {heroSlides[currentHeroIndex].desc}
              </motion.p>

              <motion.div 
                key={`btn-${currentHeroIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {/* ================= TOMBOL GLASSMORPHISM DENGAN TRANSISI SUPER SMOOTH & BOLD ================= */}
                <a 
                  href="https://wa.me/6285921774448" 
                  target="_blank" 
                  className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-black text-base sm:text-lg text-white transition-all duration-500 ease-out hover:scale-105 group overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-red-600/40 hover:border-red-500/50 hover:shadow-[0_12px_40px_rgba(239,68,68,0.3)]"
                >
                  {/* Kilapan Cahaya Tipis di Atas Kaca */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>
                  
                  <span className="tracking-wide">Contact Our Experts</span> 
                  <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-500 ease-out" />
                </a>
              </motion.div>

            </div>
          </div>

          {/* Indikator Titik-titik (Dots) di Pojok Kanan Bawah */}
          <div className="absolute bottom-10 right-10 z-20 flex items-center gap-2 bg-slate-900/70 backdrop-blur-md px-5 py-3 rounded-full border border-white/10 shadow-2xl">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentHeroIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentHeroIndex === idx ? "w-6 bg-red-500" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
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