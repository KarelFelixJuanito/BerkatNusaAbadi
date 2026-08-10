"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  const portfolios = [
    "Safety System Inspection",
    "Electrical Retrofit",
    "Modul Repair",
    "Electric Motor Service"
  ];

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

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {portfolios.map((port, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="group relative h-80 rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
          >
            {/* Latar Belakang Abstrak Pengganti Gambar (Sampai gambar aslinya ada) */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 group-hover:scale-110 transition-transform duration-700 ease-in-out"></div>
            
            {/* Overlay Gradien agar teks selalu terbaca */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
              {/* Garis Aksen Muncul di Atas Judul */}
              <div className="w-10 h-1 bg-red-500 mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <h3 className="text-white font-bold text-2xl leading-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {port}
              </h3>
              
              {/* Teks "View Details" yang bersembunyi */}
              <p className="text-red-400 font-semibold mt-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                View Details &rarr;
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}