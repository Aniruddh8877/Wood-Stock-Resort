"use client";

import { motion } from "framer-motion";

export default function Hero() {
     return (
          <section id="hero" className="relative h-screen w-full overflow-hidden">
               {/* Video Background */}
               <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
               >
                    <source src="/woodstock_assets/vn20250523_082622_1.mp4" type="video/mp4" />
               </video>

               {/* Overlay */}
               <div className="absolute inset-0 bg-black/40 z-10" />

               {/* Content */}
               <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 1, delay: 0.2 }}
                         className="mb-4"
                    >
                         <span className="text-brand-gold uppercase tracking-[0.3em] text-sm md:text-base font-semibold">
                              Welcome to Coorg
                         </span>
                    </motion.div>

                    <motion.h1
                         initial={{ opacity: 0, scale: 0.95 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 1, delay: 0.5, type: "spring" }}
                         className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
                    >
                         Experience Nature's <br />
                         <span className="italic font-light">Elegance</span>
                    </motion.h1>

                    <motion.p
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ duration: 1, delay: 0.8 }}
                         className="text-white/90 max-w-lg text-lg md:text-xl font-light mb-10"
                    >
                         A luxury escape nestled in the heart of the misty hills.
                    </motion.p>

                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 1.1 }}
                    >
                         <a
                              href="#rooms"
                              className="px-8 py-3 bg-white/10 hover:bg-brand-gold hover:text-stone-900 border border-white text-white transition-all duration-300 backdrop-blur-sm uppercase tracking-widest text-sm font-medium"
                         >
                              Explore Rooms
                         </a>
                    </motion.div>
               </div>

               {/* Scroll Down Indicator */}
               <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
               >
                    <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
                         <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-gold animate-parallax" />
                    </div>
               </motion.div>
          </section>
     );
}
