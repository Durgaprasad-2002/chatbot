import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./styles.css";
import logo from "../assets/images/logo.avif";

function Navbar() {
  const location = useLocation();

  const username = JSON.parse(localStorage.getItem("username"));
  const [toggle, settoggle] = useState(false);

  function handleToggle() {
    settoggle((prev) => !prev);
  }

  useEffect(() => {
    settoggle(false);
  }, [location.pathname]);

  if (location.pathname === "/login" || location.pathname === "/sign-up") {
    return <Outlet />;
  }

  return (
    <>
      <nav className="Navbar">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "rgb(133, 79, 252)" }}
        >
          {" "}
          <img className="brand-logo" src={logo} alt="logo" />
        </Link>

        <div className="menu-conatiner">
          <div
            className={`Toggler ${toggle ? "toggle" : ""}`}
            onClick={handleToggle}
          >
            <div className="toggle-bar"></div>
            <div className="toggle-bar"></div>
          </div>
        </div>
      </nav>

      <div className={`Navbar-Links-conatiner ${toggle ? "show-links" : ""}`}>
        <div
          className={`Toggler ${toggle ? "toggle" : ""}`}
          onClick={handleToggle}
        >
          <div className="toggle-bar"></div>
          <div className="toggle-bar"></div>
        </div>
        <div className="Links">
          <div className="nav-Link">
            <Link to="/">
              <h4>New Chat</h4>
            </Link>
          </div>

          <div className="nav-Link">
            <Link to="/admin-pannel">
              <h4>Admin Dashboard</h4>
            </Link>
          </div>

          <div className="nav-Link">
            <Link to="/history">
              <h4>History</h4>
            </Link>
          </div>
          <hr />

          {username ? (
            <>
              <div className="nav-Link">
                <Link to="/">
                  <h4>Welcome, {username}</h4>
                </Link>
              </div>
              <hr />

              <div className="nav-Link">
                <Link to="/login">
                  <h4
                    className="logout-btn"
                    onClick={() => localStorage.clear()}
                  >
                    Logout
                  </h4>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="nav-Link">
                <Link to="/login">
                  <h4>Login</h4>
                </Link>
              </div>

              <div className="nav-Link">
                <Link to="/sign-up">
                  <h4>Register</h4>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default React.memo(Navbar);
