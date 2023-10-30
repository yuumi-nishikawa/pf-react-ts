// ユーザ情報を含む user を共有することが可能となる
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { auth } from '../api';
import { Navigate } from 'react-router-dom';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<any>(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const value = { user };

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
      console.log(user);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  if (user === false) {
    return <Navigate to="/signIn" />;
  }
  if (user === null) {
    return <p>ローディング中...</p>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
