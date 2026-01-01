"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
     { name: "Home", href: "#hero" },
     { name: "About", href: "#about" },
     { name: "Rooms & Suites", href: "#rooms" },
     { name: "Gallery", href: "#gallery" },
     { name: "Contact", href: "#footer" },
];

export default function Navbar() {
     const [isScrolled, setIsScrolled] = useState(false);
     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               setIsScrolled(window.scrollY > 50);
          };
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     return (
          <nav
               className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-stone-900/50 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl supports-[backdrop-filter]:bg-stone-900/20"
                    : "bg-transparent py-6 from-stone-900/80 to-transparent bg-gradient-to-b"
                    }`}
          >
               <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-serif font-bold text-white tracking-widest">
                         WOODSTOCK
                         <span className="block text-xs font-sans font-light tracking-[0.3em] text-brand-gold">
                              RESORTS
                         </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                         {navLinks.map((link) => (
                              <Link
                                   key={link.name}
                                   href={link.href}
                                   className="text-white/90 hover:text-brand-gold transition-colors text-sm uppercase tracking-wider font-light"
                              >
                                   {link.name}
                              </Link>
                         ))}
                         <a
                              href="#book"
                              className="px-6 py-2 bg-brand-gold text-stone-900 text-sm font-medium uppercase tracking-wider hover:bg-white transition-all duration-300"
                         >
                              Book Now
                         </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                         className="md:hidden text-white"
                         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                         {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
               </div>

               {/* Mobile Menu Overlay */}
               <AnimatePresence>
                    {isMobileMenuOpen && (
                         <motion.div
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              className="md:hidden absolute top-full left-0 right-0 bg-stone-900/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col space-y-4 shadow-2xl supports-[backdrop-filter]:bg-stone-900/80"
                         >
                              {navLinks.map((link) => (
                                   <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-white/80 hover:text-brand-gold text-center py-2 uppercase tracking-wider text-sm"
                                   >
                                        {link.name}
                                   </a>
                              ))}
                              <a
                                   href="#book"
                                   onClick={() => setIsMobileMenuOpen(false)}
                                   className="w-full text-center px-6 py-3 bg-brand-gold text-stone-900 uppercase font-bold tracking-wider"
                              >
                                   Book Now
                              </a>
                         </motion.div>
                    )}
               </AnimatePresence>
          </nav>
     );
}
