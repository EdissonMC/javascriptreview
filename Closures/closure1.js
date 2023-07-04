console.log("closures")


var x = 1;

function foo(y) {
  
  return function(z) {
    return x + y + z;	
  }
}

var f = foo(2);
console.dir("structure of f => ")
console.dir(f);
console.log("------------------")
console.log("result : "+ f(5))




