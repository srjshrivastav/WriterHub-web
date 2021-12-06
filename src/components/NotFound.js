import React from "react";

const NotFound = ({ history }) => (
  <div className="container">
    <div className="row justify-content-center mt-5">
      <div className="col-md-6 mt-5">
        <div className="card text-center mt-5">
          <strong style={{fontSize:50}}>404</strong>
          <h3 className="card-title">Oops !Page not found</h3>
          <div className="card-body">
            <button
              className="btn btn-outline-dark"
              onClick={() => history.push("/home")}
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
