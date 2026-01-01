"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const amenities = [
     { name: "Swimming Pool", icon: "/woodstock_assets/imgi_105_swimming-pool.png" },
     { name: "Campfire", icon: "/woodstock_assets/imgi_108_campfire.png" },
     { name: "Restaurant", icon: "/woodstock_assets/imgi_114_utensils.png" },
     { name: "Play Area", icon: "/woodstock_assets/imgi_109_child.png" },
     { name: "Indoor Games", icon: "/woodstock_assets/imgi_107_table-tennis.png" },
     { name: "Free Wi-Fi", icon: "/woodstock_assets/imgi_113_wifi.png" },
];

export default function LittleLuxuries() {
     return (
          <section id="luxuries" className="py-24 bg-stone-50">
               <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                         <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-3 block">
                              Amenities
                         </span>
                         <h2 className="text-4xl md:text-5xl font-serif text-stone-900">
                              Little <span className="italic text-brand-gold">Luxuries</span>
                         </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                         {amenities.map((item, index) => (
                              <motion.div
                                   key={item.name}
                                   initial={{ opacity: 0, scale: 0.8 }}
                                   whileInView={{ opacity: 1, scale: 1 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: index * 0.1, duration: 0.5 }}
                                   className="flex flex-col items-center group cursor-pointer"
                              >
                                   <div className="w-20 h-20 mb-4 bg-white rounded-full shadow-md flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-300">
                                        <div className="w-10 h-10 relative">
                                             <Image
                                                  src={item.icon}
                                                  alt={item.name}
                                                  fill
                                                  className="object-contain group-hover:brightness-0 opacity-80"
                                             />
                                        </div>
                                   </div>
                                   <h3 className="text-stone-700 font-serif font-medium group-hover:text-brand-green transition-colors">
                                        {item.name}
                                   </h3>
                              </motion.div>
                         ))}
                    </div>
               </div>
          </section>
     );
}
