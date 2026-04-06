import React from 'react';
import { motion } from 'motion/react';
import { PACKAGES } from '../constants';
import { Check, Star } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-black text-brand-purple mb-6">3D Arcade Store</h1>
          <p className="text-slate-500 text-xl">Choose the perfect package for your adventure.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {PACKAGES.map((pkg, idx) => (
            <div key={pkg.name} className="flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${
                  idx === 0 ? 'bg-slate-300 text-slate-600' : 'bg-amber-400 text-amber-900'
                }`}>
                  <Star fill="currentColor" />
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold text-brand-purple">{pkg.name}</h2>
                  <p className="text-slate-500 font-medium">{pkg.time}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pkg.options.map((opt) => (
                  <motion.div
                    key={opt.duration}
                    whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                    className={`p-8 rounded-[2rem] shadow-xl relative overflow-hidden group border-2 ${
                      idx === 0 
                        ? 'bg-gradient-to-br from-slate-100 to-slate-200 border-slate-300' 
                        : 'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200'
                    }`}
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Star size={80} />
                    </div>
                    
                    <h3 className="font-display font-bold text-lg mb-2 text-slate-800">{opt.duration}</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-4xl font-black text-brand-purple">£{opt.price}</span>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {opt.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check size={16} className="mt-0.5 text-brand-purple shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full py-3 rounded-xl bg-brand-purple text-white font-bold shadow-lg hover:shadow-brand-purple/20 transition-all">
                      Select Package
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Slushie Machine Section */}
        <section className="glass rounded-[3rem] p-12 md:p-20 relative overflow-hidden bg-brand-purple text-white">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-brand-yellow text-brand-purple font-bold text-sm mb-6">
                PARTY ADD-ON
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Slushie Machine for Your Party!</h2>
              <p className="text-xl text-brand-yellow/80 mb-8">
                Make your little one's party even cooler with our Slushie Machine. Kids love it and parents do too!
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                  <div className="text-3xl font-black mb-1">£30</div>
                  <div className="text-sm text-white/60">1 Flavour (Unlimited)</div>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                  <div className="text-3xl font-black mb-1">£50</div>
                  <div className="text-sm text-white/60">2 Flavours (Unlimited)</div>
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-64 h-96 bg-slate-800 rounded-3xl border-4 border-slate-700 shadow-2xl relative overflow-hidden"
              >
                {/* Stylized Slushie Machine */}
                <div className="absolute top-4 left-4 right-4 h-48 bg-blue-400/30 rounded-2xl overflow-hidden">
                  <motion.div 
                    animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-t from-blue-500 to-blue-300 opacity-60"
                  />
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-12 h-20 bg-slate-700 rounded-lg" />
                <div className="absolute bottom-4 left-4 right-4 h-4 bg-slate-900 rounded-full" />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
