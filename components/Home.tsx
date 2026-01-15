import React from 'react';
import Hero from './Hero';
import StatsBanner from './StatsBanner';
import FAQ from './FAQ';
import ContactForm from './ContactForm';
import FinalCTA from './FinalCTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <StatsBanner />
      <FAQ />
      <ContactForm />
      <FinalCTA />
    </>
  );
};

export default Home;