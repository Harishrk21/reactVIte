import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialCard: React.FC<{
  name: string;
  role: string;
  content: string;
  rating: number;
  gradient: string;
  bgGradient: string;
}> = ({ name, role, content, rating, gradient, bgGradient }) => {
  return (
    <div className={`group backdrop-blur-lg bg-gradient-to-br ${bgGradient} border border-white/10 rounded-2xl p-6 h-full transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-purple-500/20`}>
      {/* Quote Mark */}
      <div className={`text-6xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent opacity-50 leading-none mb-4`}>
        "
      </div>
      
      {/* Content */}
      <p className="text-gray-300 mb-6 italic group-hover:text-gray-200 transition-colors duration-300">
        {content}
      </p>
      
      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${i < rating ? `text-yellow-400 fill-yellow-400` : 'text-gray-500'} transition-colors duration-300`}
          />
        ))}
      </div>
      
      {/* Author Info */}
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center text-white font-bold shadow-lg`}>
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
            {name}
          </h4>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      role: 'Owner, SR Electronics',
      content: 'Chetana Business Solutions helped me secure funding when my business needed it the most. Their quick approval process and competitive rates made all the difference. Highly recommend!',
      rating: 5,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      name: 'Priya Patel',
      role: 'Founder, GreenLeaf Exports',
      content: 'I was impressed by the personalized service and attention to detail. The team helped me understand the best financing options for my export business. The process was smooth from start to finish.',
      rating: 5,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      name: 'Vikram Singh',
      role: 'CEO, Innovate Technologies',
      content: 'As a tech startup, we needed quick capital to scale our operations. Chetana provided us with a tailored financing solution that perfectly matched our growth trajectory.',
      rating: 4,
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/10 to-teal-500/10'
    },
    {
      name: 'Meera Joshi',
      role: 'Director, Sunshine Garments',
      content: 'Working with Chetana for our business expansion loan was a breeze. Their transparent process and expert guidance made financing simple and stress-free.',
      rating: 5,
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10'
    },
    {
      name: 'Sunil Mehta',
      role: 'Partner, Global Logistics',
      content: 'The working capital solution provided by Chetana helped us manage our cash flow efficiently during a challenging period. Their support was instrumental in our recovery.',
      rating: 4,
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-500/10 to-purple-500/10'
    }
  ];

  const slidesPerView = 3;
  const maxSlides = Math.max(0, testimonials.length - slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlides : prev - 1));
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what some of our satisfied clients have to say about their experience with Chetana Business Solutions.
          </p>
        </div>

        <div className="relative">
          {/* Testimonials Grid */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0" style={{ width: `${100 / slidesPerView}%` }}>
                  <div className="px-3">
                    <TestimonialCard
                      name={testimonial.name}
                      role={testimonial.role}
                      content={testimonial.content}
                      rating={testimonial.rating}
                      gradient={testimonial.gradient}
                      bgGradient={testimonial.bgGradient}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 backdrop-blur-sm border border-white/20"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 backdrop-blur-sm border border-white/20"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(maxSlides + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-6' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-6">
              Experience the same exceptional service that our clients rave about.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;