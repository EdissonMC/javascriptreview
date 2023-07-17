
const BOOKS= require('../models/books')
exports.getAllBooks = (req, res) => {
    res.status(200).send(BOOKS)
}