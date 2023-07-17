

const express = require('express')
const app = express()

const bookRouter= require('./routes/books')
// midleware



//routes
// app.use(bookRouter)
app.use('books',bookRouter)
//error handles


//bootup
app.listen(3000)