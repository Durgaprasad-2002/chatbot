import React from "react";
import Response from "./Response";

function ResponsesContainer({ responses }) {
  return (
    <>
      <div>
        <div className="User-profile-inner">
          <div className="response-outer">
            <h3>Saved Responses</h3>
            <div className="Responses-container">
              {responses.map((response, ind) => {
                const parser = new DOMParser();
                const summaryDoc = parser.parseFromString(
                  response.summary,
                  "text/html"
                );
                const textDoc = parser.parseFromString(
                  response.result_text,
                  "text/html"
                );
                const summary = summaryDoc.body.innerHTML;
                const text = textDoc.body.innerHTML;
                return (
                  <Response
                    response={{
                      query: response.query,
                      createdAt: response.createdAt,
                      summary,
                      result_text: text,
                      result_visualization_path: "",
                      result_table_path: "",
                    }}
                    key={ind}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(ResponsesContainer);
