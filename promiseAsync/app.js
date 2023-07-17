function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('done')
            reject('error')
        }, 10)

        for(let i=0 ; i<1e100;i++){
          continue
        }

    })
}

const result = test()
console.log(result)


result.then(res => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})