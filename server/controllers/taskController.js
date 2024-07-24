const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json(tasks);
};

exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: 'Invalid task data' });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ error: 'Invalid task data' });
    }
};

exports.deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: 'Task deleted' });
};