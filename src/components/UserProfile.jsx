import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="bg-light p-4 rounded shadow">
      <h2 className="text-primary">Welcome, {user.name}</h2>
      {user.bookings.length > 0 ? (
        <div>
          <h3>Your Bookings</h3>
          <ul className="list-group">
            {user.bookings.map(booking => (
              <li key={booking._id} className="list-group-item">
                {booking.house.type} - Check-in: {new Date(booking.checkInDate).toLocaleDateString()} - Check-out: {new Date(booking.checkOutDate).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>You have no bookings.</p>
      )}
    </div>
  );
};

export default UserProfile;
