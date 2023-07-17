// ## Create a module `Util` which has the following functions
// 1. saveStudents: Save all students to a file
// 2. loadStudents: Load all students from a file. If the file is empty or not existed, use the next function to initialize data.
// 3. generateStudents: Generate 10 students and save it to file.
// ## Create a server listen on port `3000` using `http` which satisfies the followings:
// * GET http://localhost:300/students: Return all students
// ## Please load the students from the file when starting the app
// ## Please submit this by 2:30 PM 

const http= require('http')
const fs= require('fs')
const path = require('path')
const util = require('./Util')

const Student = require('./Student').Student

const listStudents = util.loadStudents()
console.log("lista : " + listStudents)

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // console.log(req)
    let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

    let studentsHtml = listStudents.reduce((accu, student) => {
        return accu + "<h2>" + student.name + "</h2>"
    }, "")
    
    console.log(studentsHtml)
    // html = html.replace('{students}', JSON.stringify(listStudents) );
    html = html.replace('{students}', studentsHtml );

    res.end(html);

}).listen(3000, '127.0.0.1', () => { console.log('listening on 3000...') });

