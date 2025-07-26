import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('learncraft_token'));
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('learncraft_user');
    return stored ? JSON.parse(stored) : null;
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token && user) {
      localStorage.setItem('learncraft_token', token);
      localStorage.setItem('learncraft_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('learncraft_token');
      localStorage.removeItem('learncraft_user');
    }
  }, [token, user]);

  const login = (newUser, newToken) => {
    setUser(newUser);
    setToken(newToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    navigate('/login');
  };

  const isAuthenticated = !!token && !!user;

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
