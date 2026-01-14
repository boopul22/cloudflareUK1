import React from 'react';
import Hero from './Hero';
import StatsBanner from './StatsBanner';
import Features from './Features';
import HowItWorks from './HowItWorks';
import ContactForm from './ContactForm';
import FinalCTA from './FinalCTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <StatsBanner />
      <Features />
      <HowItWorks />
      <ContactForm />
      <FinalCTA />
    </>
  );
};

export default Home;