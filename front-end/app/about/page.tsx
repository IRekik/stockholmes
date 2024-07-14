import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-green-800 ">
      <div className="w-11/12 md:w-3/4 lg:w-1/2 bg-white p-10 rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold mb-8 text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Stockholmes is an innovative project combining finances and social deduction. 
          We aim to create an authentic stock market environment that is free of risk and packed with enjoyment.
          Whether you are a stock market enthusiast or simply seeking to fend off your boredom,
          we at Stockholmes hope our project will help you find what you're looking for.      
        </p>
      </div>
    </div>
  );
};

export default About;
