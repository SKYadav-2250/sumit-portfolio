import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, Copy, Check, Send, Clock, MapPin, Sparkles, PhoneCall } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Indian Standard Time (IST)
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('skyadav225075@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Create mailto link
    const mailtoUrl = `mailto:skyadav225075@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-left mb-12 sm:mb-16"
      >
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
          <Mail size={14} />
          <span>// Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">
          Let's Build Something <br className="hidden sm:inline" />
          <span className="gradient-text">Extraordinary Together</span>
        </h2>
        <p className="text-slate-400 max-w-xl text-sm sm:text-base mt-2">
          Have an engineering opening, a high-impact product idea, or need an experienced Flutter & Full-Stack developer? Let's connect.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border-white/10"
        >
          <h3 className="text-xl font-bold text-white font-heading mb-6 flex items-center gap-2">
            <Send size={18} className="text-cyan-400" />
            Send a Direct Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Vance"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm font-sans"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                Topic / Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Software Engineering Role / Mobile App Project"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">
                Your Message *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project, team, or opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
            >
              {formSubmitted ? (
                <>
                  <Check size={16} />
                  <span>Drafted in your Email Client!</span>
                </>
              ) : (
                <>
                  <Sparkles size={16} />
                  <span>Send Message Directly</span>
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Right Info Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Quick Copy Email Card */}
          <div className="p-6 rounded-3xl glass-panel border-white/10 relative overflow-hidden group">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 block">
              Direct Email Address
            </span>
            <div className="flex items-center justify-between gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
              <span className="text-xs sm:text-sm font-mono text-cyan-300 truncate">
                skyadav225075@gmail.com
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-cyan-400/10 hover:bg-cyan-400 text-cyan-400 hover:text-slate-950 transition-colors flex-shrink-0"
                title="Copy email to clipboard"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
              </button>
            </div>
            {copied && (
              <p className="text-xs font-mono text-emerald-400 mt-2 flex items-center gap-1">
                <Check size={12} /> Email address copied to clipboard!
              </p>
            )}
          </div>

          {/* Real-Time Indian Standard Time Widget */}
          <div className="p-6 rounded-3xl glass-panel border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Clock size={14} className="text-cyan-400" />
                Local Time (IST)
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white mb-2">
              {currentTime || 'Loading IST...'}
            </div>
            <p className="text-xs text-slate-400 flex items-center gap-1.5">
              <MapPin size={12} className="text-cyan-400" />
              Ludhiana, Punjab, India (UTC +5:30)
            </p>
          </div>

          {/* Social Links Cards */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://linkedin.com/in/sumit-kumar-yadav-7094b2296"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl glass-panel border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all flex items-center gap-3 group"
            >
              <div className="p-2.5 rounded-xl bg-white/5 text-cyan-400 group-hover:scale-110 transition-transform">
                <FaLinkedin size={18} />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-white">LinkedIn</div>
                <div className="text-[10px] text-slate-400">Connect</div>
              </div>
            </a>

            <a
              href="https://github.com/SKYadav-2250"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl glass-panel border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all flex items-center gap-3 group"
            >
              <div className="p-2.5 rounded-xl bg-white/5 text-slate-300 group-hover:scale-110 transition-transform">
                <FaGithub size={18} />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-white">GitHub</div>
                <div className="text-[10px] text-slate-400">Repositories</div>
              </div>
            </a>
          </div>

          {/* Download Resume Button */}
          <a
            href="/Sumit_Resume.pdf"
            download="Sumit_Resume.pdf"
            className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl glass-panel border-white/10 hover:border-cyan-500/40 text-white font-medium text-xs tracking-wider uppercase transition-all hover:bg-white/10"
          >
            <Download size={14} className="text-cyan-400" />
            <span>Download Official CV (PDF)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
