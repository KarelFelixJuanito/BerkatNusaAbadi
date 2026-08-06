import React from 'react';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      {/* 
        Kumpulan CSS untuk animasi teks, lencana melayang, dan BLOB warna-warni 
      */}
      <style>
        {`
          /* Animasi Shimmer Teks */
          @keyframes text-shimmer {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          .animate-text-shimmer {
            background-size: 200% auto;
            animation: text-shimmer 3s linear infinite;
          }
          
          /* Animasi Glow Teks */
          @keyframes text-glow {
            0%, 100% { filter: drop-shadow(0 0 8px rgba(209,79,47,0.2)) drop-shadow(0 0 20px rgba(209,79,47,0.1)); }
            50% { filter: drop-shadow(0 0 15px rgba(209, 28, 28, 0.6)) drop-shadow(0 0 30px rgba(209,79,47,0.3)); }
          }
          .animate-text-glow {
            animation: text-glow 2.5s ease-in-out infinite;
          }
          
          /* Animasi Lencana Melayang */
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          /* Animasi Blob Warna Latar Belakang Baru */
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* ================= BAGIAN KIRI: Gambar & Animasi Latar ================= */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
            
            {/* Animasi Blob Warna-warni (Di belakang gambar) */}
            <div className="absolute top-0 -left-10 w-64 h-64 bg-[#D14F2F] rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-blob -z-10"></div>
            <div className="absolute top-0 -right-10 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-blob animation-delay-2000 -z-10"></div>
            <div className="absolute -bottom-10 left-20 w-64 h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-blob animation-delay-4000 -z-10"></div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 items-center relative z-10">
              
              {/* Gambar 1 - Turun ke bawah */}
              <div className="transform translate-y-6 lg:translate-y-10 relative z-10">
                <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-100 border border-gray-100 group">
                  <img 
                    src="/gambar1.jpg" 
                    alt="Teknisi bekerja siang hari"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Gambar 2 - Naik ke atas */}
              <div className="transform -translate-y-6 lg:-translate-y-10 relative z-10">
                <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-100 border border-gray-100 group">
                  <img 
                    src="/gambar2.jpg" 
                    alt="Instalasi panel listrik"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* ================= FLOATING BADGE (SINCE 2006) ================= */}
              {/* Posisi sudah disesuaikan agar berada di celah gambar */}
              <div className="absolute left-[35%] sm:left-[40%] lg:left-[42%] -bottom-2 sm:-bottom-4 lg:-bottom-6 z-30">
                <div className="animate-float bg-white rounded-xl py-2 px-4 sm:py-3 sm:px-5 shadow-[0_10px_30px_rgb(0,0,0,0.15)] border-b-4 border-[#D14F2F] flex items-center gap-3">
                  
                  {/* Icon Pita */}
                  <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10">
                    <div className="absolute inset-0 bg-[#D14F2F]/20 rounded-full blur-md"></div>
                    <svg className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 text-[#D14F2F]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 14.25l-1.5 5.25L12 18l5.25 1.5-1.5-5.25" />
                    </svg>
                  </div>

                  {/* Teks Badge */}
                  <div>
                    <p className="text-lg sm:text-xl font-black text-[#1A1A1A] leading-none tracking-wider mb-0.5">
                      SINCE
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-gray-500 leading-none">
                      2006
                    </p>
                  </div>

                </div>
              </div>
              {/* Akhir dari Floating Badge */}
              
            </div>
          </div>

          {/* ================= BAGIAN KANAN: Teks & Fitur Interaktif ================= */}
          <div className="relative z-10 mt-12 lg:mt-0">
            
            <div className="inline-block bg-gradient-to-r from-[#D14F2F] to-[#F2785C] text-white px-6 py-2 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md font-bold text-base tracking-wide mb-6 shadow-md border border-[#D14F2F]/20">
              About Us
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Excellence In <br className="hidden md:block" />
              <span className="inline-block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#D14F2F] via-[#ffa087] to-[#D14F2F] animate-text-shimmer animate-text-glow pb-2">
                Every Detail
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We provide electrical panel solutions, including component supply and services such as 
              installation, troubleshooting, and design. With competitive pricing and fast response, 
              we deliver reliable support for your operations.
            </p>

            <div className="space-y-2">
              
              <div className="group flex gap-5 items-start p-4 -ml-4 rounded-2xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 cursor-pointer">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#D14F2F] flex items-center justify-center text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#b03f23]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-[#D14F2F]">Fast Response & Delivery</h3>
                  <p className="text-gray-600">
                    Quick, reliable support to meet urgent and ongoing needs.
                  </p>
                </div>
              </div>

              <div className="group flex gap-5 items-start p-4 -ml-4 rounded-2xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 cursor-pointer">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#D14F2F] flex items-center justify-center text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-[#b03f23]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-[#D14F2F]">One-Stop Electrical Solutions</h3>
                  <p className="text-gray-600">
                    Complete services from supply to installation, backed by strong technical expertise.
                  </p>
                </div>
              </div>

              <div className="group flex gap-5 items-start p-4 -ml-4 rounded-2xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 cursor-pointer">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#D14F2F] flex items-center justify-center text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#b03f23]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-[#D14F2F]">Guaranteed Quality Work</h3>
                  <p className="text-gray-600">
                    Professional execution with assured results you can rely on.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}