"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const Dashboard: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  const userName = "Josh";
  const userMoneyLeft = "$10,000";

  return (
    <div className="container mx-auto p-6">
      <div className="bg-gray-100 px-6 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center md:grid-cols-3 gap-6">
            <p className="text-lg font-bold text-gray-800 mb-0">Trade Stocks</p>
            <p className="text-lg font-bold text-gray-800 m-5">Portfolio</p>
            <p className="text-lg font-bold text-gray-800 m-5">Activity</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center w-full">
              <input
                type="text"
                placeholder="Search a symbol or name"
                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Welcome Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <p className="text-xl font-semibold text-gray-800">Welcome back, {userName}. You have</p>
        <p className="text-3xl font-bold text-green-800">{userMoneyLeft}</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-xl font-semibold text-gray-800 mb-4">Trade</p>
          <p className="text-lg font-medium text-gray-800">Personal</p>
          <p className="text-gray-600">You're almost there! Add funds to this account to start trading.</p>
          <button className="mt-4 px-4 py-2 bg-green-800 text-white rounded-md">Add funds</button>
        </div>
      </div>

      {/* Getting Started and Trade Watchlist */}
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm w-full md:w-1/2 md:mr-3 mb-6 md:mb-0">
          <p className="text-xl font-semibold text-gray-800 mb-4">Getting started</p>
          <div className="items-center">
            <div className="mb-4">
              <p className="text-lg font-medium text-gray-800">The basics of buying and selling</p>
              <p className="text-gray-600">Learn about the different types of orders for buying and selling stocks on Stockholmes.</p>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-800">Companies listed in Stockholmes</p>
              <p className="text-gray-600">Learn about the different types of orders for buying and selling stocks on Wealthsimple Trade.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm w-full md:w-1/2 md:ml-3">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl font-semibold text-gray-800">Trade watchlist</p>
            <button className="text-green-800">Manage</button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-medium text-gray-800">BGKW</p>
                <p className="text-sm text-gray-600">Burger Kween</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-green-800">$74.78</p>
                <p className="text-sm text-gray-600">+0.68 USD | 0.7%</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-medium text-gray-800">LULO</p>
                <p className="text-sm text-gray-600">Dehka Inc</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-red-600">$130.74</p>
                <p className="text-sm text-gray-600">-1.05 USD | 0.8%</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-medium text-gray-800">GMO</p>
                <p className="text-sm text-gray-600">GeneticallyModifiedOnigiri</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-green-800">$20.10</p>
                <p className="text-sm text-gray-600">+2.50 USD | 13.2%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
