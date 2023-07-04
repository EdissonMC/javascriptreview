// EJEMPLO1
 
let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};

setTimeout(user.sayHi, 2000);  // dont show firstnae




// user.sayHi(); //works
// Este no funciona por que no se llama de una a la fucion 
// su llamador es setTimeout
// setTimeout(user.sayHi, 2000);  // dont show firstnae

// EJEMPLO2
// debemos tener encuenta que setFrench no es una propiedad de user
// en este caso el this que esta dentro de setFrench ser referira a
// el objeto window y por eso no cambia la propiedad salute
// const user = {
//     salute: "",
//     greet: function () {
//         this.salute = "Hello";
//         console.log(this.salute); //Hello
//         const setFrench = function (newSalute) { //inner function
//             this.salute = newSalute;
//         };
//         setFrench("Bonjour");
//         console.log(this.salute); //Bonjour??
//     }
// };
// user.greet(); //Hello Hello ??

// EJEMPLO 3
// const myObject= {
//     name:"panchito",
//     llamar:function (){
//         // console.log(this)
//         // const inner1=()=>{
//         //     console.log(this)
//         // }
//         // inner1()

//         const inner2=function(){
//             console.log(this)
//         }
//         inner2()
//     }
// }
// // myObject.llamar()
// myObject.llamar();


// function clickButton(){
//     console.log("haciendo click")
// }