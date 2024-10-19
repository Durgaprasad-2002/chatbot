import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import Loader from "./Loader";
import ResponsesContainer from "./ResponsesContainer";

export default function History() {
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("token"));

  const reduxResponses = useSelector((state) => state.responsesReducer);

  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    if (!token) return navigate("/login");
    setLoading(true);

    const FetchResponses = async () => {
      await axios
        .get(`https://chatbot-doj3.onrender.com/response/user`, {
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
    };
    FetchResponses();
  }, [navigate, reduxResponses, token]);

  return (
    <>
      {loading === true ? (
        <div className="no-response-container">
          {" "}
          <Loader />
        </div>
      ) : (
        <>
          {responses.length === 0 && loading === false ? (
            <div className="no-response-container">
              {" "}
              <h2>you didn't saved anything, start making responses to save</h2>
              <Link to="/">
                {" "}
                <button className="view-response-btn">Start Querying</button>
              </Link>
            </div>
          ) : (
            <ResponsesContainer responses={responses} />
          )}
        </>
      )}
    </>
  );
}
