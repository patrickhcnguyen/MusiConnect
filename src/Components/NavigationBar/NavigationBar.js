import React from "react";
import "./NavigationBar.css"; // Make sure to import the CSS file

const NavigationBar = () => {
    return (
      <header className="NavigationBar">
        <div className="top-section">
          <div className="top-buttons">
            <button className="button">Leaderboard</button>
            <button className="button">Review</button>
          </div>
          <div className="title">
            <h1>MusiConnect</h1>
          </div>
        </div>
      </header>
    );
};

export default NavigationBar;
