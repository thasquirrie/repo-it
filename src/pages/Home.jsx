import React from 'react';
import Hero from '../component/Hero';
import UsernameResults from '../component/UsernameResults';

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Hero />
      <UsernameResults />
    </div>
  );
};

export default Home;
