const express = require('express');
const TaskModel = require('../models/taskModel');
const { GetTasks, CreateTask, UpdateTask, DeleteTask } = require('../controllers/taskController');

const router = express.Router();

router.get('/api/tasks', GetTasks);
router.post('/api/tasks', CreateTask);
router.put('/api/tasks/:id', UpdateTask);
router.delete('/api/tasks/:id', DeleteTask);

module.exports = router