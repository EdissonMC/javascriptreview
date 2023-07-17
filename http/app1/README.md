# CS472-07-assignment10

# Assignment 10 - NPM & HTTP
## Create a node project from scratch using `npm init`
## Create app.js and setup to run the app with `npm start` and `nodemon`
## Create the module `Student` which has followings properties and methods
1. Properties:
* name: The name of this student. It should be private
* id: The ID of the student. It should be unique in your app
2. Methods: 
* getter/setter of name
* getInfo: return the information of this student
## Create a module `Util` which has the following functions
1. saveStudents: Save all students to a file
2. loadStudents: Load all students from a file. If the file is empty or not existed, use the next function to initialize data.
3. generateStudents: Generate 10 students and save it to file.
## Create a server listen on port `3000` using `http` which satisfies the followings:
* GET http://localhost:300/students: Return all students
## Please load the students from the file when starting the app
## Please submit this by 2:30 PM 
