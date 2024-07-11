import React from 'react';

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-green-800 opacity-85">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Login to Stockholmes</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-800"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-800"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-600 transition duration-300"
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
