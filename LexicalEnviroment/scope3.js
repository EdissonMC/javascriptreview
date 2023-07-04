
/**
 * 
 * For this example the function a is defined inside 
 * of function b, so his first lexicalenviroment is
 * function b, but b dont host any x variable
 * so the engine jump into the next lexialenviroment
 * an for this case is the globalEnviroment the last
 * posible stage where try to find x value
 * 
 */
function b() {
    function a() {
        console.log(x);
    }
    a();
}
const x = 30;
b();

