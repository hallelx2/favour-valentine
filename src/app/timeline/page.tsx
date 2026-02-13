"use client";

import React from 'react';
import Link from 'next/link';

export default function Timeline() {
  return (
    <div className="bg-background-dark text-gray-100 font-sans min-h-screen overflow-x-hidden selection:bg-primary selection:text-white relative">
        {/* Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background-dark/90 mix-blend-overlay"></div>
            {/* Animated Floating Hearts (CSS shapes) */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }}></div>
             {/* Grain Texture */}
             <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
            <div className="bg-neutral-dark/60 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-xl shadow-primary/5 flex items-center gap-1">
                <Link href="/" className="px-5 py-2.5 rounded-full text-sm font-medium text-gray-300 hover:text-primary transition-colors">The Meeting</Link>
                <Link href="/beginning" className="px-5 py-2.5 rounded-full text-sm font-medium text-gray-300 hover:text-primary transition-colors">The Yes</Link>
                {/* Center Brand/Icon */}
                <div className="mx-2 w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full shadow-lg shadow-primary/30">
                    <span className="material-icons text-xl animate-pulse">favorite</span>
                </div>
                <Link href="/revelation" className="px-5 py-2.5 rounded-full text-sm font-medium text-gray-300 hover:text-primary transition-colors">The First Fight</Link>
                <Link href="/valentine" className="px-5 py-2.5 rounded-full text-sm font-medium text-gray-300 hover:text-primary transition-colors">Forever</Link>
            </div>
        </nav>

        {/* Hero Section */}
        <main className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4">

            {/* Timeline Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent -z-10 hidden lg:block"></div>

            {/* Intro Label */}
            <div className="mb-12 animate-float">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    Patient History
                </span>
            </div>

            <div className="relative w-full max-w-5xl mx-auto space-y-24 lg:space-y-0">

                {/* Milestone 1: The Question (Right) */}
                <div className="relative flex items-center justify-center lg:justify-start lg:ml-[50%] lg:pl-12 group">
                    <div className="bg-neutral-dark border border-white/10 p-6 rounded-2xl w-full max-w-md relative hover:border-primary/50 transition-colors duration-300">
                        {/* Connector Dot */}
                        <div className="absolute left-1/2 -top-12 lg:left-0 lg:top-1/2 lg:-translate-x-[3.25rem] lg:-translate-y-1/2 w-4 h-4 bg-background-dark border-2 border-primary rounded-full z-20"></div>

                        <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Oct 22</div>

                        <div className="mb-4 overflow-hidden rounded-xl h-48 relative">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCYIohLJsg3nBp_uIwREkLxUr6ap3E74dCQ3X7KnWJJQfIrMWr8lZBGxzhfmWBftE2KGORo4ePXrjA3vZmjVDt8gwtKZuyJbyxJcpcTAwtuTsal8v_7MKhDAM9Oc-5EBQLxjE2IEbaPyD9HmW6D4t7xDjKnWrrSZDjH1lTKid3hu5CAYg2tPnE2PaElQoa1Xbq-OAoKVahsxLyrSDp_VSX-QsI_RtT5X98iPOTNhoB_7rk8zrx4VMuIFySGXwJXSJ5U4DHh3a9vo_T" alt="Coffee Shop" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">The Question</h3>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Heart rate spiked to 140bpm. The moment I finally gathered the courage to ask you out. The coffee was cold, but the moment was electric.
                        </p>

                        <div className="flex items-center gap-2 text-primary/80 text-xs font-mono uppercase tracking-wider">
                            <span className="material-icons text-sm">local_cafe</span>
                            Cafe Vitals
                        </div>
                    </div>
                </div>

                {/* Milestone 2: The Diagnosis (Left) */}
                <div className="relative flex items-center justify-center lg:justify-end lg:mr-[50%] lg:pr-12 group">
                     <div className="bg-neutral-dark border border-white/10 p-6 rounded-2xl w-full max-w-md relative hover:border-primary/50 transition-colors duration-300">
                        {/* Connector Dot */}
                        <div className="absolute left-1/2 -top-12 lg:right-0 lg:left-auto lg:top-1/2 lg:translate-x-[3.25rem] lg:-translate-y-1/2 w-4 h-4 bg-background-dark border-2 border-primary rounded-full z-20"></div>

                        <div className="absolute -top-3 -left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Oct 24</div>

                         <div className="mb-4 overflow-hidden rounded-xl h-48 relative">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsv253TZmnrdAux_uqhOAbK9GGPlKTY3I79MfNgcg0pFkT0kzFzAd1pr4yOv4jhw_CpVrASWXSQvHo7tMdvsv1NdFWJxEcPFGecQ6X-8HrOeR_c7ghqrG7vOGYH3g5CTjvGAvPLpr7m42oJ4Ial6g8Y0mBdm487wmFn3HZ4enunA_TfEYU2KAJyvKCf-z7qpdk92Yy1--qKBKsoDbofJr3xuDMc9zC68v_wgroEx3zQAeApWfDcPUVWJ6A4NsCIbOfvZ7jpxrYS6zB" alt="Holding Hands" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">The Diagnosis: Yes!</h3>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                             Patient confirmed mutual feelings. Status updated to: &quot;In a Relationship.&quot; Dopamine levels critical. The start of our rounds together.
                        </p>

                        <div className="flex items-center gap-2 text-primary/80 text-xs font-mono uppercase tracking-wider">
                            <span className="material-icons text-sm">favorite</span>
                            Official
                        </div>
                     </div>
                </div>

                 {/* Milestone 3: First Round (Right) */}
                 <div className="relative flex items-center justify-center lg:justify-start lg:ml-[50%] lg:pl-12 group">
                    <div className="bg-neutral-dark border border-white/10 p-6 rounded-2xl w-full max-w-md relative hover:border-primary/50 transition-colors duration-300">
                         {/* Connector Dot */}
                         <div className="absolute left-1/2 -top-12 lg:left-0 lg:top-1/2 lg:-translate-x-[3.25rem] lg:-translate-y-1/2 w-4 h-4 bg-background-dark border-2 border-primary rounded-full z-20"></div>

                        <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Dec 19</div>

                        <div className="mb-4 overflow-hidden rounded-xl h-48 relative">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvuzhzCeusiGW0X_FJwpiDDGn8euLF5dQyIm7EALGhCuly_M5_hDFFm0OsqOr3TTe0j3MY-8xJ2nza0Kxyp1ScwdIk6gcQZx4MoCqfTOb7wMYf-kxX6lcDfLfnsFJ5QAQ5w4Ejt8np3B8Odbd9TyACScHPVG1WBrxAyWuc99GZQfI1Oveav_9JkvaxzZrdKWlwSmC7duTt_mdSb_jxskKpe6dm_4oI50lSAgwDtFcuefgPLNt2eLQksIosD9hfJjwOALLtG0cciyd5" alt="Rainy Window" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">First Round (Fight)</h3>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Brief arrhythmia detected. We argued, but we fixed it with care. Proved that even when the charts get messy, we stabilize each other.
                        </p>

                        <div className="flex items-center gap-2 text-primary/80 text-xs font-mono uppercase tracking-wider">
                            <span className="material-icons text-sm">healing</span>
                            Resolved
                        </div>
                    </div>
                </div>

                {/* Milestone 4: The VIP (Left) */}
                <div className="relative flex items-center justify-center lg:justify-end lg:mr-[50%] lg:pr-12 group">
                     <div className="bg-neutral-dark border border-white/10 p-6 rounded-2xl w-full max-w-md relative hover:border-primary/50 transition-colors duration-300">
                        {/* Connector Dot */}
                        <div className="absolute left-1/2 -top-12 lg:right-0 lg:left-auto lg:top-1/2 lg:translate-x-[3.25rem] lg:-translate-y-1/2 w-4 h-4 bg-background-dark border-2 border-primary rounded-full z-20"></div>

                        <div className="absolute -top-3 -left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Jan 21</div>

                         <div className="mb-4 overflow-hidden rounded-xl h-48 relative">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr1ajqkSwYOxVgLiklOzc73wpENwHpAG4QYkqwsnCiPhxEfH8ibh3G1tgvrcRVEjhCZcB3SaKRgeP0ehw99QFKgLuGLrdJonBmxKOJRMo_agiAXR-wrCTIGFVGAxD303IUQr2ymUsCp8U_swroZeecPM_MERmcob31wUfllp2Z6GfCoRQ6cxuZg0zD3Gew5kZAHwtujX4BQly5huXjHXFBSA_Ynb9ZG_VSengLmmDphQ3zlSggOHhlQ3G5QmYRA5z_-mkSc2pvMJzB" alt="Birthday Cake" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">The VIP</h3>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                             Very Important Patient&apos;s Birthday. Treatment plan included cake, gifts, and excessive amounts of affection. Recovery time: 0 days.
                        </p>

                        <div className="flex items-center gap-2 text-primary/80 text-xs font-mono uppercase tracking-wider">
                            <span className="material-icons text-sm">cake</span>
                            Celebration
                        </div>
                     </div>
                </div>
            </div>

            {/* Next Button */}
            <div className="mt-20">
                <Link href="/revelation" className="group relative px-8 py-3 bg-background-dark border border-white/20 hover:border-primary/50 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                    <span className="relative flex items-center gap-3">
                        Future Rounds
                        <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </span>
                </Link>
            </div>
        </main>
    </div>
  );
}
