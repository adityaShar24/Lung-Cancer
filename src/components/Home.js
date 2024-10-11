import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="font-sans">
            {/* Header */}
            <header className="bg-blue-600 p-4 text-white">
                <nav className="max-w-7xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Lung AI</h1>
                    <ul className="flex space-x-4">
                        <li><a href="#features" className="hover:underline">Features</a></li>
                        <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
                        <li><a href="#pricing" className="hover:underline">Pricing</a></li>
                        <li>
                            <Link to="/login">
                                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200">Get Started</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="bg-blue-50 py-20 text-center">
                <h2 className="text-4xl font-bold text-blue-600">Lung Cancer Detection with AI</h2>
                <p className="mt-4 text-xl text-gray-700">Upload your lung X-rays for instant detection</p>
                <div>
                    <Link to="/signup">
                        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 mr-5">
                            Signup
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                            Login
                        </button>
                    </Link>
                </div>
            </section>

            {/* How It Works */}
            <section id="features" className="py-16 bg-white text-center">
                <h3 className="text-3xl font-bold text-gray-900">How it Works</h3>
                <p className="mt-2 text-gray-600">AI-powered detection with instant, secure, and private results.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                    <div className="bg-gray-100 p-8 rounded-lg">
                        <h4 className="text-xl font-semibold text-blue-600">AI-powered Detection</h4>
                        <p className="mt-2 text-gray-600">Advanced machine learning detects cancer from lung X-rays.</p>
                    </div>
                    <div className="bg-gray-100 p-8 rounded-lg">
                        <h4 className="text-xl font-semibold text-blue-600">Instant Results</h4>
                        <p className="mt-2 text-gray-600">Receive instant results after uploading your X-ray.</p>
                    </div>
                    <div className="bg-gray-100 p-8 rounded-lg">
                        <h4 className="text-xl font-semibold text-blue-600">Secure and Private</h4>
                        <p className="mt-2 text-gray-600">All X-rays are deleted after detection to ensure privacy.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-16 bg-gray-50 text-center">
                <h3 className="text-3xl font-bold text-gray-900">What Doctors Are Saying</h3>
                <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Testimonial
                        name="Dr. Jane Smith"
                        date="Jan 1, 2023"
                        text="The AI detection is incredibly accurate and has helped me diagnose lung cancer in patients much earlier than I would have without it."
                        rating={10}
                    />
                    <Testimonial
                        name="Dr. John Doe"
                        date="Dec 1, 2022"
                        text="This system has been a game changer for my research. I've been able to analyze lung X-rays much faster and more accurately than ever before."
                        rating={8}
                    />
                    <Testimonial
                        name="Dr. Mary Johnson"
                        date="Nov 1, 2022"
                        text="I've been using this system to develop a new health tech product and it's been a huge help. The instant results and high accuracy have been crucial for my work."
                        rating={7}
                    />
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-16 bg-white text-center">
                <h3 className="text-3xl font-bold text-gray-900">Pricing</h3>
                <p className="mt-4 text-gray-600">Affordable pricing plans for all users</p>
                <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <PricingCard plan="Basic" price="$49/mo" features={["Instant detection", "Basic Support"]} />
                    <PricingCard plan="Pro" price="$99/mo" features={["Instant detection", "Premium Support", "Detailed Reports"]} />
                    <PricingCard plan="Enterprise" price="Custom" features={["Advanced Features", "24/7 Support", "Custom Solutions"]} />
                </div>
            </section>

            {/* Call to Action */}
            <footer className="bg-blue-600 py-8 text-center">
                <h4 className="text-xl text-white font-bold">Ready to get started?</h4>
                <button className="mt-4 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-200">Sign Up Now</button>
            </footer>
        </div>
    );
};

const Testimonial = ({ name, date, text, rating }) => (
    <div className="bg-white shadow-md p-8 rounded-lg">
        <h4 className="text-xl font-semibold text-gray-900">{name}</h4>
        <p className="text-gray-500">{date}</p>
        <p className="mt-4 text-gray-700">{text}</p>
        <p className="mt-2 text-yellow-400">Rating: {rating}/10</p>
    </div>
);

const PricingCard = ({ plan, price, features }) => (
    <div className="bg-gray-100 p-8 rounded-lg text-center">
        <h4 className="text-2xl font-bold text-blue-600">{plan}</h4>
        <p className="text-xl mt-4 text-gray-800">{price}</p>
        <ul className="mt-4 text-gray-600">
            {features.map((feature, idx) => (
                <li key={idx} className="mt-2">{feature}</li>
            ))}
        </ul>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Select</button>
    </div>
);

export default Home;
