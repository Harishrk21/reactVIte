import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// Floating Particles Component
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 8,
      delay: Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// Animated Element Component
const AnimatedElement = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 100);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-12 md:pt-16 pb-8">
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-slate-900/20"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 md:w-64 md:h-64 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-12">

          {/* Company Info - Full width on mobile, then spans 2 columns */}
          <AnimatedElement delay={1}>
            <div className="md:col-span-2 lg:col-span-2">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Chetana Business Solutions
                </span>
              </h3>
              <p className="mb-4 md:mb-6 text-gray-300 leading-relaxed text-sm md:text-base">
                Providing comprehensive financial solutions to businesses since 2010. Your trusted
                partner for growth and success.
              </p>
              <div className="flex gap-3 md:gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=100094696056852" 
                  aria-label="Facebook" 
                  className="group p-2 md:p-3 rounded-lg bg-white/10 border border-white/20 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook size={18} className="group-hover:text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/chetana-business-solutions-148452283/" 
                  aria-label="LinkedIn" 
                  className="group p-2 md:p-3 rounded-lg bg-white/10 border border-white/20 hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={18} className="group-hover:text-white" />
                </a>
                <a 
                  href="https://www.instagram.com/chetanabusinesssolutions/?igshid=NGExMmI2YTkyZg%3D%3D" 
                  aria-label="Instagram" 
                  className="group p-2 md:p-3 rounded-lg bg-white/10 border border-white/20 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram size={18} className="group-hover:text-white" />
                </a>
              </div>
            </div>
          </AnimatedElement>

          {/* Quick Links - Full width on mobile, then normal */}
          <AnimatedElement delay={2}>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold">
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Quick Links
                </span>
              </h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:gap-y-3 md:block">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/about', label: 'About Us' },
                  { to: '/loans/business', label: 'Business Loans' },
                  { to: '/loans/msme', label: 'MSME Loans' },
                  { to: '/blog', label: 'Blog' },
                  { to: '/contact', label: 'Contact' },
                  { to: '/terms', label: 'Terms Of Service' },
                  { to: '/privacy-policy', label: 'Privacy Policy' },
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.to} 
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base inline-block py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>

          {/* Useful Tools - Full width on mobile, then normal */}
          <AnimatedElement delay={3}>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Useful Tools
                </span>
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  { href: 'https://www.cibil.com/freecibilscore', label: 'Check CIBIL Score' },
                  { href: 'https://www.rbi.org.in/', label: 'RBI Guidelines' },
                  { href: 'https://www.calculator.net/finance-calculator.html', label: 'Finance Calculators' },
                ].map((tool, index) => (
                  <li key={index}>
                    <a 
                      href={tool.href}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base inline-block py-1"
                    >
                      {tool.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>

          {/* Loan Products - Full width on mobile, then normal */}
          <AnimatedElement delay={4}>
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Our Loan Products
                </span>
              </h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:gap-y-3 md:block">
                {[
                  { to: '/loans/business', label: 'Business Loans' },
                  { to: '/loans/sme', label: 'MSME Loans' },
                  { to: '/loans/working-capital', label: 'Working Capital' },
                  { to: '/loans/project-finance', label: 'Project Finance' },
                  { to: '/loans/personal', label: 'Personal Loan' },
                  { to: '/loans/cgtmse', label: 'CGTMSE Loan' },
                  { to: '/loans/cheque-based', label: 'Cheque Based' },
                ].map((loan, index) => (
                  <li key={index}>
                    <a 
                      href={loan.to} 
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base inline-block py-1"
                    >
                      {loan.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>

          {/* Contact - Full width on mobile, spans 2 columns on md+ */}
          <AnimatedElement delay={5}>
            <div className="md:col-span-2 lg:col-span-2 xl:col-span-1 space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h3>
              <div className="space-y-4 md:space-y-5">
                <div className="group">
                  <div className="flex items-center mb-1 md:mb-2">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 mr-3 flex-shrink-0">
                      <MapPin size={16} className="text-white" />
                    </div>
                    <span className="text-gray-400 text-xs uppercase tracking-wide font-medium">Address</span>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed pl-11">
                    No.20, Ground floor, 1st Main Rd, Srinivasa Nagar, Kolathur, Chennai, Tamil Nadu 600099
                  </p>
                </div>
                
                <div className="group">
                  <div className="flex items-center mb-1 md:mb-2">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 mr-3 flex-shrink-0">
                      <Phone size={16} className="text-white" />
                    </div>
                    <span className="text-gray-400 text-xs uppercase tracking-wide font-medium">Phone</span>
                  </div>
                  <a 
                    href="tel:+919841078770" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base pl-11 block"
                  >
                    +91 9841078770
                  </a>
                </div>
                
                <div className="group">
                  <div className="flex items-center mb-1 md:mb-2">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 mr-3 flex-shrink-0">
                      <Mail size={16} className="text-white" />
                    </div>
                    <span className="text-gray-400 text-xs uppercase tracking-wide font-medium">Email</span>
                  </div>
                  <a 
                    href="mailto:pradeep@cbsgroups.in" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base pl-11 block"
                  >
                    pradeep@cbsgroups.in
                  </a>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* Copyright */}
        <AnimatedElement delay={6}>
          <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/20">
            <div className="text-center">
              <p className="text-gray-400 text-xs md:text-sm">
                © {new Date().getFullYear()} 
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold mx-1">
                  Chetana Business Solutions
                </span>
                . All rights reserved.
              </p>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </footer>
  );
};

export default Footer;