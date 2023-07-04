let animal = {
    name:'Animal',
    eats:true,
    walk: function(){
        console.log("Animal walk")
    }
}

// FIRST INHERITANCE
let rabbit = Object.create(animal)
rabbit.name='Rabbit'
rabbit.jumps= true
console.dir(rabbit)
rabbit.walk()

// SECOND INHERITANCE
let longEar = Object.create(rabbit)
longEar.earLength=10
longEar.walk()
console.log("longEar structure: ")
console.dir(longEar)

longEar.walk= function(){
    console.log("otro conejo ")
}
console.log("afeter create walk in longEar : ")

longEar.walk()