import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-black text-brand-purple mb-6">3D Reception Desk</h1>
          <p className="text-slate-500 text-xl">Get in touch to book your next adventure.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactCard 
              icon={<Phone className="text-brand-purple" />} 
              title="Call Us" 
              value="07888 687 613" 
              delay={0.1}
              shake
            />
            <ContactCard 
              icon={<Mail className="text-brand-purple" />} 
              title="Email Us" 
              value="info@kidsplaybus.com" 
              delay={0.2}
              open
            />
            <ContactCard 
              icon={<Clock className="text-brand-purple" />} 
              title="Opening Hours" 
              value="Mon - Fri: 09:00 - 20:00" 
              delay={0.3}
              rotate
            />
            <div className="bg-brand-purple p-8 rounded-[2.5rem] text-white flex flex-col justify-center items-center text-center shadow-xl">
              <h3 className="font-display font-bold text-xl mb-2">Ready to Play?</h3>
              <p className="text-white/60 text-sm mb-6">Our team is waiting to make your event special.</p>
              <button className="w-full py-3 bg-brand-yellow text-brand-purple font-bold rounded-xl hover:scale-105 transition-transform">
                Check Availability
              </button>
            </div>
          </div>

          {/* 3D-ish Contact Form */}
          <motion.div
            initial={{ rotateY: 15, rotateX: 5 }}
            whileHover={{ rotateY: 0, rotateX: 0 }}
            className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-slate-200 relative overflow-hidden"
          >
            {/* Clipboard Clip */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-10 bg-slate-800 rounded-b-2xl shadow-lg flex items-center justify-center">
              <div className="w-16 h-1 bg-slate-600 rounded-full" />
            </div>

            <form className="space-y-6 mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 ml-2">Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-brand-purple focus:bg-white rounded-2xl outline-none transition-all" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 ml-2">Email</label>
                  <input type="email" className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-brand-purple focus:bg-white rounded-2xl outline-none transition-all" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 ml-2">Phone Number</label>
                <input type="tel" className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-brand-purple focus:bg-white rounded-2xl outline-none transition-all" placeholder="Your Phone" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 ml-2">Message</label>
                <textarea rows={4} className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-brand-purple focus:bg-white rounded-2xl outline-none transition-all resize-none" placeholder="Tell us about your event..."></textarea>
              </div>
              <button className="w-full py-5 bg-brand-purple text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-brand-purple/20 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ContactCard({ icon, title, value, delay, shake, open, rotate }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-slate-100 group"
    >
      <motion.div 
        animate={
          shake ? { rotate: [0, 10, -10, 10, -10, 0] } : 
          rotate ? { rotate: 360 } : {}
        }
        transition={
          shake ? { duration: 0.5, repeat: Infinity, repeatDelay: 2 } :
          rotate ? { duration: 10, repeat: Infinity, ease: "linear" } : {}
        }
        className="w-14 h-14 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
      >
        {icon}
      </motion.div>
      <h3 className="font-display font-bold text-slate-400 text-sm mb-1">{title}</h3>
      <p className="font-display font-bold text-brand-purple text-lg break-words">{value}</p>
    </motion.div>
  );
}
