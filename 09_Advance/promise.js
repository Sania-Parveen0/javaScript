// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("timrout printed");
//         resolve()
//     },1000)
// })
// promiseOne.then(function () {
//     console.log("resolve also complete");
    
// })

// new Promise((resolve, reject) => {
//         setTimeout(function () {
//         console.log("timrout printed 2");
//         resolve()
//     },1000)
// })
// .then(function () {
//         console.log("resolve also complete 2");

// })

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve({name:"sania",email:"example.com"})
//     },1000)
// })
// .then(function (user) {
    
//     console.log(user);
    
// })

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         const error = true;
//         if (!error) {
//              resolve({name:"sania",password:123})
//         }
//         else{
//             reject("ERROR: something went wrong")
//         }
//     },1000)
// })
// .then(function (user) {
//     console.log(user);
//     return user.name
// })
// .then(function (username) {
//     console.log(username);
    
// })
// .catch(function (error) {
//     console.log(error);
    
// })
// .finally(function () {
//     console.log("resolve or reject");
    
// })

// const PromiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//             const error = true;
//         if (!error) {
//              resolve({name:"sania",password:123})
//         }
//         else{
//             reject("ERROR: something went wrong")
//         }
//     }, 1000);
// })

// async function consumePromise() {
//     try {
//         const response = await PromiseFive
//     console.log(response);
//     } catch (error) {
//         console.log(error);
        
//     }
     
// }
// consumePromise()

async function getUsers() {
   try {
    const  response =  await fetch('https://api.github.com/users/hiteshchoudhary')
    
    const  data =  await response.json()
    console.log(data);
   } catch (error) {
    console.log("E",error);
    
   }
    
}

getUsers()