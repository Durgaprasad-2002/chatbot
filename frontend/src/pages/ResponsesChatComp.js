import React, { useRef, useEffect } from "react";
import "./styles.css";
import { HiOutlineSave } from "react-icons/hi";
import axios from "axios";
import { toast } from "react-toastify";

function ResponsesChatComp({ responses, loading }) {
  const loadingRef = useRef();

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (loading && loadingRef.current) {
      loadingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [loading]);

  function handleSaveResponse(response) {
    axios
      .post("https://chatbot-doj3.onrender.com/response/", {
        ...response,
        token,
      })
      .then(({ data }) => {
        toast.success("Response Saved to Database", {
          autoClose: 3000,
        });
      })
      .catch((err) => {
        const { message } = err.response.data;
        toast.warning(message, {
          autoClose: 5000,
        });
      });
  }

  return (
    <>
      <div>
        {responses.map((data, ind) => {
          const parser = new DOMParser();
          const summaryDoc = parser.parseFromString(data.summary, "text/html");
          const textDoc = parser.parseFromString(data.result_text, "text/html");
          const summary = summaryDoc.body.innerHTML;
          const text = textDoc.body.innerHTML;

          return (
            <div key={ind} className="chat-box">
              <div className="query-box">
                <div className="inner-chats">
                  <h4 className="query-text-box">{data.query}</h4>
                </div>
              </div>
              <div className="response-box">
                <div className="inner-chats">
                  <div
                    style={{ textAlign: "left" }}
                    dangerouslySetInnerHTML={{
                      __html: summary,
                    }}
                  />
                  <hr />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: text,
                    }}
                  />
                </div>
              </div>
              <div className="response-box">
                <button
                  className="save-btn"
                  onClick={() => handleSaveResponse(data)}
                >
                  <HiOutlineSave className="icon-save" />
                  <span> Save Response</span>
                </button>
              </div>
            </div>
          );
        })}
        {loading && (
          <div className="no-response-container-2">
            <h1 ref={loadingRef}>wait getting response from server...</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default React.memo(ResponsesChatComp);

// import React, { useRef, useEffect } from "react";
// import "./styles.css";
// import { HiOutlineSave } from "react-icons/hi";
// import axios from "axios";
// import { toast } from "react-toastify";

// export default function ResponseDisplayer({ responses, loading }) {
//   const loadingRef = useRef();

//   const token = JSON.parse(localStorage.getItem("token"));

//   useEffect(() => {
//     if (loading && loadingRef.current) {
//       loadingRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [loading]);

//   function handleResponseSubmit(response) {
//     axios
//       .post("http://localhost:5000/response/", { ...response, token })
//       .then(({ data }) => {
//         toast.success("Response Saved to Database", {
//           autoClose: 3000,
//         });
//       })
//       .catch((err) => {
//         const { message } = err.response.data;
//         toast.warning(message, {
//           autoClose: 5000,
//         });
//       });
//   }

//   return (
//     <>
//       <div>
//         {responses.map((data, ind) => {
//           const parser = new DOMParser();
//           const summary = parser.parseFromString(data.summary, "text/html");
//           const text = parser.parseFromString(data.result_text, "text/html");
//           return (
//             <div key={ind} className="chat-box">
//               <div className="query-box">
//                 <div className="inner-chats">
//                   {" "}
//                   <h4 className="query-text-box">{data.query}</h4>
//                 </div>
//               </div>
//               <div className="response-box">
//                 <div className="inner-chats">
//                   {" "}
//                   <div>{summary}</div>
//                   <div>{text}</div>
//                 </div>
//               </div>
//               <div className="query-box">
//                 {" "}
//                 <button
//                   className="save-btn"
//                   onClick={() => handleResponseSubmit(data)}
//                 >
//                   <HiOutlineSave className="icon-save" />
//                   <span> Save Response</span>
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//         {loading && (
//           <>
//             <div className="no-response-container-2">
//               {" "}
//               <h1 ref={loadingRef}>wait getting response from server...</h1>
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// }
