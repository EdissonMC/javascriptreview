const parent = {
    value: 2,
    cal: function () {
        return this.value + 1
    }

}

console.log("result from parent " + parent.cal())

const child = {
    __proto__: parent
}

console.log("result from child " + child.cal())

/*
* NOW WE WILL CREATE A NEW value INSIDE child OBJECT
* AND WE WILL SHOW THE RESULT
*/
child.value = 4

console.log("with value 4, the result from child " + child.cal())
