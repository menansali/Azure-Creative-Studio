import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Loader2, RefreshCw, Copy } from 'lucide-react';
import { generateDesignConcept } from '../services/geminiService';
import { DesignConcept, AiState } from '../types';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Sparkles as ThreeSparkles, Float } from '@react-three/drei';

const AiBackground = ({ isActive }: { isActive: boolean }) => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 2, 2]} intensity={1} color="#a5b4fc" />
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[1.5, 64, 64]} position={[2, 0, -2]}>
          <MeshDistortMaterial
            color={isActive ? "#6366f1" : "#38bdf8"}
            attach="material"
            distort={isActive ? 0.8 : 0.4}
            speed={isActive ? 4 : 2}
            roughness={0.2}
            metalness={0.9}
          />
        </Sphere>
      </Float>
      <ThreeSparkles count={50} scale={5} size={2} speed={0.5} opacity={0.5} color="#bae6fd" />
    </Canvas>
  </div>
);

const AiConceptGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [concept, setConcept] = useState<DesignConcept | null>(null);
  const [status, setStatus] = useState<AiState>(AiState.IDLE);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setStatus(AiState.LOADING);
    setError('');
    
    try {
      const result = await generateDesignConcept(topic);
      setConcept(result);
      setStatus(AiState.SUCCESS);
    } catch (err: any) {
      console.error(err);
      setError("Failed to generate concept. Please ensure API key is set and try again.");
      setStatus(AiState.ERROR);
    }
  };

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
  };

  return (
    <section id="ai-studio" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* 3D Background */}
      <AiBackground isActive={status === AiState.LOADING} />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Input Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
              <Sparkles className="w-3 h-3" /> Powered by Gemini
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Instant Design <br />
              <span className="text-azure-400">Inspiration</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Stuck on an idea? Describe your project, and our AI will generate a unique brand identity concept, complete with color palettes, typography, and vibe.
            </p>

            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-slate-300 mb-2">Project Topic / Niche</label>
                <div className="relative">
                  <input
                    type="text"
                    id="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., Sustainable Coffee Shop, Cyberpunk Banking App..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-azure-500 transition-all backdrop-blur-sm"
                  />
                  <button 
                    type="submit" 
                    disabled={status === AiState.LOADING}
                    className="absolute right-2 top-2 bottom-2 bg-azure-600 hover:bg-azure-500 text-white px-6 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {status === AiState.LOADING ? <Loader2 className="animate-spin w-4 h-4" /> : 'Generate'}
                  </button>
                </div>
              </div>
              {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            </form>
          </motion.div>

          {/* Output Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-h-[400px]"
          >
            {status === AiState.IDLE && (
              <div className="h-full border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center text-slate-500 p-8 text-center bg-white/5 backdrop-blur-sm">
                <Sparkles className="w-12 h-12 mb-4 opacity-50" />
                <p>Your generated design concept will appear here.</p>
              </div>
            )}

            {status === AiState.LOADING && (
              <div className="h-full border border-white/10 rounded-3xl flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm p-8">
                <Loader2 className="w-12 h-12 text-azure-400 animate-spin mb-4" />
                <p className="text-azure-200 animate-pulse">Dreaming up ideas...</p>
              </div>
            )}

            {status === AiState.SUCCESS && concept && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-black/5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-black/60">{concept.vibe}</span>
                </div>
                
                <h3 className="text-3xl font-display font-bold text-slate-900 mb-2">{concept.projectName}</h3>
                <p className="text-slate-600 mb-8">{concept.description}</p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Color Palette</h4>
                    <div className="flex gap-4 overflow-x-auto pb-2">
                      {concept.colorPalette.map((color, idx) => (
                        <div key={idx} className="group relative flex-shrink-0">
                          <div 
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg cursor-pointer transform transition-transform hover:scale-110 border-4 border-white"
                            style={{ backgroundColor: color.hex }}
                            onClick={() => copyToClipboard(color.hex)}
                          ></div>
                          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono text-slate-500 whitespace-nowrap bg-white px-1 rounded">
                            {color.hex}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-slate-50 p-4 rounded-xl">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Primary Font</h4>
                        <p className="text-lg font-bold text-slate-800 break-words">{concept.typography.primary}</p>
                     </div>
                     <div className="bg-slate-50 p-4 rounded-xl">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Secondary Font</h4>
                        <p className="text-lg text-slate-700 break-words">{concept.typography.secondary}</p>
                     </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                   <span className="text-xs text-slate-400">Generated by Gemini AI</span>
                   <button onClick={() => setStatus(AiState.IDLE)} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
                      <RefreshCw className="w-4 h-4" />
                   </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AiConceptGenerator;