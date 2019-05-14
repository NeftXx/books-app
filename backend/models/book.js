const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    title: { type: String, required: true},
    author: { type: String, required: true },
    isbn: { type: String, required: true },
    image_path: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = model('Book', BookSchema);