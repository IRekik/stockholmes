import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-green-800 opacity-85">
        <div className="w-1/2 text-center bg-yellow-100 p-10 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">About Us</h1>
          <div className="text-gray-700 text-base">
            <p>ECRIS NOTRE "ABOUT US"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
