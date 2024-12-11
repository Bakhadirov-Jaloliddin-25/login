import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="text-center p-8">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Welcome to Our Platform
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Explore our features, join the community, and unlock endless
          possibilities. Start your journey today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/register"
            className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-white hover:text-indigo-600 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
