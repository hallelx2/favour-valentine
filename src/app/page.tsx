"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, Stethoscope } from "lucide-react";
import Link from "next/link";

const P = "/Photos-3-001";

export default function Home() {
  return (
    <div className="bg-background-dark text-gray-100 font-sans min-h-screen overflow-hidden selection:bg-primary selection:text-white relative flex flex-col">
      {/* Ambient Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/12 blur-[150px]" />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* Top bar */}
      <nav className="relative z-20 w-full px-6 py-5 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-primary/20 p-2 rounded-full">
            <Heart className="w-4 h-4 text-primary fill-current" />
          </div>
          <span className="text-sm font-bold tracking-wider uppercase text-primary/80">
            Our Story
          </span>
        </div>
        <Link
          href="/experience"
          className="text-xs text-gray-400 hover:text-primary transition-colors uppercase tracking-wider font-bold"
        >
          Full Timeline →
        </Link>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto px-6 lg:px-12 gap-10 lg:gap-16 py-8">
        {/* Left — Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="absolute -top-8 -left-8 w-24 h-24 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl" />
          <div className="absolute -bottom-8 -right-8 w-24 h-24 border-b-2 border-r-2 border-primary/20 rounded-br-2xl" />

          {/* 3-photo collage — home visitation day */}
          <div className="relative grid grid-cols-2 gap-3 h-[55vh] md:h-[65vh]">
            {/* Main large photo */}
            <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 hover:scale-[1.01] transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 via-transparent to-transparent z-10" />
              <img
                src={`${P}/home visitation 1.jpg`}
                alt="Home visitation day"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-background-dark/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full">
                <Stethoscope className="text-primary w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                  Home Visit Day
                </span>
              </div>
            </div>
            {/* Top-right photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-primary/10 hover:scale-[1.02] transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/40 to-transparent z-10" />
              <img
                src={`${P}/home visitation 2.jpg`}
                alt="With the guys on visitation"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bottom-right photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-primary/10 hover:scale-[1.02] transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/40 to-transparent z-10" />
              <img
                src={`${P}/home visitation 3.jpg`}
                alt="The team on visitation day"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Right — Story */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 space-y-8 text-center lg:text-left"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-primary/70 text-xs uppercase tracking-[0.2em] font-bold">
              <span className="w-6 h-px bg-primary/40" />
              Chapter One — August 5, 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight font-[family-name:var(--font-raleway)]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                The First
              </span>
              <br />
              <span className="text-primary">Sight</span>
            </h1>
          </div>

          <div className="space-y-5 relative font-[family-name:var(--font-poppins)]">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent hidden lg:block" />
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed lg:pl-6">
              We were heading out for a pediatric home visit when three{" "}
              <span className="text-white font-medium italic border-b border-primary/50 pb-0.5">
                nursing interns
              </span>{" "}
              showed up to follow us. She was in the middle — geometrically
              positioned to tip me off my toes. Then she looked sideways, like
              they do in the movies, swinging her hair… and just like that, I
              was a{" "}
              <span className="text-primary font-medium">finished man</span>.
            </p>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed lg:pl-6">
              At the home visit, my friends nominated me to explain{" "}
              <span className="text-primary font-medium">adenotonsilitis</span>{" "}
              to the family in our local language. As I spoke, she was right
              there in front of me — seated, smiling, giving me all the moral
              support I needed.
            </p>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed lg:pl-6">
              Afterwards, I summoned every ounce of courage, walked up to her,
              and she told me her name — immediately. I thought that would be
              the last time I&apos;d see her.{" "}
              <span className="text-white italic">I was so wrong.</span>
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-800">
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-white">193</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">
                Days Together
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-white">∞</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">
                Heartbeats
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-white">1</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">
                Soulmate
              </div>
            </div>
          </div>

          {/* Next page CTA */}
          <div className="pt-4 flex justify-center lg:justify-start">
            <Link
              href="/beginning"
              className="group relative px-8 py-4 bg-primary text-white font-bold rounded-full overflow-hidden shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                Continue the Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </motion.div>
      </main>

      {/* Page indicator */}
      <div className="relative z-20 pb-6 flex justify-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-1 rounded-full bg-primary" />
          <div className="w-3 h-1 rounded-full bg-white/20" />
          <div className="w-3 h-1 rounded-full bg-white/20" />
          <div className="w-3 h-1 rounded-full bg-white/20" />
          <div className="w-3 h-1 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}
