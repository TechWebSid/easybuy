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
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

dotenv.config();

const app = express();

// IMPORTANT: Move CORS configuration before any routes or middleware
app.use(cors({
  origin: ['http://localhost:3000', 'easy2buyhub.com', 'https://easy2buyhub.com', 'https://www.easy2buyhub.com', 'http://www.easy2buyhub.com'],
   // Specifically allow your frontend origin
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// Connect to MongoDB with proper options
mongoose.connect(process.env.MONGO, {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB is connected');
})
.catch((err) => {
  console.error('MongoDB connection error:', err.message);
  process.exit(1); // Exit process with failure
});

// Handle MongoDB connection errors
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Add this after your other middleware
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads/resumes');
if (!fs.existsSync(uploadsDir)){
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});