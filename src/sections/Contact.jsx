import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, ArrowRight } from 'lucide-react';
import { Github, Linkedin } from '../components/BrandIcons';
import { personalInfo } from '../data/portfolio';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    formData.append("access_key", "d5c40d71-7367-45ae-91af-4bfd293e318c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        e.target.reset();
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container border-t border-white/5">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Let's build <br />
            something <span className="text-gradient">extraordinary</span>.
          </h2>
          <p className="text-xl text-zinc-400 mb-12 leading-relaxed max-w-md">
            Whether you have a project in mind or just want to say hi, my inbox is always open.
          </p>

          <div className="space-y-8">
            <a href={`mailto:${personalInfo.email}`} className="group flex items-center gap-6 p-4 rounded-3xl hover:bg-white/5 transition-colors w-fit">
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Email Me</div>
                <div className="text-xl font-medium">{personalInfo.email}</div>
              </div>
            </a>
            
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Github, href: personalInfo.github, label: 'GitHub' }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-10 rounded-[3rem] relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center h-full py-12 text-center"
              >
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <Send size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-zinc-400 mb-8">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-accent-blue font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6" 
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="subject" value={`New Portfolio Message from ${personalInfo.name}`} />
                <input type="hidden" name="from_name" value={personalInfo.name} />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-zinc-500 ml-2">Name</label>
                    <input name="name" required type="text" placeholder="Marcus Jadhav" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-blue transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-zinc-500 ml-2">Email</label>
                    <input name="email" required type="email" placeholder="marcusjadhav@gmail.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-blue transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-zinc-500 ml-2">Message</label>
                  <textarea name="message" required rows="5" placeholder="How can I help you?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-blue transition-colors resize-none"></textarea>
                </div>
                <button 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <footer className="mt-32 pt-16 border-t border-white/5 text-center">
        <div className="text-2xl font-bold tracking-tighter mb-8">
          MARCUS<span className="text-accent-blue">.</span>
        </div>
        <div className="text-zinc-500 text-sm mb-8">
          &copy; {new Date().getFullYear()} Marcus Jadhav. All rights reserved.
        </div>
        <div className="flex justify-center gap-8 text-zinc-600">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
