import React from 'react';
import HouseList from '../components/HouseList'; // Adjust path as per your structure

const HomePage = () => {
  return (
    <div className="container-fluid mt-5 p-5" style={{ backgroundColor: '#1c1c1e', color: '#f5f5f5' }}>
      <h1 className="text-center text-primary mb-4">Welcome to Airbnb Clone</h1>
      
      <HouseList />

      <div className="row mb-4">
        <div className="col-lg-4 col-md-6 mb-3">
          <div className="card h-100 bg-secondary text-light">
            <div className="card-body text-center">
              <i className="fas fa-home fa-3x mb-3 text-primary"></i>
              <h5 className="card-title">Unique Stays</h5>
              <p className="card-text">Discover a variety of unique accommodations from beach houses to boat houses, and farm houses.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-3">
          <div className="card h-100 bg-secondary text-light">
            <div className="card-body text-center">
              <i className="fas fa-star fa-3x mb-3 text-primary"></i>
              <h5 className="card-title">Verified Reviews</h5>
              <p className="card-text">Read reviews from verified guests to ensure a quality stay every time.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-3">
          <div className="card h-100 bg-secondary text-light">
            <div className="card-body text-center">
              <i className="fas fa-lock fa-3x mb-3 text-primary"></i>
              <h5 className="card-title">Secure Payments</h5>
              <p className="card-text">Enjoy peace of mind with our secure payment gateway for safe transactions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
