/* primitive
    7 types: string , number , boolean , null , undefind , symbol , Bigint ,  

    call by value
*/

const id = Symbol('123')

const bigNumber = 126845588457555n

/* reference(non primitive)

    Array , objects , functions

*/
const heros = ["shaktiman" , "naagraj" , "doga"]

let myObj= {
    name: "sania",
    age: 20,
}

 const  muFunction = function () {
    console.log("hello world");
    
}

console.log(typeof bigNumber)


// **********************************************************************************************
//***************************************Memory**************************************************
/* Stack(primitive) , Heap(non-primitive)


*/

let myYoutubename = "sania_sayan_patra"
let anotherName = myYoutubename
 anotherName = "sayan patra"


console.log(anotherName);
console.log(myYoutubename);

let user = {
    email: "fdthjffgj.com",
    upi: "vdtrfb@255"
}

let user2 = user

user2.email = "sania@g.com"

console.log(user.email)
console.log(user2.email)

