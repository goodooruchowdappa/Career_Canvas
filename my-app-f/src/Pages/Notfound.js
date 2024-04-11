import React from "react";
import "./notfound.css";
import logoImage from "../assets/ezgif-3-53ea3d767a.gif";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you requested could not be found.</p>
      {/* Optionally, add a link to your homepage or other relevant page */}
      <h1>Click the Below Logo Go to Home Page</h1>
      <a href="/home">
        <img className="logo-img" src={logoImage} alt="logo" />
      </a>
    </div>
  );
};

export default NotFound;
