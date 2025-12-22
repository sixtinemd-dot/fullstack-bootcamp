const express = require('express');
const router = express.Router();

let books = []
let nextId = 1

//get all books

router.get('/', (req, res) => {
    res.json(books)
})

// add a book

router.post('/', (req, res) => {
    const {title, author} = req.body

    if (!title || !author) {
        return res.status(400).json({message: 'Title and author are required'})
    }

    const newBook = {
        id: nextId++,
        title,
        author
    }

    books.push(newBook)
    res.status(201).json(newBook)
})

//update a book

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({message: 'Book not found'})
    }

    const {title, author} = req.body

    if (title !== undefined) book.title = title
    if (author !== undefined) book.author = author

    res.json(book)
})

// delete a book

router.delete('/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const index = books.findIndex(i => i.id === id)
    
    if (index === -1) {
        return res.status(404).json({message: 'Book not found'})
    }

    const deletedBook = books.splice(index, 1);
    res.json(deletedBook[0])
})

module.exports = router