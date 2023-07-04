
var outerValue = "pancho"
var later;

function outerFunction() {
    var innerValue = "wancha"
    function innerFunction() {
        console.log("i can see pancho " + outerValue)
        console.log("i can see wancha " + innerValue)
    }
    later = innerFunction;
}

outerFunction()
console.dir(later)
later()
