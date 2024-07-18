// pages/index.tsx (or wherever you define your Home component)

import React from 'react';
import HomePage from '@/components/HomePage';
import Navbar from '@/components/Navbar';
import FooterComponent from '@/components/FooterComponent';

const Home = () => {
  return (
    <main>
      <Navbar />
      <HomePage />
      <FooterComponent />
    </main>
  );
};

export default Home;
