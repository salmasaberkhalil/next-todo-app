import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export const metadata = {
  title: "About Us - My Store",
  description: "Learn more about our store and our mission.",
};

function About() {
  return (
    <div className="container py-5">
      <div className="row text-center mb-5">
        <div className="col-12">
          <h1 className="mb-3 text-primary fw-bold">About Us</h1>
          <p className="lead text-secondary">
            Welcome to <strong>MyStore</strong>, your trusted destination for quality products.
          </p>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h3 className="card-title text-primary fw-semibold mb-3">Our Mission</h3>
              {/* <Link href="/vision">Our Vision</Link> */}
              <p className="card-text text-muted">
                We aim to provide an exceptional shopping experience by offering high-quality
                products at competitive prices, paired with outstanding customer service.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h3 className="card-title text-primary fw-semibold mb-3">Our Story</h3>
              <p className="card-text text-muted">
                Founded in 2025, <strong>MyStore</strong> started with a vision to make shopping simple,
                affordable, and enjoyable. Today, we are proud to serve customers worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 text-center">
        <div className="col-12">
          <h3 className="text-primary fw-bold mb-4">Why Choose Us?</h3>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {[
              "Premium Quality Products",
              "Fast & Reliable Shipping",
              "24/7 Customer Support",
              "Sustainable Practices",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-light text-dark p-3 px-4 rounded-3 shadow-sm"
                style={{ minWidth: "240px" }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
