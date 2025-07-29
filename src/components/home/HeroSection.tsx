import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Shield, Zap, Users } from 'lucide-react';

const cbspg = null; // Background image removed

// Floating Particles Component
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 animate-pulse"
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

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    loanAmount: '',
    loanType: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccessMessage('✅ Your enquiry has been submitted successfully!');
      setFormData({ name: '', phone: '', loanAmount: '', loanType: '' });
      
      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error) {
      console.error(error);
      setSuccessMessage('❌ Submission error. Please try again.');
      setTimeout(() => setSuccessMessage(''), 5000);
    }
  };

  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-slate-900/40 z-0"></div>
      

      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10 pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <AnimatedElement>
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Leading Private Finance
                </span>
                <br />
                <span className="text-white">Solutions for</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Business Growth
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
                Welcome to Chetana Business Solutions, providing businesses with financial support
                across Chennai, Pondicherry, Hyderabad, and Bangalore. Specializing in unsecured
                business loans with minimal documentation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
                  <span className="relative z-10 flex items-center justify-center">
                    Apply Now
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="group relative px-8 py-4 backdrop-blur-sm bg-white/10 border border-white/20 text-white font-semibold rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-rotate-1">
                  Get Free Consultation
                </button>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <AnimatedElement delay={2}>
                  <div className="text-center p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">12+</div>
                    <div className="text-sm text-gray-300">Years of Experience</div>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement delay={3}>
                  <div className="text-center p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">₹500Cr+</div>
                    <div className="text-sm text-gray-300">Loans Disbursed</div>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement delay={4}>
                  <div className="text-center p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">500+</div>
                    <div className="text-sm text-gray-300">Happy Clients</div>
                  </div>
                </AnimatedElement>
              </div>

              {/* Feature Icons */}
              <div className="flex space-x-6 mt-8">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm">Secure</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm">Fast Approval</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">Growth Focused</span>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Right Column - Form */}
          <AnimatedElement delay={1}>
            <div className="relative">
              {/* Form Container */}
              <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Quick Loan Enquiry
                  </span>
                </h2>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                      placeholder="Your Phone"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-300 mb-2">
                      Loan Amount (₹)
                    </label>
                    <input
                      type="text"
                      id="loanAmount"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                      placeholder="Required Loan Amount"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="loanType" className="block text-sm font-medium text-gray-300 mb-2">
                      Loan Type
                    </label>
                    <select
                      id="loanType"
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                      required
                    >
                      <option value="" className="bg-slate-800 text-white">Select Loan Type</option>
                      <option value="cheque-based" className="bg-slate-800 text-white">Cheque Based Loan</option>
                      <option value="business" className="bg-slate-800 text-white">Business Loan</option>
                      <option value="sme" className="bg-slate-800 text-white">SME Loan</option>
                      <option value="working-capital" className="bg-slate-800 text-white">Working Capital</option>
                      <option value="personal" className="bg-slate-800 text-white">Personal Loan</option>
                    </select>
                  </div>

                  {successMessage && (
                    <div className="text-center p-3 rounded-xl backdrop-blur-sm bg-green-500/20 border border-green-500/30 text-green-300">
                      {successMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="group relative w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="flex items-center justify-center">
                      Submit Enquiry
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;