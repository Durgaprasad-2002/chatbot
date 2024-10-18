import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DashUser({ user }) {
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("token"));

  let [responseCount, setResponseCount] = useState(0);

  function ResponsesCount(Id) {
    axios
      .get(
        `http://localhost:5000/response/user/response/count?userId=${user._id}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then(({ data }) => {
        setResponseCount(() => data?.count);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    ResponsesCount(user._id);
  }, [user._id]);

  return (
    <>
      <div className="user" key={user._id}>
        <div className="Count-Name-cont">
          <h3 className="user-name" title={user.username}>
            {user.username}
          </h3>
          <span title="Total Responses Count" className="Count">
            {responseCount}
          </span>
        </div>
        <button
          className="in-detail-btn"
          onClick={() => navigate(`/user-profile/${user._id}`, { state: user })}
        >
          View
        </button>
      </div>
    </>
  );
}

export default React.memo(DashUser);
