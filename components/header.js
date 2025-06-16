"use client";
import Link from "next/link";
import React, { useEffect } from "react";



export default function Header() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold fs-4">
          🛍️ MyStore
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            <li className="nav-item">
              <Link href="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text-white">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link text-white">
                Contact
              </Link>
            </li>
          
            <li className="nav-item">
              <Link href="/todolist" className="nav-link text-white">
                Todo
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login" className="btn btn-light text-primary px-3 py-1 rounded-pill fw-semibold">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
