/**
 * FETCHING DATA using 'then' for manage the promes,
 * but in this case the 'then' will wrap the behavior 
 * of the response and dont have to stop inmediatly 
 * after make the fetch, but insted continue 
 * running the code, both inside of the function and
 * the code outside of the function
 */

const fetchStoreWithThen = () => {
    console.log("-> Go inside fetch data..")


    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            console.log("-> Data recovery")
            // data.forEach(element=>console.log("element "))
        })


    console.log("-> End fetching data..")
    console.log("-> more code Inside of function")
}

/**
 * FETCHING WITH AWAIT 
 * This segment of the code will wait until 
 * fetch and response.json() be solved
 * So the code after that statments of the code
 * will be stoped,but the code   
 * outside of the scope of function fetchStoreWithAwait()
 * will continue running.
 */
const fetchStoreWithAwait = async () => {
    console.log("-> Go inside fetch data..")

    const response = await fetch('https://fakestoreapi.com/products')
    const data= await response.json()
    console.log("Data recovery..... + data")

    console.log("-> End fetching data..")
    console.log("-> more code Inside of function")
}


// ANALYSIS 
console.log("-> Before calling fetch data..")

// Try this one 
// fetchStoreWithThen()  

// Or Try this one no both at same time
fetchStoreWithAwait()


console.log("-> After calling fetch data..")



console.log("-> more outside...")
console.log("-> more outside...")
console.log("-> more outside...")
console.log("-> more outside...")

