//Dates

let myDate = new Date()
//console.log(myDate.toString()); //Thu Aug 21 2025 18:41:57 GMT+0000 (Coordinated Universal Time)

//console.log(myDate.toDateString()); //Thu Aug 21 2025 18:42:33 GMT+0000 (Coordinated Universal Time Thu Aug 21 2025

//console.log(myDate.toISOString()); //2025-08-21T18:44:39.892Z

//console.log(myDate.toJSON()); //2025-08-21T18:45:49.450Z

//console.log(myDate.toLocaleDateString()); // 8/21/2025

// console.log(myDate.toLocaleString()); //8/21/2025, 6:48:48 PM

// console.log(myDate.toUTCString());  //8/21/2025, 6:49:54 PM Thu, 21 Aug 2025 18:49:54 GMT


// console.log(typeof myDate); //object

 let myCreatedDate = new Date("2023-01-14")

// console.log(myCreatedDate.toLocaleString());



let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());

// console.log( Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());

