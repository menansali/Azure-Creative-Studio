import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ThreeBackground from './ThreeBackground';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* 3D Background */}
      <ThreeBackground />

      {/* Overlay Gradient for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pointer-events-auto"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-azure-300 text-sm font-medium mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(56,189,248,0.3)]"
          >
            Future-Proof Digital Agency
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
            We craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-azure-400 to-indigo-500">digital</span> <br />
            <span className="relative inline-block">
              masterpieces
              <motion.svg 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                className="absolute w-full h-3 -bottom-1 left-0 text-azure-500" 
                viewBox="0 0 200 9" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.00025 6.99999C18.5002 8.99999 53.5002 8.99999 77.0002 2.49999C127 -6.50001 170.5 9.99999 198 2.49999" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </motion.svg>
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            Elevate your brand with immersive web experiences, cutting-edge design, and intelligent interactivity powered by AI.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a 
              href="#work"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(14, 165, 233, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-azure-500 text-white rounded-full font-semibold text-lg hover:bg-azure-400 transition-colors shadow-lg shadow-azure-500/25 flex items-center gap-2 cursor-pointer pointer-events-auto"
            >
              View Our Work <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="#ai-studio"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-semibold text-lg transition-colors backdrop-blur-md cursor-pointer pointer-events-auto"
            >
              Try AI Studio
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.5, duration: 1 }, y: { repeat: Infinity, duration: 2 } }}
      >
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-azure-400 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;