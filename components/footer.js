"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-light py-4 mt-auto">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="fw-bold mb-2">📝 TaskManager</h5>
            <p className="text-muted mb-0">
              Stay organized and get things done. Simple. Efficient. Free.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-3">
                <Link href="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="list-inline-item me-3">
                <Link href="/login" className="text-light text-decoration-none">
                  Login
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/signup" className="text-light text-decoration-none">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4 border-top pt-3 border-secondary">
          <small className="text-muted">
            © {new Date().getFullYear()} TaskManager. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
