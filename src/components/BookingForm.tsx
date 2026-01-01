"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, ChevronDown } from "lucide-react";

// Workaround for Framer Motion v12 / React 19 type mismatch causing "contains" on "never" error
const MotionDiv = motion.div as any;

export default function BookingForm() {
     const [adults, setAdults] = useState(2);
     const [children, setChildren] = useState(0);
     const [checkIn, setCheckIn] = useState("");
     const [checkOut, setCheckOut] = useState("");
     const [openGuests, setOpenGuests] = useState(false);

     const guestRef = useRef(null);

     // Close dropdown on outside click
     // useEffect(() => {
     //      function handleClickOutside(e: any) {
     //           if (guestRef.current && !guestRef.current.contains(e.target)) {
     //                setOpenGuests(false);
     //           }
     //      }
     //      document.addEventListener("mousedown", handleClickOutside);
     //      return () => document.removeEventListener("mousedown", handleClickOutside);
     // }, []);

     return (
          <div className="relative z-30 -mt-24 px-4 mb-24">
               <div className="container mx-auto">
                    <MotionDiv
                         initial={{ opacity: 0, y: 50 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 1.5 }}
                         className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-6xl mx-auto"
                    >
                         <form className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
                              {/* Check In */}
                              <div>
                                   <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                                        Check In
                                   </label>
                                   <div className="flex items-center w-full border-b border-stone-300 pb-2">
                                        <Calendar className="w-4 h-4 text-brand-gold mr-2" />
                                        <input
                                             type="date"
                                             value={checkIn}
                                             onChange={(e) => setCheckIn(e.target.value)}
                                             className="w-full bg-transparent focus:outline-none font-serif text-stone-900"
                                        />
                                   </div>
                              </div>

                              {/* Check Out */}
                              <div>
                                   <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                                        Check Out
                                   </label>
                                   <div className="flex items-center w-full border-b border-stone-300 pb-2">
                                        <Calendar className="w-4 h-4 text-brand-gold mr-2" />
                                        <input
                                             type="date"
                                             value={checkOut}
                                             onChange={(e) => setCheckOut(e.target.value)}
                                             className="w-full bg-transparent focus:outline-none font-serif text-stone-900"
                                        />
                                   </div>
                              </div>

                              {/* Guests */}
                              <div ref={guestRef} className="relative w-full">
                                   <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                                        Guests
                                   </label>

                                   <div
                                        onClick={() => setOpenGuests((v) => !v)}
                                        className={`flex items-center w-full border-b pb-2 cursor-pointer transition-colors
                  ${openGuests ? "border-brand-gold" : "border-stone-300"}`}
                                   >
                                        <Users className="w-4 h-4 text-brand-gold mr-2" />
                                        <div className="flex-1 font-serif text-stone-900">
                                             {adults} Adults, {children} Child
                                        </div>
                                        <ChevronDown
                                             className={`w-4 h-4 transition-transform ${openGuests ? "rotate-180" : ""
                                                  }`}
                                        />
                                   </div>

                                   {openGuests && (
                                        <div className="absolute top-full left-0 w-full bg-white shadow-xl rounded-lg p-4 mt-2 z-50">
                                             {/* Adults */}
                                             <div className="flex justify-between items-center mb-3">
                                                  <span className="text-sm">Adults</span>
                                                  <div className="flex gap-3 items-center">
                                                       <button
                                                            type="button"
                                                            onClick={() =>
                                                                 setAdults((p) => Math.max(1, p - 1))
                                                            }
                                                            className="w-7 h-7 rounded-full bg-stone-100"
                                                       >
                                                            −
                                                       </button>
                                                       <span>{adults}</span>
                                                       <button
                                                            type="button"
                                                            onClick={() =>
                                                                 setAdults((p) => Math.min(10, p + 1))
                                                            }
                                                            className="w-7 h-7 rounded-full bg-stone-100"
                                                       >
                                                            +
                                                       </button>
                                                  </div>
                                             </div>

                                             {/* Children */}
                                             <div className="flex justify-between items-center">
                                                  <span className="text-sm">Children</span>
                                                  <div className="flex gap-3 items-center">
                                                       <button
                                                            type="button"
                                                            onClick={() =>
                                                                 setChildren((p) => Math.max(0, p - 1))
                                                            }
                                                            className="w-7 h-7 rounded-full bg-stone-100"
                                                       >
                                                            −
                                                       </button>
                                                       <span>{children}</span>
                                                       <button
                                                            type="button"
                                                            onClick={() =>
                                                                 setChildren((p) => Math.min(10, p + 1))
                                                            }
                                                            className="w-7 h-7 rounded-full bg-stone-100"
                                                       >
                                                            +
                                                       </button>
                                                  </div>
                                             </div>
                                        </div>
                                   )}
                              </div>

                              {/* Promo Code */}
                              <div>
                                   <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
                                        Promo Code
                                   </label>
                                   <div className="flex items-center w-full border-b border-stone-300 pb-2">
                                        <input
                                             type="text"
                                             placeholder="Optional"
                                             className="w-full bg-transparent focus:outline-none font-serif placeholder:text-stone-300"
                                        />
                                   </div>
                              </div>

                              {/* Submit */}
                              <button
                                   type="submit"
                                   className="h-14 bg-brand-green text-white font-bold uppercase tracking-widest hover:bg-stone-900 transition-colors shadow-lg"
                              >
                                   Book Now
                              </button>
                         </form>
                    </MotionDiv>
               </div>
          </div>
     );
}
