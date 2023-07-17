
// WAY #1
async function testAsync() {
    return 'done'
}

// console.log(1)
// let res = testAsync()
// res.then(result => console.log(result))
// console.log(res)
// console.log(2)


async function consume() {
    console.log(1)
    let res= await testAsync()
    console.log(res)
    console.log(2)
    // return 'start'
}

consume()


// WAY #2
// function test2(){
//     return new Promise((resolve, reject)=>{
//         resolve(1)
//     })
// }


