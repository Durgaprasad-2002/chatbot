import React from "react";
import "./styles.css";
import notFound from "../assets/images/not-found.png";

function NoPage() {
  return (
    <div className="No-Page-Container Container-vh">
      <div className="No-Page">
        <img src={notFound} className="not-found-img" alt="Page Not Found" />
        <p>Sorry the page you're looking for doesn't exist</p>
      </div>
    </div>
  );
}

export default React.memo(NoPage);
