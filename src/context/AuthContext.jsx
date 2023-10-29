// ユーザ情報を含む user を共有することが可能となる
import { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../api';
import { Navigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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
