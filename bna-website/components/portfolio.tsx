"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Import ikon X untuk tombol close

export default function Portfolio() {
  // Data portofolio yang diperluas dengan deskripsi detail
  const portfolios = [
    {
      id: 1,
      title: "Safety System Inspection",
      fullDesc: "Thorough inspection and testing of industrial electrical safety systems. We ensure all panels, grounding, and protective devices comply with the highest safety standards to prevent hazards and protect your workforce and assets."
    },
    {
      id: 2,
      title: "Electrical Retrofit",
      fullDesc: "Upgrading obsolete electrical panels and control systems with modern, energy-efficient components. This service extends the lifespan of your equipment, improves reliability, and integrates new smart technologies without the cost of total replacement."
    },
    {
      id: 3,
      title: "Modul Repair",
      fullDesc: "Expert diagnostics and component-level repair for industrial control modules and PCBs. Our technicians can pinpoint faulty chips, capacitors, or traces and restore critical automation equipment to factory condition."
    },
    {
      id: 4,
      title: "Electric Motor Service",
      fullDesc: "Complete maintenance, rewinding, and performance testing for industrial electric motors. We diagnose vibration, thermal, and electrical issues to restore peak efficiency and minimize unplanned operational downtime."
    }
  ];

  // State untuk menyimpan portofolio mana yang sedang diklik (null jika tidak ada yang diklik)
  const [selectedPort, setSelectedPort] = useState<typeof portfolios[0] | null>(null);

  // Efek untuk mengunci scroll background saat pop-up terbuka
  useEffect(() => {
    if (selectedPort) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedPort]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-20" 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">Portfolio Highlights</h2>
        <div className="w-24 h-1.5 bg-red-500 mx-auto rounded-full mb-6"></div>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          A glimpse into our successful projects and specialized maintenance services.
        </p>
      </motion.div>

      {/* GRID KARTU PORTOFOLIO */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {portfolios.map((port) => (
          <motion.div 
            key={port.id}
            variants={itemVariants}
            onClick={() => setSelectedPort(port)} // Membuka pop-up saat diklik
            className="group relative h-80 rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 group-hover:scale-110 transition-transform duration-700 ease-in-out"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
              <div className="w-10 h-1 bg-red-500 mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <h3 className="text-white font-bold text-2xl leading-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {port.title}
              </h3>
              
              <p className="text-red-400 font-semibold mt-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                View Details &rarr;
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* POP-UP (MODAL) ELEGANT */}
      <AnimatePresence>
        {selectedPort && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-md"
            onClick={() => setSelectedPort(null)} // Menutup pop-up jika background gelap diklik
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Mencegah pop-up tertutup saat kotak putihnya diklik
              className="relative w-full max-w-2xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Tombol X di Pojok Kanan Atas */}
              <button
                onClick={() => setSelectedPort(null)}
                className="absolute top-4 right-4 z-30 p-2 bg-black/20 hover:bg-red-500 text-white rounded-full backdrop-blur-md transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              {/* Area Gambar Khusus di dalam Pop-up */}
              <div className="h-48 sm:h-64 relative w-full overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 z-0"></div>
                 <div className="absolute inset-0 flex items-center justify-center text-slate-500/50 italic font-semibold z-10">
                    [Image Slot for {selectedPort.title}]
                 </div>
                 {/* Aksen visual halus */}
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-20"></div>
              </div>

              {/* Area Teks Detail */}
              <div className="p-8 sm:p-10 bg-white relative z-30">
                <div className="w-12 h-1.5 bg-red-500 rounded-full mb-5"></div>
                <h3 className="text-3xl font-black text-slate-800 mb-4 tracking-tight">
                  {selectedPort.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {selectedPort.fullDesc}
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedPort(null)}
                    className="bg-slate-800 hover:bg-red-500 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}