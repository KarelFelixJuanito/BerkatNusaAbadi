"use client";

import React, { useState } from 'react';

const servicesData = [
  {
    id: "01",
    title: "ELECTRICAL & AUTOMATION TROUBLESHOOTING AND SYSTEM DESIGN",
    description: "We provide expert troubleshooting to identify and resolve electrical and automation issues, along with custom system design tailored to your operational requirements."
  },
  {
    id: "02",
    title: "COMPONENT SUPPLY & SYSTEM PROGRAMMING",
    description: "We supply high-quality electrical components and offer system programming services to ensure optimal performance and seamless integration."
  },
  {
    id: "03",
    title: "ELECTRICAL WIRING & INSTALLATION",
    description: "Professional wiring and installation services for various electrical systems, ensuring safety, reliability, and compliance with industry standards."
  },
  {
    id: "04",
    title: "GENERAL SUPPLY",
    description: "We support your operational needs by providing a wide range of industrial and electrical supplies with competitive pricing and fast delivery."
  }
];

export default function CoreServices() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === servicesData.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? servicesData.length - 1 : prevIndex - 1));
  };

  return (
    <section id="services" className="py-24 bg-slate-50 overflow-hidden relative">
      <style>
        {`
          @keyframes text-shimmer {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          .animate-text-shimmer {
            background-size: 200% auto;
            animation: text-shimmer 3s linear infinite;
          }
          @keyframes text-glow {
            0%, 100% { filter: drop-shadow(0 0 8px rgba(209,79,47,0.2)) drop-shadow(0 0 20px rgba(209,79,47,0.1)); }
            50% { filter: drop-shadow(0 0 15px rgba(209,79,47,0.6)) drop-shadow(0 0 30px rgba(209,79,47,0.3)); }
          }
          .animate-text-glow {
            animation: text-glow 2.5s ease-in-out infinite;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#D14F2F] to-[#F2785C] text-white px-6 py-2 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md font-bold text-sm tracking-wide mb-6 shadow-md border border-[#D14F2F]/20">
            Our Services
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our <br className="hidden md:block" />
            <span className="inline-block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#D14F2F] via-[#ffa087] to-[#D14F2F] animate-text-shimmer animate-text-glow pb-2">
              Core Services
            </span>
          </h2>
        </div>

        {/* ================= SLIDER CONTAINER ================= */}
        <div className="relative w-full max-w-5xl mx-auto px-12 sm:px-16">
          
          {/* Tombol Prev */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 bg-white text-gray-800 rounded-xl shadow-[0_8px_20px_rgb(0,0,0,0.08)] hover:bg-gray-50 hover:text-[#D14F2F] active:scale-95 transition-all duration-300 ease-out focus:outline-none"
            aria-label="Previous Service"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Wrapper Card Putih */}
          <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-gray-100 overflow-hidden">
            
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {servicesData.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0 relative overflow-hidden group">
                  
                  {/* Watermark Angka Raksasa */}
                  <div className="absolute -right-6 -bottom-10 text-[12rem] sm:text-[16rem] font-black text-slate-50 leading-none select-none z-0 transform transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2 group-hover:text-slate-100">
                    {service.id}
                  </div>

                  <div className="relative z-10 p-8 sm:p-12 lg:p-16">
                    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
                      
                      {/* Badge Nomor Diberikan Efek Pop-Out Kembali (scale-105 & -translate-y-1.5) */}
                      <div className="flex-shrink-0 relative">
                        <div className="absolute inset-0 bg-[#D14F2F] rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition-all duration-500 ease-out"></div>
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#D14F2F] to-[#F2785C] rounded-2xl flex items-center justify-center shadow-lg border border-white/25 transform transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:scale-105">
                          <span className="text-white text-2xl sm:text-3xl font-black tracking-tight">
                            {service.id}
                          </span>
                        </div>
                      </div>

                      {/* Teks Konten */}
                      <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] mb-4 leading-tight tracking-tight group-hover:text-[#D14F2F] transition-colors duration-300 ease-out">
                          {service.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        
                        {/* Tombol Learn More */}
                        <button className="flex items-center gap-2 text-[#D14F2F] font-bold text-sm uppercase tracking-wider group/btn hover:text-[#b03f23] transition-colors duration-300">
                          Explore Detail
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transform transition-transform duration-300 ease-out group-hover/btn:translate-x-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                          </svg>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>

          {/* Tombol Next */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 bg-[#D14F2F] text-white rounded-xl shadow-[0_8px_20px_rgb(209,79,47,0.3)] hover:bg-[#b03f23] active:scale-95 transition-all duration-300 ease-out focus:outline-none"
            aria-label="Next Service"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>

        {/* ================= INDIKATOR TITIK (DOTS) ================= */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {servicesData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-500 ease-out shadow-sm ${
                index === currentIndex ? "bg-[#D14F2F] w-10" : "bg-gray-300 w-3 hover:bg-gray-400 hover:scale-110"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}