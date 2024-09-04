import React from 'react';
import UserProfile from '../components/UserProfile';

const UserProfilePage = () => {
  return (
    <div className="container mt-4">
      <h1>Welcome to Your Profile!</h1>
      <UserProfile />
    </div>
  );
};

export default UserProfilePage;
