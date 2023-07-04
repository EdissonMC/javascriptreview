
/**
 * In this case function a() and function b()
 * are declared in the global enviroment so 
 * even if function a() its called from function b()
 * and function a() need for x variable , the function a()
 * will look inmediatly in the global enviroment because
 * the really matter here its where function a() was declared
 * and was declared in global enviroment from the start, and
 * in that eviroment x = 20
 */

function a() {
    console.log(x); 
}


function b() {
    const x = 10;
    a(); 
}


const x = 20; 
b();

