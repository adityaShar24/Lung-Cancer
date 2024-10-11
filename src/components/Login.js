import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Prepare the request body
    const body = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        // Store email and token in local storage on successful login
        localStorage.setItem("email", data.email);
        localStorage.setItem("token", data.access_token);
        // Redirect to a different page after login
        navigate("/landing"); // Redirect to home or desired page
      } else {
        // Handle error response (e.g., show an error message)
        alert(data.non_field_errors[0]); // Alert the first error message
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div
      className="relative flex min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="flex flex-col h-full justify-center items-center px-6 sm:px-12 lg:px-40 py-10">
        <div className="w-full max-w-md lg:max-w-lg p-8 bg-white rounded-2xl shadow-md">
          <h3 className="text-[#111418] text-2xl font-bold leading-tight mb-6">
            Welcome back
          </h3>

          <form onSubmit={handleLogin}> {/* Added form handling */}
            {/* Email Input */}
            <div className="mb-5">
              <label className="flex flex-col">
                <p className="text-[#111418] text-base font-medium mb-2">
                  Email
                </p>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={email} // Bind the input to state
                  onChange={(e) => setEmail(e.target.value)} // Update state on change
                  className="form-input w-full rounded-xl border border-[#dce0e5] bg-white h-14 placeholder:text-[#637588] p-[15px] text-base leading-normal focus:outline-none focus:ring-2 focus:ring-[#1980e6] transition-shadow"
                />
              </label>
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="flex flex-col">
                <p className="text-[#111418] text-base font-medium mb-2">
                  Password
                </p>
                <input
                  type="password"
                  placeholder="••••••••••••••••••"
                  value={password} // Bind the input to state
                  onChange={(e) => setPassword(e.target.value)} // Update state on change
                  className="form-input w-full rounded-xl border border-[#dce0e5] bg-white h-14 placeholder:text-[#637588] p-[15px] text-base leading-normal focus:outline-none focus:ring-2 focus:ring-[#1980e6] transition-shadow"
                />
              </label>
            </div>

            {/* Forgot Password */}
            <div className="text-right mb-6">
              <a href="#" className="text-sm text-[#637588] underline hover:text-[#1980e6]">
                Forgot your password?
              </a>
            </div>

            {/* Log In Button */}
            <div className="mb-6">
              <button 
                type="submit" // Add type submit to button
                className="w-full h-12 bg-[#1980e6] text-white font-bold text-sm rounded-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1980e6]"
              >
                Log in
              </button>
            </div>

            {/* Sign Up */}
            <div className="text-center mb-4">
              <p className="text-sm text-[#637588]">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-[#1980e6] font-semibold hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
