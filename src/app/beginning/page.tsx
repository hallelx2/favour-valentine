"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, ArrowLeft, MessageCircle, MapPin, Users } from "lucide-react";
import Link from "next/link";

const P = "/Photos-3-001";

export default function Beginning() {
   return (
      <div className="bg-background-dark text-gray-100 font-sans min-h-screen overflow-x-hidden selection:bg-primary selection:text-white relative">
         {/* Ambient */}
         <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/8 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/6 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
         </div>

         {/* Navigation */}
         <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-5 px-4">
            <div className="bg-neutral-dark/60 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-xl flex items-center gap-1">
               <Link href="/" className="px-4 py-2 rounded-full text-xs font-medium text-gray-400 hover:text-primary transition-colors">The Meeting</Link>
               <div className="px-4 py-2 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">Getting Closer</div>
               <div className="mx-1 w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full shadow-lg shadow-primary/30">
                  <Heart className="w-4 h-4 animate-pulse fill-current" />
               </div>
               <Link href="/timeline" className="px-4 py-2 rounded-full text-xs font-medium text-gray-400 hover:text-primary transition-colors">The Yes</Link>
               <Link href="/revelation" className="px-4 py-2 rounded-full text-xs font-medium text-gray-400 hover:text-primary transition-colors hidden md:block">Growth</Link>
               <Link href="/valentine" className="px-4 py-2 rounded-full text-xs font-medium text-gray-400 hover:text-primary transition-colors hidden md:block">Forever</Link>
            </div>
         </nav>

         <main className="relative z-10 min-h-screen flex flex-col items-center pt-28 pb-16 px-4 md:px-8">
            {/* Header */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="text-center max-w-3xl mx-auto mb-16"
            >
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs uppercase tracking-wider text-primary font-bold">Chapter Two — September to October 2025</span>
               </div>
               <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 font-[family-name:var(--font-raleway)]">
                  Getting <span className="text-primary">Closer</span>
               </h1>
               <p className="text-lg text-gray-400 font-light max-w-xl mx-auto">
                  From chance encounters in the hallways to the first time we sat down together.
               </p>
            </motion.div>

            {/* Story sections */}
            <div className="w-full max-w-5xl mx-auto space-y-24">

               {/* SECTION 1: Bumping into each other */}
               <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
               >
                  <div className="w-full md:w-1/2 grid grid-cols-2 gap-3">
                     <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shadow-primary/10 border border-white/10"
                     >
                        <img src={`${P}/IMG_20251111_021057.jpg`} alt="In the hallways" className="w-full h-full object-cover" loading="lazy" />
                     </motion.div>
                     <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shadow-primary/10 border border-white/10 mt-8"
                     >
                        <img src={`${P}/IMG_20251111_021059.jpg`} alt="Bumping into each other" className="w-full h-full object-cover" loading="lazy" />
                     </motion.div>
                  </div>

                  <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
                     <div className="flex items-center justify-center md:justify-start gap-2 text-primary/70 text-xs uppercase tracking-wider font-bold">
                        <MessageCircle className="w-4 h-4" />
                        September 2025
                     </div>
                     <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-raleway)]">Everywhere I Turned</h2>
                     <p className="text-gray-300 font-light leading-relaxed font-[family-name:var(--font-poppins)]">
                        After that first meeting, we kept bumping into each other — in the <span className="text-primary font-medium">hallways</span>, on the <span className="text-primary font-medium">staircases</span>, in the <span className="text-primary font-medium">wards</span>. Every time I saw her, my heart did the same thing it did on day one.
                     </p>
                     <p className="text-gray-300 font-light leading-relaxed font-[family-name:var(--font-poppins)]">
                        A month down the line, I finally gathered the courage to get her contact. And when we started talking... those conversations quickly became the <span className="text-white italic">highlight of my entire day</span>.
                     </p>
                  </div>
               </motion.div>

               {/* SECTION 1.5: Friends Interrogation */}
               <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12"
               >
                  <div className="w-full md:w-1/2">
                     <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-primary/10 border border-white/10"
                     >
                        <img src={`${P}/IMG_20251111_021057.jpg`} alt="With her friends" className="w-full h-full object-cover" loading="lazy" />
                     </motion.div>
                  </div>

                  <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
                     <div className="flex items-center justify-center md:justify-start gap-2 text-pink-400/70 text-xs uppercase tracking-wider font-bold">
                        <Users className="w-4 h-4" />
                        November 10, 2025
                     </div>
                     <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-raleway)]">The <span className="text-pink-400">Interrogation</span></h2>
                     <p className="text-gray-300 font-light leading-relaxed font-[family-name:var(--font-poppins)]">
                        Her friends called me over — they wanted to know my intentions. <span className="text-white italic">&ldquo;What are your plans for our friend?&rdquo;</span>
                     </p>
                     <p className="text-gray-300 font-light leading-relaxed font-[family-name:var(--font-poppins)]">
                        I answered like a pro — professing my love right there in front of all of them. No hesitation, no fear. There I was, being <span className="text-primary font-medium">interrogated</span> and smiling through it all, because every word I said was true.
                     </p>
                  </div>
               </motion.div>

               {/* SECTION 2: First Outing */}
               <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12"
               >
                  <div className="w-full md:w-1/2">
                     <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-primary/10 border border-white/10"
                     >
                        <img src={`${P}/IMG_20251111_021100.jpg`} alt="Our first outing" className="w-full h-full object-cover" loading="lazy" />
                     </motion.div>
                  </div>

                  <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
                     <div className="flex items-center justify-center md:justify-start gap-2 text-primary/70 text-xs uppercase tracking-wider font-bold">
                        <MapPin className="w-4 h-4" />
                        October 9, 2025
                     </div>
                     <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-raleway)]">Our First <span className="text-primary">Outing</span></h2>
                     <p className="text-gray-300 font-light leading-relaxed">
                        I asked her to lunch, and thank God she said yes. Our very first time going out together — just the two of us.
                     </p>
                     <p className="text-gray-300 font-light leading-relaxed">
                        We talked for hours. About life, about medicine, about everything and nothing. I remember looking across the table and thinking: <span className="text-white italic">&ldquo;I could do this forever.&rdquo;</span>
                     </p>
                  </div>
               </motion.div>

               {/* Extra photos */}
               <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-3"
               >
                  {[
                     `${P}/IMG_20251113_184653.jpg`,
                     `${P}/IMG_20251125_125625.jpg`,
                     `${P}/Screenshot_2025-12-10-16-24-53-651_com.whatsapp.jpg`,
                  ].map((src, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-primary/20 transition-shadow"
                     >
                        <img src={src} alt={`Memory ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                     </motion.div>
                  ))}
               </motion.div>
            </div>

            {/* Navigation */}
            <div className="mt-20 flex items-center justify-between w-full max-w-4xl px-4">
               <Link href="/" className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-all">
                     <ArrowLeft className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium hidden md:block">The First Sight</span>
               </Link>
               <Link href="/timeline" className="group flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-primary hover:bg-red-600 text-white transition-all shadow-[0_0_20px_rgba(234,42,51,0.4)]">
                  <span className="text-sm font-bold">The Yes</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                     <ArrowRight className="w-4 h-4" />
                  </div>
               </Link>
            </div>

            {/* Page indicator */}
            <div className="mt-8 flex items-center gap-3">
               <div className="w-3 h-1 rounded-full bg-white/20" />
               <div className="w-8 h-1 rounded-full bg-primary" />
               <div className="w-3 h-1 rounded-full bg-white/20" />
               <div className="w-3 h-1 rounded-full bg-white/20" />
               <div className="w-3 h-1 rounded-full bg-white/20" />
            </div>
         </main>
      </div>
   );
}
