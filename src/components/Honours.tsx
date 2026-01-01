"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const awards = [
     "/woodstock_assets/imgi_39_award2-821x1024_9a47cf90.webp",
     "/woodstock_assets/imgi_40_award3-821x1024_2a20f1ac.webp",
     "/woodstock_assets/imgi_41_award1-821x1024_4f2734bc.webp",
     "/woodstock_assets/imgi_42_award4-821x1024_f45ddde2.webp",
];

export default function Honours() {
     return (
          <section id="honours" className="py-24 bg-white">
               <div className="container mx-auto px-6 text-center">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         className="mb-12"
                    >
                         <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-3 block">
                              Recognition
                         </span>
                         <h2 className="text-4xl md:text-5xl font-serif text-stone-900">
                              Honours That Reflect <br /> <span className="italic text-brand-gold">Your Trust</span>
                         </h2>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-12 items-center">
                         {awards.map((src, index) => (
                              <motion.div
                                   key={index}
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: index * 0.2, duration: 0.6 }}
                                   className="relative w-32 h-44 md:w-40 md:h-56 filter grayscale hover:grayscale-0 transition-all duration-500"
                              >
                                   <Image
                                        src={src}
                                        alt="Award"
                                        fill
                                        className="object-contain"
                                   />
                              </motion.div>
                         ))}
                    </div>
               </div>
          </section>
     );
}
