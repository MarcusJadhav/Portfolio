import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Educational <span className="text-gradient">Journey</span></h2>
        <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
          My academic background and professional certifications.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent -translate-x-1/2 hidden md:block" />

        <div className="space-y-12">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div className="flex-1 w-full">
                <div className="glass-card p-8 rounded-[2.5rem] relative group">
                  <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-accent-blue rounded-full hidden md:block ${
                    idx % 2 === 0 ? '-right-[2.25rem]' : '-left-[2.25rem]'
                  }`}>
                    <div className="absolute inset-0 bg-accent-blue animate-ping rounded-full" />
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-accent-blue">
                      {item.degree.includes('Certification') ? <Award size={24} /> : <GraduationCap size={24} />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{item.degree}</h3>
                      <div className="flex items-center gap-2 text-zinc-500 text-sm">
                        <Calendar size={14} /> {item.duration}
                      </div>
                    </div>
                  </div>
                  <div className="text-accent-blue font-semibold mb-3">{item.institution}</div>
                  <p className="text-zinc-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              
              {/* Spacer for timeline */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
