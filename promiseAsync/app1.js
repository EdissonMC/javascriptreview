
/**
 * Example #1
 * A function that has the word async 
 * always return a promise independ of the value that return 
 * So, async ensures that the function returns a promise, 
 * and wraps non-promises in it.
 */
// async function test(){
//     return 1
// }

/**
 * Example #2
 * A function that has the word async 
 * always return a promise independ of the value that return 
 * So, async ensures that the function returns a promise, 
 * and wraps non-promises in it.
 */
// async function test() {
//     return Promise.resolve(1)
// }



/**
 * Example #3
 * Also we could explicity return an Promise
 * and we could use predefined resolve and reject function
 * 
 */
async function test() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            // resolve('done')
            reject('error')
        }, 10)

    })
}


/**
 * TESTING FOR WHOLE EXAMPLES
 */
const result = test()
console.log(result)


result.then(res => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})