
const fs = require('fs')
function load() {
    return new Promise((resolve, reject) => {
        fs.readFile('test.data', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}