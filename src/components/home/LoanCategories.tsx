import React from 'react';
import { Building2, Factory, Wallet, PieChart, FileText, User, Shield } from 'lucide-react';

const LoanCategories = () => {
  const loans = [
    {
      title: 'Cheque Based Loans',
      description: 'We help you expand and grow your business with minimal documentation, easy online process, and timely execution. CIBIL issues? We\'re here to support you.',
      icon: FileText,
      link: '/loans/cheque-based',
      gradient: 'from-purple-600 via-purple-700 to-indigo-800',
      accent: 'bg-purple-500/20 border-purple-400/30'
    },
    {
      title: 'Business Loans',
      description: 'Specifically intended for business purposes, our business loans create debt that will be repaid with added interest, helping you achieve your business goals.',
      icon: Building2,
      link: '/loans/business',
      gradient: 'from-blue-600 via-blue-700 to-cyan-800',
      accent: 'bg-blue-500/20 border-blue-400/30'
    },
    {
      title: 'SME Loans',
      description: 'Specialized funding for small and medium-sized enterprises, representing a major function of the general business finance market with competitive pricing.',
      icon: Factory,
      link: '/loans/msme',
      gradient: 'from-emerald-600 via-emerald-700 to-teal-800',
      accent: 'bg-emerald-500/20 border-emerald-400/30'
    },
    {
      title: 'Working Capital Loan',
      description: 'Secured working capital loans backed by collateral including real estate, equipment, vehicles, and in some cases, personal assets.',
      icon: PieChart,
      link: '/loans/working-capital',
      gradient: 'from-orange-600 via-orange-700 to-red-800',
      accent: 'bg-orange-500/20 border-orange-400/30'
    },
    {
      title: 'Personal Loan',
      description: 'Personal loans available from major banks including Axis Bank, Yes Bank, ICICI Bank, HDFC Bank, IDFC Bank, SCB Bank, CSB Bank, Bandhan Bank, and Kotak Mahindra Bank.',
      icon: User,
      link: '/loans/personal',
      gradient: 'from-pink-600 via-pink-700 to-rose-800',
      accent: 'bg-pink-500/20 border-pink-400/30'
    },
    {
      title: 'CGTMSE Loan',
      description: 'Collateral-free loans under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) scheme, ideal for startups and small businesses looking to grow without security.',
      icon: Shield,
      link: '/loans/cgtmse',
      gradient: 'from-violet-600 via-violet-700 to-purple-800',
      accent: 'bg-violet-500/20 border-violet-400/30'
    }
  ];

  const LoanCard = ({ loan, index }) => {
    const Icon = loan.icon;
    
    return (
      <div 
        className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${loan.gradient} p-8 shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl`}
        style={{
          animationDelay: `${index * 100}ms`,
          animation: 'fadeInUp 0.8s ease-out forwards'
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500"></div>
        
        {/* Icon with animated background */}
        <div className={`relative mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl ${loan.accent} border backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-200 transition-colors duration-300">
            {loan.title}
          </h3>
          <p className="text-white/90 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
            {loan.description}
          </p>
          
          {/* CTA Button */}
          <div className="flex items-center justify-between">
            <a
              href={loan.link}
              className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/30"
            >
              Learn More
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            
            {/* Decorative arrow */}
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-8 shadow-2xl">
            <Wallet className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-6 leading-tight">
            Financial Solutions
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              For Every Need
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Embark on a Thriving Financial Journey with{' '}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">
              Chetana Business Solutions
            </span>
            : Unlocking the Power of Personalized Loans for Your Unique Dreams and Aspirations
          </p>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center mt-12 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-64"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full mx-4"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent w-64"></div>
          </div>
        </div>
        
        {/* Loan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {loans.map((loan, index) => (
            <LoanCard key={index} loan={loan} index={index} />
          ))}
        </div>
        
        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 cursor-pointer">
            Ready to Get Started?
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default LoanCategories;