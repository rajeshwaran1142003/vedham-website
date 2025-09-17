import React from 'react';
import { Users, Clock, BookOpen } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: 'Traditional Wisdom',
      description: 'Recipes passed down through generations, refined with modern nutritional science for optimal health benefits.',
      stats: '200+ Years of Traditional Knowledge',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Family-Focused Nutrition',
      description: 'Products designed for every family member, from growing children to elderly parents, ensuring complete wellness.',
      stats: '1000+ Happy Families',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Clock,
      title: 'Convenient Health',
      description: 'Easy-to-prepare nutrition that fits into busy modern lifestyles without compromising on quality or taste.',
      stats: '5 Minutes Preparation Time',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-green-800">Vedham Eldix</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We combine the best of traditional Indian nutrition with modern convenience, 
            creating products that nourish your family while honoring ancestral wisdom.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-orange-500 mx-auto rounded-full" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${benefit.color}`} />
                </div>

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${benefit.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-800 transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Stats */}
                <div className={`inline-block bg-gradient-to-r ${benefit.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                  {benefit.stats}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Experience Traditional Nutrition?
          </h3>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of families who have made the switch to natural, preservative-free nutrition 
            that honors tradition while meeting modern needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919842909360"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;