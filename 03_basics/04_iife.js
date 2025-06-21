// ()();   

// named iife
(function chai(){
    console.log(`DB CONNECTED`);
    
})();


// unnamed iife
(() => {
    console.log(`DB CONNECTED TWO`);
    
})();


((name) => {
    console.log(`${name}`);
    
})("shrawan");


