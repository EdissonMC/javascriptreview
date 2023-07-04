
let x=1;

// Aqui se hace un closure para el parametro y 
// revisar en scopes y aparece el closure de y
function foo(y){
    return function bar(z){
        return x+y+z;
    }
}


let f= foo(2)

console.dir(f)




// Este es un ejemplo de como es una ejecucion normal
// This take many time
function cal(num){
    let sum=num;
    for(let i= 0; i<1e9 ;i++){
        sum+=i;
    }
    console.log(num)
}

console.log(1)
cal(2);
console.log(5)

// OTRO EJEMPLO PERO USANDO 
setTimeout(cal,1000,2)
console.log(9)
console.log(10)