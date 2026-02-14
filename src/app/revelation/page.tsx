"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, ArrowLeft, CloudRain, Rainbow, Cake, Sprout } from "lucide-react";
import Link from "next/link";

const P = "/Photos-3-001";

export default function Revelation() {
    return (
        <div className="bg-background-dark text-gray-100 font-sans min-h-screen overflow-x-hidden selection:bg-primary selection:text-white relative">
            {/* Ambient */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-[#1a1520] to-background-dark mix-blend-overlay" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-5 px-4">
                <div className="bg-neutral-dark/60 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-xl flex items-center gap-1">
                    <Link href="/" className="px-4 py-2 rounded-full text-xs font-medium text-gray-400 hover:text-primary transition-colors">The Meeting</Link>
                    <Link href="/beginning" className="px-4 py-2 rounded-full text-xs font-medium text-gray-400 hover:text-primary transition-colors hidden md:block">Getting Closer</Link>
                    <div className="mx-1 w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full shadow-lg shadow-primary/30">
                        <Heart className="w-4 h-4 animate-pulse fill-current" />
                    </div>
                    <Link href="/timeline" className="px-4 py-2 rounded-full text-xs font-medium text-gray-400 hover:text-primary transition-colors">The Yes</Link>
                    <div className="px-4 py-2 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">Growth</div>
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                        <span className="text-xs uppercase tracking-wider text-violet-400 font-bold">Chapter Four — December 2025 to January 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 font-[family-name:var(--font-raleway)]">
                        Storms That Made Us{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-primary">Bloom</span>
                    </h1>
                    <p className="text-lg text-gray-400 font-light max-w-xl mx-auto">
                        Beautiful fights that made us both grow up and become better people for each other.
                    </p>
                </motion.div>

                <div className="w-full max-w-5xl mx-auto space-y-24">

                    {/* SECTION 1: First Fight — Dec 23 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
                    >
                        <div className="w-full md:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/10"
                            >
                                <img src={`${P}/20251230_192026.jpg`} alt="Through the storm" className="w-full h-full object-cover" loading="lazy" />
                            </motion.div>
                        </div>

                        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 text-xs uppercase tracking-wider font-bold">
                                <CloudRain className="w-4 h-4" />
                                December 23, 2025
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-raleway)]">Our First <span className="text-slate-400">Storm</span></h2>
                            <p className="text-gray-300 font-light leading-relaxed">
                                I told her I was going to take her out on Christmas Day. Then something came up, and I wasn&apos;t able to keep that promise. She was hurt — and she had every right to be.
                            </p>
                            <p className="text-gray-300 font-light leading-relaxed">
                                It was our first real fight. But it taught me something important: <span className="text-white italic">&ldquo;Love isn&apos;t just about saying the right things — it&apos;s about showing up.&rdquo;</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* SECTION 2: Resolution — Dec 29 + New Year */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12"
                    >
                        <div className="w-full md:w-1/2 grid grid-cols-2 gap-3">
                            {[`${P}/20260104_153350.jpg`, `${P}/20260104_153358.jpg`].map((src, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-lg"
                                >
                                    <img src={src} alt={`Resolution ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                                </motion.div>
                            ))}
                        </div>

                        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-violet-400 text-xs uppercase tracking-wider font-bold">
                                <Rainbow className="w-4 h-4" />
                                December 29, 2025
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-raleway)]">The <span className="text-violet-400">Rainbow</span> After</h2>
                            <p className="text-gray-300 font-light leading-relaxed">
                                By December 29, we resolved it — not with grand gestures, but with honest words and open hearts. We stepped into the new year together, stronger and wiser.
                            </p>
                            <p className="text-gray-400 font-light italic">
                                &ldquo;Happy New Year, my love. Here&apos;s to us — all of us, storms and all.&rdquo;
                            </p>
                        </div>
                    </motion.div>

                    {/* SECTION 3: Her Birthday — Jan 21 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
                    >
                        <div className="w-full md:w-1/2 grid grid-cols-3 gap-2">
                            {[`${P}/20260121_173224.jpg`, `${P}/20260121_173229.jpg`, `${P}/20260121_173842.jpg`].map((src, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.85, rotate: -3 + i * 3 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-lg"
                                >
                                    <img src={src} alt={`Birthday ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                                </motion.div>
                            ))}
                        </div>

                        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-fuchsia-400 text-xs uppercase tracking-wider font-bold">
                                <Cake className="w-4 h-4" />
                                January 21, 2026
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-raleway)]">Happy Birthday, <span className="text-fuchsia-400">My Love</span></h2>
                            <p className="text-gray-300 font-light leading-relaxed">
                                Her birthday — the day the world became a better place. I celebrated the woman who makes every single day feel like a gift. She is my <span className="text-primary font-medium">favorite nurse intern</span> and the most beautiful soul I know.
                            </p>
                        </div>
                    </motion.div>

                    {/* SECTION 4: More Growth */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/5 border border-emerald-500/20 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
                            <Sprout className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-[family-name:var(--font-raleway)]">
                                Beautiful <span className="text-emerald-400">Growth</span>
                            </h2>
                            <p className="text-gray-300 font-light leading-relaxed max-w-xl mx-auto mb-6">
                                We fought again — and resolved again. These weren&apos;t destructive fights. They were the kind that water the garden. Each disagreement pushed us to be more honest, more patient, more <span className="text-emerald-400 font-medium">selfless</span>.
                            </p>
                            <p className="text-lg text-white/80 italic font-light">
                                &ldquo;Every storm watered the garden of our love.&rdquo;
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-8">
                                {[
                                    `${P}/20260129_152803.jpg`,
                                    `${P}/20260131_105926.jpg`,
                                    `${P}/IMG_20260131_120456.jpg`,
                                    `${P}/IMG_20260131_120859.jpg`,
                                ].map((src, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="aspect-square rounded-xl overflow-hidden border border-white/10"
                                    >
                                        <img src={src} alt={`Growth ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Navigation */}
                <div className="mt-20 flex items-center justify-between w-full max-w-4xl px-4">
                    <Link href="/timeline" className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-all">
                            <ArrowLeft className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium hidden md:block">She Said Yes</span>
                    </Link>
                    <Link href="/valentine" className="group flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-primary hover:bg-red-600 text-white transition-all shadow-[0_0_20px_rgba(234,42,51,0.4)] hover:shadow-[0_0_30px_rgba(234,42,51,0.6)]">
                        <span className="text-sm font-bold">Happy Valentine&apos;s Day ❤️</span>
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </Link>
                </div>

                {/* Page indicator */}
                <div className="mt-8 flex items-center gap-3">
                    <div className="w-3 h-1 rounded-full bg-white/20" />
                    <div className="w-3 h-1 rounded-full bg-white/20" />
                    <div className="w-3 h-1 rounded-full bg-white/20" />
                    <div className="w-8 h-1 rounded-full bg-primary" />
                    <div className="w-3 h-1 rounded-full bg-white/20" />
                </div>
            </main>
        </div>
    );
}
