"use client";
import { Popup } from '@/components/general/Popup';
import { authenticateUser } from '@/utils/fetches/usersFetches';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type LoginFields = {
  email: string;
  password: string;
}

export default function Login() {
  const [fields, setFields] = useState<LoginFields>({
    email: "",
    password: "",
  });
  const [isLoginDisabled, setIsLoginDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFields((prevFields) => ({
      ...prevFields,
      [id]: value,
    }));
  };

  useEffect(() => {
    const isEmpty = 
      fields.email.length === 0 ||
      fields.password.length === 0;
    setIsLoginDisabled(isEmpty);
  }, [fields]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await authenticateUser(fields);
      
      if (response.status === 200) {
        console.log("User registered successfully!");
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
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
                ${isLoginDisabled || isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-800 hover:bg-green-600'}`}
                disabled={isLoginDisabled || isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
        {error && <p className="text-red-600 mt-4">{error}</p>}
        <div className="mt-4 text-gray-600">
          <p>Don't have an account? <a href="/register" className="text-green-800 hover:underline">Register here</a></p>
        </div>
        {showPopup && <Popup message="Succesfully registered!" onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
}
