import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function Footer() {
     return (
          <footer id="footer" className="bg-stone-950 text-white/80 py-20 border-t border-white/10">
               <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-6">
                         <Link href="/" className="block">
                              <h2 className="text-5xl font-serif text-white tracking-widest">
                                   WOODSTOCK
                              </h2>
                              <span className="text-3xl font-sans font-light tracking-[0.3em] text-brand-gold block mt-1">
                                   RESORTS
                              </span>
                         </Link>
                         <p className="text-m font-light leading-relaxed max-w-xs text-stone-400">
                              A luxury destination where nature meets elegance. Experience the finest hospitality in the heart of Coorg.
                         </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                         <h3 className="text-white font-serif text-lg mb-6">Quick Links</h3>
                         <ul className="space-y-4 text-sm font-light">
                              <li><a href="#hero" className="hover:text-brand-gold transition-colors">Home</a></li>
                              <li><a href="#about" className="hover:text-brand-gold transition-colors">About Us</a></li>
                              <li><a href="#rooms" className="hover:text-brand-gold transition-colors">Accommodations</a></li>
                              <li><a href="#gallery" className="hover:text-brand-gold transition-colors">Gallery</a></li>
                              <li><a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a></li>
                         </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                         <h3 className="text-white font-serif text-lg mb-6">Contact Us</h3>
                         <ul className="space-y-4 text-sm font-light">
                              <li className="flex items-start gap-4">
                                   <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                                   <span>Madikeri, Coorg, Karnataka, India - 571201</span>
                              </li>
                              <li className="flex items-center gap-4">
                                   <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                                   <span>+91 720403 1722</span>&<span>+91 82722 98100</span>
                              </li>
                              <li className="flex items-center gap-4">
                                   <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                                   <span>sridhar@woodstockresorts.in</span>
                              </li>
                         </ul>
                    </div>

                    {/* Newsletter / Social */}
                    <div>
                         <h3 className="text-white font-serif text-lg mb-6">Follow Us</h3>
                         <div className="flex gap-4 mb-8">
                              <a href="https://www.instagram.com/woodstockresortscoorg/" target="_new" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-stone-900 transition-all duration-300">
                                   <Instagram size={18} />
                              </a>
                              <a href="https://www.linkedin.com/in/woodstock-resorts-coorg-2b11342a9/?originalSubdomain=in" target="_new" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-stone-900 transition-all duration-300">
                                   <Linkedin size={18} />
                              </a>
                              <a target="_new" href="https://www.google.com/maps/place/Woodstock+Resorts/@12.4307335,75.7506523,17z/data=!4m9!3m8!1s0x3ba5007bedf0d069:0xb164eac3c428e5d8!5m2!4m1!1i2!8m2!3d12.4307335!4d75.7532272!16s%2Fg%2F11b63rhqn8?entry=tts&g_ep=EgoyMDI1MDQzMC4xIPu8ASoASAFQAw%3D%3D&skid=4dd90fb1-6220-4540-a165-cc418caaab2d" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-stone-900 transition-all duration-300">
                                   <MapPin size={18} />
                              </a>
                         </div>

                         <p className="text-s text-stone-500 font-medium border-b border-stone-200 text-white">
                              © {new Date().getFullYear()} Woodstock Resorts. All rights reserved.
                         </p>
                    </div>
               </div>
          </footer>
     );
}
