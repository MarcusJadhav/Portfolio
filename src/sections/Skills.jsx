import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
        <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
          A collection of technologies I use to bring ideas to life.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skillGroup, idx) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-8 rounded-[2.5rem] relative group overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-blue/5 rounded-full blur-3xl group-hover:bg-accent-blue/10 transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center mb-6 text-accent-blue group-hover:scale-110 transition-transform duration-500">
                <skillGroup.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-6">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl text-sm font-medium transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
