let animal = {
    eats: true,
    walk: function () {
        console.log("walking")
    }
}



let rabbit = Object.create(animal)
rabbit.jumps = true
rabbit["jumps"] = true

// THIS SHOW ONLY THE ANIMAL
console.log(Object.keys(rabbit))


// THIS WAY SHOW ALL PROPERTIES OWN AND INHERITED PROPERTIES
// ALSO NOTE WE ARE USING 'in' FOR CHECK THE PROPERTIES OF rabbit OBJECT
for (let x in rabbit) { 
    console.log(x) 
}

console.log("VALUES OF RABBIT")
for (let x of Object.values(rabbit)) { 
    console.log(x) 
}

console.log("VALUES OF ANIMAL")
for (let x of Object.values(animal)) { 
    console.log(x) 
}

/**
 * 
 * WE COULD FILTER THE PROPERTIES THAT ARE PART OF THE CURRENT OBJECT
 * 
 */
console.log("FILTERING THE PROPERTIES...")
for (let x in rabbit) { 
   if(rabbit.hasOwnProperty(x)){
    console.log("MY PROPERTY " + x) 
   }
   
}