import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [bookedHouses, setBookedHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('User not authenticated');
          setLoading(false);
          return;
        }

        const userResponse = await axiosInstance.get('/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(userResponse.data);

        // Fetch booked houses
        const bookingsResponse = await axiosInstance.get('/api/bookings', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookedHouses(bookingsResponse.data.bookedHouses || []);
      } catch (error) {
        setError(error.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user data found</div>;

  return (
    <div className="bg-light p-4 rounded shadow">
      <h2 className="text-primary">Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      <h3>Booked Houses:</h3>
      {bookedHouses.length > 0 ? (
        <ul>
          {bookedHouses.map(house => (
            <li key={house._id}>{house.type} - {house.location} - ₹{house.price}/night</li>
          ))}
        </ul>
      ) : (
        <p>No booked houses.</p>
      )}
    </div>
  );
};

export default UserProfile;
