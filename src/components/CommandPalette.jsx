import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, CornerDownLeft, Sparkles, Volume2, Moon, Sun } from 'lucide-react';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { skillCategories } from '../data/skills';
import { soundFx } from '../utils/soundEffects';

export default function CommandPalette({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: "Krishna Kumar's Interactive Developer Terminal [Version 2.0]" },
    { type: 'system', text: 'Type "help" to view available developer commands, or "exit" to close.' }
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      soundFx.playTerminalBeep();
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    soundFx.playClick();
    const newHistory = [...history, { type: 'user', text: `krishna@portfolio:~$ ${input}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'response',
          text: `Available Commands:
  • help       - List available developer commands
  • about      - View personal background and scroll to About
  • skills     - Print core tech stack and scroll to Skills
  • projects   - View practical projects and scroll to Showcase
  • dsa        - View problem-solving trajectory and LeetCode focus
  • contact    - View outreach channels and scroll to Contact
  • theme      - Toggle dark/light theme
  • sound      - Toggle audio synthesized sound effects
  • clear      - Clear terminal screen
  • exit       - Close command console`
        });
        break;

      case 'about':
        newHistory.push({ type: 'response', text: `Navigating to About... Role: ${profile.role}` });
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'skills':
        const skillsList = skillCategories.map(c => `${c.title}: ${c.skills.map(s => s.name).join(', ')}`).join('\n  ');
        newHistory.push({ type: 'response', text: `Technical Skills:\n  ${skillsList}` });
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'projects':
        const projectNames = projects.map(p => `• ${p.title}: ${p.description}`).join('\n');
        newHistory.push({ type: 'response', text: `Projects:\n${projectNames}` });
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'dsa':
        newHistory.push({ type: 'response', text: 'Navigating to DSA / Problem Solving section...' });
        document.getElementById('dsa')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'contact':
        newHistory.push({ type: 'response', text: `Direct Contact: ${profile.name} - Navigating to form...` });
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'theme':
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
        soundFx.playThemeToggle();
        newHistory.push({ type: 'response', text: `Theme switched to: ${isDark ? 'Dark Mode' : 'Light Mode'}` });
        break;

      case 'sound':
        const unmuted = soundFx.toggleSound();
        newHistory.push({ type: 'response', text: `Synthesized Sound Effects: ${unmuted ? 'Enabled [ON]' : 'Muted [OFF]'}` });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        setInput('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-2xl rounded-2xl bg-[#090d16] border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 overflow-hidden flex flex-col font-mono text-xs md:text-sm text-slate-300"
        role="dialog"
        aria-modal="true"
        aria-label="Developer Command Terminal"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 font-semibold text-slate-200 text-xs flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              krishna@portfolio: ~
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block text-[11px] text-slate-500">
              Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">ESC</kbd> to close
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Screen / Output Log */}
        <div className="p-4 sm:p-5 h-80 overflow-y-auto space-y-2 bg-[#090d16]/95">
          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed">
              {item.type === 'user' && (
                <span className="text-cyan-400 font-semibold">{item.text}</span>
              )}
              {item.type === 'system' && (
                <span className="text-slate-500">{item.text}</span>
              )}
              {item.type === 'response' && (
                <pre className="text-slate-200 whitespace-pre-wrap font-mono mt-0.5">{item.text}</pre>
              )}
              {item.type === 'error' && (
                <span className="text-red-400">{item.text}</span>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Prompt */}
        <form onSubmit={handleCommand} className="flex items-center px-4 py-3 bg-slate-900/90 border-t border-slate-800">
          <span className="text-cyan-400 font-bold mr-2 select-none">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'skills', 'projects', 'theme'..."
            className="flex-grow bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none font-mono text-xs sm:text-sm"
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-colors"
            title="Execute command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
