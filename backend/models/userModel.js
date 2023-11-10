const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{type:String, Required:true, unique:true},
    password:{type:String, Required:true},

}, {timestamps:true});