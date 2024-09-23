import express from 'express';
import dotenv from 'dotenv';
import db from '../db.js'; // Ensure the path is correct
import passport from '../auth.js'; // Ensure the path is correct
import personRoutes from '../routes/PersonRoutes.js';
import menuItemRoutes from '../routes/MenuRoutes.js';

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Request logging middleware
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to: ${req.originalUrl}`);
    next();
};
app.use(logRequest);

// Initialize Passport for authentication
app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', { session: false });

// Base route
app.get('/', (req, res) => {
    console.log('Server is running! Request received at /api');
    res.send('Welcome to our Hotel');
});

// Use the routers for additional routes
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

// Export the app as a serverless function for Vercel
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
