const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();

console.log('Before mongoose.connet: ', process.env.MONGO_URI);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(taskRoutes);
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

app.listen('8000', () => {
    console.log('listening on port 8000');
});

// BmuDrDncjwmtwpkz