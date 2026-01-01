"use client";

import { motion } from "framer-motion";

export default function Whispers() {
     return (
          <section id="whispers" className="py-24 relative overflow-hidden bg-stone-900 text-white">
               <div
                    className="absolute inset-0 bg-fixed bg-cover bg-center opacity-30 z-0"
                    style={{ backgroundImage: "url('/woodstock_assets/imgi_29_IMG-20250423-WA0004_8f1a3438.webp')" }}
               />

               <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.8 }}
                    >
                         <span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                              The Story
                         </span>
                         <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-snug">
                              Whispers of the Hills, <br />
                              <span className="italic text-brand-green">Heartbeats of Coorg</span>
                         </h2>

                         <div className="max-w-3xl mx-auto space-y-6 text-lg font-light text-white/80 leading-relaxed">
                              <p>
                                   Every morning here begins with a symphony of birds and the gentle caress of mist. The hills don't just surround you; they speak to you in the language of ancient trees and flowing winds.
                              </p>
                              <p>
                                   Woodstock is built on the philosophy of harmony—blending seamless luxury with the rugged beauty of the Western Ghats. Here, you don't just observe nature; you become part of its heartbeat.
                              </p>
                         </div>

                         <div className="mt-12">
                              <div className="w-24 h-[1px] bg-brand-gold mx-auto" />
                         </div>
                    </motion.div>
               </div>
          </section>
     );
}
