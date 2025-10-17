const { getTasks, saveTasks } = require('../models/taskModel');

exports.getAllTasks = (req, res) => {
  const tasks = getTasks();
  res.json(tasks);
};

exports.addTask = (req, res) => {
  const tasks = getTasks();
  const { title } = req.body;

  if (!title) return res.status(400).json({ message: 'Title is required' });

  const newTask = {
    id: Date.now(),
    title,
    done: false
  };

  tasks.push(newTask);
  saveTasks(tasks);

  res.status(201).json(newTask);
};

exports.deleteTask = (req, res) => {
  const tasks = getTasks();
  const { id } = req.params;
  const updatedTasks = tasks.filter(task => task.id != id);

  if (tasks.length === updatedTasks.length) {
    return res.status(404).json({ message: 'Task not found' });
  }

  saveTasks(updatedTasks);
  res.json({ message: 'Task deleted successfully' });
};
