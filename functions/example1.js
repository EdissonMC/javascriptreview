

/**
 * 1.
 * Normal functions definition
 * This let you call wherever place in the code , 
 * even before his declaration
//  */
// console.log(sum1(1, 2)) //3
// function sum1(a, b) {
//     return a + b
// }

/**
 * when you show the reference of the function in a console log
 * you will see that the name of the function appear
 */
// console.log(sum1)


/**
 * Function Expressions
 * A function expression is a function that 
 * is not pre-loaded into the execution context, 
 * and only runs when the code encounters it.
 * But if you try to call before definition of the function
 * you will get a error, 
 * ReferenceError: Cannot access 'sum2' before initialization
 */
// sum2(1,2)
// const sum2 = (a, b) => {
//     if (!a || !b) throw new Error("error testing...")
//     return a + b
// }

// console.log(sum2)

/**
 * If you try to whiout one of the parameters
 * you will get an error, if you check the terminal
 * you will get an idea of the function where come 
 * from the error
 * Output
 * Uncaught Error: Parameters are required.
 *  at namedSumFunction (<anonymous>:3:23)
 *  at <anonymous>:1:1
*/
// sum2(1)


/**
 * Now we will look into arrow functions
 * Arrow functions are not hoisted, 
 * and so you cannot call them before you declare them. 
 * They are also always anonymou 
 * is no way to name an arrow function.
 * The biggest functional differences are that arrow functions 
 * do not have their own 'this' binding or 
 * prototype and cannot be used as a -constructor-. 
 */

// const sum3 = (a, b) => {
//     if (!a || !b) throw new Error("error testing...")
//     return a + b
// }
// sum3(1)
// console.log(sum3)


/**
 * Lexical 'this' 
 * Arrow functions have lexical this, meaning the value 
 * of this is determined by the surrounding 
 * scope (the lexical environment).
 * 
 * In the following printNumbers object, 
 * there are two properties: phrase and numbers. 
 * There is also a method on the object, loop, 
 * which should print the phrase string and 
 * the current value in numbers:
 */

// const printNumbers1 = {
//     phrase: 'The current value is:',
//     numbers: [1, 2, 3, 4],

//     loop() {
//         this.numbers.forEach(function (number) {
//             console.log(this.phrase, number)
//         })
//     },
// }

/**
 * One might expect the loop function to print the string 
 * and current number in the loop on each iteraton. 
 * However, in the result of running the function 
 * the phrase is actually undefined
 * As this shows, this.phrase is undefined, 
 * indicating that this within the 
 * anonymous function passed into the forEach method 
 * does not refer to the printNumbers object. 
 * This is because a traditional function will not determine 
 * its this value from the scope of the environment, 
 * which is the printNumbers object.
 */

// printNumbers1.loop()


/**
 * In older versions of JavaScript, 
 * you would have had to use the bind method, 
 * which explicitly sets this
 * Use bind to fix the function:
 */

// const printNumbers2 = {
//   phrase: 'The current value is:',
//   numbers: [1, 2, 3, 4],

//   loop() {
//     // Bind the `this` from printNumbers to the inner forEach function
//     this.numbers.forEach(
//       function (number) {
//         console.log(this.phrase, number)
//       }.bind(this),
//     )
//   },
// }

/**
 * This will give the expected result:
 *   Output
 *   The current value is: 1
 *   The current value is: 2
 *   The current value is: 3
 *   The current value is: 4
 */
// printNumbers2.loop()


/**
 * Arrow functions provide a more direct way of dealing with this. 
 * Since their this value is determined based on the lexical scope, 
 * the inner function called in forEach can now access 
 * the properties of the outer printNumbers object, as demonstrated:
 */

// const printNumbers3 = {
//     phrase: 'The current value is:',
//     numbers: [1, 2, 3, 4],

//     loop() {
//         this.numbers.forEach((number) => {
//             console.log(this.phrase, number)
//         })
//     },
// }

/**
 * This will give the expected result:
 *   Output
 *   The current value is: 1
 *   The current value is: 2
 *   The current value is: 3
 *   The current value is: 4
 */
// printNumbers3.loop()



/**
 * Arrow Functions as Object Methods
 * While arrow functions are excellent as parameter functions
 * passed into array methods, they are not effective 
 * as object methods because of the way they use lexical scoping 
 * for this. Using the same example as before, 
 * take the loop method and turn it into an arrow 
 * function to discover how it will execute
 */

// const printNumbers4 = {
//     phrase: 'The current value is:',
//     numbers: [1, 2, 3, 4],

//     loop: () => {
//         this.numbers.forEach((number) => {
//             console.log(this.phrase, number)
//         })
//     },
// }

/**
 * In this case of an object method, 
 * this should refer to properties and methods of 
 * the printNumbers object. However, since an object 
 * does not create a new lexical scope, 
 * an arrow function will look beyond 
 * the object for the value of this.
 * Call the loop() method:
 * 
 * Output
 * Uncaught TypeError: Cannot read property 'forEach' of undefined
 * 
 * Since the object does not create a -lexical scope-, 
 * the arrow function method looks for 'this' in the 
 * outer scope–Window in this example. 
 * Since the numbers property does not exist on the Window object, 
 * it throws an error. As a general rule, 
 * it is safer to use traditional functions 
 * as object methods by default.
 */

// printNumbers4.loop()


/**
 * Arrow Functions Have No constructor or prototype
 * Normal functions has an object called Constructor
 */
// function myFunction() {
//     this.value = 5
//   }
  

/**
 * This will print the following to the console:
 * Log the prototype property of myFunction
 * Output
 * {constructor: ƒ}
 * This shows that in the prototype property 
 * there is an object with a constructor. 
 * This allows you to use the new keyword 
 * to create an instance of the function:
*/
//   console.log(myFunction.prototype)

/**
 * This allows you to use the new keyword 
 * to create an instance of the function:
 */
// const instance = new myFunction()
// console.log(instance.value)

/**
 * In contrast, arrow functions do not have a prototype property. 
 * Create a new arrow function and try to log its prototype:
 */
// const myArrowFunction = () => {}

// Attempt to log the prototype property of myArrowFunction
/**
 * This will give the following:
 * Output :
 *     undefined
 */
// console.log(myArrowFunction.prototype)

/*
* As a result of the missing prototype property, 
* the new keyword is not available and you cannot construct 
* an instance from the arrow function:
* This will give the following error:
* Output
* Uncaught TypeError: myArrowFunction is not a constructor
* This is consistent with our earlier example: 
* Since arrow functions do not have their own this value, 
* it follows that you would be unable to 
* use an arrow function as a constructor.
*/
// const arrowInstance = new myArrowFunction()

// console.log(arrowInstance)