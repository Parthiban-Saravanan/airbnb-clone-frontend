import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axiosInstance';

const SignupForm = () => {
    // State hooks for form inputs and error messages
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [validationError, setValidationError] = useState('');
    const navigate = useNavigate();

    // Validation for email and password
    const validateForm = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/; // Password regex

        if (!emailPattern.test(email)) {
            setValidationError('Invalid email format');
            return false;
        }
        if (!passwordPattern.test(password)) {
            setValidationError('Password must be at least 6 characters long, include an uppercase letter, a lowercase letter, and a number');
            return false;
        }
        setValidationError('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return; // Prevent submission if validation fails

        try {
            // Sending POST request to signup the user
            const response = await axios.post('users/signup', { name, email, password });
            localStorage.setItem('userInfo', JSON.stringify(response.data));
            navigate('/'); // Redirect to home page on successful signup
        } catch (err) {
            setError('User already exists or invalid data'); // Handle signup errors
        }
    };

    return (
        <div className="container mt-5">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                {/* Name input field */}
                <div className="form-group mb-3">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                {/* Email input field */}
                <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                {/* Password input field */}
                <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {/* Validation and error messages */}
                {validationError && <div className="alert alert-danger">{validationError}</div>}
                {error && <div className="alert alert-danger">{error}</div>}
                {/* Submit button */}
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupForm;
