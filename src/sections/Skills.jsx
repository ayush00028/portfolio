import React from 'react';
import { Code2, Globe, Wrench, Cpu, CheckCircle2, PlusCircle } from 'lucide-react';
import { skillCategories } from '../data/skills';

// Icon map for categories
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
        <div className="flex flex-col items-start mb-14">
          <span className="text-xs font-mono font-semibold tracking-wider text-cyan-500 uppercase mb-2">
            02. Technical Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Knowledge Base
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A curated list of languages, web technologies, and computational concepts I actively work with. No exaggerated claims or artificial metrics.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-4" />
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category) => {
            const IconComponent = iconComponents[category.iconName] || Code2;
            
            return (
              <div
                key={category.id}
                className="rounded-2xl p-6 md:p-8 glass-card border border-slate-200 dark:border-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 group"
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
                    const isPlaceholder = skill.isPlaceholder || skill.name.includes('[ADD');
                    
                    return (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                          isPlaceholder
                            ? 'bg-slate-100/50 dark:bg-slate-800/30 border border-dashed border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400'
                            : 'bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {isPlaceholder ? (
                            <PlusCircle className="w-4 h-4 text-slate-400" />
                          ) : (
                            <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                          )}
                          <span className={`text-sm font-medium ${isPlaceholder ? 'font-mono' : ''}`}>
                            {skill.name}
                          </span>
                        </div>
                        {skill.level && (
                          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-200/60 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tip for Editing */}
        <div className="mt-8 p-4 rounded-xl bg-slate-100/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 font-mono text-center">
          ?? Easily add or modify technical skills inside <span className="text-cyan-500 font-semibold">src/data/skills.js</span> without altering component markup.
        </div>

      </div>
    </section>
  );
}
