"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      title: "Safety System Inspection",
      category: "Safety & Inspection",
      image: "/portfolio1.jpg",
      fullDesc:
        "Thorough inspection and testing of industrial electrical safety systems. We assess electrical panels, grounding systems, protective devices, wiring conditions, and overall system performance to identify potential risks before they become operational problems. Our inspection process helps maintain safe working conditions while ensuring critical electrical systems remain reliable and compliant with required safety standards.",
    },
    {
      id: 2,
      title: "Electrical Retrofit",
      category: "Electrical Engineering",
      image: "/portfolio2.jpg",
      fullDesc:
        "Upgrading obsolete electrical panels and control systems with modern, energy-efficient components. Our retrofit work improves system reliability, simplifies maintenance, and extends equipment service life without requiring a complete replacement. We carefully integrate new components into existing systems while maintaining operational continuity and improving overall electrical performance.",
    },
    {
      id: 3,
      title: "Modul Repair",
      category: "Repair & Maintenance",
      image: "/portfolio3.jpg",
      fullDesc:
        "Expert diagnostics and component-level repair for industrial control modules, electronic boards, and automation equipment. Our technicians identify faulty components, damaged connections, and electrical abnormalities through systematic testing before carrying out precise repairs. The goal is to restore critical equipment to reliable operating condition while reducing unnecessary replacement costs and downtime.",
    },
    {
      id: 4,
      title: "Electric Motor Service",
      category: "Maintenance",
      image: "/portfolio4.jpg",
      fullDesc:
        "Complete maintenance, rewinding, and performance testing for industrial electric motors. We diagnose electrical, thermal, mechanical, and vibration-related issues to determine the root cause of performance problems. Through proper maintenance and repair, we help restore motor efficiency, improve operational reliability, and minimize the risk of unexpected production downtime.",
    },
    {
      id: 5,
      title: "Electrical Control Part Refreshment",
      category: "Control System",
      image: "/portfolio5.jpg",
      fullDesc:
        "Refreshing and upgrading electrical control components to restore reliable operation and improve operator control. One of the key works includes joystick replacement for industrial handling and control equipment, where worn or damaged control interfaces can affect precision, responsiveness, and operational safety. We replace aging components, inspect related wiring and connections, and verify control functionality to ensure smoother and more dependable equipment operation.",
    },
    {
      id: 6,
      title: "Electro-Hydraulic Handling",
      category: "On-Site Repair",
      image: "/portfolio6.jpg",
      fullDesc:
        "Rapid diagnosis and on-site repair for electro-hydraulic handling systems used in demanding industrial environments. Our team responds to electrical, control, and hydraulic-related issues to identify the source of equipment failure and restore operation as quickly as possible. On-site troubleshooting minimizes unnecessary equipment downtime while allowing critical handling systems to return to safe and reliable operation without extended transportation or workshop delays.",
    },
  ];

  const [selectedPort, setSelectedPort] =
    useState<(typeof portfolios)[0] | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedPort ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPort]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="portfolio"
      className="
        relative
        py-28
        sm:py-32
        px-6
        overflow-hidden
        bg-slate-950
      "
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
          PORTFOLIO-SPECIFIC BACKGROUND
      ========================================================= */}

      {/* Architectural Grid */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, #cbd5e1 1px, transparent 1px),
            linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* =========================================================
          NAVY SPOTLIGHT
          Dibuat lebih muted daripada blue sebelumnya
      ========================================================= */}

      <div
        className="
          absolute
          top-[-250px]
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[700px]
          rounded-full
          bg-blue-950/[0.45]
          blur-[170px]
          pointer-events-none
        "
      />

      {/* Secondary Navy Glow */}

      <div
        className="
          absolute
          bottom-[-300px]
          right-[-150px]
          w-[650px]
          h-[650px]
          rounded-full
          bg-indigo-950/[0.35]
          blur-[150px]
          pointer-events-none
        "
      />

      {/* Small Red Brand Accent */}

      <div
        className="
          absolute
          top-1/2
          left-[-250px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-red-500/[0.035]
          blur-[140px]
          pointer-events-none
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="max-w-7xl mx-auto relative z-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

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
                <span className="relative z-10">Our Portfolio</span>
              </div>
            </div>
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              md:text-5xl
              font-black
              text-white
              mb-6
              tracking-tight
            "
          >
            Portfolio{" "}
            <span className="text-red-500">
              Highlights
            </span>
          </h2>

          <p
            className="
              text-lg
              text-slate-400
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            A glimpse into our completed projects,
            technical expertise, and specialized
            electrical maintenance services.
          </p>
        </motion.div>

        {/* =====================================================
            PROJECT GRID
        ===================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-7
          "
        >
          {portfolios.map((port, index) => (
            <motion.div
              key={port.id}
              variants={itemVariants}
              onClick={() => setSelectedPort(port)}
              className="
                group
                relative
                h-[380px]
                sm:h-[420px]
                rounded-[2rem]
                overflow-hidden
                cursor-pointer
                border
                border-white/10
                bg-slate-900
                shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                hover:border-blue-900/50
                hover:-translate-y-1
                transition-all
                duration-700
              "
            >

              {/* =================================================
                  IMAGE
              ================================================= */}

              <img
                src={port.image}
                alt={port.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-[1400ms]
                  ease-[cubic-bezier(0.25,1,0.5,1)]
                  group-hover:scale-110
                "
              />

              {/* =================================================
                  MUTED NAVY IMAGE TINT
              ================================================= */}

              <div
                className="
                  absolute
                  inset-0
                  bg-blue-950/20
                  mix-blend-color
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-700
                "
              />

              {/* =================================================
                  DARK OVERLAY
              ================================================= */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-slate-950
                  via-slate-950/50
                  to-slate-950/10
                "
              />

              {/* =================================================
                  NAVY HOVER SPOTLIGHT
              ================================================= */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-blue-950/50
                  via-transparent
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-700
                "
              />


              {/* =================================================
                  GLASS CATEGORY
                  Navy Glassmorphism
              ================================================= */}

              <div
                className="
                  absolute
                  top-6
                  right-6
                  px-4
                  py-2
                  rounded-full
                  bg-blue-950/55
                  backdrop-blur-xl
                  border
                  border-blue-800/40
                  text-slate-200/90
                  text-[10px]
                  font-black
                  tracking-widest
                  uppercase
                  shadow-[0_8px_30px_rgba(0,0,0,0.18)]
                  group-hover:bg-blue-900/65
                  group-hover:border-blue-700/50
                  transition-all
                  duration-500
                  z-20
                "
              >
                {port.category}
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  bottom-0
                  p-8
                  sm:p-9
                  z-10
                "
              >

                {/* Red Accent */}

                <div
                  className="
                    w-10
                    h-1
                    bg-red-500
                    mb-5
                    scale-x-0
                    origin-left
                    group-hover:scale-x-100
                    transition-transform
                    duration-700
                  "
                />

                {/* Title */}

                <h3
                  className="
                    text-2xl
                    sm:text-[1.65rem]
                    font-black
                    text-white
                    leading-tight
                    mb-5
                    max-w-xl
                  "
                >
                  {port.title}
                </h3>

                {/* =================================================
                    GLASS CTA
                ================================================= */}

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-5
                    py-2.5
                    rounded-full
                    bg-blue-950/55
                    backdrop-blur-xl
                    border
                    border-blue-800/40
                    text-slate-200
                    text-sm
                    font-bold
                    opacity-0
                    translate-y-4
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-500
                    shadow-[0_8px_25px_rgba(0,0,0,0.2)]
                  "
                >
                  View Project

                  <ArrowRight
                    size={16}
                    className="
                      group-hover:translate-x-1
                      transition-transform
                    "
                  />
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* =========================================================
          MODAL
      ========================================================= */}

      <AnimatePresence>
        {selectedPort && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[99999]
              flex
              items-center
              justify-center
              p-4
              sm:p-6
              bg-slate-950/85
              backdrop-blur-xl
            "
            onClick={() => setSelectedPort(null)}
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 25,
              }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 280,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full
                max-w-2xl
                max-h-[90vh]
                overflow-y-auto
                rounded-[2rem]
                bg-slate-900/95
                backdrop-blur-3xl
                border
                border-white/15
                shadow-[0_30px_100px_rgba(0,0,0,0.65)]
              "
            >

              <button
  onClick={() => setSelectedPort(null)}
  className="
    group
    absolute
    top-5
    right-5
    z-30
    w-11
    h-11
    rounded-full
    flex
    items-center
    justify-center

    bg-white/[0.08]
    backdrop-blur-2xl
    backdrop-saturate-150

    border
    border-white/20

    text-white/80

    shadow-[0_8px_30px_rgba(0,0,0,0.35)]

    transition-all
    duration-500
    ease-out

    hover:bg-red-500/25
    hover:border-red-400/50
    hover:text-white
    hover:shadow-[0_8px_30px_rgba(239,68,68,0.2)]
    hover:rotate-90
    hover:scale-105

    active:scale-95
  "
  aria-label="Close"
>
  {/* Subtle glass highlight */}
  <span
    className="
      absolute
      inset-[1px]
      rounded-full
      bg-gradient-to-br
      from-white/20
      via-transparent
      to-transparent
      opacity-70
      pointer-events-none
    "
  />

  <X
    size={19}
    strokeWidth={2}
    className="relative z-10"
  />
</button>

              {/* =================================================
                  MODAL IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  h-56
                  sm:h-72
                  overflow-hidden
                "
              >
                <img
                  src={selectedPort.image}
                  alt={selectedPort.title}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-900
                    via-slate-900/20
                    to-transparent
                  "
                />
              </div>

              {/* =================================================
                  MODAL CONTENT
              ================================================= */}

              <div className="p-8 sm:p-10">

                {/* Navy Category */}

                <div
                  className="
                    inline-flex
                    px-4
                    py-2
                    rounded-full
                    bg-blue-950/70
                    backdrop-blur-xl
                    border
                    border-blue-800/40
                    text-slate-200
                    text-xs
                    font-bold
                    tracking-widest
                    uppercase
                    mb-5
                  "
                >
                  {selectedPort.category}
                </div>

                {/* Red Accent */}

                <div
                  className="
                    w-12
                    h-1.5
                    bg-red-500
                    rounded-full
                    mb-5
                  "
                />

                {/* Title */}

                <h3
                  className="
                    text-3xl
                    sm:text-4xl
                    font-black
                    text-white
                    mb-5
                    tracking-tight
                  "
                >
                  {selectedPort.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    text-slate-300
                    text-base
                    sm:text-lg
                    leading-relaxed
                    mb-8
                  "
                >
                  {selectedPort.fullDesc}
                </p>

                <button
  onClick={() => setSelectedPort(null)}
  className="
    group
    relative
    inline-flex
    items-center
    gap-2

    px-6
    py-3

    rounded-full

    bg-white/[0.07]
    backdrop-blur-2xl
    backdrop-saturate-150

    border
    border-white/20

    text-white/90

    font-bold
    text-sm
    tracking-wide

    shadow-[0_8px_30px_rgba(0,0,0,0.3)]

    overflow-hidden

    transition-all
    duration-500
    ease-out

    hover:bg-red-500/20
    hover:border-red-400/50
    hover:text-white
    hover:-translate-y-1
    hover:shadow-[0_12px_35px_rgba(239,68,68,0.2)]

    active:translate-y-0
  "
>
  {/* Glass reflection */}
  <span
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-transparent
      via-white/10
      to-transparent

      -translate-x-full
      group-hover:translate-x-full

      transition-transform
      duration-700
      ease-out

      pointer-events-none
    "
  />

  {/* Top glass edge */}
  <span
    className="
      absolute
      top-0
      left-5
      right-5
      h-px
      bg-gradient-to-r
      from-transparent
      via-white/40
      to-transparent
      opacity-70
      pointer-events-none
    "
  />

  <span className="relative z-10">
    Close Details
  </span>
</button>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}