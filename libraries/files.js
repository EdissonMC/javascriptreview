
const fs = require('fs');
const path = require('path');


const myPath = path.join(__dirname, 'greet.txt')

let obj = [
    { name: "pancho" },
    { name: "pincho" }
]

fs.writeFileSync(myPath, JSON.stringify(obj))


// READ A FILE

console.log(__dirname); // returns absolute path of current file

const greet = fs.readFileSync(path.join(__dirname, 'greet.txt'), 'utf8');
console.log(greet);


fs.readFile(myPath, 'utf8', function (err, data) {
    console.log(data);
});


console.log('Done!'); // Hello
// Done!
// Hello