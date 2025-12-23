// Import Express framework to create API routes
const express = require('express');

// Import Node.js File System module to read and write JSON files
const fs = require("fs");

// Import path module to safely resolve file paths
const path = require("path");

// Create an Express router for task-related routes
const router = express.Router();

// Absolute path to the JSON file used as data storage
const filePath = path.join(__dirname, "../data/tasks.json");

// Read all tasks from the JSON file and return them as a JavaScript array
function readTasks() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

// Write the provided tasks array to the JSON file
function writeTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

// GET /tasks
// Returns all tasks stored in the JSON file
router.get("/", (req, res) => {
  try {
    const tasks = readTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Failed to read tasks" });
  }
});

// GET /tasks/:id
// Returns a single task matching the provided ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const tasks = readTasks();
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});

// POST /tasks
// Creates a new task and stores it in the JSON file
router.post("/", (req, res) => {
  const { title, completed } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const tasks = readTasks();

  const newTask = {
    id: Date.now().toString(),
    title,
    completed: completed || false
  };

  tasks.push(newTask);
  writeTasks(tasks);

  res.status(201).json(newTask);
});

// PUT /tasks/:id
// Updates an existing task identified by its ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const tasks = readTasks();
  const taskIndex = tasks.findIndex(t => t.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (title !== undefined) {
    tasks[taskIndex].title = title;
  }

  if (completed !== undefined) {
    tasks[taskIndex].completed = completed;
  }

  writeTasks(tasks);
  res.json(tasks[taskIndex]);
});

// DELETE /tasks/:id
// Deletes a task identified by its ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const tasks = readTasks();
  const filteredTasks = tasks.filter(t => t.id !== id);

  if (tasks.length === filteredTasks.length) {
    return res.status(404).json({ message: "Task not found" });
  }

  writeTasks(filteredTasks);
  res.json({ message: "Task deleted successfully" });
});

// Export the router to be used in the main application
module.exports = router;
