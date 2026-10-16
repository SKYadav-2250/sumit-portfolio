import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Play, RefreshCw } from 'lucide-react';

const commands = {
  help: `Available commands:
  • skills       - View core technical stack & proficiency
  • projects     - Inspect featured projects and links
  • experience   - Display professional career history
  • contact      - Get email, LinkedIn, and GitHub links
  • bio          - Read quick personal summary
  • clear        - Clear the terminal screen
  • sudo hire    - Trigger VIP hiring sequence`,
  
  bio: `Sumit Kumar Yadav
Role: Full-Stack Engineer & Flutter Specialist
Focus: Mobile Apps, Industrial IoT Telemetry, Cloud Backends
Status: Final-year B.Tech CSE at PCTE Group of Institutes (2022-2026)
Location: Ludhiana, India (Open to Remote / Global Relocation)`,

  skills: `[MOBILE ARSENAL]
  Flutter (Advanced) • Dart • BLoC Architecture • Provider • Play Store Publishing

[FULL-STACK & CLOUD]
  React.js • Node.js • Express • AWS Cloud (EC2/S3) • WebSockets • Tailwind CSS

[INDUSTRIAL AUTOMATION & IOT]
  Modbus TCP Protocol • Industrial VPN Gateways • PLC Monitoring • Real-time Telemetry

[DATABASES & VCS]
  PostgreSQL • MongoDB • Firebase Suite • Git & GitHub • Linux`,

  projects: `1. PCS Industrial IoT Telemetry   [Flutter + Node.js + AWS + Modbus TCP]
2. TellMe / Mobile Messenger       [Flutter + Firebase + Push Notifications]
3. TellMe / Web Chat App           [React + Node.js + WebSockets]
4. KOSHIS Engine Campus Event      [Flutter + Provider + Event Logistics]
5. Ophiz Mobile App                [Production Flutter App on Google Play Store]`,

  experience: `[2025 - Present] PCS (Power & Control Solution)
  -> Flutter & Backend Developer | AWS Cloud & Industrial Automation

[2026] KN Enterprises
  -> Web Developer

[2025] TerraBiz Tech Pvt Ltd
  -> Flutter Developer Intern (Google Play App: Ophiz)

[2024] Excellence Group of Institute
  -> Web Developer Intern`,

  contact: `Email:    skyadav225075@gmail.com
LinkedIn: linkedin.com/in/sumit-kumar-yadav-7094b2296
GitHub:   github.com/SKYadav-2250
Resume:   /Sumit_Resume.pdf`,
};

const Terminal = () => {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Sumit Kumar Yadav Interactive Terminal v2.4.0' },
    { type: 'system', text: 'Type "help" or click any shortcut below to query system metrics.' },
  ]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef(null);

   const outputRef = useRef(null);

   const scrollToBottom = () => {
     const el = outputRef.current;
     if (!el) return;
     // scroll ONLY inside this element, doesn't touch the page
     el.scrollTop = el.scrollHeight;
   };


  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (cmdText) => {
    const rawCmd = (cmdText || input).trim();
    if (!rawCmd) return;

    const cmd = rawCmd.toLowerCase();
    const newEntry = { type: 'user', text: `sumit@portfolio:~$ ${rawCmd}` };

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let responseText = '';
    if (cmd === 'sudo hire') {
      responseText = `⚡ ACCESS GRANTED: Initializing recruitment protocol...
Redirecting to direct email transmission...
Opening email to skyadav225075@gmail.com!`;
      setTimeout(() => {
        window.location.href = 'mailto:skyadav225075@gmail.com?subject=Job%20Opportunity%20for%20Sumit';
      }, 1000);
    } else if (commands[cmd]) {
      responseText = commands[cmd];
    } else {
      responseText = `bash: command not found: "${rawCmd}". Type "help" for a list of valid commands.`;
    }

    setHistory((prev) => [...prev, newEntry, { type: 'response', text: responseText }]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand();
    }
  };

  return (
    <section id="terminal" className="py-20 sm:py-28 relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-left mb-8 sm:mb-10"
      >
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
          <TerminalIcon size={14} />
          <span>// Interactive CLI</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">
          Developer <span className="gradient-text">Console</span>
        </h2>
        <p className="text-slate-400 max-w-xl text-sm sm:text-base mt-2">
          Prefer the command line? Run queries below or tap quick command buttons to inspect my profile.
        </p>
      </motion.div>

      {/* Terminal Window Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full glass-panel border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl relative"
      >
        {/* Terminal Header Bar */}
        <div className="px-5 py-3.5 bg-[#050814] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
              bash — sumit@workstation:~ (zsh)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
              SSH: CONNECTED
            </span>
            <button
              onClick={() => handleCommand('clear')}
              className="text-slate-400 hover:text-white p-1 rounded transition-colors text-xs font-mono flex items-center gap-1"
              title="Clear terminal"
            >
              <RefreshCw size={12} />
              <span className="hidden sm:inline">Clear</span>
            </button>
          </div>
        </div>

        {/* Quick Shortcut Buttons */}
        <div className="px-5 py-2.5 bg-[#080d1e]/80 border-b border-white/5 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono text-slate-400 mr-1 flex items-center gap-1">
            <Play size={10} className="text-cyan-400" />
            Run:
          </span>
          {['help', 'skills', 'projects', 'experience', 'contact', 'sudo hire'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Screen Body */}
        <div className="p-5 sm:p-6 bg-[#030612]/95 min-h-[280px] max-h-[420px] overflow-y-auto font-mono text-xs sm:text-sm text-left leading-relaxed">
          {history.map((entry, index) => (
            <div key={index} className="mb-2">
              {entry.type === 'system' && (
                <div className="text-slate-400 italic">{entry.text}</div>
              )}
              {entry.type === 'user' && (
                <div className="text-cyan-300 font-semibold">{entry.text}</div>
              )}
              {entry.type === 'response' && (
                <pre className="text-slate-200 whitespace-pre-wrap font-mono mt-1 pl-2 border-l border-cyan-500/30">
                  {entry.text}
                </pre>
              )}
            </div>
          ))}

          {/* Prompt line */}
          <div className="flex items-center gap-2 mt-3 pt-2 border-t border-white/5">
            <span className="text-cyan-400 flex-shrink-0 font-semibold">
              sumit@portfolio:~$
            </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help' or any command..."
              className="w-full bg-transparent border-none outline-none text-slate-100 font-mono text-xs sm:text-sm placeholder:text-slate-600"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              onClick={() => handleCommand()}
              className="p-1 text-slate-400 hover:text-cyan-300 transition-colors"
              title="Execute"
            >
              <CornerDownLeft size={14} />
            </button>
          </div>
          <div ref={terminalEndRef} />
        </div>
      </motion.div>
    </section>
  );
};

export default Terminal;
