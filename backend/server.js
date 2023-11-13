const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require ('path');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config({path: path.join(__dirname, '..', '.env')});

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "frontend", "public", "index.html"));
    console.log("Hello :root")
    //console.log(path.resolve(__dirname, "frontend", "public", "index.html"));
});
app.use(taskRoutes);
app.use(express.static(path.join(__dirname, "..", "frontend", "build")));
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});

// BmuDrDncjwmtwpkz