const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    const data = [
        {
            title: 'c++',
            description: 'c++ advance'
        },
        {
            title: 'java1',
            description: 'java advance'
        }
    ]
})


app.get('/products',(req,res)=>{


    res.send({success:true, data:"ok"})
    // res.send({success:false, data:"bad request"})
})

app.listen(3000, () => { console.log("listen in 3000") })