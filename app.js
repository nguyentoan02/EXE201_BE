import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import babysitterRoutes from './routes/babysitterRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());

// Routes
app.use('/api/babysitters', babysitterRoutes);

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


export default app; 
