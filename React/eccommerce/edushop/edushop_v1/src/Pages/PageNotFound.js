import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-errorCode">404</h1>
      <h2 className="notfound-title">Oops! Page Not Found</h2>
      <p className="notfound-description">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="notfound-button">
        Back to Home
      </Link>
    </div>
  );
};


export default PageNotFound;
