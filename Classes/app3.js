class User{
    constructor(name){
        this.name= name
        this.id=0;
    }

    sayHi(){
        console.log(this.name)
    }
    sayGoodBye(){
        console.log(this.name)
    }
}

// console.log(typeof(User))
const pancho = new User("pancho")

/**
 * We will see in the structure of the User class
 * that the methods will stick to the prototype property of 
 */
console.dir(User)