import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Contact Us - My Store",
  description: "Get in touch with us for any inquiries or support.",
};

function Contact() {
  return (
    <div className="container py-5">
      <div className="row text-center mb-5">
        <div className="col-12">
          <h1 className="mb-3 text-primary fw-bold">Contact Us</h1>
          <p className="lead text-secondary">
            We’re here to help! Reach out to us with any questions or feedback.
          </p>
        </div>
      </div>

      <div className="row g-4">
        {/* Contact Form */}
        <div className="col-lg-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-primary mb-4 fw-semibold">Send Us a Message</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary px-4 py-2 fw-semibold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-lg-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-primary mb-4 fw-semibold">Our Contact Information</h3>
              <ul className="list-unstyled text-muted">
                <li className="mb-3">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@store.com" className="text-decoration-none text-dark">
                    support@store.com
                  </a>
                </li>
                <li className="mb-3">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+123456789" className="text-decoration-none text-dark">
                    +123 456 789
                  </a>
                </li>
                <li className="mb-3">
                  <strong>Address:</strong> 123 Store Street, City, Country
                </li>
                <li>
                  <strong>Working Hours:</strong> Monday - Friday, 9 AM - 6 PM
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

// http://localhost:3000/contact/3/image/view