import React from 'react';
import { Link } from 'react-router-dom';
import "./NavigationBar.css"; // Make sure to import the CSS file

const NavigationBar = () => {
  return (
    <header className="NavigationBar">
      <div className="top-section">
        <div className="top-buttons">
        <Link to="/home" className="button">
            Home
          </Link>
          <Link to="/review" className="button">
            Review
          </Link>
          <Link to="/leaderboard" className="button">
            Leaderboard
          </Link>
          <Link to="/account" className="button">
            Account
          </Link>
        </div>
        <div className="title">
          <h1>MusiConnect</h1>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
