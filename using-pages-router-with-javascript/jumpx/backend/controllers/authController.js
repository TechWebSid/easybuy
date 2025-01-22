import express from 'express';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from "../models/userModel.js";

export const signup = async (req, res, next) => {
    const { firstName, lastName, Username, email, password } = req.body;

    // Validation check for empty fields
    if (!firstName || !lastName || !Username || !email || !password) {
        return next(errorHandler(400, 'All fields are required'));
    }

    try {
        // Check if the user already exists by email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return next(errorHandler(400, 'User with this email already exists'));
        }

        // Hash the password
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Create the new user
        const newUser = new User({
            firstName,
            lastName,
            Username,
            email,
            password: hashedPassword,
        });

        // Save the new user
        await newUser.save();
        res.status(201).json({ message: 'Signup successful' });

    } catch (err) {
        next(err); // Pass any error to the next middleware
    }
};

export const signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(errorHandler(400, 'All fields are required'));
        }

        const user = await User.findOne({ email });
        if (!user) {
            return next(errorHandler(401, 'Invalid email or password'));
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return next(errorHandler(401, 'Invalid email or password'));
        }

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT_SECRET,
            { expiresIn: '15d' }
        );

        // Remove password from user object
        const { password: pass, ...userWithoutPassword } = user._doc;

        // Set cookie with proper configuration
        res.cookie('access_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // true in production
            sameSite: 'lax',
            maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
            path: '/',
            domain: process.env.NODE_ENV === 'production' ? '.easy2buyhub.com' : 'localhost'
        });

        return res.status(200).json({
            success: true,
            message: 'Login successful',
            user: userWithoutPassword
        });

    } catch (error) {
        console.error('Signin error:', error);
        next(errorHandler(500, 'Internal server error'));
    }
};

export const logout = async (req, res, next) => {
    try {
        res.clearCookie('access_token', {
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
        });

        res.status(200).json({
            success: true,
            message: 'Logged out successfully',
        });
    } catch (error) {
        next(error);
    }
};

export const checkSession = (req, res) => {
  try {
      // Check if req.cookies exists
      if (!req.cookies) {
          return res.status(200).json({ isLoggedIn: false });
      }

      const token = req.cookies.access_token;

      if (!token) {
          return res.status(200).json({ isLoggedIn: false });
      }

      jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret', (err, decoded) => {
          if (err) {
              console.error('JWT verification failed:', err);
              return res.status(200).json({ isLoggedIn: false });
          }

          res.status(200).json({ isLoggedIn: true });
      });
  } catch (error) {
      console.error('Error checking session:', error);
      res.status(200).json({ isLoggedIn: false });
  }
};

