import React from 'react';
import { Sparkles, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-azure-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter text-white">AZURE</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              We are a digital product agency that builds brands, websites, and apps for the modern world.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-azure-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-azure-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-azure-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-azure-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-azure-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-azure-400 transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-azure-400 transition-colors">Design System</a></li>
              <li><a href="#" className="hover:text-azure-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-azure-500 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-azure-500 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-azure-500 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:bg-azure-500 hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-sm">© 2024 Azure Creative Studio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <span className="text-slate-600 text-sm">Designed with React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;