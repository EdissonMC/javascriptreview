
const fs = require('fs');
const path = require('path');
let Student = require('./Student').Student


let arr = []
var saveStudents = function () {
    try{
        fs.writeFile(path.join(__dirname, 'data.txt'),

        JSON.stringify(arr), (err) => {
            if (err) throw err;
            console.log('Done');
        });
    }catch(err){
        console.log("error" + err)
    }
 
}



var loadStudents = function () {
    // Reading from a file:

    // fs.readFile(path.join(__dirname, 'data.txt'),
    //     { encoding: 'utf8' },
    //     (err, data) => {
    //         if (err) throw err;
    //         // console.log(data);
    //         if (data.length === 0) {
    //             console.log("its empty")
    //             generateStudents()
    //         } else {
    //             let fileData = JSON.parse(data)
    //             console.log(fileData[0].getName)
    //         }

    //     });

    const data = fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf8');
    console.log(data)

    if (data.length === 0) {
        console.log("its empty")
        generateStudents()
        return  arr
    } else {
        let fileData = JSON.parse(data)
        console.log(fileData[0].getName)
        return fileData
    }
    // for (let i = 0; i < 10; i++) {
    //     const student1 = new Student("pancho" + i, i);
    //     // console.log(student1.stringify())
    //     arr.push(student1)
    //     // console.log(student1.getName)
    // }
    console.log(arr)
    return arr;
}


// exports.generateStudents = function () {
var generateStudents = function () {

    console.log('generating students')

    for (let i = 0; i < 10; i++) {
        const student1 = new Student("pancho" + i, i);
        // console.log(student1.stringify())
        arr.push(student1.getInfo())
    }
    console.log("->   arr length : "+ arr.length)
    saveStudents()
    return arr;
}

// generateStudents()

// loadStudents()
exports.loadStudents = loadStudents
exports.generateStudents = generateStudents
exports.saveStudents = saveStudents