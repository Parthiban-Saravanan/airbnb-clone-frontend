import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axiosInstance';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [validationError, setValidationError] = useState('');
    const navigate = useNavigate();

    // Validation for email and password
    const validateForm = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            setValidationError('Invalid email format');
            return false;
        }
        if (password.length < 6) {
            setValidationError('Password must be at least 6 characters long');
            return false;
        }
        setValidationError('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const response = await axios.post('users/login', { email, password });
            localStorage.setItem('userInfo', JSON.stringify(response.data));
            navigate('/');
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
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
                {validationError && <div className="alert alert-danger">{validationError}</div>}
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
