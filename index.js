// Fixing imports and ensuring proper ES module syntax

// 11 video start

import express from 'express';
import connectDB from './db.js';
import bodyParser from 'body-parser';
import passport from './Auth.js';

// Routes
import MenuRoutes from './routes/MenuRoutes.js';
import PersonRoutes from './routes/PersonRoutes.js';

// Connect to the database
connectDB();

// Middleware function
const logRequest = (req, res, next) => {
  console.log(`[ ${new Date().toLocaleString()}] request received to This Url -> ${req.originalUrl}`);
  next();
};

// Create an Express app
const app = express();

app.use(bodyParser.json());
app.use(logRequest);


// Initialize Passport and define the authentication middleware
app.use(passport.initialize());
const Auth = passport.authenticate('local', { session: false });

// Define routes
app.get('/', Auth, (req, res) => {
  res.send('Login Successful');
});

app.use('/person', Auth, PersonRoutes);
app.use('/menu', Auth, MenuRoutes);

const PORT = 9000;

// Listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
