import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />
    </>
  );
};

export default Home;