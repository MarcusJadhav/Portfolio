import React from 'react';
import { motion } from 'framer-motion';
import { stats, personalInfo } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Driven by <span className="text-accent-blue">innovation</span>,<br />
            focused on <span className="text-gradient">performance</span>.
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed mb-8">
            {personalInfo.about}
          </p>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-6 rounded-3xl">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-[3rem] overflow-hidden glass p-4">
            <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent-blue/20 blur-3xl -z-10" />
          <div className="absolute -top-8 -left-8 w-48 h-48 bg-accent-purple/20 blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
