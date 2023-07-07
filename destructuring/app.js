

let person = {
    firstName: 'Pancho',
    lastName: 'Doe',
    // age: 20
};

/**EXAMPLE 1 Simple destructuring*/
// let { firstName, lastName } = person;
// console.log("firstName  : " + firstName)
// console.log("lastName  : " + lastName)

/**EXAMPLE 2 Destructuring to specific name of variables*/
// let { firstName: nombre, lastName: apellido, age: edad = 18 } = person;
// console.log("nombre " + nombre)
// console.log("apellido " + apellido)
// console.log("edad " + edad)

   
/**EXAMPLE 3 Deep destructuring*/
let employee = {
    id: 1001,
    name: {
        firstName1: 'Poncho',
        lastName2: 'Doe'
    }
};


let {
    name: {
        firstName1:nombre1,
        lastName2:apellido1
    }
} = employee;

let copy = {...employee}
console.log("copy structure... ")
console.log(copy)
console.log(nombre1, apellido1 )