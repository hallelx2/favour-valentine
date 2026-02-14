"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, ArrowLeft, Coffee, Check, Users } from "lucide-react";
import Link from "next/link";

const P = "/Photos-3-001";

export default function Timeline() {
    return (
        <div className="bg-background-dark text-gray-100 font-sans min-h-screen overflow-x-hidden selection:bg-primary selection:text-white relative">
            {/* Ambient */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background-dark/90 mix-blend-overlay" />
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1s" }} />
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-5 px-4">
                <div className="bg-neutral-dark/60 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-xl flex items-center gap-1">
                    <Link href="/" className="px-4 py-2 rounded-full text-xs font-medium text-gray-400 hover:text-primary transition-colors">The Meeting</Link>
                    <Link href="/beginning" className="px-4 py-2 rounded-full text-xs font-medium text-gray-400 hover:text-primary transition-colors">Getting Closer</Link>
                    <div className="mx-1 w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full shadow-lg shadow-primary/30">
                        <Heart className="w-4 h-4 animate-pulse fill-current" />
                    </div>
                    <div className="px-4 py-2 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">The Yes</div>
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
                        <span className="text-xs uppercase tracking-wider text-primary font-bold">Chapter Three — October 2025</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 font-[family-name:var(--font-raleway)]">
                        She Said <span className="text-primary">YES!</span>
                    </h1>
                    <p className="text-lg text-gray-400 font-light max-w-xl mx-auto">
                        The most important days of my life happened in a single week.
                    </p>
                </motion.div>

                {/* Vertical timeline */}
                <div className="relative w-full max-w-4xl mx-auto">
                    {/* Central line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50 md:-translate-x-1/2" />

                    <div className="space-y-20">
                        {/* Oct 22 — The Question */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="relative flex flex-col md:flex-row items-start gap-6 md:gap-12"
                        >
                            {/* Node */}
                            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                                <div className="w-12 h-12 rounded-full bg-background-dark border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/30">
                                    <Coffee className="w-5 h-5 text-primary" />
                                </div>
                            </div>

                            <div className="ml-16 md:ml-0 md:w-[45%] md:pr-8">
                                <div className="bg-neutral-dark/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-all">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase">Oct 22</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-[family-name:var(--font-raleway)]">The Question</h3>
                                    <p className="text-gray-300 font-light leading-relaxed mb-4">
                                        Heart pounding, palms sweating — I finally asked her out. Every word felt heavy and light at the same time. I laid my heart completely bare and waited...
                                    </p>
                                    <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
                                        <img src={`${P}/Screenshot_20251222_173254_WhatsApp.jpg`} alt="The question" className="w-full h-full object-cover" loading="lazy" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Oct 24 — The Yes */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="relative flex flex-col md:flex-row-reverse items-start gap-6 md:gap-12"
                        >
                            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                                <div className="w-14 h-14 rounded-full bg-primary border-2 border-white/20 flex items-center justify-center shadow-lg shadow-primary/40 animate-pulse">
                                    <Heart className="w-6 h-6 text-white fill-current" />
                                </div>
                            </div>

                            <div className="ml-16 md:ml-0 md:w-[45%] md:pl-8 md:ml-auto">
                                <div className="bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-2xl p-6 md:p-8">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase">Oct 24</span>
                                        <span className="text-primary text-xs font-bold animate-pulse">❤️ THE YES!</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-[family-name:var(--font-raleway)]">She Said <span className="text-primary">Yes!</span></h3>
                                    <p className="text-gray-300 font-light leading-relaxed mb-4">
                                        Two days. That&apos;s how long I waited for the answer that changed my life forever. When she said <span className="text-primary font-bold italic">&ldquo;Yes&rdquo;</span>, I swear my heart grew three sizes. Status updated: <span className="text-white font-medium">officially together</span>. Dopamine levels: critical.
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="aspect-square rounded-xl overflow-hidden border border-white/10">
                                            <img src={`${P}/Screenshot_20251222_173332_WhatsApp.jpg`} alt="She said yes" className="w-full h-full object-cover" loading="lazy" />
                                        </div>
                                        <div className="aspect-square rounded-xl overflow-hidden border border-white/10">
                                            <img src={`${P}/20251221_192529.jpg`} alt="Together" className="w-full h-full object-cover" loading="lazy" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Oct 27 — Parents */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="relative flex flex-col md:flex-row items-start gap-6 md:gap-12"
                        >
                            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                                <div className="w-12 h-12 rounded-full bg-background-dark border-2 border-amber-500/50 flex items-center justify-center shadow-lg shadow-amber-500/20">
                                    <Users className="w-5 h-5 text-amber-400" />
                                </div>
                            </div>

                            <div className="ml-16 md:ml-0 md:w-[45%] md:pr-8">
                                <div className="bg-neutral-dark/80 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-6 md:p-8 hover:border-amber-500/40 transition-all">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase">Oct 27</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-[family-name:var(--font-raleway)]">Our Parents Know</h3>
                                    <p className="text-gray-300 font-light leading-relaxed mb-4 font-[family-name:var(--font-poppins)]">
                                        Just three days later, we told our parents about us. Her parents are yet to say yes — but <span className="text-amber-400 font-medium italic">she already has</span>. She loves me so much already, I know it. She tries to be stubborn sometimes, but it doesn&apos;t work. My parents are on board. This isn&apos;t just our story anymore — it&apos;s becoming a family story.
                                    </p>
                                    <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
                                        <img src={`${P}/20251221_192537.jpg`} alt="Our families" className="w-full h-full object-cover" loading="lazy" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="mt-20 flex items-center justify-between w-full max-w-4xl px-4">
                    <Link href="/beginning" className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-all">
                            <ArrowLeft className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium hidden md:block">Getting Closer</span>
                    </Link>
                    <Link href="/revelation" className="group flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-primary hover:bg-red-600 text-white transition-all shadow-[0_0_20px_rgba(234,42,51,0.4)]">
                        <span className="text-sm font-bold">Storms & Growth</span>
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </Link>
                </div>

                {/* Page indicator */}
                <div className="mt-8 flex items-center gap-3">
                    <div className="w-3 h-1 rounded-full bg-white/20" />
                    <div className="w-3 h-1 rounded-full bg-white/20" />
                    <div className="w-8 h-1 rounded-full bg-primary" />
                    <div className="w-3 h-1 rounded-full bg-white/20" />
                    <div className="w-3 h-1 rounded-full bg-white/20" />
                </div>
            </main>
        </div>
    );
}
