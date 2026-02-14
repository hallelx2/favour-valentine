"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Heart, Volume2, VolumeX, ArrowLeft } from "lucide-react";
import Link from "next/link";

const P = "/Photos-3-001";

/* ─── Floating Hearts ──────────────────────────────────────────────── */
function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-primary/40 animate-heart-float"
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
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const timers = [
      setTimeout(() => setStage(1), 800),
      setTimeout(() => setStage(2), 2200),
      setTimeout(() => setStage(3), 3500),
      setTimeout(() => setStage(4), 5000),
      setTimeout(() => setStage(5), 6500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [started]);

  return (
    <div ref={ref} className="relative w-full max-w-lg mx-auto h-[420px] md:h-[500px] flex items-end justify-center overflow-visible">
      {/* Ground / Garden */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-green-900/50 to-transparent rounded-t-[50%]" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-800/30 to-transparent rounded-t-[50%]" />

      {/* Garden decorations */}
      <div className="absolute bottom-12 left-[8%] text-2xl animate-float" style={{ animationDelay: "0.5s" }}>🌷</div>
      <div className="absolute bottom-10 left-[22%] text-xl animate-float" style={{ animationDelay: "1s" }}>🌸</div>
      <div className="absolute bottom-12 right-[8%] text-2xl animate-float" style={{ animationDelay: "1.5s" }}>🌹</div>
      <div className="absolute bottom-10 right-[22%] text-xl animate-float" style={{ animationDelay: "2s" }}>🌺</div>
      <div className="absolute bottom-14 left-[48%] text-lg animate-float" style={{ animationDelay: "0.8s" }}>🦋</div>

      {/* Sparkles on ring reveal */}
      {stage >= 3 && (
        <>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} className="absolute top-10 left-[18%] text-2xl">✨</motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="absolute top-16 right-[12%] text-xl">✨</motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="absolute top-6 right-[32%] text-3xl">💫</motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }} className="absolute top-20 left-[40%] text-lg">⭐</motion.div>
        </>
      )}

      {/* ── HIM (doctor-to-be) ── */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={stage >= 1 ? { x: -45, opacity: 1 } : { x: -200, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-24 z-10"
      >
        <div className="relative flex flex-col items-center">
          <motion.div
            animate={stage >= 2 ? { y: 25, scaleY: 0.75 } : { y: 0, scaleY: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-center origin-bottom"
          >
            {/* Head */}
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-amber-800 border-2 border-amber-900 relative">
              <div className="absolute top-[18px] left-3 w-2 h-2 bg-white rounded-full" />
              <div className="absolute top-[18px] right-3 w-2 h-2 bg-white rounded-full" />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-5 h-2.5 border-b-2 border-white rounded-b-full" />
              {/* Glasses */}
              <div className="absolute top-[15px] left-2 w-[10px] h-[10px] border border-gray-300/60 rounded-full" />
              <div className="absolute top-[15px] right-2 w-[10px] h-[10px] border border-gray-300/60 rounded-full" />
              <div className="absolute top-[19px] left-[12px] w-[10px] h-px bg-gray-300/60" />
            </div>
            {/* Torso / white coat (doctor) */}
            <div className="w-18 h-24 md:w-22 md:h-28 bg-white rounded-t-lg rounded-b-md relative -mt-1 border border-gray-200/20" style={{ width: "72px" }}>
              {/* Stethoscope hint */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-t-blue-600" />
              <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-blue-500/30" />
            </div>
          </motion.div>

          {/* Kneeling legs */}
          {stage >= 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-1 -mt-1">
              <div className="w-8 h-12 bg-gray-800 rounded-b-md" />
              <div className="w-8 h-5 bg-gray-800 rounded-r-md mt-7" />
            </motion.div>
          )}

          {/* Ring box */}
          {stage >= 3 && (
            <motion.div
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: -35 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="absolute -top-6 right-[-55px] md:right-[-65px]"
            >
              <div className="relative">
                <div className="w-12 h-10 bg-red-800 rounded-lg border-2 border-red-600 flex items-center justify-center shadow-xl shadow-red-500/40">
                  <span className="text-xl">💍</span>
                </div>
                <div className="absolute inset-0 bg-yellow-300/20 blur-xl rounded-full animate-pulse" />
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* ── HER (nurse) ── */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={stage >= 1 ? { x: 50, opacity: 1 } : { x: 200, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="absolute bottom-24 z-10"
      >
        <div className="relative flex flex-col items-center">
          {/* Reaction emoji */}
          {stage >= 4 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: -12 }} className="absolute -top-12 left-1/2 -translate-x-1/2 text-3xl">
              😍
            </motion.div>
          )}

          {/* Head */}
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-amber-700 border-2 border-amber-800 relative">
            <div className="absolute -top-2 -left-1 -right-1 h-7 bg-gray-900 rounded-t-full" />
            <div className="absolute top-[20px] left-3 w-2 h-2 bg-white rounded-full" />
            <div className="absolute top-[20px] right-3 w-2 h-2 bg-white rounded-full" />
            <motion.div
              animate={stage >= 4 ? { height: 8, borderRadius: "50%" } : {}}
              className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-2 border-b-2 border-white rounded-b-full"
            />
          </div>

          {/* Nurse scrubs */}
          <div className="relative -mt-1" style={{ width: "70px" }}>
            <div className="w-full h-28 md:h-32 bg-blue-400 rounded-t-lg" style={{ clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)" }}>
              {/* Nurse badge */}
              <div className="absolute top-2 right-3 w-4 h-5 bg-white/30 rounded-sm flex items-center justify-center">
                <span className="text-[8px]">🏥</span>
              </div>
            </div>
          </div>

          {/* Legs */}
          <div className="flex gap-2 -mt-1">
            <div className="w-6 h-14 bg-amber-700 rounded-b-md" />
            <div className="w-6 h-14 bg-amber-700 rounded-b-md" />
          </div>

          {/* Arms up when saying yes */}
          {stage >= 4 && (
            <>
              <motion.div
                initial={{ rotate: 0, y: 0 }}
                animate={{ rotate: -35, y: -65, x: -28 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="absolute top-16 left-[-10px] w-3.5 h-16 bg-amber-700 rounded-full origin-bottom"
              />
              <motion.div
                initial={{ rotate: 0, y: 0 }}
                animate={{ rotate: 35, y: -65, x: 28 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="absolute top-16 right-[-10px] w-3.5 h-16 bg-amber-700 rounded-full origin-bottom"
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
          className="absolute top-2 left-1/2 -translate-x-1/2 z-30"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full animate-pulse" />
            <div className="relative bg-primary px-8 py-4 rounded-2xl shadow-2xl shadow-primary/50">
              <span className="text-3xl md:text-5xl font-extrabold text-white tracking-wider">YES! 💍</span>
            </div>
          </div>
          <div className="absolute -top-4 -left-4 text-2xl animate-bounce" style={{ animationDelay: "0.1s" }}>❤️</div>
          <div className="absolute -top-2 -right-6 text-xl animate-bounce" style={{ animationDelay: "0.3s" }}>💕</div>
          <div className="absolute -bottom-4 -left-6 text-xl animate-bounce" style={{ animationDelay: "0.5s" }}>💖</div>
          <div className="absolute -bottom-2 -right-4 text-2xl animate-bounce" style={{ animationDelay: "0.2s" }}>💗</div>
        </motion.div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════ */
/*  MAIN VALENTINE PAGE                                                */
/* ════════════════════════════════════════════════════════════════════ */

export default function Valentine() {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) videoEl.play().catch(() => { });
        else videoEl.pause();
      },
      { threshold: 0.4 }
    );
    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background-dark text-gray-100 font-sans min-h-screen overflow-x-hidden selection:bg-primary selection:text-white relative">
      <FloatingHearts />

      {/* Ambient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-primary/5" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 w-full px-6 py-5 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-primary/20 p-2 rounded-full">
            <Heart className="w-4 h-4 text-primary fill-current" />
          </div>
          <span className="text-sm font-bold tracking-wider uppercase text-primary/80">Forever</span>
        </div>
        <div className="text-xs text-primary font-bold uppercase tracking-wider">
          Feb 14, 2026 ❤️
        </div>
      </nav>

      <main className="relative z-10 flex flex-col items-center px-4 md:px-8 pb-16">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 pt-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs uppercase tracking-wider text-primary font-bold">Chapter Five — Today</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 font-[family-name:var(--font-raleway)]">
            Happy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-primary">
              Valentine&apos;s Day
            </span>
          </h1>
          <p className="text-lg text-gray-400 font-light max-w-xl mx-auto">
            To the bone of my bone, the flesh of my flesh — you are my answered prayer.
          </p>
        </motion.div>

        {/* Photo mosaic — scrapbook style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full max-w-5xl mb-16"
        >
          <div className="grid grid-cols-4 md:grid-cols-6 auto-rows-[120px] md:auto-rows-[140px] gap-2 md:gap-3">
            {[
              { src: `${P}/20260206_180140.jpg`, cols: "col-span-2", rows: "row-span-2", rotate: "-1deg" },
              { src: `${P}/20260206_180141.jpg`, cols: "col-span-2", rows: "row-span-1", rotate: "1.5deg" },
              { src: `${P}/20260206_180512.jpg`, cols: "col-span-2", rows: "row-span-2", rotate: "-0.5deg" },
              { src: `${P}/20260206_180515.jpg`, cols: "col-span-1", rows: "row-span-1", rotate: "2deg" },
              { src: `${P}/20260206_180622.jpg`, cols: "col-span-1", rows: "row-span-1", rotate: "-1.5deg" },
              { src: `${P}/20260210_140330.jpg`, cols: "col-span-2", rows: "row-span-2", rotate: "0.5deg" },
              { src: `${P}/20260210_140334.jpg`, cols: "col-span-2", rows: "row-span-1", rotate: "-2deg" },
              { src: `${P}/20260211_181754.jpg`, cols: "col-span-2", rows: "row-span-2", rotate: "1deg" },
              { src: `${P}/20260211_181755.jpg`, cols: "col-span-2", rows: "row-span-1", rotate: "-0.8deg" },
              { src: `${P}/20260104_171742.jpg`, cols: "col-span-2", rows: "row-span-2", rotate: "1.2deg" },
              { src: `${P}/20260104_171904.jpg`, cols: "col-span-2", rows: "row-span-1", rotate: "-1.3deg" },
              { src: `${P}/20260105_140319.jpg`, cols: "col-span-2", rows: "row-span-2", rotate: "0.7deg" },
            ].map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                className={`${photo.cols} ${photo.rows} relative group overflow-hidden rounded-xl md:rounded-2xl shadow-lg shadow-primary/10 border border-white/10 hover:z-10 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500`}
                style={{ transform: `rotate(${photo.rotate})` }}
              >
                <img
                  src={photo.src}
                  alt={`Us ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Love declaration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold font-[family-name:var(--font-raleway)]">
            It Has Been a <span className="text-primary">Beautiful Ride</span>
          </h2>
          <p className="text-lg text-gray-300 font-light leading-relaxed font-[family-name:var(--font-poppins)]">
            Walking with you has made me a better person — inside and out. You, my favorite <span className="text-primary font-medium">nurse intern</span>, have shown this <span className="text-primary font-medium">doctor-to-be</span> what it truly means to care for someone with your whole heart.
          </p>
          <p className="text-xl text-white italic font-light">
            I love you more than words can diagnose. ❤️
          </p>
        </motion.div>

        {/* Video moment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl mb-20"
        >
          <div className="text-center mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary/70 font-bold">A Moment in Motion</p>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10">
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
              {muted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
            </button>
          </div>
        </motion.div>

        {/* THE PROPOSAL */}
        <div className="w-full max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-8"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-primary/70 font-bold">The Promise</div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-[family-name:var(--font-raleway)]">
              Very Soon... <span className="text-primary">I&apos;m Coming For You</span>
            </h2>
            <p className="text-gray-400 font-light max-w-lg mx-auto">
              Because loving you was the best decision I ever made, and I want to spend forever proving it.
            </p>
          </motion.div>

          <ProposalScene />
        </div>

        {/* Love letter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-lg mb-16"
        >
          <div className="bg-neutral-dark/60 backdrop-blur-md border border-primary/20 rounded-2xl p-8 md:p-10 text-center space-y-4 shadow-2xl">
            <span className="text-4xl">💌</span>
            <h3 className="text-xl font-bold text-white">A Letter For You</h3>
            <p className="font-[family-name:var(--font-poppins)] italic text-lg md:text-xl text-gray-200 leading-relaxed">
              &ldquo;My love,<br /><br />
              Walking this path with you has made me who I am today. Every petal, every storm, every sunrise — I would choose it all again, a thousand times over, as long as it&apos;s with you.<br /><br />
              You are my peace, my joy, and my answered prayer. I love you deeply, completely, and endlessly.<br /><br />
              And very soon, I&apos;m coming to make you mine forever.<br /><br />
              Happy Valentine&apos;s Day, my heartbeat.<br />
              <span className="text-primary not-italic font-bold">— Your Doctor-to-be ❤️</span>&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <Link href="/revelation" className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">Growth</span>
            </Link>
            <Link href="/" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300">
              <Heart className="w-5 h-5 fill-current" />
              Start Over
            </Link>
            <Link href="/experience" className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors">
              <span className="text-sm font-medium">Garden View</span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5">
                🌿
              </div>
            </Link>
          </div>

          {/* Page indicator */}
          <div className="flex items-center gap-3">
            <div className="w-3 h-1 rounded-full bg-white/20" />
            <div className="w-3 h-1 rounded-full bg-white/20" />
            <div className="w-3 h-1 rounded-full bg-white/20" />
            <div className="w-3 h-1 rounded-full bg-white/20" />
            <div className="w-8 h-1 rounded-full bg-primary" />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-white/20 uppercase tracking-[0.2em]">Made with ❤️ for my favorite nurse • Feb 14, 2026</p>
        </div>
      </main>
    </div>
  );
}
