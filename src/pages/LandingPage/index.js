import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DoctorsContext } from "../../context/DoctorsContext";

import "./index.css";

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { doctors } = useContext(DoctorsContext);

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="landing-page-container">
      <h1 className="landing-page-heading">Our Specialities</h1>
      <input
        className="landing-page-search"
        type="text"
        placeholder="Search by name or specialization"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredDoctors.length > 0 ? (
        <ul className="list-unstyled docs-container">
          {filteredDoctors.map((doc) => (
            <li key={doc.id} className="doc-card">
              <Link
                to={`/doctor/${doc.id}`}
                className="text-decoration-none text-dark d-block"
              >
                <img
                  src={doc.profile_image}
                  alt={doc.name}
                  className="doc-img"
                />
                <div>
                  <h3 className="doc-name">{doc.name}</h3>
                  <p className="doc-specialization">{doc.specialization}</p>
                  <p className="doc-availability">Status: {doc.availability}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted mt-5 text-center">
          <strong>No matching doctors found.</strong> <br />
          Try searching with a different name or specialization to get better
          results.
        </p>
      )}
    </div>
  );
};

export default LandingPage;
