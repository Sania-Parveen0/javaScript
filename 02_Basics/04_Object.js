//single ton object

const jsUser = {}

jsUser.id=1254565
jsUser.name = "ariyan"
jsUser.isLoggedin = false


const javaUser = {
    email : "sania1020@gmail.com",
    userName :{
        userFullname :{
            firstName : "Sayan",
            lastName : "Patra"
        }
    },
}

// console.log(javaUser.userName.userFullname.firstName);


const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}

//console.log(obj1 , obj2)


//const obj3 = Object.assign({} , obj1 , obj2)
//console.log(obj3);


const obj3 = {...obj1 ,...obj2}
// console.log(obj3);


const user=[
    {
        id:1251 ,
        name:"sania"
    },

    {
        id:1251 ,
        name:"sania"
    },

    {
        id:1251 ,
        name:"sania"
    }
]


// console.log(user[1].id);

console.log(Object.keys(javaUser));
console.log(Object.values(javaUser));

console.log(jsUser.hasOwnProperty('id'));


