

/**
 * In this scenary exist a cascade execution 
 * starting with function foo call, and go to 
 * bar and then go to baz and in baz 
 * the function look for z, y, x, and w variables
 * every variable its located in diferente upper 
 * lexical enviroment , except for w that 
 * does not exits , so that search is unsuccessful
 * so give error
 */

let x = 1; 

function foo() {
    let y = 2; 
    
    function bar() {
        let z = 3;
        
        function baz() {
            console.log(z); 
            console.log(y); 
            console.log(x); 
            console.log(w);
        }
        baz();
    }
    bar();
}
foo();

