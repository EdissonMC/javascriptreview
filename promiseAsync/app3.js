let promise = new Promise((resolve, reject) => {
    resolve(1)
})

promise.then(res => {
    console.log(res)
    return 2
}).then(res => {
    console.log(res)
    return new Promise((resolve, reject) => {
        reject('error 1')
    })
}).then((res=>{
    console.log("other then...")
})
.catch(err => {
    return new Promise((resolve, reject) => {
        reject('error 1')
    })
}).catch(err => {
    console.log(err)
}).then(res => {
    console.log(res)
})