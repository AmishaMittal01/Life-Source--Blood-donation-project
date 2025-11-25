import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role; // donor / doctor / organizer

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = async (e) => {
  e.preventDefault();

  let endpoint = "";
  if (role === "donor") endpoint = "/api/donors/login";
  if (role === "doctor") endpoint = "/api/doctors/login";
  if (role === "organizer") endpoint = "/api/organizers/login";

  try {
    const res = await fetch(`http://localhost:5001${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) return alert(data.message || "Login failed");

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data[role]));

    navigate(`/${role}/dashboard`);
  } catch (err) {
    alert("Cannot reach backend. Check if server.js is running on port 5001.");
  }
};

  return (
    <div className="min-h-screen bg-[#fff5f5] flex items-center justify-center px-4">
      <div className="bg-white shadow-xl border border-red-200 rounded-2xl p-10 w-[90%] max-w-md">

        <h2 className="text-3xl font-bold text-center text-red-600 mb-2">
          Login as {role}
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="input-box"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="mt-2 bg-red-600 text-white p-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-700 mt-4">
          Don't have an account?{" "}
          <Link
            to="/register"
            state={{ role }}
            className="text-red-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
