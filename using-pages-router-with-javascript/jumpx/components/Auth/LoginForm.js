import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    if (!formData.email || !formData.password) {
      toast.error("All fields are required");
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
      const response = await axios.post("http://localhost:5000/api/user/signin", {
        email: formData.email,
        password: formData.password,
      }, {
        withCredentials: true
      });

      if (response.status === 200) {
        toast.success("Login successful!");
        setTimeout(() => {
          router.push("/index-2");
        }, 500);
      }
    } catch (error) {
      console.error("Login error:", error);
      
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
              toast.error(errorMessage || "Invalid credentials");
              break;
            case 401:
              toast.error("Invalid email or password");
              break;
            case 500:
              toast.error("Server error. Please try again later");
              break;
            default:
              toast.error(errorMessage || "Login failed");
          }
        }
      } else if (error.request) {
        toast.error("Cannot connect to server. Please check your internet connection");
      } else {
        toast.error("Error in making request. Please try again");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="user-area-all-style log-in-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-action">
                <div className="form-heading text-center">
                  <h3 className="form-title">Login to your account!</h3>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-12">
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

                    <div className="col-12">
                      <div className="login-action">
                        <span className="forgot-login">
                          <Link href="/auth/forgot-password">Forgot Password?</Link>
                        </span>
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        className="default-btn btn-two"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Logging in..." : "Log In"}
                      </button>
                    </div>

                    <div className="col-12">
                      <p className="account-desc">
                        Not a member?
                        <Link href="/signup"> Register Now</Link>
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

export default LoginForm;
