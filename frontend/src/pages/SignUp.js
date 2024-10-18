import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const [loading, setloading] = useState(false);

  const [formData, setformData] = useState({
    username: "",
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
      .post("http://localhost:5000/user/register", { ...formData })
      .then((data) => {
        toast.info("You are Registered", {
          hideProgressBar: false,
          autoClose: 2000,
        });
        navigate("/login");
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
        <h2>Create an account</h2>
        <div className="form-field-container">
          <input
            type="text"
            id="username"
            name="username"
            className="input-field"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <label className="input-label" htmlFor="name">
            Name
          </label>
        </div>
        <div className="form-field-container">
          <input
            type="email"
            id="email"
            name="email"
            className="input-field"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <label className="input-label" htmlFors="email">
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
            {loading ? "Registering..." : "Submit"}
          </button>
        </div>

        <p>
          Already have an Account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
