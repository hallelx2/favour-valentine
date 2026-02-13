"use client";

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 font-sans min-h-screen overflow-hidden selection:bg-primary selection:text-white relative">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Left Glow */}
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"></div>
        {/* Bottom Right Glow */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[150px]"></div>

        {/* Subtle Silhouette: Nurse & Doctor */}
        <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[80vh] w-auto opacity-[0.03] pointer-events-none" fill="currentColor" viewBox="0 0 800 600">
          <path d="M200,600 C200,450 250,300 350,250 C380,235 400,200 400,150 C400,100 360,80 340,80 C320,80 280,100 280,150 L280,200 L200,600 Z"></path>
          <path d="M600,600 C600,450 550,300 450,250 C420,235 400,200 400,150 C400,100 440,80 460,80 C480,80 520,100 520,150 L520,200 L600,600 Z"></path>
        </svg>
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col lg:flex-row h-screen w-full max-w-[1920px] mx-auto">
        {/* Left Panel: Narrative */}
        <div className="w-full lg:w-5/12 xl:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-12 lg:py-0 relative">
          {/* Mobile/Top Nav Indicator */}
          <div className="lg:hidden absolute top-6 left-8 flex items-center space-x-2 text-primary/60 text-sm font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span>Chapter 1</span>
          </div>

          {/* Content Block */}
          <div className="space-y-8 animate-float">
            <div className="space-y-2">
              <div className="hidden lg:flex items-center space-x-3 mb-6">
                <span className="px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest bg-primary/5">
                  The Encounter
                </span>
                <div className="h-px w-12 bg-primary/30"></div>
              </div>
              <h2 className="text-primary font-bold text-lg md:text-xl tracking-wide opacity-80">
                August 5, 2025
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                Pediatrics <br />
                <span className="text-primary">Home Visit</span>
              </h1>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"></div>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                I was standing there, presenting the case details. My hands were shaking slightly, gripping the clipboard a little too tight. Standard procedure.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mt-6">
                But then I looked up. You were sitting opposite me, just <span className="text-white font-medium border-b border-primary/50 pb-0.5">smiling</span>.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mt-6 italic">
                &quot;For the first time in med school, I completely lost my train of thought.&quot;
              </p>
            </div>

            {/* Interactive element: Audio Player / Mood Setter */}
            <div className="pt-8 flex items-center gap-4">
              <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-dark border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group cursor-pointer">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <span className="material-icons text-primary group-hover:scale-110 transition-transform">play_arrow</span>
                  <span className="absolute inset-0 rounded-full border border-primary/30 animate-ping opacity-20"></span>
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white">Play Memory</span>
              </button>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Right Panel: Visual & Heart */}
        <div className="w-full lg:w-7/12 xl:w-1/2 relative flex items-center justify-center overflow-hidden lg:h-screen min-h-[50vh] bg-gradient-to-b lg:bg-gradient-to-l from-background-dark/50 to-transparent">
          {/* Ambient Lighting Behind Heart */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] animate-pulse-slow"></div>

          {/* Heart Container */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {/* Medical Circles decoration */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-primary/10 animate-spin-slow"></div>
              <div className="w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full border border-dashed border-primary/20 animate-spin-reverse-slow absolute"></div>
            </div>

            {/* The Heart Graphic */}
            <div className="relative transform transition-transform hover:scale-105 duration-700 ease-out cursor-pointer group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full group-hover:bg-primary/30 transition-colors duration-500 animate-pulse"></div>

              {/* SVG Composition */}
              <svg className="drop-shadow-2xl animate-float" fill="none" height="320" viewBox="0 0 200 200" width="320" xmlns="http://www.w3.org/2000/svg">
                {/* Stethoscope Tubing forming a heart shape outline */}
                <path className="opacity-40" d="M100,170 C60,140 20,100 20,60 C20,30 45,10 75,10 C90,10 100,20 100,20 C100,20 110,10 125,10 C155,10 180,30 180,60 C180,100 140,140 100,170" fill="none" stroke="#ea2a33" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                {/* Anatomical Heart stylized center */}
                <path d="M100 145C80 125 50 100 50 70C50 50 65 35 85 35C95 35 100 45 100 45C100 45 105 35 115 35C135 35 150 50 150 70C150 100 120 125 100 145Z" fill="#ea2a33" fillOpacity="0.1" stroke="#ea2a33" strokeWidth="1"></path>
                {/* EKG Line cutting through */}
                <path className="filter drop-shadow-[0_0_8px_rgba(234,42,51,0.8)]" d="M30,100 H70 L80,70 L95,130 L110,60 L125,100 H170" stroke="#ea2a33" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <animate attributeName="stroke-dasharray" dur="2s" from="0, 400" repeatCount="indefinite" to="400, 0"></animate>
                </path>
                {/* Central pulsating core */}
                <circle className="animate-pulse opacity-80 mix-blend-screen filter blur-[2px]" cx="100" cy="90" fill="#ea2a33" r="15"></circle>
              </svg>

              {/* Overlay Label */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap">
                <span className="text-primary text-xs tracking-[0.3em] uppercase font-bold">BPM: Racing</span>
              </div>
            </div>
          </div>

          {/* Bottom Right Controls */}
          <div className="absolute bottom-8 right-8 flex flex-col items-center space-y-4">
            <div className="text-xs text-primary/40 rotate-90 origin-right translate-x-2 font-mono">SCROLL TO FEEL</div>
            <div className="w-px h-16 bg-gradient-to-b from-primary/10 to-primary/60"></div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-20 lg:translate-x-0 z-20">
          <div className="glass-panel px-6 py-3 rounded-full flex items-center space-x-6">
            <button aria-label="Previous Chapter" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              <span className="material-icons text-xl">west</span>
            </button>
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-primary/20"></div>
              <div className="w-2 h-2 rounded-full bg-primary/20"></div>
              <div className="w-2 h-2 rounded-full bg-primary/20"></div>
            </div>
            <Link href="/beginning" aria-label="Next Chapter" className="text-white hover:text-primary transition-colors flex items-center gap-2 group cursor-pointer">
              <span className="text-sm font-medium hidden sm:block">Next: The First Coffee</span>
              <span className="material-icons text-xl group-hover:translate-x-1 transition-transform">east</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
