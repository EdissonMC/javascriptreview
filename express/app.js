const express = require("express")

const app = express()

// anable to read the body
app.use(express.json())

// middleware 1
// app.use((req, res, next) => {
//     console.log("in middleware 1")
//     // res.send('i m something ')

//     next()
// })

// middleware 2
// app.use("/file",(req, res, next) => {
//     console.log("in middleware 2")
//     // res.send('i m something ')
//     next()
// })

// const fs = require('fs')
// function routeHandler(req, res) {
//     console.log(req.body)
//     const { name } = req.body

//     console.log("name : " + name)
//     console.log("query" + req.query)

//     const html = fs.readFileSync('index.html')

//     res.send(html)
// }

// app.post('', routeHandler)
// app.use('', routeHandler)



app.use('/users', (req,res) => {
  
    console.log("-> I am in users with query ")
    console.log(req.query)
    console.log(req.params)
    res.send("prueba en users")
})


// app.get('/product', (req,res) => {
  
//     console.log("-> I am in product ")
//     console.log(req.body)
// })


console.log(process.env.PORT)
//error-handler
const port =5000// process.env.PORT
app.listen(port, console.log(`listening in ${port}`))