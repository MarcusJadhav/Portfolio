import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import ResumeDropdown from '../components/ResumeDropdown';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-blue/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-purple/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-accent-blue uppercase glass rounded-full">
            Available for new opportunities
          </span>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 leading-tight">
            I'm <span className="text-gradient">{personalInfo.name}</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
            >
              View Projects <ArrowRight size={18} />
            </motion.a>
            <ResumeDropdown />
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
            >
              Contact Me
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-8">
            {[
              { icon: Github, href: personalInfo.github },
              { icon: Linkedin, href: personalInfo.linkedin },
              { icon: Mail, href: `mailto:${personalInfo.email}` }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Floating Elements (Tech Icons) */}
      <div className="hidden lg:block">
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[15%] glass p-4 rounded-2xl animate-glow"
        >
          <div className="w-12 h-12 bg-accent-blue/20 rounded-xl flex items-center justify-center text-accent-blue font-bold">J</div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-[15%] glass p-4 rounded-2xl animate-glow"
        >
          <div className="w-12 h-12 bg-accent-purple/20 rounded-xl flex items-center justify-center text-accent-purple font-bold">R</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
