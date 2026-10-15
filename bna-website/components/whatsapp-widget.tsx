"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Ganti dengan nomor WhatsApp BNA yang sesuai
  const phoneNumber = "6285921774448"; 
  const defaultMessage = "Halo tim Berkat Nusa Abadi, saya ingin bertanya mengenai layanan kelistrikan Anda.";
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
            className="absolute bottom-20 right-0 w-[320px] sm:w-[350px] bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.25)] border border-slate-100 overflow-hidden origin-bottom-right"
          >
            {/* Header: Dark Modern Theme menyesuaikan warna website BNA */}
            <div className="bg-slate-900 p-5 flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent opacity-60"></div>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-11 h-11 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wide">Berkat Nusa Abadi</h3>
                  <p className="text-slate-400 text-xs flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-all relative z-10"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="bg-slate-50/50 p-6">
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-medium text-slate-400 text-center mb-3">Hari ini</span>
                
                {/* Modern Chat Bubble */}
                <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 text-sm text-slate-700 leading-relaxed relative ml-2">
                  <span className="font-bold text-slate-900 block mb-1">Halo! 👋</span> 
                  Ada yang bisa kami bantu seputar panel listrik atau layanan operasional Anda?
                  
                  {/* Tail of the chat bubble */}
                  <svg className="absolute -left-2.5 top-0 w-2.5 h-3.5 text-white filter drop-shadow-sm" viewBox="0 0 8 13" fill="currentColor">
                    <path d="M8 0H0C0 0 2.92308 0 4.30769 1C5.69231 2 8 7 8 7V0Z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="p-5 bg-white border-t border-slate-100">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-green-500/25 active:scale-[0.98]"
              >
                <span>Mulai Chat via WhatsApp</span>
                <Send size={16} className="mt-0.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button (Tombol Bulat Utama) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.4)] transition-transform hover:scale-105 active:scale-95"
      >
        {/* Efek Ping (denyut) saat tombol belum diklik */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-40 animate-ping pointer-events-none delay-1000"></span>
        )}
        
        {/* Animasi rotasi saat ganti ikon */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={26} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="wa"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Icon WA */}
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}