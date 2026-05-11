import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Github } from '../components/BrandIcons';
import { projects } from '../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-zinc-500 max-w-xl text-lg">
            A selection of my recent work in full-stack development and web design.
          </p>
        </div>
        <motion.a 
          href="#" 
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors font-medium group"
        >
          View All Projects <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.a>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] mb-8 glass border-white/5">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                <a href={project.github} className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <Github size={22} />
                </a>
                <a href={project.live} className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <ExternalLink size={22} />
                </a>
              </div>
            </div>

            <div className="px-2">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-xs font-semibold text-zinc-400 border border-white/5 uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl font-bold mb-3 group-hover:text-accent-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-500 text-lg leading-relaxed mb-6">
                {project.longDescription}
              </p>
              <div className="flex items-center gap-6">
                <a href={project.live} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accent-blue transition-colors">
                  Live Demo <ArrowUpRight size={16} />
                </a>
                <a href={project.github} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-zinc-300 transition-colors text-zinc-500">
                  Codebase <Github size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
