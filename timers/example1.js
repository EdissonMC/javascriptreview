// EXAMPLE #1
// function callback1() {
//     console.log("after 1 seg")
// }

// setTimeout(callback1, 1000)

// EXAMPLE #2
// function callback1() {
//     console.log("after 1 seg")
// }

// setInterval(callback1, 1000)

// EXAMPLE #3
// let counter = 1;
// let idProcess1 = setInterval((word) => {
//     console.log(counter)
//     counter = counter + 1;
//     console.log(word)
//     if(counter===4){
//         clearInterval(idProcess1)
//     }
// }, 1000, "carro")



/**
 * EXAMPLE #4
 * A PROBLEM WITH this KEYWORK IN setTimeOut
 * The references functions we pass in the parameters
 * Will be executing without the correct "this" reference
 * because after the time specified , setTimeout 
 * excecute the function but using "this" that refer to window object
 */
myArray = ['zero', 'one', 'two'];

myArray.myMethod = function (sProperty) {
    console.log(arguments.length > 0 ? this[sProperty] : this);
};

/**
 * if we firt test executing directly from the array
 * everything will be correct
 */
// myArray.myMethod(); // print "zero, one, two"
// myArray.myMethod(1); // print "one"
let function_ref = myArray.myMethod

/**
 * but if we try to execute from setTimeout the 
 * problem pop up and become visible
 */
// console.log("USING function Reference DIRECTLY")
// setTimeout(function_ref , 1000); // imprime "[object Window]" después de un segundo
// setTimeout(function_ref, 1500, "1"); // imprime "undefined" después de 1,5 segundos


/**
 * Also if we try to call the function using the 
 * keyword "call" pasing the custome "this" context
 * we will have the error because the setTimeout need the window object inside
 */
// pasar el objeto 'this' con .cal no funcionará
// porque esto cambiará el valor de 'this' dentro del propio
// setTimeout, mientras que nosotros queremos cambiar el valor
// de 'this' dentro de myArray.myMethod. De hecho, será un error
// porque el código de setTimeout espera que 'this' sea el
// objeto ventana:
// setTimeout.call(myArray, myArray.myMethod, 2000); // error:
// "NS_ERROR_XPC_BAD_OP_ON_WN_PROTO: Illegal operation on
// WrappedNative prototype object"
// setTimeout.call(myArray, myArray.myMethod, 2500, 2); //mismo
// error

/**
 * one way to solve could be use the arrow function
 */

// setTimeout((...args) => {
//     console.log("-> USING ARROW FUNCTION")
//     myArray.myMethod(...args)
// }, 1000);


setTimeout(myArray.myMethod.bind(myArray), 1000);
