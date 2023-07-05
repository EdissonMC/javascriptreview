
/**
 * 
 * The next code has a problem and is redundancy, 
 * because each instance has its own function 
 * property that does the same thing, which is redundant and unnecessary. 
 * Instead, we can move getValue to the [[Prototype]] of all boxes:
 */
const boxes = [
    { value: 1, getValue() { return this.value; } },
    { value: 2, getValue() { return this.value; } },
    { value: 3, getValue() { return this.value; } },
];


// HOW WE COULD IMPROVE?
// The next code show, all boxes' implement  getValue method 
// using __proto__, and all boxes will refer to the same function, this will
// lowering memory usage.
const boxPrototype = {
    getValue() {
      return this.value;
    },
  };
  
  const boxesVS2 = [
    { value: 1, __proto__: boxPrototype },
    { value: 2, __proto__: boxPrototype },
    { value: 3, __proto__: boxPrototype },
  ];
  

  /**
   * However, manually binding the __proto__ for every object 
   * creation is still very inconvenient. This is when we would 
   * use a constructor function, which automatically sets the [[Prototype]] 
   * for every object manufactured. Constructors are functions called with new.
   * 
   */

  // A constructor function
function Box(value) {
    this.value = value;
  }
  
  // Properties all boxes created from the Box() constructor
  // will have
  Box.prototype.getValue = function () {
    return this.value;
  };
  
  const boxesVS3 = [new Box(1), new Box(2), new Box(3)];
  console.log("boxesVS3 structure" )
  console.dir(new Box(1))