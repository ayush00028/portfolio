import React, { useRef, useState } from 'react';
import { ExternalLink, Github, Layers, Sparkles } from 'lucide-react';
import { isSafeUrl } from '../utils/security';
import { soundFx } from '../utils/soundEffects';

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (-7 to +7 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundFx.playClick();
  };

  const isSafeGithub = isSafeUrl(project.githubUrl);
  const isSafeLive = isSafeUrl(project.liveUrl);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(-6px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      className="relative rounded-2xl p-6 md:p-8 glass-card transition-shadow duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between group overflow-hidden border border-slate-200/80 dark:border-slate-800"
    >
      {/* Dynamic light reflection spotlight on hover */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl bg-gradient-to-tr from-cyan-500/10 via-transparent to-indigo-500/10" 
      />

      <div>
        {/* Top Header: Badge & Status */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
            <Layers className="w-3.5 h-3.5" />
            {project.badge}
          </span>
          {project.isPlaceholder && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              <Sparkles className="w-3 h-3" />
              Template Ready
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-sans">
          {project.description}
        </p>

        {/* Highlight points if available */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5 border-l-2 border-slate-200 dark:border-slate-800 pl-3">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="text-xs text-slate-500 dark:text-slate-400">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-slate-800/80">
        {/* Technologies List */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links with URL security check */}
        <div className="flex items-center gap-3">
          {project.githubUrl && isSafeGithub && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-all duration-200"
            >
              <Github className="w-3.5 h-3.5" />
              Source Code
            </a>
          )}
          {project.liveUrl && isSafeLive && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-500 transition-all duration-200 shadow-sm shadow-cyan-600/20"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
