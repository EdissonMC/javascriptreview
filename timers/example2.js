console.log("app2")

// let bt1 = document.getElementById("button1")
let titleApp = document.getElementById("titleApp")

console.log(titleApp)
// console.log(bt2)

let timer;
function startColor() {
    console.log("START...")
    // const titleApp = document.getElementById("titleApp");


    let flag = false;

    function rotateColor() {
        // titleApp  = document.getElementById("titleApp");

        if (flag) {
            titleApp.className = "black";
        } else {
            titleApp.className = "green";
        }
        flag = !flag

    }

    timer = setInterval(rotateColor, 2000)
}




function stopColor() {
    console.log("STOP...")
    clearInterval(timer)
}