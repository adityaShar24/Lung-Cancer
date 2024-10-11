// src/LandingPage.js

import React from "react";
import { Link } from "react-router-dom"; // Make sure you're using react-router for navigation
import { FaArrowRight, FaClipboardList } from "react-icons/fa"; // Importing icons from react-icons

const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Header Section */}
            <header className="bg-blue-600 text-white py-6">
                <h1 className="text-3xl text-center font-bold">Cancer Detection System</h1>
                <p className="text-center mt-2">Empowering Early Detection for a Healthier Tomorrow</p>
            </header>

            {/* Main Content Section */}
            <div className="flex flex-col justify-center items-center p-6">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-6 transition-transform transform hover:scale-105">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                        Welcome to Your Dashboard
                    </h2>
                    <p className="text-gray-600 text-center mb-4">
                        You have successfully logged in. From here, you can access various features of the application.
                    </p>
                    <div className="flex justify-center mt-6">
                        <Link to="/detect">
                            <button className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 mb-4 shadow-lg hover:shadow-xl">
                                <FaClipboardList className="mr-2" />
                                Go to Detect Page
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Image Section */}
                <div className="mt-8">
                    <img
                        src="https://images.unsplash.com/photo-1590601634483-6f83c7b8439f" // Cancer Detection Image
                        alt="Cancer Detection"
                        className="w-full max-w-lg rounded-lg shadow-lg"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1588392386640-b43172c865a3" // Medical Support Image
                        alt="Medical Support"
                        className="w-full max-w-lg rounded-lg shadow-lg mt-4"
                    />
                </div>

                {/* Additional Information Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
                    <ul className="list-disc list-inside">
                        <li className="text-gray-600">Advanced AI Algorithms for Early Detection</li>
                        <li className="text-gray-600">User-Friendly Interface for Seamless Experience</li>
                        <li className="text-gray-600">Secure Data Management and Privacy</li>
                        <li className="text-gray-600">24/7 Support for Users</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
