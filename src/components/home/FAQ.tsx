import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What types of loans does Chetana Business Solutions offer?',
      answer: 'We offer a variety of loan products including Business Loans, MSME Loans, Working Capital Loans, and Project Finance. Each is tailored to meet specific business needs with flexible terms and competitive rates.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      question: 'How long does the loan approval process take?',
      answer: 'Our streamlined process allows for loan approval within 48-72 hours for most applications. Once approved, disbursement typically happens within 1-2 business days, depending on the loan amount and documentation.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      question: 'What documents are required for a business loan application?',
      answer: 'Required documents typically include business registration proof, PAN card, GST registration (if applicable), bank statements for the last 6 months, ITR for the last 2 years, and KYC documents of the directors/partners/proprietors.',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/10 to-teal-500/10'
    },
    {
      question: 'Is there a minimum business vintage required to qualify for a loan?',
      answer: 'Yes, most of our loan products require a minimum business vintage of 1-2 years. However, we do have special programs for startups and newer businesses with alternative eligibility criteria.',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10'
    },
    {
      question: 'Are there any processing fees or hidden charges?',
      answer: 'We charge a nominal processing fee which varies based on the loan type and amount. There are no hidden charges, and all applicable fees are clearly communicated before loan finalization. We pride ourselves on transparency in all our dealings.',
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-500/10 to-purple-500/10'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="text-purple-400" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our loan products and processes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`group mb-4 transform transition-all duration-500 hover:scale-102 ${
                index % 2 === 0 ? 'animate-pulse' : ''
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationDuration: '3s'
              }}
            >
              <div className={`backdrop-blur-lg bg-gradient-to-br ${faq.bgGradient} border border-white/10 rounded-2xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10`}>
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left group-hover:bg-white/5 transition-all duration-300"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${faq.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg transform transition-all duration-300 group-hover:scale-110`}>
                      {index + 1}
                    </div>
                    <span className="text-white font-semibold text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`transform transition-all duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                    {activeIndex === index ? (
                      <ChevronUp size={20} className={`text-transparent bg-gradient-to-r ${faq.gradient} bg-clip-text`} />
                    ) : (
                      <ChevronDown size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <div className={`border-l-2 border-gradient-to-b ${faq.gradient} pl-4 ml-4`}>
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-16 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute bottom-4 left-16 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our expert team is here to help you find the perfect financing solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20">
                Contact Our Experts
              </button>
              <button className="bg-transparent border-2 border-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;