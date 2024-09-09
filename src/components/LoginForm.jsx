import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

const LoginForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axiosInstance.post('/api/users/login', values);
        localStorage.setItem('token', response.data.token);
        navigate('/profile'); // Navigate to profile after successful login
      } catch (error) {
        console.error('Error logging in:', error);
        alert('Login failed. Please check your credentials.');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="bg-light p-4 rounded shadow">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="form-control"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-danger">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="form-control"
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-danger">{formik.errors.password}</div>
        ) : null}
      </div>
      <button type="submit" className="btn btn-primary mt-3">Login</button>
    </form>
  );
};

export default LoginForm;
