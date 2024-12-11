import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/slices/user-slice";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const Register = () => {
  const user = useSelector((s) => s.user.value);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    let newUser = { ...Object.fromEntries(formData), id: uuidv4() };

    if (user.findIndex((item) => item.username === newUser.username) >= 0) {
      return alert("Username already exists");
    }
    dispatch(addUser(newUser));
    e.target.reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-gradient-to-br from-green-700 via-green-600 to-green-500 text-white rounded-lg w-full max-w-md p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-6">Join Us</h2>
        <p className="text-center text-gray-300 mb-8">
          Create an account to get started
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            className="border-none bg-green-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-lime-300 text-white placeholder-gray-200"
            placeholder="Your Name"
            type="text"
            required
            name="name"
          />
          <input
            className="border-none bg-green-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-lime-300 text-white placeholder-gray-200"
            placeholder="Choose a Username"
            type="text"
            required
            name="username"
          />
          <input
            className="border-none bg-green-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-lime-300 text-white placeholder-gray-200"
            placeholder="Set a Password"
            type="password"
            required
            name="password"
          />
          <button className="text-xl font-bold bg-lime-500 py-3 rounded-lg hover:bg-lime-600 transition duration-300">
            Register
          </button>
        </form>
        <p className="text-center text-gray-200 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-lime-300 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
