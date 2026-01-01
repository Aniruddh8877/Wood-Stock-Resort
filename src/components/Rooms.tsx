"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const rooms = [
     {
          id: 1,
          title: "Villas With Balcony",
          price: "Starting from ₹5,500",
          image: "/woodstock_assets/imgi_19_Bedroom_with_heart_48f27a9b.webp",
          description: "Spacious villa with a private balcony offering breathtaking views of the plantations.",
     },
     {
          id: 2,
          title: "Luxury Cottage",
          price: "Starting from ₹7,000",
          image: "/woodstock_assets/imgi_18_Woodstock23_5b90941f.webp",
          description: "A cozy cottage designed for privacy and comfort, perfect for couples.",
     },
     {
          id: 3,
          title: "Family Suite",
          price: "Starting from ₹9,500",
          image: "/woodstock_assets/imgi_22_d68731a8a774b0ff4795a725c04cecb3_367c1600.webp",
          description: "Large suite with multiple rooms, ideal for families seeking a home away from home.",
     },
];

export default function Rooms() {
     return (
          <section id="rooms" className="py-24 bg-stone-100">
               <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                         <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-3 block">
                              Accommodation
                         </span>
                         <h2 className="text-4xl md:text-5xl font-serif text-stone-900">
                              Our <span className="italic text-brand-gold">Rooms & Suites</span>
                         </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                         {rooms.map((room, index) => (
                              <motion.div
                                   key={room.id}
                                   initial={{ opacity: 0, y: 50 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true, margin: "-50px" }}
                                   transition={{ duration: 0.6, delay: index * 0.2 }}
                                   className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
                              >
                                   <div className="relative h-64 overflow-hidden">
                                        <Image
                                             src={room.image}
                                             alt={room.title}
                                             fill
                                             className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                                        <div className="absolute bottom-4 left-4 text-white">
                                             <p className="text-sm font-medium bg-brand-gold/90 px-3 py-1 rounded-full inline-block mb-2 backdrop-blur-sm text-stone-900">
                                                  {room.price}
                                             </p>
                                        </div>
                                   </div>

                                   <div className="p-8">
                                        <h3 className="text-2xl font-serif text-stone-900 mb-3 group-hover:text-brand-green transition-colors">
                                             {room.title}
                                        </h3>
                                        <p className="text-stone-600 mb-6 text-sm leading-relaxed">
                                             {room.description}
                                        </p>
                                        <button className="w-full py-3 border border-stone-200 text-stone-600 uppercase text-xs font-bold tracking-widest hover:bg-brand-green hover:text-white hover:border-brand-green transition-all duration-300 rounded">
                                             View Details
                                        </button>
                                   </div>
                              </motion.div>
                         ))}
                    </div>
               </div>
          </section>
     );
}
