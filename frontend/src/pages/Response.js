import React, { useState } from "react";

function ExternalLinkButton({ text, link }) {
  return (
    <a href={link} target="new" rel="noreferrer">
      <button className="view-response-btn">{text}</button>
    </a>
  );
}

function Response({ response }) {
  const {
    result_visualization_path,
    result_table_path,
    summary,
    query,
    result_text,
  } = response;

  const [show, setShow] = useState(false);

  const visualLink = result_visualization_path;
  const tableLink = result_table_path;
  const showLinks = visualLink && tableLink;

  const date = new Date(response.createdAt);
  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return (
    <div className="Response-box">
      <div className="Query-Container">
        <h3 className="query">{query}</h3>
        <button
          className="view-response-btn"
          onClick={() => setShow((prev) => !prev)}
        >
          View Response
        </button>
      </div>
      <div className={`${show ? `show-query` : `query-response`} `} id="#">
        <div
          style={{ textAlign: "left" }}
          dangerouslySetInnerHTML={{
            __html: summary,
          }}
        />
        <hr />
        <div
          dangerouslySetInnerHTML={{
            __html: result_text,
          }}
        />
        {/* <p className="summary">{summary}</p>
        <p className="result-text">{result_text} </p> */}
        {showLinks && (
          <div className="external-links">
            <ExternalLinkButton text={"View Visualization"} link={visualLink} />
            <ExternalLinkButton text={"View Result Table"} link={tableLink} />
          </div>
        )}
      </div>
      <p className="createdAt"> {formattedDate}</p>
    </div>
  );
}

export default React.memo(Response);
