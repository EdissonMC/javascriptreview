console.log("closures")


var x = 1;

function foo(y1) {
    // y2 = y1
    return function () {
        return function (z) {
            return x + y1 + z; //1 + 2 + 5
        }
    }
}

var f1 = foo(2); // y2= 2
console.dir("structure of f1 => ")
console.dir(f1);
console.log("------------------")
var f2 = f1();
console.dir("structure of f2 => ")
console.dir(f2);
console.log("------------------")
console.log("result : " + f2(5))

