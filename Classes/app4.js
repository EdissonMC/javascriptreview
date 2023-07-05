class User{
    // THIS IS A PRIVATE VARIABLE IN Class
    #age
    constructor(name){
        this.name= name
        this.id=0;
        this.#age=15
    }

    sayHi(){
        console.log(this.name)
    }
    sayGoodBye(){
        console.log(this.name)
    }

    get Age(){
        return this.#age
    }
    set Age(age){
         this.#age =age
    }
}

// console.log(typeof(User))
const pancho = new User("pancho")

/**
 * We will see in the structure of the User class
 * that the methods will stick to the prototype property of User
 */
console.dir(User)


/**
 * Her we could see that we could iterate over 
 * the properties but we cant see the methods
 * or the properties that has # symbol
 * for that properties we have to access thought setter and getters
 */
for(let x in pancho){
    console.log(x)
}

// Setting a new age value
pancho.Age= 20
// Getting a age
console.log(pancho.Age)