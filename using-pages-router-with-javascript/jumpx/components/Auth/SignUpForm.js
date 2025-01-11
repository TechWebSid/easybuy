import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    Username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.Username || 
        !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Password strength validation
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("https://easybuy-9.onrender.com/api/user/signup", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        Username: formData.Username,
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 201) {
        toast.success("Registration successful!");
        router.push("/auth/login");
      }
    } catch (error) {
      console.error("Registration error:", error);
      
      if (error.response) {
        // Server responded with an error
        const errorMessage = error.response.data.message;
        
        // Check if the error response contains HTML (indicating a server crash)
        if (typeof error.response.data === 'string' && 
            error.response.data.includes('<!DOCTYPE html>')) {
          toast.error("Server error: Database connection failed. Please try again later.");
        } else {
          switch (error.response.status) {
            case 400:
              toast.error(errorMessage || "Invalid input data");
              break;
            case 409:
              toast.error(errorMessage || "User already exists");
              break;
            case 500:
              toast.error("Server error. Please try again later");
              break;
            default:
              toast.error(errorMessage || "Registration failed");
          }
        }
      } else if (error.request) {
        // Request was made but no response received
        toast.error("Cannot connect to server. Please check your internet connection");
      } else {
        // Error in request setup
        toast.error("Error in making request. Please try again");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="user-area-all-style sign-up-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-action">
                <div className="form-heading text-center">
                  <h3 className="form-title">Create an account!</h3>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="Username"
                          placeholder="Enter Your Username"
                          value={formData.Username}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <button 
                        className="default-btn btn-two" 
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Registering..." : "Register Account"}
                      </button>
                    </div>

                    <div className="col-12">
                      <p className="account-desc">
                        Already have an account?
                        <Link href="/login"> Login</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
