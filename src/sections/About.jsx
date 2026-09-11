import React from 'react';
import { BookOpen, Compass, GraduationCap, MapPin, Sparkles, Target, User } from 'lucide-react';
import { profile } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <span className="text-xs font-mono font-semibold tracking-wider text-cyan-500 uppercase mb-2">
            01. Background & Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Narrative (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Lead Summary */}
            <div className="p-6 md:p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
              <p className="text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                {profile.about.summary}
              </p>
              
              {/* Editable Content Callout */}
              <div className="mt-6 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-dashed border-slate-300 dark:border-slate-700 font-mono text-sm text-slate-700 dark:text-slate-300">
                <span className="text-cyan-600 dark:text-cyan-400 font-semibold block mb-1">
                  // Personal Narrative:
                </span>
                {profile.about.detailedBio}
              </div>
            </div>

            {/* Approach & Future Direction Split Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  My Approach to Learning
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {profile.about.approach}
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Future Direction
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {profile.about.futureGoal}
                </p>
              </div>
            </div>

            {/* Interests Tag Cloud */}
            <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-mono mb-3">
                Core Interests & Focus
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Side Info Cards (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Academic & Role Card */}
            <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl pointer-events-none" />
              
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                <User className="w-4 h-4 text-cyan-500" />
                Quick Profile
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-400 block mb-0.5">Current Status</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{profile.role}</span>
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-400 block mb-0.5 flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-500" />
                    Education
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">{profile.details.education}</span>
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-400 block mb-0.5 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                    College / University
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">{profile.details.institution}</span>
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-400 block mb-0.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                    Location
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">{profile.details.location}</span>
                </div>
              </div>
            </div>

            {/* Guiding Principles Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/20 via-slate-900/10 to-indigo-950/20 dark:from-cyan-950/40 dark:to-indigo-950/40 rounded-2xl border border-cyan-500/20">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Core Philosophy
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                "Small, consistent steps each day: solving algorithmic problems, writing clean code, and transforming theoretical curiosity into usable digital tools."
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
