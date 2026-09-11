import React from 'react';
import { Binary, Code, ExternalLink, Flame, Github, Sparkles } from 'lucide-react';
import { dsaData } from '../data/dsa';
import { isSafeUrl } from '../utils/security';
import { soundFx } from '../utils/soundEffects';

export default function DSA() {
  return (
    <section id="dsa" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-mono font-semibold tracking-wider text-cyan-500 uppercase mb-2">
            04. Algorithmic Mindset
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {dsaData.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            {dsaData.subtitle}
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-4" />
        </div>

        {/* Connected Profiles Banner (LeetCode + GitHub) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* LeetCode Card */}
          <div className="p-6 md:p-8 rounded-2xl glass-card border border-amber-500/30 hover:border-amber-500/60 transition-all duration-300 shadow-lg shadow-amber-500/5 group flex flex-col justify-between hud-bracket">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20 group-hover:scale-105 transition-transform duration-200">
                  <Flame className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  Active Practice
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                LeetCode Profile
              </h3>
              <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mt-1 mb-3">
                @ayush00028
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Practicing algorithmic problem solving, data structures, and computational efficiency in Java.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
              <a
                href="https://leetcode.com/u/ayush00028/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all duration-200 shadow-md shadow-amber-500/20"
              >
                <span>View LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* GitHub Profile Card */}
          <div className="p-6 md:p-8 rounded-2xl glass-card border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 shadow-lg shadow-cyan-500/5 group flex flex-col justify-between hud-bracket">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center border border-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
                  <Github className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                  Code Repositories
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                GitHub Profile
              </h3>
              <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mt-1 mb-3">
                @ayush00028
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Browse open-source repositories, Java algorithm implementations (CodeExpo), and web development projects.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
              <a
                href="https://github.com/ayush00028"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-cyan-600 dark:hover:bg-cyan-400 hover:text-white transition-all duration-200 shadow-md"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Explore GitHub Repositories</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* DSA Trajectory & Focus Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Progress Overview Card (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 md:p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                  <Binary className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Problem Solving Trajectory
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                    Focus on pattern recognition over memorization
                  </p>
                </div>
              </div>

              {/* Problem Solving Notes */}
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-dashed border-slate-300 dark:border-slate-700 font-mono text-sm text-slate-700 dark:text-slate-300">
                <span className="text-cyan-600 dark:text-cyan-400 font-semibold block mb-1">
                  // Algorithmic Strategy:
                </span>
                {dsaData.overview}
              </div>

              {/* Focus Areas Grid */}
              <div className="mt-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Key Topics Under Active Practice
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dsaData.focusAreas.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                          {item.topic}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-700 dark:text-cyan-300">
                          {item.status}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {item.notes}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Side Commitment Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 md:p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-500" />
                Problem Solving Mindset
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                Approaching every algorithm not by memorizing solutions, but by breaking down edge cases, formulating time/space trade-offs, and optimizing data flow.
              </p>

              <div className="space-y-3 font-mono text-xs text-slate-600 dark:text-slate-300">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <span className="text-cyan-500 font-bold block mb-0.5">1. Understand Constraints</span>
                  Analyze limits to select the right algorithm before writing code.
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <span className="text-indigo-400 font-bold block mb-0.5">2. Pattern Recognition</span>
                  Two pointers, sliding window, fast/slow pointers, and recursive divides.
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <span className="text-emerald-500 font-bold block mb-0.5">3. Clean Implementation</span>
                  Writing readable, modular Java code with clear variable definitions.
                </div>
              </div>
            </div>

            {/* Zero Fake Claims Badge */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-slate-900/5 to-indigo-500/10 border border-cyan-500/20 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              <span className="font-bold text-cyan-600 dark:text-cyan-400 font-mono block mb-1">
                Authentic Developer Identity:
              </span>
              Directly connected to verified profiles on LeetCode and GitHub. No fabricated rankings, fake contest scores, or exaggerated statistics.
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
