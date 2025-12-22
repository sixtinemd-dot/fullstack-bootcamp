/**
 * Exercise 2 - Routes for To-Do List API
 * Mounted in app.js at '/todos'
 * Implements CRUD operations: GET, POST, PUT, DELETE
 */

const express = require('express');
const router = express.Router();


// In-memory database for demonstration
let todos = [];
let nextId = 1;

// GET all todos
router.get('/', (req, res) => {
    res.json(todos);
});

// POST create new todo
router.post('/', (req, res) => {
    const {title} = req.body;

    if (!title) {
        return res.status(400).json({message: 'Title is required'})
    }
    if (!req.body.title || typeof req.body.title !== 'string') {
        return res.status(400).json({ message: 'Invalid title' });
    }

    const newTodo = {
        id: nextId++,
        title,
        completed: false
    }

    todos.push(newTodo)
    res.status(201).json(newTodo)
})


// PUT update todo by ID
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id)

    if (!todo) {
        return res.status(404).json({message: 'To do not found'})
    }

    const {title, completed} = req.body

    if (title !== undefined) todo.title = title
    if (completed !== undefined) todo.completed = completed

    res.json(todo)
})

// DELETE a to do by ID
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = todos.findIndex(i => i.id === id)

    if (index === -1) {
        return res.status(404).json({message: 'To do not found'})
    }

    const deletedTodo = todos.splice(index, 1)
    res.json(deletedTodo[0])
})

module.exports = router

