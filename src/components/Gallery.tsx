"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
     "/woodstock_assets/imgi_20_USK_8234_5_6.webp",
     "/woodstock_assets/imgi_26_Childrens_Play_Area_2b2837fc.webp",
     "/woodstock_assets/imgi_2_IMG_5976.png",
     "/woodstock_assets/imgi_33_IMG_9124.webp",
     "/woodstock_assets/imgi_9_USK_8234_5_6.webp",
     "/woodstock_assets/imgi_11_1_52444d89.webp",
];

export default function Gallery() {
     return (
          <section id="gallery" className="py-24 bg-stone-900 text-white overflow-hidden">
               <div className="container mx-auto px-6 mb-16 text-center">
                    <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3 block">
                         Gallery
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif">
                         Moments in <span className="italic text-brand-green">Paradise</span>
                    </h2>
               </div>

               {/* Marquee Effect */}
               <div className="flex gap-4 overflow-hidden relative">
                    <motion.div
                         className="flex gap-4 min-w-full items-center"
                         animate={{ x: ["0%", "-50%"] }}
                         transition={{
                              duration: 40,
                              repeat: Infinity,
                              ease: "linear",
                         }}
                    >
                         {[...galleryImages, ...galleryImages].map((src, index) => (
                              <div
                                   key={index}
                                   className="relative w-80 h-60 md:w-96 md:h-72 flex-shrink-0 rounded-lg overflow-hidden group"
                              >
                                   <Image
                                        src={src}
                                        alt={`Gallery Image ${index}`}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                   />
                              </div>
                         ))}
                    </motion.div>
               </div>

               {/* Button center */}
               <div className="mt-16 text-center">
                    <a href="#gallery" className="inline-block px-8 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-stone-900 transition-all duration-300 uppercase tracking-widest text-xs font-bold">
                         View All Photos
                    </a>
               </div>
          </section>
     );
}
