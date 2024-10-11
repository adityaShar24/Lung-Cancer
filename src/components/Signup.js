import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import SuccessPopup from "./SuccessPopup"; // Import the SuccessPopup component

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false); // Change success to a boolean state
  const [successMessage, setSuccessMessage] = useState(""); // Store the success message
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate input before sending
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const requestBody = {
      email,
      role,
      username: name,
      password,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle error response
        setError(data.email ? data.email.join(", ") : "Registration failed.");
        setSuccess(false);
      } else {
        // Handle success response
        setSuccessMessage(data.message);
        setSuccess(true);
        setError(null);
        setTimeout(() => {
          navigate("/login"); // Redirect to /landing after a delay
        }, 2000); // Adjust the delay time as needed
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      setSuccess(false);
    }
  };

  const handlePopupClose = () => {
    setSuccess(false); // Close the popup
  };

  return (
    <div
      className="relative flex min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="flex flex-col h-full justify-center items-center px-6 sm:px-12 lg:px-40 py-10">
        <div className="w-full max-w-md lg:max-w-lg p-8 bg-white rounded-2xl shadow-md">
          <h3 className="text-[#111418] text-2xl font-bold leading-tight mb-6">
            Create an account
          </h3>

          {/* Error Message */}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {/* Success Message Popup */}
          {success && (
            <SuccessPopup 
              message={successMessage} 
              onClose={handlePopupClose} 
            />
          )}

          <form onSubmit={handleSubmit}>
            {/* Form fields here... */}
            {/* Name Input */}
            <div className="mb-5">
              <label className="flex flex-col">
                <p className="text-[#111418] text-base font-medium mb-2">Name</p>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input w-full rounded-xl border border-[#dce0e5] bg-white h-14 placeholder:text-[#637588] p-[15px] text-base leading-normal focus:outline-none focus:ring-2 focus:ring-[#1980e6] transition-shadow"
                  required
                />
              </label>
            </div>

            {/* Email Input */}
            <div className="mb-5">
              <label className="flex flex-col">
                <p className="text-[#111418] text-base font-medium mb-2">Email</p>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input w-full rounded-xl border border-[#dce0e5] bg-white h-14 placeholder:text-[#637588] p-[15px] text-base leading-normal focus:outline-none focus:ring-2 focus:ring-[#1980e6] transition-shadow"
                  required
                />
              </label>
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="flex flex-col">
                <p className="text-[#111418] text-base font-medium mb-2">Password</p>
                <input
                  type="password"
                  placeholder="••••••••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input w-full rounded-xl border border-[#dce0e5] bg-white h-14 placeholder:text-[#637588] p-[15px] text-base leading-normal focus:outline-none focus:ring-2 focus:ring-[#1980e6] transition-shadow"
                  required
                />
              </label>
            </div>

            {/* Confirm Password Input */}
            <div className="mb-4">
              <label className="flex flex-col">
                <p className="text-[#111418] text-base font-medium mb-2">Confirm Password</p>
                <input
                  type="password"
                  placeholder="••••••••••••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-input w-full rounded-xl border border-[#dce0e5] bg-white h-14 placeholder:text-[#637588] p-[15px] text-base leading-normal focus:outline-none focus:ring-2 focus:ring-[#1980e6] transition-shadow"
                  required
                />
              </label>
            </div>

            {/* Role Selection */}
            <div className="mb-5">
              <label className="flex flex-col">
                <p className="text-[#111418] text-base font-medium mb-2">Role</p>
                <select
                  value={role}
                  onChange={handleRoleChange}
                  className="form-select w-full rounded-xl border border-[#dce0e5] bg-white h-14 placeholder:text-[#637588] p-[15px] text-base leading-normal focus:outline-none focus:ring-2 focus:ring-[#1980e6] transition-shadow"
                  required
                >
                  <option value="" disabled>Select your role</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Patient">Patient</option>
                </select>
              </label>
            </div>

            {/* Sign Up Button */}
            <div className="mb-6">
              <button type="submit" className="w-full h-12 bg-[#1980e6] text-white font-bold text-sm rounded-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1980e6]">
                Sign up
              </button>
            </div>
          </form>

          {/* Login Prompt */}
          <div className="text-center mb-4">
            <p className="text-sm text-[#637588]">
              Already have an account?{" "}
              <a href="/login" className="text-[#1980e6] font-semibold hover:underline">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
