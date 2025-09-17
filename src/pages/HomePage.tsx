import React from 'react';
import Hero from '../components/Hero';
import FounderMessage from '../components/FounderMessage';
import FeaturedProducts from '../components/FeaturedProducts';
import BrandPromises from '../components/BrandPromises';
import WhyChooseUs from '../components/WhyChooseUs';
import Newsletter from '../components/Newsletter';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FounderMessage />
      <FeaturedProducts />
      <BrandPromises />
      <WhyChooseUs />
      <Newsletter />
    </div>
  );
};

export default HomePage;