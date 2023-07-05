class User{
    constructor(name){
        this.name= name
    }

    sayHi(){
        console.log(this.name)
    }
}

console.log(typeof(User))
const pancho = new User("pancho")

console.log(pancho.sayHi())

/**
 * Her we could se that we could iterate over 
 * the properties but we cant see the methods
 */
for(let x in pancho){
    console.log(x)
}