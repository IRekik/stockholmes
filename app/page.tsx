import React from 'react';
import NewsCard from '../components/main/NewsCard';

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center h-auto bg-green-800 opacity-85 py-10">
        <div className="w-1/2 text-center">
          <div>
            <h1 className="text-3xl text-yellow-200 p-10">Welcome to Stockholmes</h1>
          </div>
          <div className="text-white p-5">
            <p>A game website where you can challenge yourself in a virtual stock market</p>
          </div>
          <div className="flex justify-center items-center p-10">
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Ready to Play?</h2>
              <p className="text-gray-600 mb-6">Join the fun and start your adventure now!</p>
              <button className="px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-600 transition duration-300">
                Play Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 bg-gray-100">
        <div className="text-center mb-8 text-green-800">
          <h2 className="text-3xl font-bold mb-4">Your Recent News</h2>
          <p className="text-gray-600">Stay updated with the latest news and updates from Stockholmes.</p>
        </div>
        <div className="flex flex-wrap justify-center">
          <NewsCard 
            title="New Feature Released"
            date="July 10, 2024"
            description="We have just released a new feature to enhance your gaming experience."
          />
          <NewsCard 
            title="Maintenance Update"
            date="July 8, 2024"
            description="Scheduled maintenance will occur this weekend. Please plan accordingly."
          />
          <NewsCard 
            title="Community Event"
            date="July 5, 2024"
            description="Join our community event this Friday for a chance to win prizes."
          />
        </div>
      </div>
    </div>
  );
}
