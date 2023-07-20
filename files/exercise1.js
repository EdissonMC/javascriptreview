const fs = require('fs')



fs.readFile('data1.txt', (err, data) => {
    console.log("-> text ")

    if (err) throw new Error("file doesnt exist")
    console.log("text : " + data.toString())
})


fs.readFile('data2.txt', (err, data) => {
    console.log("-> json ")

    if (err) throw new Error("file doesnt exist")
    console.log("Json : ")
    console.log(JSON.parse(data))
})