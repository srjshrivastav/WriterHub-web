import React from "react";

export default function Loading() {
  return (
    <div className="container d-flex justify-content-center" style={{minHeight:"100%"}}>
    <div
      className="spinner-grow text-dark"
      style={{width:"100px",height:"100px",marginTop:"20%"}}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
    </div>

  );
}
