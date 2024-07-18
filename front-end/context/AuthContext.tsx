"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from "../../common/types/userDBTables"

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState<User | null>(null);

  const login = (user: User) => {
    setIsAuthenticated(true);
    setAuthenticatedUser(user);
  };
  const logout = () => {
    setIsAuthenticated(false);
    setAuthenticatedUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user: authenticatedUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
