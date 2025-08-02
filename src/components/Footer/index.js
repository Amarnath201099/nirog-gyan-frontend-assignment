import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#edf7ff" }}
      className=" text-dark pt-5 pb-3 shadow-sm mt-5"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">About HealthCare</h5>
            <p className="text-muted">
              HealthCare is dedicated to connecting patients with top doctors
              through seamless online appointment booking. We believe in
              personalized care and making health accessible anytime, anywhere.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="mb-2">
              <FaPhone className="me-2" />
              +91 98765 43xxx
            </p>
            <p className="mb-2">
              <FaEnvelope className="me-2" />
              healthcare@gmail.com
            </p>
            <p className="mb-0">
              <FaMapMarkerAlt className="me-2" />
              Hyderabad, Telangana, India
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-decoration-none text-muted">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none text-muted">
                  Find Doctors
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none text-muted">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="text-decoration-none text-muted">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <div className="text-center small text-muted">
          © 2025 HealthCare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
