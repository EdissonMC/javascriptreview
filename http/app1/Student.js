// # CS472-07-assignment10

// # Assignment 10 - NPM & HTTP
// ## Create a node project from scratch using `npm init`
// ## Create app.js and setup to run the app with `npm start` and `nodemon`
// ## Create the module `Student` which has followings properties and methods
// 1. Properties:
// * name: The name of this student. It should be private
// * id: The ID of the student. It should be unique in your app
// 2. Methods: 
// * getter/setter of name
// * getInfo: return the information of this student


class Student {
        #name
    constructor(name,id) {
        this.#name = name
        this.id= id
    }

    get getName(){
        return this.#name
    }

    set setName(name){
        this.#name= name
    }

    getInfo(){
        return {
            name:this.#name,
            id:this.id
        }
    }
    // stringify() {
    //     return JSON.stringify({['#name']: this.#name,['id']: this.id})
    //   }
    
    toJSON() {
        // return JSON.stringify({['#name']: this.#name,['id']: this.id})
        return JSON.stringify({['#name']: this.#name,['id']: this.id})
    }

}


module.exports ={
    Student
}