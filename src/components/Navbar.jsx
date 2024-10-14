import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons'; // Ensure this import is correct

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          <FontAwesomeIcon icon={faAirbnb} flip style={{color: "#ad0101"}} className="me-2"/> {/* Icon added here */}
          Airbnb Clone
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/billing">Billing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="bg-warning text-center py-2">
        <marquee className="text-white fw-bold" behavior="scroll" direction="left" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.2em" }}>
          <span className="me-2 text-danger">&#9733;</span>
          <span className="shiny-text">35% OFF on bookings for July and August!</span>
          <span className="ms-2 text-danger">&#9733;</span>
        </marquee>
      </div>
    </>
  );
};

export default Navbar;
