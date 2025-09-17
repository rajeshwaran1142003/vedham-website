import React from 'react';
import { Quote } from 'lucide-react';

const FounderMessage: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 lg:aspect-w-3 lg:aspect-h-4">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Vijaya Edison - Founder of Vedham Eldix"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-400 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Message Content */}
            <div className="relative">
              <div className="mb-6">
                <Quote className="h-12 w-12 text-orange-500 mb-4" />
                <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">
                  A Message from Our Founder
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
              </div>

              <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
                "After two decades of teaching, I wanted to create natural, preservative-free nutrition 
                for every household. <span className="font-semibold text-green-800">Vedham means wisdom</span> - 
                food that nourishes both body and mind. Every product we craft carries the love of a mother 
                and the precision of a teacher."
              </blockquote>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-green-600 to-orange-500" />
                  <div>
                    <p className="text-xl font-bold text-green-800">Vijaya Edison</p>
                    <p className="text-green-600 font-medium">Founder & Nutrition Expert</p>
                    <p className="text-gray-600 text-sm">Former Educator, Nutrition Entrepreneur</p>
                  </div>
                </div>

                {/* Achievement Badges */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    20+ Years Teaching Experience
                  </div>
                  <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                    Traditional Recipe Expert
                  </div>
                  <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                    Family Nutrition Specialist
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-green-800">33+</div>
              <div className="text-gray-600 font-medium">Natural Ingredients</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-orange-600">100%</div>
              <div className="text-gray-600 font-medium">Plant-Based</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-yellow-600">0</div>
              <div className="text-gray-600 font-medium">Preservatives</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-green-700">1000+</div>
              <div className="text-gray-600 font-medium">Happy Families</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;