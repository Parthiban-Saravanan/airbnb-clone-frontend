import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BillingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleConfirmBooking = async () => {
    try {
      const { bookedHouses, totalPrice } = location.state;
      const response = await axios.post('/api/bookings/confirm', {
        bookedHouses,
        totalPrice,
      });
      
      if (response.status === 200) {
        navigate('/profile');
      } else {
        console.error('Error confirming booking:', response.data);
        alert('There was an issue confirming your booking. Please try again.');
      }
    } catch (error) {
      console.error('Error confirming booking:', error);
      alert('There was an issue confirming your booking. Please try again.');
    }
  };

  const { bookedHouses, totalPrice } = location.state || { bookedHouses: [], totalPrice: 0 };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Billing</h2>
      {bookedHouses.length > 0 ? (
        <div>
          <h3>Your Booking Details:</h3>
          <ul>
            {bookedHouses.map(house => (
              <li key={house._id}>
                {house.type} - {house.location} - ₹{house.price}/night
              </li>
            ))}
          </ul>
          <h4>Total Amount: ₹{totalPrice}</h4>
          <button className="btn btn-primary" onClick={handleConfirmBooking}>Confirm Booking</button>
        </div>
      ) : (
        <p>No houses booked.</p>
      )}
    </div>
  );
};

export default BillingPage;
