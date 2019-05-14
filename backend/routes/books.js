const { Router } = require('express');
const router = Router();
const Book = require('../models/book');
const { unlink } = require('fs-extra');
const path = require('path');

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

router.post('/', async (req, res) => {
    const { title, author, isbn } = req.body;
    const image_path = `/uploads/${req.file.filename}`;
    const book = new Book({ title, author, isbn, image_path });
    await book.save();
    res.json({
        message: 'Book saved.',
        book
    })
});

router.delete('/:id', async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    unlink(path.resolve('./backend/public' + book.image_path))
    res.json({
        message: 'Book deleted',
        book
    });
});

module.exports = router;