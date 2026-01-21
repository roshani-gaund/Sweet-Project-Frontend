// PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx'; // adjust the path

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="Signup" replace />; // Redirect to home or login page
  }

  return children;
};

export default PrivateRoute;
