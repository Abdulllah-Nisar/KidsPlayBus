import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'motion/react';
import { BusModel, FloatingCube } from '../components/ThreeComponents';
import { SERVICES } from '../constants';
import { Play, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="h-screen w-full relative overflow-hidden bg-gradient-to-b from-slate-100 to-white">
        <div className="absolute inset-0 z-0">
          <Canvas shadows>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            
            <Suspense fallback={null}>
              <BusModel />
              <Environment preset="city" />
              <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
            </Suspense>
            
            <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 1.5} />
          </Canvas>
        </div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-yellow text-brand-purple font-bold text-sm mb-6">
              THE BEST SOFT PLAY BUS IN YOUR AREA
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-black text-brand-purple leading-none mb-6">
              Wellcome To <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-pink-600">
                Kids Play Bus
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              Experience the ultimate mobile soft play adventure. We bring the fun to your doorstep with our fully equipped double-decker bus.
            </p>
            <div className="flex items-center gap-4 pointer-events-auto">
              <button className="bg-brand-purple text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
                Book Your Party <ArrowRight size={20} />
              </button>
              <button className="bg-white text-brand-purple px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
                <Play size={20} fill="currentColor" /> Watch Video
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3D Services Grid */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-purple mb-4">Our Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              We offer a range of packages tailored to make your special event unforgettable.
            </p>
          </div>

          <div className="h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl relative bg-slate-900">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 8]} />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              
              <Suspense fallback={null}>
                {SERVICES.map((service, i) => (
                  <FloatingCube
                    key={service.id}
                    title={service.title}
                    color={service.color}
                    position={[
                      (i - 2) * 2.5,
                      Math.sin(i) * 1,
                      0
                    ]}
                  />
                ))}
                <Environment preset="night" />
              </Suspense>
              <OrbitControls enableZoom={false} />
            </Canvas>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium animate-pulse">
              Drag to explore our 3D service cubes
            </div>
          </div>
        </div>
      </section>

      {/* Video Section with 3D Frame */}
      <section className="py-32 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-purple mb-8">Kids Play Bus Video</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our bus is a Volvo B7TL (Ex London Bus) which has been converted professionally into a soft play area for children's parties. 
              Including a Swirl slide, Ball pit, Rocking animals, Hanging snakes, Amazing Maze, Monkey bridge, Spider web, Rollers and lot more.
            </p>
            <ul className="space-y-4">
              {['Ages 2 to 11', 'Up to 18 children', 'Fully Insured', 'Professional Staff'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center text-brand-purple">
                    <ArrowRight size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Kids Play Bus Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-[12px] border-brand-purple/20 rounded-3xl group-hover:border-brand-purple/40 transition-colors"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
