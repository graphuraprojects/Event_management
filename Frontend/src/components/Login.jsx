import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/login", form);

      if (!res.data.success) {
        return setError(res.data.message);
      }

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);

        navigate("/dashboard/");
      }
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        {error && (
          <p className="bg-red-100 text-red-700 p-2 rounded-lg mb-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin}>
          <label className="block mb-3">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl mt-1 outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </label>

          <label className="block mb-5">
            <span className="text-gray-700">Password</span>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl mt-1 outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
