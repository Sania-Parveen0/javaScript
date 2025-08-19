const accountId = 144553
let accountEmail = "saniaparveen@gmail.com"
var accountPassword="12345"
accountCity="kolkata"

let accountState;

// accountId = 215  //not allowed
accountEmail = "saniaparveen124@gmail.com"
accountPassword="sania_542"
accountCity = "durgapur"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId , accountPassword, accountEmail,accountCity, accountState])




