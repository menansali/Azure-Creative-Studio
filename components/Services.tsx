import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Smartphone, Rocket, Globe, Layers } from 'lucide-react';
import { ServiceItem } from '../types';
import { Canvas } from '@react-three/fiber';
import { Float, Icosahedron } from '@react-three/drei';

const services: ServiceItem[] = [
  { id: 1, title: 'UI/UX Design', description: 'Crafting intuitive and aesthetically pleasing interfaces that delight users.', icon: 'Palette' },
  { id: 2, title: 'Web Development', description: 'Building robust, scalable, and lightning-fast web applications.', icon: 'Code' },
  { id: 3, title: 'Mobile Apps', description: 'Native and cross-platform mobile experiences for iOS and Android.', icon: 'Smartphone' },
  { id: 4, title: 'Brand Identity', description: 'Defining your visual language and voice to stand out in the market.', icon: 'Rocket' },
  { id: 5, title: 'SEO & Marketing', description: 'Driving organic traffic and optimizing conversion rates.', icon: 'Globe' },
  { id: 6, title: 'Motion Graphics', description: 'Adding life to your digital presence with smooth animations.', icon: 'Layers' },
];

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
  Rocket: <Rocket className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  Layers: <Layers className="w-8 h-8" />,
};

const FloatingShape = ({ position, color, scale, delay }: { position: [number, number, number], color: string, scale: number, delay: number }) => (
  <Float speed={1.5} rotationIntensity={1} floatIntensity={1} floatingRange={[-0.5, 0.5]}>
    <Icosahedron args={[1, 0]} position={position} scale={scale}>
      <meshStandardMaterial color={color} wireframe transparent opacity={0.3} />
    </Icosahedron>
  </Float>
);

const ServicesBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#38bdf8" />
      <FloatingShape position={[-5, 2, -2]} color="#0ea5e9" scale={1.5} delay={0} />
      <FloatingShape position={[6, -3, -4]} color="#7dd3fc" scale={2} delay={1} />
      <FloatingShape position={[0, 4, -8]} color="#0369a1" scale={1} delay={2} />
      <FloatingShape position={[-6, -4, 0]} color="#38bdf8" scale={0.8} delay={3} />
      <FloatingShape position={[4, 3, 2]} color="#0284c7" scale={0.5} delay={1.5} />
    </Canvas>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-slate-950 overflow-hidden">
      <ServicesBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-azure-400 tracking-wide uppercase mb-2"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white"
          >
            Design & Code Solutions
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-azure-500/30 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-azure-500/10"
            >
              <div className="w-14 h-14 bg-azure-500/10 rounded-xl flex items-center justify-center text-azure-400 group-hover:bg-azure-500 group-hover:text-white transition-colors duration-300 mb-6">
                {iconMap[service.icon]}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-azure-300 transition-colors">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;