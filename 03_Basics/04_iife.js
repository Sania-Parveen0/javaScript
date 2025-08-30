// imidiately invoked function expression (IIFE)


(function heart (){
    console.log(`DB connected`);
    
})();


( (name) =>{
    console.log(`DB also connected ${name}`);
    
})("sania")