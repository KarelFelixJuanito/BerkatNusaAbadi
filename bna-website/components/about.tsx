"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function AboutUs() {
  // === VARIANT ANIMASI ===
  const textContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const imageLeftAnim: Variants = {
    hidden: { opacity: 0, x: -30, y: 40 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageRightAnim: Variants = {
    hidden: { opacity: 0, x: 30, y: -40 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  const badgePop: Variants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 120, damping: 15, delay: 0.6 } 
    }
  };

  return (
    <section id="about" className="py-24 bg-slate-900 overflow-hidden relative">
      <style>
        {`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 8s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          @keyframes shine {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>

      {/* ================= EFEK BACKGROUND DARK MODE + EKSTRA CAHAYA PUTIH ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none z-0"></div>
      
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-white/5 rounded-full filter blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-white/10 rounded-full filter blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full filter blur-[100px] pointer-events-none z-0"></div>

      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob pointer-events-none z-0"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob animation-delay-2000 pointer-events-none z-0"></div>
      <div className="absolute -bottom-10 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob animation-delay-4000 pointer-events-none z-0"></div>
      {/* ==================================================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* ================= BAGIAN KIRI: Gambar ================= */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 items-center relative z-10">
              
              {/* Gambar 1 (Kiri) */}
              <motion.div 
                variants={imageLeftAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="transform translate-y-6 lg:translate-y-10 relative z-10"
              >
                <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-slate-800 group border border-white/10">
                  <img 
                    src="/gambar1.jpg" 
                    alt="Teknisi bekerja siang hari"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                </div>
              </motion.div>

              {/* Gambar 2 (Kanan) */}
              <motion.div 
                variants={imageRightAnim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="transform -translate-y-6 lg:-translate-y-10 relative z-10"
              >
                <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-slate-800 group border border-white/10">
                  <img 
                    src="/gambar2.jpg" 
                    alt="Instalasi panel listrik"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                </div>
              </motion.div>

              {/* ================= FLOATING BADGE (DRAGGABLE & ANIMATED) ================= */}
              <div className="absolute left-[35%] sm:left-[40%] lg:left-[42%] -bottom-2 sm:-bottom-4 lg:-bottom-6 z-30">
                <motion.div 
                  variants={badgePop}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  drag
                  dragConstraints={{ top: -100, bottom: 100, left: -150, right: 150 }}
                  // PERBAIKAN: Memasukkan properti transisi ke dalam whileHover
                  whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-slate-800/70 backdrop-blur-md rounded-2xl py-3 px-5 shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-white/15 border-b-4 border-b-red-500 flex items-center gap-4 select-none touch-none cursor-grab active:cursor-grabbing"
                >
                  <div className="relative flex items-center justify-center w-10 h-10">
                    <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md"></div>
                    <svg className="relative z-10 w-6 h-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 14.25l-1.5 5.25L12 18l5.25 1.5-1.5-5.25" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-black text-white leading-none tracking-wider mb-1">SINCE</p>
                    <p className="text-sm font-bold text-slate-300 leading-none">2006</p>
                  </div>
                </motion.div>
              </div>
              
            </div>
          </div>

          {/* ================= BAGIAN KANAN: Teks ================= */}
          <motion.div 
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-10 mt-12 lg:mt-0"
          >
            
            <motion.div variants={fadeInUp} className="relative inline-block mb-6">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-red-500 via-rose-500 to-red-600 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md blur-lg opacity-60 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-red-400 via-rose-500 to-red-600 p-[2px] rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md shadow-lg">
                <div className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-2 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md font-bold text-sm tracking-widest uppercase overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full animate-[shine_3s_ease-in-out_infinite]"></div>
                  <span className="relative z-10">About Us</span>
                </div>
              </div>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight drop-shadow-md">
              Excellence In <br className="hidden md:block" />
              <span className="text-red-500">
                Every Detail
              </span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-slate-300 leading-relaxed mb-10">
              We provide electrical panel solutions, including component supply and services such as 
              installation, troubleshooting, and design. With competitive pricing and fast response, 
              we deliver reliable support for your operations.
            </motion.p>

            <div className="space-y-3">
              
              {/* === LIST 1 === */}
              <motion.div variants={slideInRight} className="group relative flex gap-5 items-start p-5 -mx-5 rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1.5 cursor-pointer z-10">
                <div className="absolute inset-0 rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] -z-10 opacity-0 group-hover:opacity-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-800/40 backdrop-blur-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-80"></div>
                </div>

                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-800 group-hover:bg-red-500 flex items-center justify-center text-red-500 group-hover:text-white shadow-md transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:rotate-3 relative z-20 border border-white/5 group-hover:border-transparent">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div className="pt-1 relative z-20">
                  <h3 className="text-xl font-bold text-white mb-1 transition-colors duration-500 group-hover:text-red-400">Fast Response & Delivery</h3>
                  <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors duration-500">
                    Quick, reliable support to meet urgent and ongoing needs.
                  </p>
                </div>
              </motion.div>

              {/* === LIST 2 === */}
              <motion.div variants={slideInRight} className="group relative flex gap-5 items-start p-5 -mx-5 rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1.5 cursor-pointer z-10">
                <div className="absolute inset-0 rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] -z-10 opacity-0 group-hover:opacity-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-800/40 backdrop-blur-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-80"></div>
                </div>

                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-800 group-hover:bg-red-500 flex items-center justify-center text-red-500 group-hover:text-white shadow-md transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:-rotate-3 relative z-20 border border-white/5 group-hover:border-transparent">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                </div>
                <div className="pt-1 relative z-20">
                  <h3 className="text-xl font-bold text-white mb-1 transition-colors duration-500 group-hover:text-red-400">One-Stop Electrical Solutions</h3>
                  <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors duration-500">
                    Complete services from supply to installation, backed by strong technical expertise.
                  </p>
                </div>
              </motion.div>

              {/* === LIST 3 === */}
              <motion.div variants={slideInRight} className="group relative flex gap-5 items-start p-5 -mx-5 rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1.5 cursor-pointer z-10">
                <div className="absolute inset-0 rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] -z-10 opacity-0 group-hover:opacity-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-800/40 backdrop-blur-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-80"></div>
                </div>

                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-800 group-hover:bg-red-500 flex items-center justify-center text-red-500 group-hover:text-white shadow-md transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:rotate-3 relative z-20 border border-white/5 group-hover:border-transparent">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043A3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296A3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043A3.746 3.746 0 0121 12z" />
                  </svg>
                </div>
                <div className="pt-1 relative z-20">
                  <h3 className="text-xl font-bold text-white mb-1 transition-colors duration-500 group-hover:text-red-400">Guaranteed Quality Work</h3>
                  <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors duration-500">
                    Professional execution with assured results you can rely on.
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}