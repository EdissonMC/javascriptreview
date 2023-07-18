
const fs = require('fs')

function load() {
    return new Promise((resolve, reject) => {
        fs.readFile('test.txt', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}



async function checkfile() {
    const result = await load()
    console.log(JSON.parse(result))
}

// checkfile()


async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 2000)
    });

    let result = await promise; // wait until the promise resolves (*)

    console.log(result); // "done!"
    console.log("-> more code inside function .......")
    console.log("-> more code inside function .......")
}


f();

console.log("more code Outside function .......")
console.log("more code Outside function .......")
console.log("more code Outside function .......")
console.log("more code Outside function .......")


