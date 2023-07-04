
/**
 * 
 * Tha really matter for function a()
 * is where its defined , NOT where its called
 * and in that way the engine recovery the value of 
 * the variables using lexicalEnviroment
 */
function b() {
    function a() {
        console.log(x);
    }
    const x = 10;
    a();
}
const x = 20; b();