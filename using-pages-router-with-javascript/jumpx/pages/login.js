import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import LoginForm from '../components/Auth/LoginForm';

const Login = () => {
  return (
    <>
      <Navbar />
      <LoginForm />
      <Footer />
    </>
  );
};

export default Login; 