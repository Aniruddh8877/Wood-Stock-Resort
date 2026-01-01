"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function About() {
     const ref = useRef(null);
     const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["start end", "end start"],
     });

     const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
     const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

     return (
          <section id="about" className="py-24 bg-stone-50 overflow-hidden relative">
               <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                         initial={{ opacity: 0, x: -50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true, margin: "-100px" }}
                         transition={{ duration: 0.8 }}
                    >
                         <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">
                              About Us
                         </span>
                         <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">
                              A Sanctuary in the <br />
                              <span className="italic text-brand-gold">Misty Hills</span>
                         </h2>
                         <p className="text-stone-600 mb-6 leading-relaxed">
                              Woodstock Resorts is more than just a place to stay; it is an experience woven into the fabric of Coorg's lush landscape. Surrounded by coffee plantations and whispering trees, we offer a retreat where time slows down.
                         </p>
                         <p className="text-stone-600 mb-8 leading-relaxed">
                              Whether you seek the comfort of luxury amenities or the raw beauty of nature, Woodstock provides the perfect balance. Wake up to the song of birds and the aroma of fresh coffee.
                         </p>

                         <div className="grid grid-cols-2 gap-8">
                              <div>
                                   <h3 className="text-3xl font-serif text-brand-green mb-2">15+</h3>
                                   <p className="text-sm uppercase tracking-wide text-stone-500">Luxury Rooms</p>
                              </div>
                              <div>
                                   <h3 className="text-3xl font-serif text-brand-green mb-2">3500+</h3>
                                   <p className="text-sm uppercase tracking-wide text-stone-500">Happy Guests</p>
                              </div>
                         </div>
                    </motion.div>

                    {/* Image Content */}
                    <div ref={ref} className="relative h-[600px] w-full">
                         <motion.div
                              style={{ y, opacity }}
                              className="absolute inset-0 z-10"
                         >
                              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                                   <Image
                                        src="/woodstock_assets/imgi_6_Woodstock15.webp"
                                        alt="Woodstock Resort Exterior"
                                        fill
                                        className="object-cover"
                                   />
                              </div>
                         </motion.div>

                         {/* Decorative Elements */}
                         <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl z-0" />
                         <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl z-0" />
                    </div>
               </div>
          </section>
     );
}
