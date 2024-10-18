import React, { useRef, useEffect } from "react";
import "./styles.css";
import { IoMdArrowUp } from "react-icons/io";

export default function QueryTextBox({
  value,
  HandleSubmit,
  valueExists,
  setValueExists,
  setValue,
}) {
  const ref = useRef(null);

  //to Focus input on enter
  useEffect(() => {
    ref.current.focus();
  }, []);

  //funtion to update Value
  function HandleChange() {
    const text = ref.current.innerText.trim();
    setValue(text);
    setValueExists(text !== "");
  }

  //to Update the Value based on Input Change
  useEffect(() => {
    const chat = ref.current;
    chat.addEventListener("input", HandleChange);
    return () => {
      chat.removeEventListener("input", HandleChange);
    };
  }, []);

  return (
    <div className="Holder-Chat">
      <div className="text-container">
        <div
          spellCheck={false}
          ref={ref}
          contentEditable="true"
          className="chat-input"
          role="textbox"
          aria-placeholder="hghjhjjhv"
        ></div>
        <button
          type="button"
          className="submit-query-btn"
          disabled={!valueExists}
          onClick={HandleSubmit}
        >
          <IoMdArrowUp />
        </button>
      </div>
    </div>
  );
}
