"use client";
import React, { FormEvent, useEffect, useState } from 'react';
import { RegistrationFields } from "../../../common/types/fields"; // Adjust the import based on your types
import { createUser } from '@/utils/fetches/usersFetches';

export default function Register() {
  const [fields, setFields] = useState<RegistrationFields>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isRegisterDisabled, setIsRegisterDisabled] = useState<boolean>(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFields((prevFields) => ({
      ...prevFields,
      [id]: value,
    }));

    const isEmpty = 
      fields.firstName.length === 0 || 
      fields.lastName.length === 0 ||
      fields.email.length === 0 ||
      fields.password.length === 0 || 
      fields.confirmPassword.length === 0;
    setIsRegisterDisabled(isEmpty);
  };

  useEffect(() => {
    const isEmpty = 
      fields.firstName.length === 0 || 
      fields.lastName.length === 0 ||
      fields.email.length === 0 ||
      fields.password.length === 0 || 
      fields.confirmPassword.length === 0;
    setIsRegisterDisabled(isEmpty);
  }, [fields]);


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { firstName, lastName, email, password } = fields;
      await createUser({ firstName, lastName, email, password });
      console.log("User registered successfully!");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };


  return (
    <div className="flex justify-center items-center h-screen bg-green-800 opacity-85">
      <div className="w-full max-w-3xl bg-white p-12 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Register for Stockholmes</h1>
        <form className="space-y-6 pb-8 pt-5" onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="first-name" className="block text-gray-700">First Name</label>
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-800 text-black"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="last-name" className="block text-gray-700">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-800 text-black"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
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
            <label htmlFor="confirm-password" className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-800 text-black"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
          <button
              type="submit"
              className={`w-full px-6 py-3 text-white rounded-lg transition duration-300 
                ${isRegisterDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-800 hover:bg-green-600'}`}
              disabled={isRegisterDisabled}
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-4 text-gray-600">
          <p>Already have an account? <a href="/login" className="text-green-800 hover:underline">Login here</a></p>
        </div>
      </div>
    </div>
  );
}