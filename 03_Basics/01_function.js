// function sumOfNumbers(num1 , num2) {
//     let result = num1+num2
//     return result
// }

//  const result = sumOfNumbers(3,1)

// console.log(result);


function userMessage(userName = "sam") {
    if(!userName){
        console.log("enter your name");
    return
    }

    return `${userName} just logged in `
}

// console.log(userMessage());


function addtoCart(val1,val2,...num) {
    return num
}
// console.log( addtoCart(200 , 500 , 54452,1555,100,55,100));


const user={
    userName:"sania",
    price:199
}

function getObject(anyObject) {
    return`name is ${anyObject.userName } and price is ${anyObject.price}`
}


console.log(getObject({
    userName :"sayan",
    price:199
}
))

 const myArray = [100,200,300,400,500,600]

 function getArray(anyArr) {
    return anyArr[1]
 }

 console.log(getArray(myArray));
 
