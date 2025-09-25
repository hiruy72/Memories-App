import express from 'express';
import bodyParser from 'body-parser'; // MUST be exactly this
import mongoose from 'mongoose';
import cors from 'cors';
import postsRoutes from './routes/posts.js'; // Importing the posts routes

const app = express();

app.use('/posts', postsRoutes); // Using the posts routes

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// MongoDB connection
const CONNECTION_URL = 'mongodb+srv://hiruy:january62005@cluster0.elsuyko.mongodb.net/';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
