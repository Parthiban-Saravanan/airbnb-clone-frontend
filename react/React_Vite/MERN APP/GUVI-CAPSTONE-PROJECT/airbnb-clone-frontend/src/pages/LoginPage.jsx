import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <div className="d-flex justify-content-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
