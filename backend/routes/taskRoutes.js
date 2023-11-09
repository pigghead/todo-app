const express = require('express');
const TaskModel = require('../models/taskModel');
const { GetTasks, CreateTask, UpdateTask, DeleteTask } = require('../controllers/taskController');

const router = express.Router();

router.get('/tasks', GetTasks);
router.post('/tasks', CreateTask);
router.put('/tasks/:id', UpdateTask);
router.delete('/tasks/:id', DeleteTask);

module.exports = router