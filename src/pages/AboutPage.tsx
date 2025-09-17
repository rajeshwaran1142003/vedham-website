import React from 'react';
import { Award, Users, Heart, Target, Leaf, BookOpen } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Natural & Pure',
      description: 'We source only the finest natural ingredients, ensuring every product is free from harmful chemicals and preservatives.'
    },
    {
      icon: BookOpen,
      title: 'Traditional Wisdom',
      description: 'Our recipes are based on centuries-old traditional knowledge, passed down through generations of wellness experts.'
    },
    {
      icon: Heart,
      title: 'Family First',
      description: 'Every product is created with families in mind, providing nutrition that supports health from childhood through senior years.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards of quality, combining traditional methods with modern safety and hygiene practices.'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Founded', description: 'Vijaya Edison started Vedham Eldix with a vision to bring natural nutrition to every household' },
    { year: '2021', title: 'First Products', description: 'Launched our signature Nutri Meal and ABC Malt with overwhelming positive response' },
    { year: '2022', title: 'Expansion', description: 'Introduced specialized dosa mixes and weight management products' },
    { year: '2023', title: 'Community Growth', description: 'Reached 500+ satisfied families across Tamil Nadu' },
    { year: '2024', title: 'Recognition', description: 'Received local awards for promoting traditional nutrition and health' },
    { year: '2025', title: 'Digital Presence', description: 'Launched online platform to serve families across India' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-800 to-green-600 text-white py-20">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-yellow-400">Vedham Eldix</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Rooted in tradition, crafted for today's families. We bring the wisdom of ancient nutrition 
            to modern kitchens with love, care, and uncompromising quality.
          </p>
        </div>
      </div>

      {/* Founder Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Story Behind <span className="text-green-600">Vedham Eldix</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-green-800">Vijaya Edison</strong>, our founder, spent over two decades 
                  as an educator, nurturing young minds and understanding the importance of proper nutrition 
                  in child development. As a teacher, she witnessed firsthand how poor nutrition affected 
                  students' concentration, energy levels, and overall well-being.
                </p>
                <p>
                  Driven by a mother's instinct and an educator's insight, Vijaya began researching traditional 
                  Indian nutrition practices. She discovered that our ancestors had perfected the art of 
                  combining multiple grains, nuts, and natural ingredients to create complete nutritional profiles.
                </p>
                <p>
                  The name <strong className="text-green-800">"Vedham"</strong> means wisdom in Sanskrit - 
                  representing the ancient knowledge that forms the foundation of our products. Every recipe 
                  is a careful balance of taste, nutrition, and tradition, designed to nourish both body and mind.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-green-50 px-4 py-2 rounded-full">
                  <span className="text-green-800 font-medium">20+ Years Teaching Experience</span>
                </div>
                <div className="bg-orange-50 px-4 py-2 rounded-full">
                  <span className="text-orange-800 font-medium">Traditional Recipe Expert</span>
                </div>
                <div className="bg-blue-50 px-4 py-2 rounded-full">
                  <span className="text-blue-800 font-medium">Family Wellness Advocate</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Vijaya Edison - Founder of Vedham Eldix"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">1000+</div>
                  <div className="text-sm text-gray-600">Happy Families</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Core Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every product we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-green-100 leading-relaxed">
                To make traditional, natural nutrition accessible to every Indian family by combining 
                ancestral wisdom with modern convenience. We strive to eliminate harmful preservatives 
                and chemicals from family nutrition while maintaining the authentic taste and benefits 
                of time-tested recipes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-orange-100 leading-relaxed">
                To become India's most trusted brand for traditional nutrition products, helping families 
                across the nation rediscover the power of natural, preservative-free foods. We envision 
                a future where every household has access to products that nourish both body and soul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Journey</span>
            </h2>
            <p className="text-lg text-gray-600">
              From a teacher's vision to a trusted nutrition brand
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-green-200" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg z-10" />

                  {/* Content */}
                  <div
                    className={`bg-white rounded-xl shadow-lg p-6 max-w-md ${
                      index % 2 === 0 ? 'mr-auto pr-12' : 'ml-auto pl-12'
                    }`}
                  >
                    <div className="text-2xl font-bold text-green-600 mb-2">{milestone.year}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Traditional Nutrition?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our family of satisfied customers and discover the difference that natural, 
            traditional nutrition can make in your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919842909360"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;