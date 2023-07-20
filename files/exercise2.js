const fs = require('fs').promises;


async function readFileSimple() {
    const data = await fs.readFile('data1.txt', 'utf8');
    console.log(data)
}

// readFileSimple()


async function readFileJson() {
    const data = await fs.readFile('data2.txt', 'utf8');
    console.log(JSON.parse(data))
}

readFileJson()