let animal = {
    name:'Animal',
    eats:true,
    walk: function(){
        console.log("Animal walk")
        console.log("current"+ this)
    }
}

// FIRST INHERITANCE
let rabbit = Object.create(animal)
rabbit.name='Rabbit'
rabbit.jumps= true

console.log("-> rabbit structure: ")
console.dir(rabbit)
rabbit.walk()

// SECOND INHERITANCE
let longEar = Object.create(rabbit)
longEar.earLength=10
longEar.walk()


console.log("longEar structure: ")
console.dir(longEar)

longEar.walk = function(){
    // console.log("otro conejo ")
    console.log("current"+ this)
}
console.log("afeter create walk in longEar : ")

longEar.walk()