import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../../redux/slices/token-slice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const users = useSelector((s) => s.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let user = Object.fromEntries(formData);

    let existUser = users.find((item) => item.username === user.username);

    if (existUser) {
      if (existUser.password === user.password) {
        dispatch(signIn("testToken"));
        navigate("/admin");
      } else {
        alert("Invalid username or password");
      }
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white rounded-lg w-full max-w-md p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-6">Welcome Back</h2>
        <p className="text-center text-gray-300 mb-8">
          Sign in to your account
        </p>
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <input
            className="border-none bg-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400"
            placeholder="Username"
            type="text"
            required
            name="username"
          />
          <input
            className="border-none bg-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400"
            placeholder="Password"
            type="password"
            required
            name="password"
          />
          <button className="text-xl font-bold bg-cyan-500 py-3 rounded-lg hover:bg-cyan-600 transition duration-300">
            Login
          </button>
        </form>
        <p className="text-center text-gray-400 mt-6">
          Don't have an account?{" "}
          <a href="/register" className="text-cyan-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
