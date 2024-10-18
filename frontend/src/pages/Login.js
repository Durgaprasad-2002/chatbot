import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setloading] = useState(false);

  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setformData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setloading(() => true);
    axios
      .post("http://localhost:5000/user/login", { ...formData })
      .then(({ data }) => {
        const { message, username, token } = data;

        toast.info(message, {
          hideProgressBar: false,
          autoClose: 2000,
        });

        setTimeout(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          localStorage.removeItem("Responses");
        }, 8.64e7 / 2);

        localStorage.setItem("username", JSON.stringify(username));
        localStorage.setItem("token", JSON.stringify(token));

        navigate("/");
      })
      .catch((error) => {
        console.log("Error : ", error);
        const msg =
          error?.response?.data?.message || "Failed to Register, Try Again!";
        toast.error(msg, {
          hideProgressBar: false,
          autoClose: 2000,
        });
      })
      .finally(() => {
        setloading(() => false);
      });
  }

  return (
    <div className="sign-up-container Container-vh">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="form-field-container">
          <input
            type="email"
            id="email"
            name="email"
            className="input-field"
            onChange={handleChange}
            required
            placeholder="Email"
          />
          <label className="input-label" htmlFor="email">
            Email
          </label>
        </div>

        <div className="form-field-container">
          <input
            type="password"
            id="password"
            name="password"
            className="input-field"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <label className="input-label" htmlFor="password">
            Password
          </label>
        </div>
        <div className="form-field-container">
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Verifying..." : "Login"}
          </button>
        </div>

        <p>
          Don't have an account? <Link to="/sign-up">Register</Link>
        </p>
      </form>
    </div>
  );
}
