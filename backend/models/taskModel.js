const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    completed: {type:Boolean,required:true,default:false},
    title: {type:String,required:true},
    desc: String,
}, {timestamps: true});

module.exports = mongoose.model('Task', TaskSchema);