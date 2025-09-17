import React from 'react';
import { Leaf, Shield, Heart, Award } from 'lucide-react';

const BrandPromises: React.FC = () => {
  const promises = [
    {
      icon: Leaf,
      title: '100% Natural, Plant-Based Ingredients',
      description: 'Sourced directly from nature with no artificial additives or synthetic compounds',
      color: 'text-green-600 bg-green-50'
    },
    {
      icon: Shield,
      title: 'No Preservatives. No Chemicals',
      description: 'Pure, clean nutrition without harmful preservatives or chemical processing',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      icon: Heart,
      title: 'Nutritionally Balanced for All Ages',
      description: 'Carefully formulated to meet nutritional needs from children to elderly',
      color: 'text-red-600 bg-red-50'
    },
    {
      icon: Award,
      title: 'Traditional Recipes, Global Standards',
      description: 'Ancient wisdom meets modern quality standards for premium nutrition',
      color: 'text-orange-600 bg-orange-50'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-800">Brand Promises</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every product carries our commitment to quality, tradition, and your family's health
          </p>
        </div>

        {/* Promises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((promise, index) => {
            const IconComponent = promise.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-green-200"
              >
                <div className={`inline-flex p-3 rounded-xl ${promise.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-800 transition-colors duration-300">
                  {promise.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {promise.description}
                </p>

                {/* Animated underline */}
                <div className="w-full h-0.5 bg-gray-100 mt-4 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-orange-500 w-0 group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white px-8 py-4 rounded-xl shadow-lg">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-gray-900">Quality Guaranteed</div>
              <div className="text-xs text-gray-500">1000+ satisfied families</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPromises;