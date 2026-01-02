import React from 'react';
import { motion } from 'framer-motion';
import { PortfolioItem } from '../types';

const items: PortfolioItem[] = [
  { id: 1, title: 'Neon Finance', category: 'Mobile App', imageUrl: 'https://picsum.photos/600/800?random=1' },
  { id: 2, title: 'Aerospace One', category: 'Web Development', imageUrl: 'https://picsum.photos/600/600?random=2' },
  { id: 3, title: 'EcoTravel', category: 'Branding', imageUrl: 'https://picsum.photos/600/800?random=3' },
  { id: 4, title: 'Zen Architecture', category: 'UI/UX Design', imageUrl: 'https://picsum.photos/600/600?random=4' },
];

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-azure-400 tracking-wide uppercase mb-2">Selected Works</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white">We Build Digital <br/> Excellence</h3>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            href="#" 
            className="hidden md:block text-white hover:text-azure-400 font-medium transition-colors border-b border-white/20 hover:border-azure-400 pb-1 mt-6 md:mt-0"
          >
            View All Projects
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${index % 2 === 0 ? 'md:h-[600px]' : 'md:h-[500px]'}`}
            >
              <div className="w-full h-full overflow-hidden">
                <motion.img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100" 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-azure-400 font-medium text-sm mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.category}
                  </span>
                  <h4 className="text-3xl font-display font-bold text-white mb-2">{item.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="text-white hover:text-azure-400 font-medium transition-colors border-b border-white/20 pb-1">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Work;