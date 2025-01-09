import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from '../backend/routes/authroutes.js';
import contactRoute from '../backend/routes/contactroute.js';

import blogRoute from "./routes/blogRoute.js"
import Comment from './routes/commentRoute.js';
import job from "./routes/jobRoutes.js"
import cors from 'cors'
import cookieParser from 'cookie-parser';


// Load environment variables
dotenv.config();

const app = express();

app.use(express.urlencoded({extended:true}))

// Connect to MongoDB with proper options
mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
  socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
})
.then(() => {
  console.log('MongoDB is connected');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Handle MongoDB connection errors
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Middleware to parse JSON
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000', // your frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})); 

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Internal server error",
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Routes
app.get('/', (req, res) => {
    res.send("Hello World");
});

// routes
app.use("/api/user", userRoutes);
app.use("/api/contact", contactRoute);
app.use("/api/blog" , blogRoute);
app.use("/api/comment" , Comment);
app.use("/api/job", job);

// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
