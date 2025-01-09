import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import SignUpForm from '../components/Auth/SignUpForm';

const SignUp = () => {
  return (
    <>
      <Navbar />
      <SignUpForm />
      <Footer />
    </>
  );
};

export default SignUp; 