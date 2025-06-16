"use client";

import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <h1>Loading.........</h1>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}