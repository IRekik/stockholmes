"use client";
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

  return (
    <div className="flex justify-center items-center h-screen bg-green-800 opacity-85">
      <div className="w-full max-w-3xl bg-white p-12 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Login to Stockholmes</h1>
        <form className="space-y-6 pb-8 pt-5">
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
                ${isLoginDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-800 hover:bg-green-600'}`}
                disabled={isLoginDisabled}
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 text-gray-600">
          <p>Don't have an account? <a href="/register" className="text-green-800 hover:underline">Register here</a></p>
        </div>
      </div>
    </div>
  );
}
