import React from 'react';
import SignupForm from '../components/SignupForm';

const SignupPage = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Sign Up</h2>
      <div className="d-flex justify-content-center">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
