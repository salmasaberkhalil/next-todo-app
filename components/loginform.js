"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("");

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      setStatus("Please enter a valid email address.");
      return;
    }

    if (formData.password.length < 6) {
      setStatus("Password must be at least 6 characters long.");
      return;
    }

    router.push("/");
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="col-md-6 col-lg-5">
        <div className="card shadow rounded-4 border-0">
          <div className="card-body p-4">
            <h2 className="text-center mb-4 text-primary">Welcome Back 👋</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control rounded-pill"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-bold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control rounded-pill"
                  id="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 rounded-pill">
                Login
              </button>
            </form>
            <p className="text-center mt-3">
              Don’t have an account?{" "}
              <Link href="/register" className="text-decoration-none text-primary fw-semibold">
                Register here
              </Link>
            </p>
            {status && (
              <div className="alert alert-info text-center mt-3 py-2" role="alert">
                {status}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
