"use client";

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Popup } from '../general/Popup';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const handleLogout = async (e: React.FormEvent) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      logout();
      router.push('/');
    }, 2000);
  }

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-yellow-100">
      <a href="/" className="text-3xl font-semibold text-green-800 p-1">Stockholmes</a>
      <nav>
        <a href="/about" className="text-black hover:text-blue-700 mx-2">About</a>
        {!isAuthenticated ? (
          <>
            <a href="/register" className="text-black hover:text-blue-700 mx-2">Register</a>
            <a href="/login" className="text-black hover:text-blue-700 mx-2">Log In</a>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="text-black hover:text-blue-700 mx-2"
          >
            Log Out
          </button>
        )}
      </nav>
      {showPopup && <Popup message="Logging out" onClose={() => setShowPopup(false)} />}
    </header>
  );
};

export default Header;
