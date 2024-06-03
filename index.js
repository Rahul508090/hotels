// video 9 start 
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

const PORT = 5000;

app.use('/person', PersonRoutes);
app.use('/menu', MenuRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
