import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const ContactBackground = () => (
  <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={2} />
    </Canvas>
  </div>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      <ContactBackground />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900 z-0"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Let's create something <br/><span className="text-azure-400">extraordinary</span> together.</h2>
        <p className="text-slate-400 text-lg mb-12">
          Ready to elevate your digital presence? Drop us a line and tell us about your project.
        </p>

        <form className="space-y-4 text-left bg-white/5 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
              <input type="text" className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-azure-500 transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
              <input type="email" className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-azure-500 transition-colors" placeholder="john@example.com" />
            </div>
          </div>
          <div>
             <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
             <textarea rows={4} className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-azure-500 transition-colors" placeholder="Tell us about your project..."></textarea>
          </div>
          <button type="button" className="w-full bg-white text-slate-900 font-bold py-4 rounded-lg hover:bg-azure-400 hover:text-white transition-all duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;