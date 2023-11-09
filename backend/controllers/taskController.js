const TaskModel = require('../models/taskModel');

// Retrieve all tasks
const GetTasks = async (req, res) => {
    try {
        const Tasks = await TaskModel.find();
        res.status(200).json(Tasks);
    } catch (err) {
        res.status(500).json('Failed to retrieve tasks: ' + err);
    }
}

// Create new task
const CreateTask = async (req, res) => {
    try {
        const Task = new TaskModel({
            title:req.body.title,
            desc:req.body.desc
        });
        await Task.save();
        res.status(201).json('Successfully created task');  // 201 -- succesfully created
    } catch (err) {
        res.status(500).json('Failed to create tasks: ' + err);
    }
}

// Update existing task
const UpdateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const Task = await TaskModel.findByIdAndUpdate(
            {_id:id}, req.body, {new:true}
        );
        res.status(200).json('Successfully updated task');  // 200 -- OK
    } catch (err) {
        res.status(500).json('Failed to update task: ' + err);
    }
}

// Delete existing task
const DeleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedTask = await TaskModel.findByIdAndDelete(id);
        // if attempting to delete nonexistent task
        if(!deletedTask) {  
            return res.status(404).json('Task not found');
        }
        res.status(202).json('Successfully deleted task');  // 202 -- accepted
    } catch (err) {
        res.status(500).json('Failed to delete task: ' + err);
    }
}

module.exports = {
    GetTasks,
    CreateTask,
    UpdateTask,
    DeleteTask
}