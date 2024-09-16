"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { authenticateUser } from '@/utils/fetches/usersFetches';
import { Popup } from '@/components/general/Popup';

const Login = () => {
  const { isAuthenticated, login } = useAuth();
  const [fields, setFields] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFields(prevFields => ({
      ...prevFields,
      [id]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await authenticateUser(fields);
      const user = (await response.json() as any).user;
      if (response.status === 200) {
        console.log("User logged in successfully!");
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowSuccessPopup(false);
          login(user);
          router.push('/user/dashboard');
        }, 2000);
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-green-800">
      <div className="w-full max-w-3xl bg-white p-12 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Login to Stockholmes</h1>
        <form onSubmit={handleLogin} className="space-y-6 pb-8 pt-5">
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-800 text-black"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-800 text-black"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className={`w-full px-6 py-3 text-white rounded-lg transition duration-300 
                ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-800 hover:bg-green-600'}`}
                disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
        {error && <p className="text-red-600 mt-4">{error}</p>}
        <div className="mt-4 text-gray-600">
          <div className="w-fit">
            <div className="w-full text-left mb-1">
              <a href="/login" className="text-green-800 hover:underline">Forgot password?</a>
            </div>
            <p className="w-fit">Don't have an account? <a href="/register" className="text-green-800 hover:underline">Register here</a></p>
          </div>
        </div>
        {showSuccessPopup && <Popup message="Logging in, please wait a moment." onClose={() => setShowSuccessPopup(false)} />}
      </div>
    </div>
  );
}

export default Login;
