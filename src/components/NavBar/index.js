import { FaUserDoctor } from "react-icons/fa6";

import "./index.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid nav-inner-container">
          <Link
            className="navbar-brand d-flex align-items-center fw-bold"
            to="/"
          >
            <FaUserDoctor className="brand-icon" color="#6197bd" size={25} />{" "}
            <p className="m-0 ms-2">
              <span className="brand-highlight">H</span>
              ealth
              <span className="brand-highlight">C</span>are
            </p>
          </Link>
          <button
            className="navbar-toggler nav-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav-options"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav nav-options">
              <Link className="nav-link active text-start my-2 fw-bold" to="/">
                Home
              </Link>
              <button type="button" className="btn logout-btn">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default NavBar;
