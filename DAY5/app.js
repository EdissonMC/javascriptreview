// alert("heqwllo");

// OUTPUT 0-1
// for (let x = 1; x < 10; x++) {
//     if (x % 2 == 0) {

//         console.log(x);
//         break;
//     }else{
//         console.log(x);
//     }
// }

// OUTPUT TODOS LOS IMPARES
// for (let x = 1; x < 10; x++) {
//     if (x % 2 == 0) {
//         continue; // omite la siguiente linea
//         console.log(x);
//         // break;
//     }else{
//         console.log(x);
//     }
// }


const a = [1, 3, 5, 3, 3]

const b = a.map(function (elem, i, array) {
    return elem + 3;
})

console.log(b)

const c = a.filter(function (elem, i, array) {
    return elem === 3;
})

console.log(c)


const d = a.find(function (elem, i, array) {
    return elem > 1;
})

console.log(d)

const e = a.reduce(function (accumulator, currentValue, currentIndex, index) {
    return accumulator + currentValue;
})

console.log(e)

function f1(x, y, z) {
    return x + y + z;
}
const f2 = (x, y, z) => {
    return x + y + z;
}
const f3 = (x, y, z) => x + y + z;


let arr =[1,2,3]

const sum = arr.reduce((acc, value)=> acc+value,0)

console.log("sum "+ sum)