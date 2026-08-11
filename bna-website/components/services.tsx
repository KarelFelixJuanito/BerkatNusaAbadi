"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Wrench,
  Cpu,
  Zap,
  Package,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      num: "01",
      icon: Zap,
      title: "Electrical & Automation",
      desc: "Troubleshooting, system design, and electrical automation solutions built for reliable industrial operations.",
      href: "/services/electrical-automation",
    },
    {
      num: "02",
      icon: Cpu,
      title: "Component Supply & Programming",
      desc: "High-quality electrical components combined with professional programming and system integration.",
      href: "/services/component-supply",
    },
    {
      num: "03",
      icon: Wrench,
      title: "Electrical Wiring & Installation",
      desc: "Professional wiring and installation designed to ensure safety, reliability, and long-term performance.",
      href: "/services/wiring-installation",
    },
    {
      num: "04",
      icon: Package,
      title: "General Supply",
      desc: "A wide range of industrial and electrical supplies to support your operational requirements.",
      href: "/services/general-supply",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      className="relative py-28 sm:py-32 px-6 overflow-hidden bg-slate-900"
    >
      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
      {/* =========================================================
          BACKGROUND — SAME LANGUAGE AS ABOUT US
      ========================================================= */}

      {/* Dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.045] pointer-events-none" />

      {/* White ambient glow */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-white/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Blue glow */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Red glow */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[500px] bg-red-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Badge */}
          <div className="relative inline-block mb-6">
            {/* Soft glow behind */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-red-500 via-rose-500 to-red-600 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md blur-lg opacity-60 animate-pulse" />

            {/* Gradient border wrapper */}
            <div className="relative bg-gradient-to-r from-red-400 via-rose-500 to-red-600 p-[2px] rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md shadow-lg">
              <div className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 py-2 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md font-bold text-sm tracking-widest uppercase overflow-hidden relative">
                {/* Shine sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full animate-[shine_3s_ease-in-out_infinite]" />
                <span className="relative z-10">Our Services</span>
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight drop-shadow-md">
            Our{" "}
            <span className="text-red-500">
              Core
            </span>{" "}
            Services
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Comprehensive electrical solutions and technical services
            designed to keep your industrial operations reliable,
            efficient, and running smoothly.
          </p>
        </motion.div>

        {/* =========================================================
            SERVICE GRID
        ========================================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.num}
                variants={cardVariants}
                className="h-full"
              >
                <Link
                  href={service.href}
                  className="
                    group relative h-full min-h-[350px]
                    flex flex-col justify-between
                    overflow-hidden
                    rounded-[2rem]
                    bg-slate-800/80
                    border border-white/10
                    p-8
                    shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                    transition-all duration-700
                    ease-[cubic-bezier(0.25,1,0.5,1)]
                    hover:-translate-y-2
                    hover:bg-slate-800/60
                    hover:border-white/20
                    hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]
                    backdrop-blur-md
                  "
                >

                  {/* =================================================
                      HOVER GLASS LAYER
                  ================================================= */}

                  <div className="
                    absolute inset-0
                    rounded-[2rem]
                    bg-gradient-to-br
                    from-white/10
                    via-transparent
                    to-red-500/5
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-700
                    pointer-events-none
                  " />

                  {/* Top glass highlight */}
                  <div className="
                    absolute top-0 left-0 w-full h-[1px]
                    bg-gradient-to-r
                    from-transparent
                    via-white/30
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-700
                  " />

                  {/* Red accent line */}
                  <div className="
                    absolute top-0 left-0
                    h-1 w-full
                    bg-red-500
                    origin-left
                    scale-x-0
                    group-hover:scale-x-100
                    transition-transform duration-700
                    ease-[cubic-bezier(0.25,1,0.5,1)]
                  " />

                  {/* =================================================
                      GIANT NUMBER
                  ================================================= */}

                  <div className="
                    absolute
                    -right-5
                    -bottom-8
                    text-[150px]
                    leading-none
                    font-black
                    text-white/[0.025]
                    group-hover:text-red-500/[0.08]
                    transition-colors duration-700
                    select-none
                    pointer-events-none
                  ">
                    {service.num}
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="relative z-10">

                    {/* Icon */}
                    <div className="
                      relative
                      w-14 h-14
                      rounded-2xl
                      bg-slate-900
                      border border-white/10
                      text-red-500
                      flex items-center justify-center
                      mb-7
                      shadow-lg
                      transition-all duration-700
                      ease-[cubic-bezier(0.25,1,0.5,1)]
                      group-hover:bg-red-500
                      group-hover:text-white
                      group-hover:border-red-500
                      group-hover:scale-110
                      group-hover:rotate-3
                    ">
                      <div className="
                        absolute inset-0
                        rounded-2xl
                        bg-red-500/20
                        blur-xl
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity duration-700
                      " />

                      <Icon
                        size={26}
                        strokeWidth={1.8}
                        className="relative z-10"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="
                      text-xl
                      font-bold
                      text-white
                      mb-3
                      leading-snug
                      transition-colors duration-500
                      group-hover:text-red-400
                    ">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="
                      text-slate-400
                      text-sm
                      leading-relaxed
                      transition-colors duration-500
                      group-hover:text-slate-300
                    ">
                      {service.desc}
                    </p>
                  </div>

                  {/* =================================================
                      CTA — SUBTLE GLASSMORPHISM
                  ================================================= */}

                  <div className="relative z-10 mt-8">

                    <div className="
                      inline-flex
                      items-center
                      gap-2
                      px-4
                      py-2.5
                      rounded-full
                      text-xs
                      font-black
                      tracking-widest
                      uppercase
                      text-slate-400
                      border border-white/10
                      bg-white/[0.03]
                      backdrop-blur-md
                      transition-all duration-500
                      group-hover:text-white
                      group-hover:bg-white/10
                      group-hover:border-white/20
                    ">
                      Explore Detail

                      <ArrowRight
                        size={15}
                        className="
                          transition-transform duration-500
                          group-hover:translate-x-1.5
                        "
                      />
                    </div>

                  </div>

                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
