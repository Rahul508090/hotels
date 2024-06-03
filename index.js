// video 9 start 17:25
import express from 'express';
import connectDB from './db.js';
import bodyParser from 'body-parser';
import MenuRoutes from './routes/MenuRoutes.js';
import PersonRoutes from './routes/PersonRoutes.js';

// Connect to the database
connectDB();

// Create an Express app
const app = express();

app.use(bodyParser.json());

const PORT = 9000;

app.use('/person', PersonRoutes);
app.use('/menu', MenuRoutes);

// Listen for requests

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
