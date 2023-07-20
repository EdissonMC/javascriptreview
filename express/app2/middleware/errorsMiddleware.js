
function error500(err, req, res, next) {
    console.log("going throug error 500 " + err)
    if (err.code === "500") {

        res.status(500).send("error 500")
    } else {
        console.log("not this error so, go to 404")
        next(err)
    }
}
// exports.error500 = (err, req, res, next) => {
//     console.log("going throug error 500 " + err)
//     if (err.code === "500") {

//         res.status(500).send("error 500")
//     } else {
//         console.log("not this error so, go to 404")
//         next(err)
//     }
// }
function error404(err, req, res, next) {
    console.log("going throug error 404 " + err)
    if (err.code === "404") {
        console.log("ERRO 404 DETECTED , sending message")
        res.status(404).send("error 404")
    } else {
        next()
    }
    // res.status(404).send("error 404")
}

module.exports = {
    error500,
    error404
}