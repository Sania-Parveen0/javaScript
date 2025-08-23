//singleton

//object litterals

const msl = Symbol("key1")

const jsUser = {
    name:"Sania ",
    [msl]:"mykey1",  //***** 
    id:231001102298,
    age: 20,
    location:"kolkata",
    email:"Sania@gmail.com",
    isLoggedin: false,
    lastLogin:["saturday","sunday"]


}
//  console.log(jsUser.email);
//  console.log(jsUser["email"]);
//  console.log(jsUser[msl]);    //**** 

// Object.freeze(jsUser)
jsUser.email="sania@microsoft.com"
// console.log(jsUser);


jsUser.greetings = function() {
    console.log("hello js user");
    
}
console.log(jsUser.greetings());

jsUser.greetingsTwo = function() {
    console.log(`hello js user ,${this.name}`);
    
}
console.log(jsUser.greetingsTwo());
