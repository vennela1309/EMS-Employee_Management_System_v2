import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Api from "../services/api";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await Api.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      toast.success("Login Successful");

      navigate("/dashboard");

    } catch (error) {
      console.log(error);

     toast.error(
  error.response?.data?.message ||
  "Login Failed"
);
    }
  };

  return (
    <div className="Main_Container">

      {/* Left Side */}
      <div className="Leftside">
        <h1>Employee Management System (EMS)</h1>

        <h4>
          Manage employees efficiently,
          securely, and seamlessly from a
          single platform.
        </h4>
      </div>

      {/* Right Side */}
      <div className="Rightside">

        <div className="LoginCard">

          <h1>Welcome Back</h1>

          <p className="SubTitle">
            Sign in to continue managing employees
          </p>

          <form onSubmit={handleSubmit} className="login_form">

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Login
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;