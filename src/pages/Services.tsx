import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <div className="bg-slate-900 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-32">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-black text-white mb-6"
        >
          Adventure Hub
        </motion.h1>
        <p className="text-slate-400 text-xl">Scroll down to explore our services flying in from the 3D space.</p>
      </div>

      <div className="space-y-64 pb-64">
        {SERVICES.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}

function ServiceSection({ service, index }: { service: any, index: number }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const z = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        z,
        opacity,
        scale,
        perspective: 1000
      }}
      className="max-w-5xl mx-auto"
    >
      <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
        <div className="flex-1">
          <div className="glass p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group">
            <div 
              className="absolute top-0 left-0 w-2 h-full" 
              style={{ backgroundColor: service.color }}
            />
            <h2 className="text-4xl font-display font-bold text-white mb-6">{service.title}</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {service.description}
            </p>
            <button 
              className="px-8 py-3 rounded-xl font-bold text-white transition-all hover:scale-105 active:scale-95"
              style={{ backgroundColor: service.color }}
            >
              Learn More
            </button>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <motion.div
            whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? 10 : -10 }}
            className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10"
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          {/* Decorative 3D-like elements */}
          {service.id === 'birthday' && (
            <div className="absolute -top-10 -right-10 w-32 h-32 animate-bounce">
              <span className="text-6xl">🎈</span>
            </div>
          )}
          {service.id === 'wedding' && (
            <div className="absolute -bottom-10 -left-10 w-32 h-32 animate-pulse">
              <span className="text-6xl">💍</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
