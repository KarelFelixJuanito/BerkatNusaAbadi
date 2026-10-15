"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X, ZoomIn, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// DUMMY DATA LENGKAP
const portfolioData = [
  {
    id: "1",
    title: "Safety System Inspection",
    category: "Safety & Inspection",
    image: "/portfolio1.jpg",
    gallery: ["/portfolio1.jpg", "/gambar1.jpg", "/gambar2.jpg"],
    fullDesc: "Thorough inspection and testing of industrial electrical safety systems. We assess electrical panels, grounding systems, protective devices, wiring conditions, and overall system performance to identify potential risks before they become operational problems. Our inspection process helps maintain safe working conditions while ensuring critical electrical systems remain reliable and compliant with required safety standards.",
    features: ["Visual & Thermal Panel Inspection", "Grounding System Assessment", "Protective Device Testing (MCB, ELCB)", "Wiring Condition & Insulation Test", "Compliance with Industrial Safety Standards"]
  },
  {
    id: "2",
    title: "Electrical Retrofit",
    category: "Electrical Engineering",
    image: "/portfolio2.jpg",
    gallery: ["/portfolio2.jpg", "/gambar1.jpg", "/gambar2.jpg"],
    fullDesc: "Upgrading obsolete electrical panels and control systems with modern, energy-efficient components. Our retrofit work improves system reliability, simplifies maintenance, and extends equipment service life without requiring a complete replacement.",
    features: ["Panel Upgrade & Modernization", "Energy-Efficient Component Integration", "Minimal Downtime Execution", "Extended Equipment Lifespan"]
  },
  {
    id: "3",
    title: "Modul Repair",
    category: "Repair & Maintenance",
    image: "/portfolio3.jpg",
    gallery: ["/portfolio3.jpg", "/gambar2.jpg", "/gambar1.jpg"],
    fullDesc: "Expert diagnostics and component-level repair for industrial control modules, electronic boards, and automation equipment. Our technicians identify faulty components, damaged connections, and electrical abnormalities through systematic testing.",
    features: ["Component-level Diagnostics", "Electronic Board Soldering & Repair", "Pre and Post Repair Functional Testing", "Cost-effective alternative to replacement"]
  },
  {
    id: "4",
    title: "Electric Motor Service",
    category: "Maintenance",
    image: "/portfolio4.jpg",
    gallery: ["/portfolio4.jpg", "/gambar1.jpg"],
    fullDesc: "Complete maintenance, rewinding, and performance testing for industrial electric motors. We diagnose electrical, thermal, mechanical, and vibration-related issues to determine the root cause of performance problems.",
    features: ["Motor Rewinding Services", "Vibration & Thermal Analysis", "Bearing & Shaft Replacement", "Load Performance Testing"]
  },
  {
    id: "5",
    title: "Electrical Control Part Refreshment",
    category: "Control System",
    image: "/portfolio5.jpg",
    gallery: ["/portfolio5.jpg", "/gambar2.jpg", "/portfolio1.jpg"],
    fullDesc: "Refreshing and upgrading electrical control components to restore reliable operation and improve operator control. We replace aging components, inspect related wiring and connections, and verify control functionality.",
    features: ["Industrial Joystick Replacement", "Push-button & Relay Upgrades", "Control Interface Optimization", "Wiring Harness Inspection"]
  },
  {
    id: "6",
    title: "Electro-Hydraulic Handling",
    category: "On-Site Repair",
    image: "/portfolio6.jpg",
    gallery: ["/portfolio6.jpg", "/gambar1.jpg"],
    fullDesc: "Rapid diagnosis and on-site repair for electro-hydraulic handling systems used in demanding industrial environments. Our team responds to electrical, control, and hydraulic-related issues to identify the source of equipment failure.",
    features: ["Rapid On-site Troubleshooting", "Electro-valve Diagnostics", "Control System Calibration", "Hydraulic Pressure Testing"]
  },
];

export default function PortfolioDetail() {
  const params = useParams();
  const router = useRouter();
  const currentId = params.id as string;
  
  // Mencari index dan data saat ini
  const currentIndex = portfolioData.findIndex(p => p.id === currentId);
  const data = portfolioData[currentIndex];
  
  // LOGIKA PREVIOUS & NEXT ITEM
  const prevIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
  const nextIndex = (currentIndex + 1) % portfolioData.length;
  
  const prevItem = portfolioData[prevIndex];
  const nextItem = portfolioData[nextIndex];

  // State untuk Interaksi Galeri
  const [activeImg, setActiveImg] = useState(data ? data.gallery[0] : "");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (data) setActiveImg(data.gallery[0]);
    window.scrollTo(0, 0); 
  }, [data]);

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link href="/" className="px-6 py-2 bg-red-500 rounded-full font-semibold">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-red-500/30 overflow-x-hidden">
      
      {/* =================================================================
          NAVIGASI ATAS
      ================================================================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-slate-950/60 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link 
            href="/"  /* <--- Cukup arahkan ke "/" saja */
            className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="font-bold text-sm tracking-wide uppercase">Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* =================================================================
          HERO BANNER
      ================================================================= */}
      <div className="relative pt-32 pb-20 px-6 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-black tracking-widest uppercase mb-6">
              {data.category}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight max-w-4xl mb-6">
              {data.title}
            </h1>
            <div className="w-24 h-1.5 bg-red-500 rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* =================================================================
          MAIN CONTENT AREA
      ================================================================= */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* GALERI GAMBAR */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-7 space-y-6">
            <div 
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-900 border border-white/10 group cursor-zoom-in"
              onClick={() => setIsLightboxOpen(true)}
            >
              <AnimatePresence mode="wait">
                {activeImg && (
                  <motion.img
                    key={activeImg}
                    src={activeImg}
                    alt={data.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/20 transition-all duration-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-slate-900/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                  <ZoomIn size={24} />
                </div>
              </div>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {data.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(img)}
                  className={`
                    relative flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden transition-all duration-300
                    ${activeImg === img ? 'ring-2 ring-red-500 ring-offset-4 ring-offset-slate-950 scale-100 opacity-100' : 'opacity-50 hover:opacity-100 scale-95 hover:scale-100 border border-white/10'}
                  `}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* DETAIL PROYEK */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="lg:col-span-5">
            <div className="sticky top-32 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 sm:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Project Overview</h3>
              <p className="text-slate-400 leading-relaxed mb-10 text-lg">
                {data.fullDesc}
              </p>

              <h4 className="text-sm font-black text-slate-200 tracking-widest uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-red-500"></span>
                Key Features & Works
              </h4>
              
              <ul className="space-y-4">
                {data.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>

      {/* =================================================================
          NAVIGASI PREVIOUS & NEXT PROJECT DUAL BUTTONS
      ================================================================= */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-7xl mx-auto px-6 pb-24"
      >
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* TOMBOL PREVIOUS PROJECT */}
          <Link href={`/portfolio/${prevItem.id}`} className="group w-full md:w-[48%] relative flex items-center gap-4 p-4 pr-6 sm:p-5 rounded-[2rem] bg-slate-900 border border-white/10 hover:border-slate-500/50 hover:bg-slate-800 transition-all duration-500 shadow-xl">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-slate-700 transition-colors duration-500 shrink-0">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 hidden sm:block">
              <img src={prevItem.image} alt={prevItem.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="text-left overflow-hidden">
              <span className="block text-slate-500 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1">Previous</span>
              <span className="block text-white font-bold text-sm sm:text-lg group-hover:text-slate-300 transition-colors truncate">{prevItem.title}</span>
            </div>
          </Link>

          {/* TOMBOL NEXT PROJECT */}
          <Link href={`/portfolio/${nextItem.id}`} className="group w-full md:w-[48%] relative flex items-center justify-end gap-4 p-4 pl-6 sm:p-5 rounded-[2rem] bg-slate-900 border border-white/10 hover:border-red-500/50 hover:bg-slate-800 transition-all duration-500 shadow-xl">
            <div className="text-right overflow-hidden">
              <span className="block text-slate-500 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1">Up Next</span>
              <span className="block text-white font-bold text-sm sm:text-lg group-hover:text-red-400 transition-colors truncate">{nextItem.title}</span>
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 hidden sm:block">
              <img src={nextItem.image} alt={nextItem.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-red-500 transition-colors duration-500 shrink-0">
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>
      </motion.div>

      {/* =================================================================
          LIGHTBOX MODAL (ZOOM GAMBAR)
      ================================================================= */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-500 hover:rotate-90 transition-all duration-300">
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ type: "spring", damping: 25 }}
              src={activeImg} 
              alt="Zoomed" 
              className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl" 
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}