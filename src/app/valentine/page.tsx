"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Valentine() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleReleaseLove = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div className="bg-background-dark text-gray-100 font-sans min-h-screen overflow-x-hidden selection:bg-primary selection:text-white flex flex-col items-center">
      {/* Confetti Zone */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
           {/* Static demonstration petals for React version */}
           <div className="absolute top-[-10%] left-[10%] w-4 h-4 bg-primary/80 rounded-full animate-[float_4s_ease-in-out_infinite]"></div>
           <div className="absolute top-[-10%] left-[30%] w-6 h-6 bg-red-400 rounded-full animate-[float_5s_ease-in-out_infinite] delay-100"></div>
           <div className="absolute top-[-10%] left-[50%] w-3 h-3 bg-primary rounded-full animate-[float_3s_ease-in-out_infinite] delay-200"></div>
           <div className="absolute top-[-10%] left-[70%] w-5 h-5 bg-red-600 rounded-full animate-[float_6s_ease-in-out_infinite] delay-300"></div>
           <div className="absolute top-[-10%] left-[90%] w-4 h-4 bg-primary/50 rounded-full animate-[float_4.5s_ease-in-out_infinite] delay-150"></div>
        </div>
      )}

      {/* Navigation / Top Bar */}
      <nav className="relative z-20 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="bg-primary/20 p-2 rounded-full text-primary">
            <span className="material-icons text-xl">favorite</span>
          </div>
          <span className="text-sm font-semibold tracking-wider uppercase text-primary/80">My Forever Nurse</span>
        </div>
        <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">
          FEB 14, 2024
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 md:px-8 pb-12 w-full max-w-7xl mx-auto">

        {/* Hero: Heart Grid */}
        <section className="w-full max-w-4xl mx-auto mb-12 relative animate-float">
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-4 grid-rows-4 gap-2 w-full aspect-square md:aspect-[4/3] max-h-[600px]">
             {/* Note: This grid layout mimics the "heart-grid" from the original HTML which likely used specific grid-area definitions.
                 Since we don't have the exact CSS grid-template-areas, we'll approximate a grid layout or just stack images nicely.
                 For a true heart shape, custom CSS grid is best. Let's use a simplified grid for now. */}

             {/* Top Left */}
             <div className="col-span-1 row-span-1 bg-neutral-dark rounded-xl overflow-hidden relative group">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAggVMpgorKWjJ7TXuMoJ5iMthhyi9GVZgdLs8vBniFLLV7bplU7lMPffS3Vj5TkDfmzGIF8TISiiTMb0aeJpheDMJa4tqBH4Dn5uF0P3AyKFF4T65F5Bd5dM05RmrKWVm1EtrlI2-XPqx3IaGFQvNcNppKVIytVAaW9iV72iKvuvls5eP91_r6Ihyv03YDEppDYABVsr__6fZWYG08A3tUjOUcnfG897KSNvf-UcB5iGuOjhWZs3ItL768xlqELPe8bXSU46w0UsYk" alt="Couple laughing" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"/>
             </div>

             {/* Connector (Top Middle-Left) */}
             <div className="col-span-1 row-span-1 bg-neutral-dark rounded-xl overflow-hidden relative group">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDicLMcKcU6_dzRiPath7s5hP0gIbjyXi2IWzJBTbHBjK4XH0bvAEYXnRKvBMeivXo1HzAe_EbeIQxpCC127lRBSFMmSzlwNjtdY6KtkW9Ye-w4vRezu4HRW9-rOthwQQSRn7R3ITvYHitK9t4HMs4GqZT7bfOy28UaGlQZ7TmPIEnqPqdX-OtH-x3W9ssV6n1Re5qh068IHiutlhNrD-vQ7za4zRrPk6DWYo05pf00BB1bcf4MNLijbiUp6FuHWYW6V3NejNfWfTqc" alt="Holding hands" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"/>
             </div>

             {/* Top Right */}
             <div className="col-span-1 row-span-1 bg-neutral-dark rounded-xl overflow-hidden relative group">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRySZkgsUCNIK9Rl6-Q76i1TgzXGogY5fCRD1Nn8-ybp4m7r86OS65p1sC_3p7K-LKOxqAKXxhU5T4H6ylj1C7YwE3xnCL2u-CZpIK8Tz49kaXxG-JAUIyLPwSuhMrhN8HO0Ruf2HK6AHLHhe6K5x9jGWQ1k_BhrBAOfXNGzN-4tS4klrmS5NE1zihjjwOmNW6g0Nt1K94trsdgcGZLiOtvBkeYXS6b0DlKyD7toAUwugNOtdxpUQEgyAaI4fRQ93vGBnkQ6O3i-0h" alt="Nurse and doctor" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"/>
             </div>

             {/* Middle Left */}
             <div className="col-span-1 row-span-2 bg-neutral-dark rounded-xl overflow-hidden relative group">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3wbnl10acXNk1Prpx_UzQaFeg0RyV2NTdJnj2-scvX0PQ7TLWHRXL41yj2uTgoCJNWEC5QRAoGMWfOjLAorz-9Vpk3l6ULprHWW6Tm_xYFvpziyln7-Em61B4w1YYutlz1AeRD9EQpED9EUqrFZLKw8qXkwagkzmocztuDLCRWJX8fV4qUbGAQX0grwvDxRPW_qTw5Ile3yikA74AJLxAEg3-KUVQZLUnT96TJFAIonByiBmHrheYSyWHCrn-JcGFY0Ees4dkAd6d" alt="Studying together" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"/>
             </div>

             {/* Center Large */}
             <div className="col-span-2 row-span-2 bg-neutral-dark border-4 border-background-dark rounded-xl overflow-hidden relative group">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBfogAxJlLJqd7DaG8p8r39PxbjYMCNomg3StLjlbld8S9qIJPt5HP9Do3yBM1mEbUFqG1OJ7EHbHV1uSpFLGQNX0ZlcMhqErDHWV17th904-WWROulNeyv7__8azd8oZA-vA2HNEgqvXqMxMJXrrdyXflTN0jV5soyZdSeQKXqTEbo7xcjuVLzcLJLkH_HZY9TiSs1ga8NR0vRhTXu-uMLA4nVYiVd8mW32lC71aidKLa36yFpZTsRFQPgwfThbBnXtegsU84dmxe" alt="Portrait at sunset" className="w-full h-full object-cover opacity-100"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-4">
                   <span className="text-white font-serif italic text-2xl">Us</span>
                </div>
             </div>

             {/* Middle Right */}
             <div className="col-span-1 row-span-2 bg-neutral-dark rounded-xl overflow-hidden relative group">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-1_5ZMDAiSvcK9ekx8Y7J_WrK7bDwlVq6FluEL3lGzPY5JohpcEtzwg4-0xdc7P6Tro98_ndE0tTz6ZpKrVg_rBB3wJkmE7mA-VSOSMIW-Rwj7_EHvsA5wHhLCY_42M0HJ9I4p9IGLRRCYbhFIPlpH5mJP48XSrxhps5ACKFLHpVd2y1H0htju4ZEA0iLeIX2iRzQFyjddIv_m6j8qtTqfw6M3N2yAIT45DnXSLCHeAjbC4S9lx-Wha3GaL-_5xnIe4EYMFGQGTVl" alt="Stethoscope heart" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"/>
             </div>

             {/* Lower Left */}
             <div className="col-span-1 row-span-1 bg-neutral-dark rounded-xl overflow-hidden relative group">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk-JZWD3utUL-qBRhUX4weWcUH8kii3Cf-TKz0OkWa4ziaoVyoM_bRI8Nh9c4MwVLDnsb7bD9LOcTrH_dn_Qj2VzPdwX_HZa3T3lOVQyJfvUteN0r4ylLsv8bBVE8HZ029ZrkRhgi-lfJzyvizoBApjQ8gX46gg1DsKw_Uw3dTkg_A-YVVYU28LlOsqPeMVSj9YXHyteFsRRcrRIFZlfryztzjtz43upM3bxDsPuhODQ5XGl6CoU8yGjBkBSDoO8mSvhFPHQJLvO_H" alt="Woman smiling" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"/>
             </div>

             {/* Lower Right */}
             <div className="col-span-1 row-span-1 bg-neutral-dark rounded-xl overflow-hidden relative group">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU3Iih3OZvy7KTcKNImVgy6MTfmH4y9etWqFK6mhR_DjDicDIoPF3_-b8Y0vCVE-FqPZtLvxwOVMle6KqaHlZr3h2OGrkqDA4higBiT64JWPzALCVHyMXraUCDtUUXz8J1QAtbPM51MAfIwH7fZeO_HC5fvztAeiUfncXP-V1qv_L5jTGtnbU9qxinAVxsKkoYm0SzplSO-9pMYUTIT__dK6eIZT43t792neBYljmU3INNFMbg32uLgXgD2d1aYhmfBRnhxNvVhe5H" alt="Man in scrubs" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"/>
             </div>

             {/* Tip/Bottom Center */}
             <div className="col-span-2 row-span-1 bg-neutral-dark rounded-xl overflow-hidden relative group">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqOOFkJQJZZSt5-KxNZsNf2FM5_6Mwt2XWMm8NyFspzRnlnysKFyyrppgiZhUi8RvomAtzAbJA1BOfpBQQwScMX2oYs8YrGjsvdmrh0t5ThTQviaQzIZLMOifQQPJzhoEhMqzqsddqhYthOpEWaxADTHizxB2H7pFW10lWd6ErWAVLHHICTKqv6Cabxuo0dnLZjk_F0wuqrWGF2fHPX7gjCGrhskDWzc2iYeGT-u9gQaTdRgqcOu4RWAvELoBioG3LIWD3lRPH6TRs" alt="Couple kissing silhouette" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"/>
             </div>
          </div>
        </section>

        {/* Typography & Call to Action */}
        <section className="text-center max-w-3xl mx-auto space-y-8 relative z-30">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Happy Valentine&apos;s Day to the <span className="text-primary inline-block">Bone of my Bone</span>, the Flesh of my Flesh.
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            From long shifts to late-night study sessions, you are my constant heartbeat.
          </p>
          <div className="pt-4 flex flex-col md:flex-row gap-4 justify-center items-center">
            {/* Trigger Confetti Button */}
            <button
              onClick={handleReleaseLove}
              className="group relative px-8 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-[0_0_40px_-10px_rgba(234,42,51,0.6)] hover:shadow-[0_0_60px_-10px_rgba(234,42,51,0.8)] hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></div>
              <span className="relative flex items-center gap-2">
                <span className="material-icons text-xl">favorite</span>
                Release the Love
              </span>
            </button>
          </div>
        </section>

        {/* Love Letter Section (Card) */}
        <section className="mt-24 w-full max-w-2xl mx-auto px-4">
          <div className="relative bg-neutral-dark/50 backdrop-blur-md border border-white/5 rounded-2xl p-8 md:p-12 overflow-hidden shadow-2xl">
            {/* Decorative background accent */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-2">
                <span className="material-icons">edit</span>
              </div>
              <h2 className="text-2xl font-bold text-white">A Letter For You</h2>

              <div className="bg-[#211111] p-8 rounded-xl border border-primary/10 shadow-inner">
                <p className="font-serif italic text-xl md:text-2xl leading-relaxed text-gray-200">
                  &quot;My Dearest,
                  <br/><br/>
                  They say the heart is just a muscle, a pump keeping us alive. But since I met you, I know it&apos;s so much more. You are the rhythm to my life, the calm in the chaos of the ER, and the sweetest medicine to my soul.
                  <br/><br/>
                  Thank you for being my partner, my study buddy, and my best friend. I love you more than words can diagnose.
                  <br/><br/>
                  Forever Yours,<br/>
                  <span className="text-primary not-italic font-bold">Your Doctor-to-be</span>&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="w-full py-8 text-center text-gray-500 text-sm relative z-10">
        <p>© 2024 Made with ❤️ for my favorite Nurse.</p>
        <div className="mt-4">
            <Link href="/" className="text-primary hover:underline">Start Over</Link>
        </div>
      </footer>
    </div>
  );
}
