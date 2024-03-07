const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

// Підключення до MongoDB
mongoose.connect("mongodb://0.0.0.0:27017/pharmapp");

// Підключення моделі
const Pill = require('./models/pill');

// Middleware
app.use(cors());
app.use(express.json());

// GET request для отримання всіх ліків
app.get('/api/pills', async (req, res) => {
    try {
        const drugs = await Pill.find();
        res.json(drugs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});