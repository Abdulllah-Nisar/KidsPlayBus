import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bus, Phone, Mail, Clock, Instagram, Facebook, Music2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Price & Packages', path: '/pricing' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Area Covered', path: '/map' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto glass rounded-full px-8 py-3 flex items-center justify-between shadow-2xl">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Bus className="text-brand-purple" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-brand-purple">KIDS PLAY BUS</span>
        </Link>
        
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-brand-purple ${
                  location.pathname === item.path ? 'text-brand-purple' : 'text-slate-600'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="bg-brand-purple text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95"
        >
          Book Now
        </Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-purple text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center">
              <Bus className="text-brand-purple" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">KIDS PLAY BUS</span>
          </div>
          <p className="text-slate-300 leading-relaxed mb-6">
            Kids play bus is a family run business since 2014 with 100s of satisfied customers. 
            It is a soft play area in Double decker bus with an eating area inside.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-purple transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-purple transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-purple transition-all">
              <Music2 size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-xl mb-6">Quick Links</h3>
          <ul className="space-y-4 text-slate-300">
            <li><Link to="/" className="hover:text-brand-yellow transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-brand-yellow transition-colors">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-brand-yellow transition-colors">Price And Packages</Link></li>
            <li><Link to="/about" className="hover:text-brand-yellow transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-yellow transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-xl mb-6">Contact Us</h3>
          <ul className="space-y-4 text-slate-300">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-yellow" />
              <span>07888 687 613</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-yellow" />
              <span>info@kidsplaybus.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-brand-yellow" />
              <span>Mon - Fri: 09:00 - 20:00</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-slate-400 text-sm">
        <p>© 2026 Kidsplaybus. All rights reserved.</p>
      </div>
    </footer>
  );
}
