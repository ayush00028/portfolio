import React, { useState } from 'react';
import { ArrowRight, Code2, Github, Globe, Linkedin, Mail, Play, Sparkles, Terminal } from 'lucide-react';
import { profile } from '../data/profile';
import { socialLinks } from '../data/socialLinks';
import ThreeHeroScene from '../components/ThreeHeroScene';
import DeveloperCodeCard from '../components/DeveloperCodeCard';
import { isSafeUrl } from '../utils/security';
import { soundFx } from '../utils/soundEffects';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('3d'); // '3d' or 'code'

  const isSafeGithub = isSafeUrl(socialLinks.github);
  const isSafeLinkedin = isSafeUrl(socialLinks.linkedin);
  const isSafeEmail = isSafeUrl(`mailto:${socialLinks.email}`);

  const handleTabSwitch = (tab) => {
    soundFx.playClick();
    setActiveTab(tab);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Personal Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium glass-pill text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{profile.statusBadge}</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500">{profile.name}</span>
            </h1>

            {/* Custom Distinctive Developer Headline */}
            <div className="mt-4 inline-block px-3.5 py-2 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 font-mono text-sm md:text-base font-semibold">
              <span className="text-cyan-500 mr-2">&gt;</span>
              {profile.headline}
            </div>

            {/* Short Introduction */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-sans">
              {profile.shortIntro}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                Contact Me
              </a>
            </div>

            {/* Social Icons Strip */}
            <div className="mt-10 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-5">
              <span className="text-xs font-mono text-slate-600 dark:text-slate-400 font-medium">Connect:</span>
              
              {socialLinks.github && isSafeGithub && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}

              {socialLinks.linkedin && isSafeLinkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}

              {socialLinks.email && isSafeEmail && (
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Right Hero Column: Interactive 3D / Live Code Hub */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Mode Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/60 dark:bg-slate-900/80 border border-slate-300/80 dark:border-slate-800 mb-3 shadow-sm">
              <button
                type="button"
                onClick={() => handleTabSwitch('3d')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
                  activeTab === '3d'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-cyan-500" />
                <span>3D Quantum Core</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabSwitch('code')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
                  activeTab === 'code'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Code2 className="w-3.5 h-3.5 text-indigo-500" />
                <span>Krishna.java</span>
              </button>
            </div>

            {/* Display Container */}
            <div className="w-full relative rounded-3xl p-2 bg-gradient-to-b from-cyan-500/10 via-slate-800/5 to-indigo-500/10 border border-slate-200/60 dark:border-slate-800 hud-bracket">
              
              {activeTab === '3d' ? (
                <div className="w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden relative">
                  <ThreeHeroScene />
                  
                  {/* Floating 3D Interaction Hint */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/75 backdrop-blur-md border border-slate-700/60 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 pointer-events-none select-none">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    Interactive 3D • Move cursor to rotate
                  </div>
                </div>
              ) : (
                <div className="w-full min-h-[380px] sm:min-h-[460px] flex items-center justify-center">
                  <DeveloperCodeCard />
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
