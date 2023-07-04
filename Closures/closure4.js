
var outerValue = "pancho"
var later;

function outerFunction(newname) {
    var innerValue = "wancha"
    function innerFunction() {
        console.log("i can see pancho " + outerValue)
        console.log("i can see wancha " + innerValue)
        console.log("i can see antiguo Nombre " + tooLate)
        console.log("i can see newname " + newname)
    }
    later = innerFunction;
}

console.log("aun no puedo ver tooLate =" + tooLate)
var tooLate = "antiguo Nombre"

outerFunction("pancho")

console.dir(later)

later()
