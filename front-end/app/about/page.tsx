import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-green-800 opacity-85">
        <div className="w-1/2 text-center bg-white p-10 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">About Us</h1>
          <div className="text-gray-700 text-base text-justify">
            <p>
              Stockholmes is an innovative project combining finances and social deduction. 
              We aim to make an authentic stock market environment free of risk and packed with enjoyment.
              Whether you are a stock market enthusiast or simply seeking to fend off your boredom,
              we at Stockholmes hope our project will help you find what you're looking for.      
           </p>           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
