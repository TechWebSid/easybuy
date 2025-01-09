import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from '../backend/routes/authroutes.js'; // Corrected the import name
import contactRoute from '../backend/routes/contactroute.js';
import blogRoute from "./routes/blogRoute.js"
import Comment from './routes/commentRoute.js';
import job from "./routes/jobRoutes.js"

// Load environment variables
dotenv.config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err);
  });

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send("Hello World");
});

// routes
app.use("/api/user", userRoutes);
app.use("/api/contact", contactRoute);
app.use("api/blog" , blogRoute);
app.use("/api/comment" , Comment);
app.use("/api/job", job);

// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
