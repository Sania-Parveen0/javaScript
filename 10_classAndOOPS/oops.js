// const user={
//   username:"sania",
//   age:23,
//   loggedIn:true,
//   getUserDetails: function () {
//     // console.log(`the user is ${this.username}`);
//     console.log(this);
    
    
//   }

// }

// // console.log(user.username);
// console.log(user.getUserDetails());

//  console.log(this);


const Users = function (username,login,age) {
  this.username=username,
  this.login=login,
  this.age=age
  return this

}

const userOne = new Users("sayan",true,22)
console.log(userOne);
