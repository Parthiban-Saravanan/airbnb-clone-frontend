import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import UserProfile from '../components/UserProfile';

const UserProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get('/api/users/profile'); // Adjust endpoint as per your backend
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="container mt-5">
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <UserProfile user={user} />
      )}
    </div>
  );
};

export default UserProfilePage;
