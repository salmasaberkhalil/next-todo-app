"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-light pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row gy-4">
          {/* Column 1 */}
          <div className="col-lg-6 col-md-12">
            <h5 className="text-uppercase fw-bold mb-3">🛍️ Our Store</h5>
            <p className="text-muted">
              We offer the best products at the best prices. Quality you can trust. Follow us for the latest deals!
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/" className="text-decoration-none text-light">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-decoration-none text-light">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-decoration-none text-light">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase fw-bold mb-3">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="mailto:support@store.com" className="text-decoration-none text-light">
                  📧 support@store.com
                </a>
              </li>
              <li>
                <a href="tel:+123456789" className="text-decoration-none text-light">
                  📞 +123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 pt-3 border-top border-secondary">
          <small className="text-muted">
            © {new Date().getFullYear()} All Rights Reserved | <Link href="/" className="text-light text-decoration-none">Our Store</Link>
          </small>
        </div>
      </div>
    </footer>
  );
}
