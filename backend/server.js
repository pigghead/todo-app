const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require ('path');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config({path: path.join(__dirname, '..', '.env')});
console.log(path.join(__dirname, '..', '.env'));

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(taskRoutes);
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

app.get("/*", (req, res) => {
    res.sendFile(__dirname, path.join(__dirname, '..', '.env'))
    console.log(__dirname, path.join(__dirname, '..', '/frontend/index.js'));
});

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});

// BmuDrDncjwmtwpkz