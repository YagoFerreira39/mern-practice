const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMidleware');
const port = process.send.PORT || 5000;

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port = [${port}]`))
