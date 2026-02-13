"use client";

import React from 'react';
import Link from 'next/link';

export default function Revelation() {
  return (
    <div className="bg-background-dark text-gray-100 font-sans min-h-screen overflow-x-hidden selection:bg-primary selection:text-white relative">

      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-[#1a2e25] to-background-dark mix-blend-overlay"></div>
         {/* Green Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[100px] animate-pulse-slow"></div>
         {/* Grain Texture */}
         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-8">

         {/* Top Navigation / Progress */}
         <div className="absolute top-8 left-8 flex items-center gap-3 text-white/40 hover:text-white transition-colors cursor-pointer group">
             <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors">
                 <span className="material-icons text-sm">menu</span>
             </div>
             <span className="text-xs uppercase tracking-widest font-bold">Chapter 04</span>
         </div>

         {/* Header Section */}
         <div className="text-center max-w-3xl mx-auto mb-16 relative">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 <span className="text-xs uppercase tracking-wider text-green-500 font-bold">Safe Harbor</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6">
                 Searching for red flags,<br/>
                 but only finding a <span className="text-green-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">garden of green.</span>
             </h1>
             <p className="text-lg text-white/60 font-light max-w-xl mx-auto">
                 In a world where I was taught to be cautious, you taught me to be certain. Every hesitation I had was met with your gentle reassurance.
             </p>
         </div>

         {/* Interactive Green Flags Garden */}
         <div className="relative w-full max-w-5xl h-[500px] mb-24 hidden md:block">
             {/* Decorative circle behind */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 opacity-50"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 opacity-30"></div>

             {/* Flag 1: Patience */}
             <div className="absolute top-[10%] left-[20%] group z-20 animate-float">
                 <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30 backdrop-blur-md flex items-center justify-center cursor-pointer shadow-green-500/20 shadow-lg group-hover:scale-110 transition-transform">
                     <span className="material-icons text-green-500 text-2xl">hourglass_bottom</span>
                 </div>
                 <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 rounded-xl bg-neutral-dark/90 border border-green-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-y-4 group-hover:translate-y-0">
                     <h3 className="text-green-500 font-bold text-sm uppercase mb-1">Unwavering Patience</h3>
                     <p className="text-xs text-white/80 leading-relaxed">Even after your 12-hour shifts, you listen to my frantic study ramblings without a hint of exhaustion.</p>
                 </div>
             </div>

             {/* Flag 2: Empathy */}
             <div className="absolute top-[30%] right-[15%] group z-20 animate-float" style={{ animationDelay: '1s' }}>
                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30 backdrop-blur-md flex items-center justify-center cursor-pointer shadow-green-500/20 shadow-lg group-hover:scale-110 transition-transform">
                     <span className="material-icons text-green-500 text-3xl">favorite</span>
                 </div>
                 <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 rounded-xl bg-neutral-dark/90 border border-green-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-y-4 group-hover:translate-y-0">
                     <h3 className="text-green-500 font-bold text-sm uppercase mb-1">Pure Empathy</h3>
                     <p className="text-xs text-white/80 leading-relaxed">The way you held that scared patient&apos;s hand... I knew then that your heart was rare.</p>
                 </div>
             </div>

             {/* Flag 3: Support */}
             <div className="absolute bottom-[20%] left-[30%] group z-20 animate-float" style={{ animationDelay: '2s' }}>
                 <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30 backdrop-blur-md flex items-center justify-center cursor-pointer shadow-green-500/20 shadow-lg group-hover:scale-110 transition-transform">
                     <span className="material-icons text-green-500 text-xl">school</span>
                 </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 rounded-xl bg-neutral-dark/90 border border-green-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-y-4 group-hover:translate-y-0">
                     <h3 className="text-green-500 font-bold text-sm uppercase mb-1">Academic Anchor</h3>
                     <p className="text-xs text-white/80 leading-relaxed">You never complain about the missed dates during exam week. You just bring coffee.</p>
                 </div>
             </div>

             {/* Flag 4: Kindness */}
             <div className="absolute bottom-[40%] right-[35%] group z-20 animate-float" style={{ animationDelay: '3s' }}>
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30 backdrop-blur-md flex items-center justify-center cursor-pointer shadow-green-500/20 shadow-lg group-hover:scale-110 transition-transform">
                     <span className="material-icons text-green-500 text-lg">spa</span>
                 </div>
                 <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 rounded-xl bg-neutral-dark/90 border border-green-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-y-4 group-hover:translate-y-0">
                     <h3 className="text-green-500 font-bold text-sm uppercase mb-1">Gentle Spirit</h3>
                     <p className="text-xs text-white/80 leading-relaxed">Kindness isn&apos;t something you do, it&apos;s who you are.</p>
                 </div>
             </div>
         </div>

         {/* Mobile Alternative List */}
         <div className="md:hidden w-full space-y-4 mb-16">
             <div className="bg-neutral-dark/50 p-4 rounded-xl flex items-center gap-4 border-l-4 border-l-green-500">
                 <div className="bg-green-500/20 p-2 rounded-full"><span className="material-icons text-green-500 text-sm">hourglass_bottom</span></div>
                 <div>
                     <h3 className="text-green-500 font-bold text-sm uppercase">Unwavering Patience</h3>
                     <p className="text-xs text-white/70">Listening to my ramblings after your 12hr shifts.</p>
                 </div>
             </div>
             <div className="bg-neutral-dark/50 p-4 rounded-xl flex items-center gap-4 border-l-4 border-l-green-500">
                 <div className="bg-green-500/20 p-2 rounded-full"><span className="material-icons text-green-500 text-sm">favorite</span></div>
                 <div>
                     <h3 className="text-green-500 font-bold text-sm uppercase">Pure Empathy</h3>
                     <p className="text-xs text-white/70">The way you care for scared patients.</p>
                 </div>
             </div>
             <div className="bg-neutral-dark/50 p-4 rounded-xl flex items-center gap-4 border-l-4 border-l-green-500">
                 <div className="bg-green-500/20 p-2 rounded-full"><span className="material-icons text-green-500 text-sm">school</span></div>
                 <div>
                     <h3 className="text-green-500 font-bold text-sm uppercase">Academic Anchor</h3>
                     <p className="text-xs text-white/70">Supporting me through every exam week.</p>
                 </div>
             </div>
         </div>

         {/* The Prayer / Realization Section */}
         <div className="w-full max-w-2xl relative">
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary rounded-full blur-[80px] opacity-20 animate-pulse"></div>
             <div className="bg-neutral-dark/80 backdrop-blur-md rounded-xl md:rounded-[3rem] p-8 md:p-12 border border-primary/20 relative overflow-hidden">
                 {/* Decorative quote mark */}
                 <span className="absolute top-8 left-8 text-6xl text-primary/10 font-serif leading-none">&quot;</span>
                 <div className="relative z-10 flex flex-col gap-6">
                     <div className="flex items-center gap-3 mb-2">
                         <span className="material-icons text-primary text-xl">auto_awesome</span>
                         <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">The Prayer</h2>
                     </div>
                     <p className="text-lg text-white/90 leading-relaxed font-light">
                         I remember kneeling by my bedside, exhausted from rounds, feeling the weight of the future. I asked for a sign. Not a lightning bolt, but a quiet certainty. I asked for someone who understands the silence after a long shift, who sees the person behind the scrubs.
                     </p>
                     <p className="text-lg text-white/90 leading-relaxed font-light">
                         And then, I thought of you. I realized I wasn&apos;t asking for someone *like* you. I was describing you.
                     </p>
                     <div className="mt-4 pt-6 border-t border-white/10 flex items-center justify-between">
                         <span className="text-sm text-primary font-medium tracking-widest uppercase">The Revelation</span>
                         <span className="material-icons text-primary animate-pulse">favorite</span>
                     </div>
                 </div>
                 {/* Background texture for card */}
                 <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
                     <span className="material-icons text-9xl">church</span>
                 </div>
             </div>
         </div>

         {/* Footer Navigation */}
         <div className="mt-20 flex items-center justify-between w-full max-w-4xl px-4">
             <Link href="/timeline" className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors">
                 <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-all">
                     <span className="material-icons text-sm">arrow_back</span>
                 </div>
                 <span className="text-sm font-medium tracking-wide hidden md:block">Chapter 03: The First Shift</span>
             </Link>
             <Link href="/valentine" className="group flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-primary hover:bg-red-600 text-white transition-all shadow-[0_0_20px_rgba(234,42,51,0.4)] hover:shadow-[0_0_30px_rgba(234,42,51,0.6)]">
                 <span className="text-sm font-bold tracking-wide">The Promise</span>
                 <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                     <span className="material-icons text-sm">arrow_forward</span>
                 </div>
             </Link>
         </div>

      </main>

      {/* Footer attribution/subtle text */}
      <div className="fixed bottom-4 w-full text-center pointer-events-none">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">Based on a true story</p>
      </div>

    </div>
  );
}
