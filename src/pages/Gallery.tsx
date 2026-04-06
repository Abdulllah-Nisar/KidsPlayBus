import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

const IMAGES = [
  'https://picsum.photos/seed/bus1/800/600',
  'https://picsum.photos/seed/bus2/800/600',
  'https://picsum.photos/seed/bus3/800/600',
  'https://picsum.photos/seed/bus4/800/600',
  'https://picsum.photos/seed/bus5/800/600',
  'https://picsum.photos/seed/bus6/800/600',
  'https://picsum.photos/seed/bus7/800/600',
  'https://picsum.photos/seed/bus8/800/600',
  'https://picsum.photos/seed/bus9/800/600',
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-slate-100 min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-black text-brand-purple mb-6">Virtual Walkthrough</h1>
          <p className="text-slate-500 text-xl">Explore the magic inside our play bus.</p>
        </div>

        <div className="relative h-[600px] flex items-center justify-center perspective-1000">
          <div className="flex gap-8 overflow-x-auto pb-20 px-20 no-scrollbar snap-x">
            {IMAGES.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, rotateY: 0, z: 100 }}
                initial={{ rotateY: (idx - 4) * 10, z: -Math.abs(idx - 4) * 50 }}
                className="min-w-[300px] h-[400px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer relative group snap-center"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-purple shadow-xl">
                    <ZoomIn size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, rotateX: 45 }}
              animate={{ scale: 1, rotateX: 0 }}
              exit={{ scale: 0.8, rotateX: -45 }}
              className="relative max-w-5xl w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Full view" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <button 
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
