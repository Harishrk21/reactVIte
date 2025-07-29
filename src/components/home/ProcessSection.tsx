import React from 'react';
import { ClipboardCheck, FileSearch, Building, CheckCircle } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardCheck size={32} />,
      title: 'Apply Online',
      description: 'Fill out our simple online application form with your business details and loan requirements.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: <FileSearch size={32} />,
      title: 'Document Verification',
      description: 'Submit the required documents for our team to verify your eligibility and business profile.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: <Building size={32} />,
      title: 'Loan Approval',
      description: 'Get your loan approved within 48-72 hours with transparent terms and competitive rates.',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/10 to-teal-500/10'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Disbursement',
      description: 'Receive the approved loan amount directly in your business bank account.',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        {/* H2 for SEO structure */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Simple 4-Step Loan Process
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We've streamlined our loan application and approval process to get you funded quickly with minimal hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Progress Line with Gradient */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 via-emerald-500 to-orange-500 z-0 rounded-full opacity-60">
            <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-400 to-orange-400 animate-pulse rounded-full" style={{ width: '100%' }}></div>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 group">
              <div className={`backdrop-blur-lg bg-gradient-to-br ${step.bgGradient} border border-white/10 rounded-2xl p-6 text-center h-full transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-purple-500/20`}>
                {/* Animated Icon Container */}
                <div className={`bg-gradient-to-r ${step.gradient} w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white mx-auto transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg`}>
                  {step.icon}
                </div>
                
                {/* Step Number */}
                <div className={`bg-gradient-to-r ${step.gradient} text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-sm transform transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                  {index + 1}
                </div>
                
                {/* H3 for each step */}
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {step.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20">
            Start Your Application
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;