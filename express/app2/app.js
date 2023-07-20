const express = require('express')
const cors = require('cors')
const errorsMiddleware = require('./middleware/errorsMiddleware')
const app = express()

app.use(cors())

app.use(express.json())

app.get('/products', (req, res, next) => {

    res.status(200).json([
        {
            name: 'tv',
            description: "tv samsung 42'' ",
            price: "3000"
        },
        {
            name: 'laptop',
            description: "macbook pro'' ",
            price: "5000"
        }
    ])
})


app.post('/products', (req, res) => {
    console.log(req.body)
    res.send({ message: "ok..." })
})

app.get('', (req, res, next) => {

    //    try {
    // throw {
    //     code: "404",
    //     message:  "error "
    // }
    // } 
    // catch (err) {
    //     console.log("trigger error 404"+ err)
    //     next({
    //         code: "404",
    //         message: util.format("Error: %s ", message)
    //     })
    // }

    res.send("todo ok")
})
app.use(errorsMiddleware.error500)
app.use(errorsMiddleware.error404)

const port = process.env.PORT
console.log(port)
app.listen(5000, () => {
    console.log('litening in ' + port)
})
