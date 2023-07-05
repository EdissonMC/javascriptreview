/**
 * Because Box.prototype references the same object 
 * as the [[Prototype]] of all instances, we can change 
 * the behavior of all instances by mutating Box.prototype.
 */


function Box(value) {
    this.value = value;
}

Box.prototype.getValue = function () {
    return this.value;
};

const box = new Box(1);

console.log(box.getValue()); // 2


// Now we will mutate Box.prototype after an instance has already been created
Box.prototype.getValue = function () {
    return this.value + 10;
};
console.log(box.getValue()); // 2
