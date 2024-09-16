"use client";
import React, { useState } from 'react';


const Reset: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [fields, setFields] = useState({ email: '' });
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { id, value } = e.target;
        setFields(prevFields => ({
            ...prevFields,
            [id]: value,
        }));
    };

    const handleVerification = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        /*   try {
               
               
               } else {
                 setError('Invalid email. Please try again.');
               }
             } catch (err) {
               setError('An error occurred. Please try again later.');
             } finally {
               setIsLoading(false);
             }
        */
    }

    return (
        <div className="flex justify-center items-center h-screen bg-green-800">
            <div className="w-full max-w-3xl bg-white p-12 rounded-lg shadow-lg text-center">

                <h1 className="text-3xl font-bold mb-4 text-gray-800">Reset Password</h1>
                <h2 className="text-md mt-8 text-black">
                    For security purposes, please enter your email address to receive a verification code.</h2>
                <form onSubmit={handleVerification} className="space-y-6 pb-8 pt-5">
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
                        <button className={`w-full px-6 py-3 text-white rounded-lg transition duration-300 
                            ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-800 hover:bg-green-600'}`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Sending...' : 'Get a verification code'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Reset;