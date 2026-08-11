"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation"; // TAMBAHAN IMPORT ROUTER

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Inisialisasi router Next.js
  const pathname = usePathname();
  const router = useRouter();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    // Don't hide the navbar while the mobile menu is open
    if (mobileOpen) return;
    if (latest > previous && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
  ];

  // LOGIKA SCROLL YANG SUDAH DIOPTIMASI
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    setMobileOpen(false); // Tutup menu mobile terlebih dahulu

    // Jika kita tidak berada di halaman beranda (Home), arahkan dulu ke "/"
    if (pathname !== "/") {
      router.push(`/#${targetId}`);
    } else {
      // Jika sudah di Home, beri sedikit delay (150ms) agar menu mulai tertutup
      // sebelum layar digulir, membuat transisinya sangat mulus di layar HP
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      }, 150);
    }
  };

  return (
    <motion.nav 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/40 backdrop-blur-md border-b border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden"
    >
      {/* Garis Kilap Kaca Tipis di Bagian Paling Atas Navbar */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        
        {/* LOGO BNA DENGAN EFEK SPOTLIGHT */}
        <a href="/" className="block cursor-pointer py-1 relative">
          <div className="absolute inset-0 bg-white blur-[20px] rounded-full scale-125 z-0 pointer-events-none"></div>
          <img 
            src="/logo-bna.png" 
            alt="Logo Berkat Nusa Abadi" 
            className="h-10 md:h-12 w-auto object-contain mix-blend-multiply relative z-10" 
          />
        </a>
        
        {/* MENU NAVIGASI DESKTOP — hidden on mobile/tablet, shown from md breakpoint up */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`/#${item.id}`} 
              onClick={(e) => handleSmoothScroll(e, item.id)} 
              className="relative text-sm font-semibold text-slate-300 hover:text-white transition-colors py-2 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        
        {/* RIGHT SIDE: Contact button (desktop) + Hamburger (mobile) */}
        <div className="flex items-center gap-3">

          {/* Tombol Contact Us — hidden on small mobile, shown from sm breakpoint up */}
          <a 
            href="https://wa.me/6285921774448" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex relative items-center px-6 py-2.5 rounded-full font-black text-sm text-white transition-all duration-500 ease-out hover:scale-105 group overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-red-600/40 hover:border-red-500/50 hover:shadow-[0_12px_40px_rgba(239,68,68,0.3)]"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>
            <span className="tracking-wide">Contact Us</span>
          </a>

          {/* Hamburger Toggle — visible only below md breakpoint */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              md:hidden
              relative
              w-11 h-11
              flex items-center justify-center
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              text-white
              transition-all duration-300
              hover:bg-white/15
              active:scale-95
            "
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

        </div>

      </div>

      {/* =========================================================
         MOBILE MENU PANEL — slides down below navbar on mobile/tablet
      ========================================================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden relative z-10 overflow-hidden border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-1 bg-slate-950/60 backdrop-blur-xl">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className="
                    text-base font-semibold text-slate-300
                    py-3.5 px-2
                    rounded-xl
                    hover:text-white
                    hover:bg-white/5
                    active:bg-white/10
                    transition-all duration-300
                    border-b border-white/5
                    last:border-b-0
                  "
                >
                  {item.name}
                </motion.a>
              ))}

              {/* Contact Us inside mobile menu — full-width, always reachable */}
              <motion.a
                href="https://wa.me/6285921774448"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.06, duration: 0.3 }}
                className="
                  mt-4
                  inline-flex items-center justify-center
                  px-6 py-3.5
                  rounded-full
                  font-black text-sm text-white
                  bg-gradient-to-r from-red-500 to-rose-600
                  shadow-[0_8px_25px_rgba(239,68,68,0.3)]
                  active:scale-95
                  transition-all duration-300
                "
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}