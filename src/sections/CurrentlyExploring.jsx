import React from 'react';
import { Compass, Sparkles, TrendingUp } from 'lucide-react';
import { learningData } from '../data/learning';

export default function CurrentlyExploring() {
  return (
    <section id="exploring" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <span className="text-xs font-mono font-semibold tracking-wider text-cyan-500 uppercase mb-2">
            05. Continuous Growth
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {learningData.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            {learningData.subtitle}
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-4" />
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningData.items.map((item, idx) => {
            const isPlaceholder = item.isPlaceholder || item.title.includes('[ADD');

            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl glass-card border transition-all duration-200 hover:-translate-y-1 ${
                  isPlaceholder
                    ? 'border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/40'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-xs font-mono font-bold">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
