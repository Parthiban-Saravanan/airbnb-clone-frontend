import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HouseItem = ({ house }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        {house.image && <img src={house.image} alt={house.type} className="card-img-top" />}
        <div className="card-body">
          <h5 className="card-title">{house.type}</h5>
          <p className="card-text">Location: {house.location}</p>
          <p className="card-text">Price: ₹{house.price}/night</p>
          <p className="card-text">Rating: {house.rating}</p>
          <p className="card-text">Availability: {house.status}</p>
          <Link to={`/house/${house._id}`} className="btn btn-primary">Book Now</Link>
        </div>
      </div>
    </div>
  );
};

HouseItem.propTypes = {
  house: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string,
    type: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default HouseItem;
