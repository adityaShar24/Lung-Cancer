import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Detect from "./components/Detect";
import LandingPage from "./components/LandingPage";
import ProtectedRoute from "./ProtectedRoute"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detect" element={<Detect />} />
        
        {/* Protect the LandingPage route */}
        <Route 
          path="/landing" 
          element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
