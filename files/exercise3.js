const fs = require('fs').promises


fs.readFile('data1.txt')
    .then((result) => {
        console.log(result.toString())
    }).catch(err => {
        console.log("-> Error : " + err)
    })

fs.readFile('data2.txt')
    .then((result) => {
        console.log(JSON.parse(result))
    }).catch(err => {
        console.log("-> Error : " + err)
    })