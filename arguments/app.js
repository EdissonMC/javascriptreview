
/**EXAMPLE 1 */

// function foo1(a, b, c, ...rest) {

//     console.log("Arguments length : "+ arguments.length)
//     console.log(arguments)

//     console.log("-> Rest of the arguments " )
//     console.log(rest)
// }

// foo1(1, 2, 3, 4,5,6)



/**EXAMPLE 2 */
// function foo2(...rest) {

//     console.log("-> Rest of the arguments :")
//     console.log(rest)
//     console.log("-> " + rest[4])
// }

// foo2("A", "B", "C", "D", "E", "F")


/**EXAMPLE 3 */

// function foo3(p1, p2, p3, ...rest) {

//     console.log("p1 = " + p1 , "p2 = "+ p2, "p3 = "+ p3)
//     console.log("-> Rest of the arguments :")
//     console.log(rest)


// }

// foo3("A", "B", "C", "D", "E", "F")

/**
 * EXAMPLE 3
 * Before parameters rest, arguments 
 * "arguments" have to be converted to an array before used
 */

function f1(a, b) {
    console.log(arguments[0])
    let normalArray = Array.prototype.slice.call(arguments)
    // -- o  --
    normalArray = [].slice.call(arguments)
    // -- o  --
    normalArray = Array.from(arguments)

    let first = normalArray.shift()  // OK, nos da el primer argumento
    // first = arguments.shift()    // ERROR (arguments no es un array)

}
f1(1,2)

// Now , with "rest" its more easy to manipulate the arguments, you coul use directly
function f2(...rest) {
    console.log(rest)
    let normalArray = rest
    let first = normalArray.shift() // OK, gives the first argument
   
}
f2(1,2)


