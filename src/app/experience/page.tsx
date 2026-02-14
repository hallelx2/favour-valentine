"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Heart,
    ChevronDown,
    Volume2,
    VolumeX,
    Flower2,
} from "lucide-react";
import Link from "next/link";

const P = "/Photos-3-001";

/* ─── Timeline data — YOUR REAL STORY ────────────────────────────── */
const timeline = [
    {
        date: "August 5",
        title: "The First Sight",
        text: "We were heading out for a home visit when three nursing interns showed up to follow us. She was in the middle — geometrically positioned to tip me off my toes. She looked sideways like they do in the movies, swinging her hair, and just like that, I was a finished man. My friends nominated me to explain adenotonsilitis to the family in our local language, and she was right there in front of me — seated, smiling. Afterwards, I walked up to her and she told me her name immediately. I thought that was the last time I'd see her.",
        color: "from-green-500/20 to-emerald-600/20",
        accent: "text-green-400",
        photos: [`${P}/home visitation 1.jpg`, `${P}/home visitation 2.jpg`, `${P}/home visitation 3.jpg`],
        icon: "🌱",
    },
    {
        date: "September",
        title: "Bumping Into Each Other",
        text: "We kept running into each other — in the hallways, on the staircases, in the wards. A month down the line, I finally got her contact. We started talking, and those conversations quickly became the highlight of my day.",
        color: "from-emerald-500/20 to-teal-600/20",
        accent: "text-emerald-400",
        photos: [
            `${P}/IMG_20251111_021057.jpg`,
            `${P}/IMG_20251111_021059.jpg`,
        ],
        icon: "🌿",
    },
    {
        date: "October 9",
        title: "Our First Outing",
        text: "I took her out for lunch — our very first time going out together. Thank God she heeded my call. We talked for hours, and I remember thinking, 'I could do this forever.'",
        color: "from-teal-500/20 to-cyan-600/20",
        accent: "text-teal-400",
        photos: [
            `${P}/IMG_20251111_021100.jpg`,
            `${P}/IMG_20251113_184653.jpg`,
        ],
        icon: "🌸",
    },
    {
        date: "November 10",
        title: "The Interrogation",
        text: "Her friends called me over — they wanted to know my plans for their friend. I answered like a pro, professing my love right there in front of all of them. No hesitation, no fear. There I was, being interrogated and smiling through it all, because every word I said was true.",
        color: "from-pink-500/20 to-rose-500/20",
        accent: "text-pink-400",
        photos: [
            `${P}/IMG_20251111_021059.jpg`,
            `${P}/IMG_20251113_184653.jpg`,
        ],
        icon: "👥",
    },
    {
        date: "October 22",
        title: "The Question",
        text: "Heart pounding, palms sweating — I finally asked her out. Every word felt heavy and light at the same time. I laid my heart bare and waited…",
        color: "from-rose-500/20 to-pink-600/20",
        accent: "text-rose-400",
        photos: [`${P}/IMG_20251125_125625.jpg`],
        icon: "🌹",
    },
    {
        date: "October 24",
        title: "She Said YES!",
        text: "Two days later, she gave me the answer that changed my life. YES. My heart has been racing ever since.",
        color: "from-pink-500/20 to-red-500/20",
        accent: "text-pink-400",
        photos: [
            `${P}/Screenshot_20251222_173254_WhatsApp.jpg`,
            `${P}/Screenshot_20251222_173332_WhatsApp.jpg`,
        ],
        icon: "💐",
    },
    {
        date: "October 27",
        title: "Our Parents Know",
        text: "We told our parents about us. Her parents are yet to say yes — but she already has. She loves me so much already, I know it. She tries to be stubborn sometimes, but it doesn't work. My parents are on board. This isn't just our story anymore — it's becoming a family story.",
        color: "from-amber-500/20 to-yellow-600/20",
        accent: "text-amber-400",
        photos: [
            `${P}/Screenshot_2025-12-10-16-24-53-651_com.whatsapp.jpg`,
        ],
        icon: "🏡",
    },
    {
        date: "December 23",
        title: "Our First Storm",
        text: "I promised to take her out on Christmas Day. Then life happened, and I couldn't keep that promise. She was hurt, and I understood why. It was our first real fight — and it taught me that love means showing up, not just saying you will.",
        color: "from-slate-500/20 to-gray-600/20",
        accent: "text-slate-400",
        photos: [
            `${P}/20251221_192529.jpg`,
            `${P}/20251221_192537.jpg`,
        ],
        icon: "🌧️",
    },
    {
        date: "December 29",
        title: "The Rainbow After",
        text: "We resolved it. Not with grand gestures, but with honest words and open hearts. Happy New Year together — stepping into a new chapter, stronger than before.",
        color: "from-violet-500/20 to-purple-600/20",
        accent: "text-violet-400",
        photos: [`${P}/20251230_192026.jpg`],
        icon: "🌈",
    },
    {
        date: "January 21",
        title: "Happy Birthday, My Love",
        text: "Her birthday — a day the world became a better place. I celebrated the person who makes every day feel like a gift.",
        color: "from-fuchsia-500/20 to-pink-500/20",
        accent: "text-fuchsia-400",
        photos: [
            `${P}/20260121_173224.jpg`,
            `${P}/20260121_173229.jpg`,
            `${P}/20260121_173842.jpg`,
        ],
        icon: "🎂",
    },
    {
        date: "January – February",
        title: "Growing Through the Storms",
        text: "We had more disagreements — beautiful fights that pushed us to grow, to listen, to become better people for each other. Every storm watered the garden of our love.",
        color: "from-emerald-500/20 to-green-600/20",
        accent: "text-emerald-400",
        photos: [
            `${P}/20260129_152803.jpg`,
            `${P}/20260131_105926.jpg`,
            `${P}/IMG_20260131_120456.jpg`,
            `${P}/IMG_20260131_120859.jpg`,
        ],
        icon: "🌻",
    },
    {
        date: "February 14, 2026",
        title: "Valentine's Day — Today",
        text: "It has been the most beautiful ride. Walking with her has made me a better person — inside and out. She is my peace, my joy, and my answered prayer.",
        color: "from-red-500/20 to-primary/20",
        accent: "text-primary",
        photos: [
            `${P}/20260206_180140.jpg`,
            `${P}/20260206_180141.jpg`,
            `${P}/20260206_180512.jpg`,
            `${P}/20260206_180515.jpg`,
            `${P}/20260206_180622.jpg`,
            `${P}/20260210_140330.jpg`,
            `${P}/20260210_140334.jpg`,
            `${P}/20260211_181754.jpg`,
            `${P}/20260211_181755.jpg`,
        ],
        icon: "❤️",
    },
];

/* ─── Floating petals ──────────────────────────────────────────────── */
function GardenParticles() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {Array.from({ length: 12 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute animate-petal-fall opacity-40"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 10}s`,
                        animationDuration: `${8 + Math.random() * 8}s`,
                    }}
                >
                    <div
                        className="w-3 h-3 bg-primary/30 rounded-full"
                        style={{
                            borderRadius: "50% 0 50% 50%",
                            transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random()})`,
                        }}
                    />
                </div>
            ))}
        </div>
    );
}

/* ─── Floating Hearts for final scene ──────────────────────────────── */
function FloatingHearts() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {Array.from({ length: 25 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute text-primary/50 animate-heart-float"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 6}s`,
                        animationDuration: `${4 + Math.random() * 5}s`,
                        fontSize: `${10 + Math.random() * 28}px`,
                    }}
                >
                    ♥
                </div>
            ))}
        </div>
    );
}

/* ─── CSS Proposal Animation ───────────────────────────────────────── */
function ProposalScene() {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setStage(1), 1000),   // He walks in
            setTimeout(() => setStage(2), 2500),   // He kneels
            setTimeout(() => setStage(3), 4000),   // Ring appears
            setTimeout(() => setStage(4), 5500),   // She reacts
            setTimeout(() => setStage(5), 7000),   // YES! text
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <div className="relative w-full max-w-lg mx-auto h-[400px] md:h-[500px] flex items-end justify-center overflow-visible">
            {/* Ground / Garden */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-900/60 to-transparent rounded-t-[50%]" />
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-green-800/40 to-transparent rounded-t-[50%]" />

            {/* Flowers on ground */}
            <div className="absolute bottom-10 left-[10%] text-2xl animate-float" style={{ animationDelay: '0.5s' }}>🌷</div>
            <div className="absolute bottom-8 left-[25%] text-xl animate-float" style={{ animationDelay: '1s' }}>🌸</div>
            <div className="absolute bottom-10 right-[10%] text-2xl animate-float" style={{ animationDelay: '1.5s' }}>🌹</div>
            <div className="absolute bottom-8 right-[25%] text-xl animate-float" style={{ animationDelay: '2s' }}>🌺</div>
            <div className="absolute bottom-12 left-[50%] text-lg animate-float" style={{ animationDelay: '0.8s' }}>🦋</div>

            {/* Stars / sparkles */}
            {stage >= 3 && (
                <>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-8 left-[20%] text-2xl"
                    >✨</motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute top-16 right-[15%] text-xl"
                    >✨</motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="absolute top-4 right-[35%] text-3xl"
                    >💫</motion.div>
                </>
            )}

            {/* ── HIM (the proposer) ── */}
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={
                    stage >= 1
                        ? stage >= 2
                            ? { x: -40, opacity: 1, y: 0 }
                            : { x: -40, opacity: 1, y: 0 }
                        : { x: -200, opacity: 0 }
                }
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute bottom-20 z-10"
            >
                <div className="relative flex flex-col items-center">
                    {/* Body */}
                    <motion.div
                        animate={
                            stage >= 2
                                ? { y: 30, scaleY: 0.7 }
                                : { y: 0, scaleY: 1 }
                        }
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="flex flex-col items-center origin-bottom"
                    >
                        {/* Head */}
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-amber-800 border-2 border-amber-900 relative">
                            {/* Eyes */}
                            <div className="absolute top-4 left-3 w-1.5 h-1.5 bg-white rounded-full" />
                            <div className="absolute top-4 right-3 w-1.5 h-1.5 bg-white rounded-full" />
                            {/* Smile */}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-4 h-2 border-b-2 border-white rounded-b-full" />
                        </div>
                        {/* Torso */}
                        <div className="w-16 h-20 md:w-20 md:h-24 bg-blue-900 rounded-t-lg rounded-b-md relative -mt-1">
                            {/* Tie */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-t-primary" />
                        </div>
                    </motion.div>

                    {/* Kneeling leg (appears when stage >= 2) */}
                    {stage >= 2 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex gap-1 -mt-1"
                        >
                            <div className="w-7 h-10 bg-gray-800 rounded-b-md" />
                            <div className="w-7 h-4 bg-gray-800 rounded-r-md mt-6" />
                        </motion.div>
                    )}

                    {/* Ring box (appears stage >= 3) */}
                    {stage >= 3 && (
                        <motion.div
                            initial={{ scale: 0, y: 20 }}
                            animate={{ scale: 1, y: -30 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="absolute -top-4 right-[-50px] md:right-[-60px]"
                        >
                            <div className="relative">
                                <div className="w-10 h-8 bg-red-800 rounded-md border-2 border-red-600 flex items-center justify-center shadow-lg shadow-red-500/30">
                                    <span className="text-lg">💍</span>
                                </div>
                                {/* Glow */}
                                <div className="absolute inset-0 bg-yellow-300/20 blur-xl rounded-full animate-pulse" />
                            </div>
                        </motion.div>
                    )}
                </div>
            </motion.div>

            {/* ── HER ── */}
            <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={
                    stage >= 1
                        ? { x: 50, opacity: 1 }
                        : { x: 200, opacity: 0 }
                }
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="absolute bottom-20 z-10"
            >
                <div className="relative flex flex-col items-center">
                    {/* Reaction (stage >= 4) */}
                    {stage >= 4 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: -10 }}
                            className="absolute -top-10 left-1/2 -translate-x-1/2 text-2xl"
                        >
                            😍
                        </motion.div>
                    )}

                    {/* Head */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-amber-700 border-2 border-amber-800 relative">
                        {/* Hair */}
                        <div className="absolute -top-2 -left-1 -right-1 h-6 bg-gray-900 rounded-t-full" />
                        {/* Eyes */}
                        <div className="absolute top-5 left-3 w-1.5 h-1.5 bg-white rounded-full" />
                        <div className="absolute top-5 right-3 w-1.5 h-1.5 bg-white rounded-full" />
                        {/* Mouth */}
                        <motion.div
                            animate={stage >= 4 ? { height: 6, borderRadius: "50%" } : {}}
                            className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-2 border-b-2 border-white rounded-b-full"
                        />
                    </div>

                    {/* Torso (dress) */}
                    <div className="w-16 h-24 md:w-20 md:h-28 bg-primary rounded-t-lg relative -mt-1"
                        style={{ clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)" }}>
                        {/* Necklace */}
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border border-yellow-400/60" />
                    </div>

                    {/* Legs */}
                    <div className="flex gap-2 -mt-1">
                        <div className="w-5 h-12 bg-amber-700 rounded-b-md" />
                        <div className="w-5 h-12 bg-amber-700 rounded-b-md" />
                    </div>

                    {/* Hands going up when saying yes (stage >= 4) */}
                    {stage >= 4 && (
                        <>
                            <motion.div
                                initial={{ rotate: 0, y: 0 }}
                                animate={{ rotate: -30, y: -60, x: -25 }}
                                transition={{ type: "spring", stiffness: 150 }}
                                className="absolute top-14 left-[-8px] w-3 h-14 bg-amber-700 rounded-full origin-bottom"
                            />
                            <motion.div
                                initial={{ rotate: 0, y: 0 }}
                                animate={{ rotate: 30, y: -60, x: 25 }}
                                transition={{ type: "spring", stiffness: 150 }}
                                className="absolute top-14 right-[-8px] w-3 h-14 bg-amber-700 rounded-full origin-bottom"
                            />
                        </>
                    )}
                </div>
            </motion.div>

            {/* ── "YES!" burst ── */}
            {stage >= 5 && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="absolute top-4 left-1/2 -translate-x-1/2 z-30"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full animate-pulse" />
                        <div className="relative bg-primary px-8 py-4 rounded-2xl shadow-2xl shadow-primary/50">
                            <span className="text-3xl md:text-5xl font-extrabold text-white tracking-wider">
                                YES! 💍
                            </span>
                        </div>
                    </div>
                    {/* Floating hearts around YES */}
                    <div className="absolute -top-4 -left-4 text-2xl animate-bounce" style={{ animationDelay: '0.1s' }}>❤️</div>
                    <div className="absolute -top-2 -right-6 text-xl animate-bounce" style={{ animationDelay: '0.3s' }}>💕</div>
                    <div className="absolute -bottom-4 -left-6 text-xl animate-bounce" style={{ animationDelay: '0.5s' }}>💖</div>
                    <div className="absolute -bottom-2 -right-4 text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>💗</div>
                </motion.div>
            )}
        </div>
    );
}

/* ════════════════════════════════════════════════════════════════════ */
/*  MAIN COMPONENT                                                     */
/* ════════════════════════════════════════════════════════════════════ */

export default function Experience() {
    const [muted, setMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoInView, setVideoInView] = useState(false);

    /* auto-play/pause video */
    useEffect(() => {
        const videoEl = videoRef.current;
        if (!videoEl) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVideoInView(entry.isIntersecting);
                if (entry.isIntersecting) {
                    videoEl.play().catch(() => { });
                } else {
                    videoEl.pause();
                }
            },
            { threshold: 0.4 }
        );
        observer.observe(videoEl);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-background-dark text-gray-100 font-sans min-h-screen overflow-x-hidden relative">
            <GardenParticles />

            {/* ═══════════════════════════════════════════════════════════ */}
            {/*  HERO — GARDEN GATE                                        */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
                {/* Background garden glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 via-background-dark to-background-dark" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px]" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="relative z-10 flex flex-col items-center gap-8 text-center"
                >
                    {/* Garden gate icon */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-green-500/15 blur-[50px] rounded-full animate-pulse" />
                        <div className="text-6xl md:text-8xl">🌿</div>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-none">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-green-400">
                            A Garden of Love
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 font-light max-w-lg">
                        Walk through the garden of our story — every petal, every storm, every bloom.
                    </p>

                    <div className="flex items-center gap-3 text-green-500/60 text-xs uppercase tracking-[0.3em] font-bold">
                        <Flower2 className="w-4 h-4" />
                        August 2025 — February 2026
                        <Flower2 className="w-4 h-4" />
                    </div>

                    {/* Scroll hint */}
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="mt-8"
                    >
                        <ChevronDown className="w-6 h-6 text-green-400/60" />
                    </motion.div>
                </motion.div>

                {/* Decorative garden vines at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-900/20 to-transparent" />
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/*  THE GARDEN PATH — TIMELINE                                */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="relative max-w-5xl mx-auto px-6 py-20">
                {/* Central vine/path */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2">
                    <div className="w-full h-full bg-gradient-to-b from-green-500/40 via-emerald-500/30 via-primary/30 to-primary/50 rounded-full" />
                    {/* Vine leaves along the path */}
                    <div className="absolute top-[5%] -left-3 text-lg">🍃</div>
                    <div className="absolute top-[15%] -right-3 text-lg transform -scale-x-100">🍃</div>
                    <div className="absolute top-[30%] -left-3 text-lg">🍃</div>
                    <div className="absolute top-[45%] -right-3 text-lg transform -scale-x-100">🍃</div>
                    <div className="absolute top-[60%] -left-3 text-lg">🌿</div>
                    <div className="absolute top-[75%] -right-3 text-lg transform -scale-x-100">🍃</div>
                    <div className="absolute top-[90%] -left-3 text-lg">🍃</div>
                </div>

                <div className="space-y-24 md:space-y-32 relative">
                    {timeline.map((event, i) => {
                        const isLeft = i % 2 === 0;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`relative flex flex-col md:flex-row items-start ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                    } gap-6 md:gap-12`}
                            >
                                {/* Timeline node */}
                                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                                    <div className="w-12 h-12 rounded-full bg-background-dark border-2 border-green-500/50 flex items-center justify-center text-xl shadow-lg shadow-green-500/20">
                                        {event.icon}
                                    </div>
                                </div>

                                {/* Content card */}
                                <div
                                    className={`ml-16 md:ml-0 ${isLeft ? "md:w-[45%] md:pr-8" : "md:w-[45%] md:pl-8 md:ml-auto"
                                        }`}
                                >
                                    <div
                                        className={`relative bg-gradient-to-br ${event.color} backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-500 group`}
                                    >
                                        {/* Date badge */}
                                        <div
                                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 text-xs uppercase tracking-wider font-bold ${event.accent}`}
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                                            {event.date}
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                                            {event.title}
                                        </h3>

                                        <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light">
                                            {event.text}
                                        </p>

                                        {/* Photos */}
                                        {event.photos.length > 0 && (
                                            <div
                                                className={`mt-5 grid gap-2 ${event.photos.length === 1
                                                    ? "grid-cols-1"
                                                    : event.photos.length === 2
                                                        ? "grid-cols-2"
                                                        : event.photos.length <= 4
                                                            ? "grid-cols-2"
                                                            : "grid-cols-3"
                                                    }`}
                                            >
                                                {event.photos.map((photo, j) => (
                                                    <motion.div
                                                        key={j}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.5, delay: j * 0.1 }}
                                                        className="aspect-square rounded-xl overflow-hidden border border-white/10 shadow-lg group-hover:shadow-xl transition-shadow"
                                                    >
                                                        <img
                                                            src={photo}
                                                            alt={`${event.title} - ${j + 1}`}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                            loading="lazy"
                                                        />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/*  VIDEO MOMENT                                              */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="relative py-20 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-xs uppercase tracking-[0.2em] text-primary/70 font-bold mb-2">
                            A Moment in Motion
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold">
                            Our <span className="text-primary">Moments</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10"
                    >
                        <video
                            ref={videoRef}
                            src={`${P}/20260115_155522.mp4`}
                            muted={muted}
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                        <button
                            onClick={() => setMuted((m) => !m)}
                            className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md border border-white/20 p-3 rounded-full hover:bg-primary/30 transition-colors cursor-pointer z-30"
                            aria-label={muted ? "Unmute" : "Mute"}
                        >
                            {muted ? (
                                <VolumeX className="w-5 h-5 text-white" />
                            ) : (
                                <Volume2 className="w-5 h-5 text-white" />
                            )}
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════ */}
            {/*  THE PROPOSAL — CSS ANIMATION                              */}
            {/* ═══════════════════════════════════════════════════════════ */}
            <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
                <FloatingHearts />
                <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-primary/5 to-background-dark" />

                <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-4"
                    >
                        <div className="text-xs uppercase tracking-[0.2em] text-primary/70 font-bold">
                            The Promise
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold">
                            Very Soon...{" "}
                            <span className="text-primary">I&apos;m Coming For You</span>
                        </h2>
                        <p className="text-gray-400 font-light max-w-lg mx-auto">
                            Because loving you was the best decision I ever made, and I want to spend forever proving it.
                        </p>
                    </motion.div>

                    {/* THE PROPOSAL CSS DRAWING */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        className="w-full"
                    >
                        <ProposalScene />
                    </motion.div>

                    {/* Love letter */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full max-w-lg"
                    >
                        <div className="bg-neutral-dark/60 backdrop-blur-md border border-primary/20 rounded-2xl p-8 md:p-10 text-center space-y-4 shadow-2xl">
                            <span className="text-4xl">💌</span>
                            <p className="font-serif italic text-lg md:text-xl text-gray-200 leading-relaxed">
                                &ldquo;My love, walking this path with you has made me who I am today. Every petal, every storm, every sunrise — I would choose it all again, a thousand times over, as long as it&apos;s with you.<br /><br />
                                I love you deeply, completely, and endlessly. And very soon, I&apos;m coming to make you mine forever.<br /><br />
                                Happy Valentine&apos;s Day, my heartbeat.<br />
                                <span className="text-primary not-italic font-bold">
                                    — Your Doctor-to-be ❤️
                                </span>
                                &rdquo;
                            </p>
                        </div>
                    </motion.div>

                    {/* Back button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
                        >
                            <Heart className="w-5 h-5 fill-current" />
                            Back to the Beginning
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
