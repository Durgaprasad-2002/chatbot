import React, { useState, useCallback, useMemo, useEffect } from "react";
import "./styles.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useravatar from "../assets/images/useravatar.jpg";
import { Link } from "react-router-dom";

import ResponsesContainer from "./ResponsesContainer";
import Loader from "./Loader";
import axios from "axios";

export default function UserProfile() {
  const navigate = useNavigate();
  const location = useLocation();

  const token = JSON.parse(localStorage.getItem("token"));
  const param = useParams();
  const userId = param.id;
  let [user] = useState(() => location.state);
  const [loading, setLoading] = useState(false);
  const [Responses, setResponses] = useState([]);

  useEffect(() => {
    if (!token) return navigate("/login");
    setLoading(true);
    axios
      .get(`http://localhost:5000/response/user?userId=${userId}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then(({ data }) => {
        setResponses(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [token]);

  return (
    <>
      <div className="UserProfile-body">
        <div className="User-profile-inner">
          {" "}
          <div className="user-Info">
            <img src={useravatar} className="user-img" alt="user Img" />
            <div className="user-details">
              <h2>{user.username}</h2>
              <p>
                {" "}
                <a href={`mailto:${user.email}`} target="_top">
                  {" "}
                  {user.email}
                </a>
              </p>
            </div>
          </div>
          <>
            {loading === true ? (
              <div className="no-response-container">
                {" "}
                <Loader />
              </div>
            ) : (
              <>
                {Responses.length === 0 && loading === false ? (
                  <div className="no-response-container">
                    {" "}
                    <h2>
                      you didn't saved anything, start making responses to save
                    </h2>
                    <Link to="/">
                      {" "}
                      <button className="view-response-btn">
                        Start Querying
                      </button>
                    </Link>
                  </div>
                ) : (
                  <ResponsesContainer responses={Responses} />
                )}
              </>
            )}
          </>
        </div>
      </div>
    </>
  );
}
