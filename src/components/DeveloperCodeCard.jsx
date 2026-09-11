import React, { useState } from 'react';
import { Check, Copy, Play, Terminal } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function DeveloperCodeCard() {
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState(null);

  const codeString = `// Krishna.java
public class Developer {
    String name = "Krishna Kumar";
    String role = "Student & Aspiring Developer";
    String[] coreStack = { "Java", "JavaScript", "HTML/CSS", "DSA" };

    public void buildFuture() {
        while (true) {
            learnContinuous();
            solveProblems();
            buildPracticalTools();
        }
    }
}`;

  const handleCopy = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    soundFx.playClick();
    setIsRunning(true);
    setOutput(null);

    setTimeout(() => {
      soundFx.playSuccess();
      setIsRunning(false);
      setOutput(">> Compiling Krishna.java... [OK]\n>> Output: Continuous learning loop initiated. Ready for new challenges!");
    }, 600);
  };

  return (
    <div className="w-full rounded-2xl bg-[#090d16] border border-cyan-500/20 shadow-xl shadow-cyan-500/5 overflow-hidden text-left font-mono text-xs">
      
      {/* Code Card Window Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-2 text-[11px] text-slate-400 font-semibold flex items-center gap-1.5">
            <span className="text-cyan-400">?</span> Krishna.java
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleRun}
            disabled={isRunning}
            className="px-2.5 py-1 rounded-md bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-[11px] font-semibold flex items-center gap-1 transition-colors border border-cyan-500/30"
            title="Execute code"
          >
            <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
            <span>{isRunning ? 'Running...' : 'Run'}</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="p-1 rounded-md text-slate-400 hover:text-white transition-colors"
            title="Copy snippet"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Code Body */}
      <div className="p-4 sm:p-5 text-slate-300 space-y-1 overflow-x-auto leading-relaxed">
        <div><span className="text-slate-500">// Krishna.java</span></div>
        <div><span className="text-indigo-400">public class</span> <span className="text-amber-300 font-semibold">Developer</span> &#123;</div>
        <div className="pl-4"><span className="text-indigo-400">String</span> name = <span className="text-emerald-300">"Krishna Kumar"</span>;</div>
        <div className="pl-4"><span className="text-indigo-400">String</span> role = <span className="text-emerald-300">"Student & Aspiring Developer"</span>;</div>
        <div className="pl-4"><span className="text-indigo-400">String</span>[] coreStack = &#123; <span className="text-emerald-300">"Java"</span>, <span className="text-emerald-300">"JavaScript"</span>, <span className="text-emerald-300">"HTML/CSS"</span>, <span className="text-emerald-300">"DSA"</span> &#125;;</div>
        <div className="pl-4 mt-2"><span className="text-indigo-400">public void</span> <span className="text-cyan-400 font-semibold">buildFuture</span>() &#123;</div>
        <div className="pl-8"><span className="text-indigo-400">while</span> (<span className="text-amber-400">true</span>) &#123;</div>
        <div className="pl-12 text-slate-400">learnContinuous();</div>
        <div className="pl-12 text-slate-400">solveProblems();</div>
        <div className="pl-12 text-cyan-300 font-medium">buildPracticalTools();</div>
        <div className="pl-8">&#125;</div>
        <div className="pl-4">&#125;</div>
        <div>&#125;</div>
      </div>

      {/* Run Output Banner */}
      {output && (
        <div className="px-4 py-2.5 bg-cyan-950/40 border-t border-cyan-500/20 text-[11px] text-cyan-300 whitespace-pre-line animate-fadeIn">
          {output}
        </div>
      )}

    </div>
  );
}
