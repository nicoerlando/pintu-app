import React from 'react';
import { Link } from 'react-router-dom';
import './stylesNotFoundPage.scss';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="title">404</div>
      <p className="caption">Uh Oh! Page not Found</p>
      <Link to="/">
        <div className="col text-center">
          <button
            id="notFoundButton"
            className="btn btn-outline-danger"
            type="button"
          >
            <div className="text">Back to Home</div>
          </button>
        </div>
      </Link>
    </div>
  );
}
