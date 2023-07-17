const express= require('express')
const router = express.Router()

const booksController= require('../controller/books')

// router.get('/',(req, res)=>{
//     res.status(200).send(BOOKS)
// })
// router.get('/:title',(req, res)=>{
//     res.send("specific book")
// })


router.get('/', booksController.getAllBooks)
// router.get('/:title',(req, res)=>{
//     res.send("specific book")
// })

module.exports= router