// components/NotFound/NotFound.jsx
import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <div className="not-found-animation">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <p className="not-found-message">Oops! Page not found.</p>
        <p className="not-found-submessage">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <a href="/" className="not-found-home-link">Go to Homepage</a>
      </div>
    </div>
  );
};

export default NotFound;