
/**
 * 
 * This code show you create an object using keyword new
 */
function User(name){
    this.name=name
    this.id=123
    this.walk= function(){
        console.log("i could talk")
    }
}


// HERE WE ARE USING prototype FOR ADD NEW METHODS
// TO THE User
User.prototype.getName= function(){
    return this.name
}

// FIRST USER
let pancho = new User("pancho")
console.log("pancho object")
console.dir(pancho)
console.log("get name from function : "+ pancho.getName())


// SECOND USER
let wancha = new User("wancha")
console.log("pancho object")
console.dir(wancha)
console.log("get name from function : "+ wancha.getName())