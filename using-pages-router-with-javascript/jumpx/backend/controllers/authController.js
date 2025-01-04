import express from 'express';
import {errorHandler} from '../utils/error.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'; // Corrected the import to bcrypt
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
  const { email, password } = req.body;

  // Validate input fields
  if (!email || !password) {
    return next(errorHandler(400, 'All fields are required'));
  }

  try {
    // Check if the user exists
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(400, 'User not found'));
    }

    // Validate password
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, 'Wrong Password'));
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '15d' } // Optional: Set token expiry
    );

    // Destructure user details excluding password
    const { password: pass, ...otherDetails } = validUser._doc;

    // Send response with token in cookie
    res
      .status(200)
      .cookie('accessToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'strict',
      })
      .json(otherDetails);
  } catch (err) {
    next(err);
  }
};
