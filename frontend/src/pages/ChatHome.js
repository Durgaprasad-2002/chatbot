import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { addResponse } from "../redux/slices/responses";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import QueryTextBox from "./QueryTextBox";
import ResponsesChatComp from "./ResponsesChatComp";
import axios from "axios";

export default function ChatHome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const username = JSON.parse(localStorage.getItem("username"));
  const token = JSON.parse(localStorage.getItem("token"));
  const reduxResponses = useSelector((state) => state.responsesReducer);

  const [loading, setLoading] = useState(false);
  const [isResponseExists, setResponseExists] = useState(false);
  const [value, setValue] = useState("");
  const [valueExists, setValueExists] = useState(false);

  //Function to update the responses to redux
  function setChats(data) {
    dispatch(
      addResponse({
        data: data,
      })
    );
  }

  //Function to get query response from server
  async function HandleSubmit(e) {
    if (!token) {
      toast.info("please login to use features", { autoClose: 5000 });
      navigate("/login");
      return;
    }
    setLoading(() => true);
    setValueExists(false);
    e.preventDefault();
    await axios
      .post("https://chatbot-doj3.onrender.com/api/chat", {
        token,
        query: value,
      })
      .then(({ data }) => {
        setValue(() => "");
        document.getElementsByClassName("chat-input")[0].innerHTML = "";
        setChats(data);
      })
      .catch((err) => {
        console.log(err);
        toast.info("failed to get response, Try again", { autoClose: 3000 });
      })
      .finally(() => {
        setLoading(() => false);
        setValueExists(true);
      });
  }

  useEffect(() => {
    if (reduxResponses.length !== 0) {
      setResponseExists(() => true);
    } else {
      setResponseExists(() => false);
    }
  }, [reduxResponses]);

  return (
    <div>
      <div className="chat-responses-body">
        {loading && !isResponseExists ? (
          <div className="no-response-container">
            {" "}
            <h1>wait getting response from server...</h1>
          </div>
        ) : (
          <>
            {!isResponseExists ? (
              <div className="no-response-container">
                {" "}
                <h1>Hello {username}, What can I help with?</h1>
              </div>
            ) : (
              // component to display the responses got from server based on query
              <ResponsesChatComp responses={reduxResponses} loading={loading} />
            )}
          </>
        )}
      </div>
      {/* Query entering input field */}
      <QueryTextBox
        value={value}
        HandleSubmit={HandleSubmit}
        valueExists={valueExists}
        setValue={setValue}
        setValueExists={setValueExists}
      />
    </div>
  );
}
