import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Bus } from 'lucide-react';

const LOCATIONS = [
  { name: 'Aylesbury', x: 40, y: 50 },
  { name: 'Milton Keynes', x: 60, y: 30 },
  { name: 'Oxford', x: 20, y: 70 },
  { name: 'High Wycombe', x: 45, y: 80 },
  { name: 'Luton', x: 75, y: 60 },
  { name: 'Bicester', x: 30, y: 40 },
];

export default function AreaMap() {
  const [hoveredLocation, setHoveredLocation] = useState<typeof LOCATIONS[0] | null>(null);

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-black text-brand-purple mb-6">Interactive Map</h1>
          <p className="text-slate-500 text-xl">We cover a 30-mile radius from HP17 8TT.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-4">
            {LOCATIONS.map((loc) => (
              <motion.button
                key={loc.name}
                onMouseEnter={() => setHoveredLocation(loc)}
                className={`w-full p-6 rounded-2xl text-left transition-all flex items-center justify-between group ${
                  hoveredLocation?.name === loc.name 
                    ? 'bg-brand-purple text-white shadow-xl scale-105' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span className="font-display font-bold text-lg">{loc.name}</span>
                <MapPin size={20} className={hoveredLocation?.name === loc.name ? 'text-brand-yellow' : 'text-slate-400'} />
              </motion.button>
            ))}
          </div>

          <div className="lg:col-span-2 aspect-square md:aspect-video bg-slate-100 rounded-[3rem] relative overflow-hidden border-8 border-slate-200 shadow-inner">
            {/* Stylized 3D-ish Map Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-200 via-slate-100 to-slate-50 opacity-50" />
            
            {/* Grid lines */}
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* Location Pins */}
            {LOCATIONS.map((loc) => (
              <motion.div
                key={loc.name}
                style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <motion.div
                  animate={{ 
                    y: hoveredLocation?.name === loc.name ? -10 : 0,
                    scale: hoveredLocation?.name === loc.name ? 1.5 : 1
                  }}
                  className={`relative cursor-pointer ${hoveredLocation?.name === loc.name ? 'text-brand-purple' : 'text-slate-400'}`}
                >
                  <MapPin size={32} fill="currentColor" fillOpacity={0.2} />
                  {hoveredLocation?.name === loc.name && (
                    <motion.div 
                      layoutId="label"
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-brand-purple text-white text-xs font-bold rounded-full whitespace-nowrap shadow-lg"
                    >
                      {loc.name}
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}

            {/* Driving Bus Animation */}
            {hoveredLocation && (
              <motion.div
                initial={{ x: '50%', y: '50%' }}
                animate={{ x: `${hoveredLocation.x}%`, y: `${hoveredLocation.y}%` }}
                transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              >
                <div className="w-12 h-8 bg-brand-yellow rounded-lg shadow-xl flex items-center justify-center border-2 border-brand-purple">
                  <Bus size={16} className="text-brand-purple" />
                </div>
                {/* Trail effect */}
                <motion.div 
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute inset-0 bg-brand-yellow/50 rounded-lg"
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
