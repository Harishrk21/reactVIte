import React from 'react';
import { Clock, FileCheck, ShieldCheck, ThumbsUp, Star, Award } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Clock size={32} />,
      title: 'Quick Processing',
      description: 'Minimal documentation process with easy and speedy online application system.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      glowColor: 'shadow-purple-500/50'
    },
    {
      icon: <FileCheck size={32} />,
      title: 'CIBIL Support',
      description: 'We provide support even if you have CIBIL issues, ensuring you get the financial help you need.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      glowColor: 'shadow-blue-500/50'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Established Brand',
      description: 'Well-established brand with a proven track record of helping businesses grow across multiple cities.',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/10 to-teal-500/10',
      glowColor: 'shadow-emerald-500/50'
    },
    {
      icon: <ThumbsUp size={32} />,
      title: 'Customer Service',
      description: 'Exceptional customer service with personalized attention to your financial needs.',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10',
      glowColor: 'shadow-orange-500/50'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* H2 for SEO structure */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="text-yellow-400" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent">
              Why Choose Chetana Business Solutions
            </h2>
            <Star className="text-yellow-400" size={32} />
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We are the leading private finance company providing comprehensive financial support across Chennai, Pondicherry, Hyderabad, and Bangalore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group h-full transform transition-all duration-500 hover:scale-105"
              style={{ 
                animationDelay: `${index * 0.1}s` 
              }}
            >
              <div className={`backdrop-blur-lg bg-gradient-to-br ${feature.bgGradient} border border-white/10 rounded-2xl p-6 h-full transform transition-all duration-500 hover:shadow-2xl hover:${feature.glowColor} hover:rotate-1 relative overflow-hidden`}>
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent transform rotate-12 scale-150"></div>
                </div>

                {/* Icon Container */}
                <div className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg relative z-10`}>
                  {feature.icon}
                  
                  {/* Icon Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-lg opacity-50 -z-10 transform scale-150 group-hover:scale-200 transition-transform duration-300`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* H3 for each feature */}
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '1000+', label: 'Happy Clients', gradient: 'from-purple-500 to-pink-500' },
            { number: '₹500Cr+', label: 'Loans Disbursed', gradient: 'from-blue-500 to-cyan-500' },
            { number: '4+', label: 'Cities Served', gradient: 'from-emerald-500 to-teal-500' },
            { number: '48hrs', label: 'Approval Time', gradient: 'from-orange-500 to-red-500' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of satisfied clients who have transformed their businesses with our financial solutions.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20">
              Choose Chetana Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;