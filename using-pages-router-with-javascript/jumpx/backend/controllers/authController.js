import express from 'express';
import {errorHandler} from '../utils/error.js';
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

    // Validate input fields
    if (!email || !password) {
      return next(errorHandler(400, 'All fields are required'));
    }

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(401, 'Invalid email or password'));
    }

    // Validate password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return next(errorHandler(401, 'Invalid email or password'));
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '15d' }
    );

    // Remove password from user object
    const { password: pass, ...userWithoutPassword } = user._doc;

    // Send response with token in cookie and user data
    res
      .cookie('access_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
      })
      .status(200)
      .json({
        success: true,
        message: 'Login successful',
        user: userWithoutPassword,
      });

  } catch (error) {
    console.error('Signin error:', error);
    next(errorHandler(500, 'Internal server error'));
  }
};
