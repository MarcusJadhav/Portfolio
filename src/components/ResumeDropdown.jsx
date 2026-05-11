import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Eye, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const ResumeDropdown = ({ variant = 'default' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { 
      label: 'View Online', 
      icon: Eye, 
      action: () => window.open(personalInfo.resume, '_blank'),
      download: false 
    },
    { 
      label: 'Download PDF', 
      icon: Download, 
      action: null, // handled by anchor tag
      download: true 
    },
  ];

  const baseStyles = variant === 'nav' 
    ? "px-5 py-2 bg-white text-black rounded-full text-sm font-bold flex items-center gap-2 hover:bg-zinc-200 transition-colors"
    : "px-8 py-4 bg-white text-black rounded-full font-semibold flex items-center gap-2 hover:bg-zinc-200 transition-colors w-full sm:w-auto justify-center";

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={baseStyles}
      >
        <FileText size={variant === 'nav' ? 16 : 18} />
        Resume
        <ChevronDown size={variant === 'nav' ? 14 : 16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-full mt-3 right-0 sm:left-0 w-48 glass rounded-2xl p-2 z-50 border border-white/10 shadow-2xl overflow-hidden"
            >
              {options.map((option, i) => (
                option.download ? (
                  <a
                    key={i}
                    href={personalInfo.resume}
                    download="Marcus_Jadhav_Resume.pdf"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-xl transition-colors text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <option.icon size={16} className="text-accent-blue" />
                    {option.label}
                  </a>
                ) : (
                  <button
                    key={i}
                    onClick={option.action}
                    className="flex items-center gap-3 w-full px-4 py-3 hover:bg-white/10 rounded-xl transition-colors text-sm font-medium text-left"
                  >
                    <option.icon size={16} className="text-accent-blue" />
                    {option.label}
                  </button>
                )
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResumeDropdown;
