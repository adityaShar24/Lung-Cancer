import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // If token is present, render the children, else redirect to login
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
