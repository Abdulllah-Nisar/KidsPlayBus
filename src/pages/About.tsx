import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Target, History } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-slate-100 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-black text-brand-purple mb-6">3D Storybook</h1>
          <p className="text-slate-500 text-xl">The journey of Kids Play Bus since 2014.</p>
        </div>

        <div className="relative bg-white rounded-[4rem] shadow-2xl p-12 md:p-24 overflow-hidden border-b-[20px] border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ rotateY: -30, x: -50 }}
              whileInView={{ rotateY: 0, x: 0 }}
              transition={{ duration: 1 }}
              className="relative aspect-square bg-brand-yellow/10 rounded-3xl flex items-center justify-center"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-4/5 h-4/5 bg-brand-purple rounded-2xl shadow-2xl flex flex-col items-center justify-center p-8 text-white text-center"
                >
                  <BookOpen size={64} className="mb-6 text-brand-yellow" />
                  <h3 className="text-3xl font-display font-bold mb-4">Our Mission</h3>
                  <p className="text-white/80 leading-relaxed">
                    We guarantee for our guests to have an unlimited fun inside the bus.
                  </p>
                </motion.div>
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-10 -right-10 text-8xl"
              >
                🎈
              </motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-10 -left-10 text-8xl"
              >
                🎂
              </motion.div>
            </motion.div>

            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-2xl bg-brand-purple text-white flex items-center justify-center shrink-0 shadow-lg">
                  <History size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-brand-purple mb-2">Family Run Business</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Kids play bus is a family run business since 2014 with 100s of satisfied customers. 
                    We share values, and long-term vision that comes with family ties.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-2xl bg-brand-yellow text-brand-purple flex items-center justify-center shrink-0 shadow-lg">
                  <Target size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-brand-purple mb-2">Our Vision</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We believe in providing equal opportunities for every child to enjoy and celebrate special occasions, 
                    regardless of their parent's financial situation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-40 relative pb-20">
          <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-slate-800 -translate-x-1/2 rounded-full overflow-hidden">
            <div className="absolute inset-0 flex flex-col justify-around items-center">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-1 h-8 bg-white/50" />
              ))}
            </div>
          </div>

          <div className="space-y-32">
            {[
              { year: '2014', title: 'The Beginning', desc: 'Our first bus hit the road in Aylesbury.' },
              { year: '2018', title: 'Expansion', desc: 'Added our second double-decker with more play features.' },
              { year: '2022', title: '1000+ Parties', desc: 'Celebrated a major milestone of bringing joy to thousands.' },
              { year: 'Present', title: 'Innovation', desc: 'Launching our new 3D immersive digital experience.' },
            ].map((item, i) => (
              <div key={item.year} className={`flex items-center gap-20 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="flex-1 text-right">
                  {i % 2 === 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="glass p-8 rounded-3xl inline-block text-left"
                    >
                      <span className="text-brand-purple font-black text-4xl block mb-2">{item.year}</span>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </motion.div>
                  )}
                </div>
                <div className="w-12 h-12 rounded-full bg-brand-yellow border-4 border-slate-800 z-10 shadow-xl flex items-center justify-center">
                   <div className="w-4 h-4 rounded-full bg-brand-purple" />
                </div>
                <div className="flex-1">
                  {i % 2 !== 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="glass p-8 rounded-3xl inline-block"
                    >
                      <span className="text-brand-purple font-black text-4xl block mb-2">{item.year}</span>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
