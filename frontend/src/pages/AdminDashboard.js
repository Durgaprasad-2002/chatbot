import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import Loader from "./Loader";
import DashUser from "./DashUser";
import "./styles.css";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("token"));
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!token) return navigate("/login");
    axios
      .get("https://chatbot-doj3.onrender.com/user/users", {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to retrive data, Please refresh once!");
      });
  }, [token, navigate]);

  return (
    <>
      <div className="admin-body">
        <div className="admin-outer">
          <h2 className="Admin-Title">Registered Users</h2>
          <div className="users-container">
            {users.length === 0 ? (
              <>
                <div className="no-response-container">
                  {" "}
                  <Loader />
                </div>
              </>
            ) : (
              <>
                {" "}
                {users.map((user) => (
                  <DashUser user={user} key={user._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
