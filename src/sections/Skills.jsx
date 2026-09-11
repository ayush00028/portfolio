import React from 'react';
import { Code2, Globe, Wrench, Cpu, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { skillCategories } from '../data/skills';

const iconComponents = {
  Code2: Code2,
  Globe: Globe,
  Wrench: Wrench,
  Cpu: Cpu
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-10">
          <span className="text-xs font-mono font-semibold tracking-wider text-cyan-500 uppercase mb-2">
            02. Technical Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Learning Philosophy
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            I approach software engineering as a <span className="text-cyan-500 font-semibold">lifelong learner</span>. I have built a strong, reliable foundation in core programming languages and tools, while actively learning modern web, backend frameworks, and engineering concepts in parallel by implementing them into tangible projects.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-4" />
        </div>

        {/* Lifelong Learner Visual Legend */}
        <div className="flex flex-wrap items-center gap-4 p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 mb-8 text-xs font-mono">
          <span className="text-slate-500 dark:text-slate-400 font-semibold">Learning Framework:</span>
          
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Solid Foundation (Java, Python, C, Git, GitHub, etc.)</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
            <span>Currently Learning & Implementing in Projects</span>
          </div>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category) => {
            const IconComponent = iconComponents[category.iconName] || Code2;
            
            return (
              <div
                key={category.id}
                className="rounded-2xl p-6 md:p-8 glass-card border border-slate-200 dark:border-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 group hud-bracket"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="mt-6 space-y-2.5">
                  {category.skills.map((skill, index) => {
                    const isMastered = skill.status === 'mastered';
                    
                    return (
                      <div
                        key={index}
                        className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 p-3 rounded-xl transition-colors ${
                          isMastered
                            ? 'bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 text-slate-800 dark:text-slate-200'
                            : 'bg-cyan-500/5 dark:bg-cyan-950/20 border border-cyan-500/20 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {isMastered ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          ) : (
                            <Sparkles className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                          )}
                          <span className="text-sm font-semibold">
                            {skill.name}
                          </span>
                        </div>

                        <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full self-start sm:self-auto ${
                          isMastered
                            ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20'
                            : 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
