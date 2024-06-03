import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://rahul:rahul5080@cluster0.iqk3fxs.mongodb.net/');
    console.log('Database connected successfully.');
  } catch (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1); // Exit process with failure
  }
};
//new
export default connectDB;
