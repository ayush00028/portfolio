import React, { useState } from 'react';
import { AlertCircle, Check, Copy, Github, Linkedin, Mail, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { contactData, socialLinks } from '../data/socialLinks';
import { sanitizeInput, validateEmail, checkRateLimit, recordRateLimit } from '../utils/security';
import { soundFx } from '../utils/soundEffects';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    // 1. Anti-Bot Honeypot verification: If honeypot is filled, it is an automated bot
    if (formData.honeypot) {
      console.warn("[Security Alert] Bot submission trapped via honeypot.");
      setSubmitted(true); // Fake success to mislead the bot
      return;
    }

    // 2. Client-side rate limiting (30s cooldown)
    const rateCheck = checkRateLimit('portfolio_contact_cooldown', 30);
    if (!rateCheck.allowed) {
      setErrorMsg(`Please wait ${rateCheck.remainingSeconds}s before sending another message.`);
      return;
    }

    // 3. Strict Input Sanitization & Validation
    const cleanName = sanitizeInput(formData.name, 80);
    const cleanEmail = sanitizeInput(formData.email, 100);
    const cleanMsg = sanitizeInput(formData.message, 1500);

    if (!cleanName || cleanName.length < 2) {
      setErrorMsg('Please enter a valid name (at least 2 characters).');
      return;
    }

    if (!validateEmail(cleanEmail)) {
      setErrorMsg('Please enter a valid email address format.');
      return;
    }

    if (!cleanMsg || cleanMsg.length < 5) {
      setErrorMsg('Please enter a meaningful message (at least 5 characters).');
      return;
    }

    // 4. Record rate limit and set sanitized data
    recordRateLimit('portfolio_contact_cooldown');
    setFormData({ name: cleanName, email: cleanEmail, message: cleanMsg, honeypot: '' });
    soundFx.playSuccess();
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    soundFx.playClick();
    if (socialLinks.email && socialLinks.email !== '[ADD EMAIL]') {
      navigator.clipboard.writeText(socialLinks.email);
    } else {
      navigator.clipboard.writeText('krishnakumar.dev@example.com');
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const composeMailto = () => {
    const emailTo = socialLinks.email !== '[ADD EMAIL]' ? socialLinks.email : '';
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(`Hi Krishna,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    return `mailto:${emailTo}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background soft glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <span className="text-xs font-mono font-semibold tracking-wider text-cyan-500 uppercase mb-2">
            06. Connect & Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {contactData.heading}
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details & Direct Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 md:p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
              
              {/* Message placeholder */}
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-dashed border-slate-300 dark:border-slate-700 font-mono text-xs text-slate-700 dark:text-slate-300 mb-6">
                <span className="text-cyan-600 dark:text-cyan-400 font-bold block mb-1">
                  // Contact Pitch:
                </span>
                {contactData.message}
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {contactData.note}
              </p>

              {/* Direct Links */}
              <div className="space-y-3">
                
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/70">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-400 block">Email</span>
                      <span className="text-xs font-semibold text-slate-900 dark:text-white">{socialLinks.email}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-cyan-500 transition-colors"
                    title="Copy email address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Item */}
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/70 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-400 block">LinkedIn</span>
                      <span className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                        Connect on LinkedIn
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-cyan-500 transition-colors">&rarr;</span>
                </a>

                {/* GitHub Item */}
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/70 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-500/10 text-slate-700 dark:text-slate-300 flex items-center justify-center">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-400 block">GitHub</span>
                      <span className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                        View Repositories
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-cyan-500 transition-colors">&rarr;</span>
                </a>

              </div>
            </div>

            {/* Security Guarantee Badge */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 flex items-center gap-3 text-xs">
              <ShieldCheck className="w-5 h-5 flex-shrink-0 text-emerald-500" />
              <span>Input sanitization, anti-bot honeypot, and rate limiting active.</span>
            </div>

          </div>

          {/* Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                  Protected Interface
                </span>
              </div>

              {errorMsg && (
                <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 space-y-4">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <Check className="w-5 h-5 text-emerald-500" />
                    Message Formatted & Verified!
                  </div>
                  <p className="text-xs leading-relaxed">
                    This portfolio runs a zero-database frontend architecture. To deliver your message safely, click below to open your preferred email client:
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={composeMailto()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Open in Email App
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                    >
                      Edit Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Honeypot Trap Field (Completely hidden from real users, lures spam bots) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_website">Website</label>
                    <input
                      id="hp_website"
                      type="text"
                      name="hp_website"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={80}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      maxLength={100}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      maxLength={1500}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, hackathon idea, or opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 text-sm font-sans"
                    />
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    ?? {contactData.formNotice}
                  </p>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all duration-200"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
