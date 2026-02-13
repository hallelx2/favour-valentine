"use client";

import React from 'react';
import Link from 'next/link';

export default function Beginning() {
  return (
    <div className="bg-background-dark text-gray-100 font-sans min-h-screen overflow-hidden selection:bg-primary selection:text-white relative flex flex-col items-center justify-center">
      {/* Background with grain/noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 h-full">

        {/* Left Side: Visual Hero */}
        <div className="w-full lg:w-1/2 relative group perspective-1000">
          {/* Decorative Elements */}
          <div className="absolute -top-12 -left-12 w-32 h-32 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl z-0"></div>
          <div className="absolute -bottom-12 -right-12 w-32 h-32 border-b-2 border-r-2 border-primary/30 rounded-br-3xl z-0"></div>

          {/* Image Container with Tilt Effect */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 transform transition-transform duration-700 hover:scale-[1.02] hover:rotate-1">
             <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent z-10"></div>
             <img
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrWQnzxC4H3jP8Q7Keos7BTTWtDnfnqJXM-N-a6iyOz8fUab4gf9H_ZMoYjtRJsL4mgEHKVEarxTHE9QmqbUoLhCNVNP5m_YA9bft6TYeNWDw_BZ-CexeEAs6w0Hp4VVDFnqL_IKownCRj1wHcoR2hDe6d_dGLmlWO1OmewkiDMl0W6XSqWP45sAKSlRq2kzUSq9YFjCaUWwC6qWwfDjzP9cHqnzxv6cOgip-Q01Trsn1x-qHOpZUJp3GyqIQvxXMNOedTcAR7ot3q"
               alt="Couple embracing with a blurred romantic background"
               className="w-full h-[60vh] object-cover"
             />

             {/* Floating Badge */}
             <div className="absolute bottom-8 right-8 z-20 bg-background-light/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
               <span className="material-icons text-primary text-sm">medical_services</span>
               <span className="text-xs font-bold uppercase tracking-wider text-white">Est. 2021</span>
             </div>
          </div>
        </div>

        {/* Right Side: Typography & Story */}
        <div className="w-full lg:w-1/2 space-y-10 text-center lg:text-left">

          {/* Header */}
          <div className="space-y-4">
             <div className="flex items-center justify-center lg:justify-start gap-3 text-primary/80 font-mono text-sm tracking-widest uppercase">
                <span className="w-8 h-px bg-primary"></span>
                <span>Chapter One</span>
             </div>
             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight">
               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Our Story</span>
             </h1>
          </div>

          {/* Narrative Text */}
          <div className="space-y-6 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent hidden lg:block"></div>
            <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed lg:pl-8">
              It all started with a <span className="text-primary font-medium italic">heartbeat</span>... <br/>
              and a generic home visit.
            </p>
            <div className="lg:pl-8 flex items-center justify-center lg:justify-start gap-2 text-gray-500 text-sm font-medium uppercase tracking-wider">
               <span className="material-icons text-base">location_on</span>
               Chicago, IL
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-8 border-t border-gray-800">
             <div className="text-center lg:text-left group">
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">1,095</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-2">Days</div>
                <p className="text-xs text-gray-400 leading-snug hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">Since the day I first saw you in those blue scrubs, wondering if you noticed me.</p>
                <span className="material-icons text-primary/20 text-4xl absolute -z-10 -translate-y-8 translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">event</span>
             </div>
             <div className="text-center lg:text-left group">
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">12</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-2">Cities</div>
                <p className="text-xs text-gray-400 leading-snug hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">From our first weekend getaway to that conference where we snuck out for dinner.</p>
                 <span className="material-icons text-primary/20 text-4xl absolute -z-10 -translate-y-8 translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">flight_takeoff</span>
             </div>
             <div className="text-center lg:text-left group">
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">∞</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-2">Coffees</div>
                <p className="text-xs text-gray-400 leading-snug hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">Surviving night shifts, residency applications, and early morning rounds together.</p>
                 <span className="material-icons text-primary/20 text-4xl absolute -z-10 -translate-y-8 translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">coffee</span>
             </div>
          </div>

          {/* CTA / Navigation */}
          <div className="pt-8 flex justify-center lg:justify-start">
             <Link href="/timeline" className="group relative px-8 py-4 bg-primary text-white font-bold rounded-full overflow-hidden shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-3">
                   Begin Journey
                   <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
             </Link>
          </div>

        </div>
      </main>

      {/* Vertical Navigation Lines (Desktop) */}
      <div className="hidden lg:flex flex-col items-center gap-8 fixed left-8 top-1/2 -translate-y-1/2 z-50">
         <div className="w-px h-12 bg-gray-800"></div>
         <div className="flex flex-col gap-6 text-xs font-bold text-gray-600 uppercase tracking-widest [writing-mode:vertical-lr] rotate-180">
            <Link href="/" className="hover:text-primary transition-colors">The Meeting</Link>
            <span className="text-primary">The Yes</span>
            <span className="hover:text-primary transition-colors">The First Fight</span>
            <span className="hover:text-primary transition-colors">Forever</span>
         </div>
         <div className="w-px h-12 bg-gray-800"></div>
      </div>

    </div>
  );
}
