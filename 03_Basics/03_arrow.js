const user={
    userName : "sania",
    price : 999,

    wellCome : function(){
        console.log(`Wellcome ${this.userName}`);
        
    }

}

// user.userName = "sayan"
// user.wellCome()


// function add() {
//     let user = "sayan"
//     console.log(this.user);
    
// }


 const chai =  () => {
    console.log(this);
    
}

// ******************implicive Return********************
//  const chai2 =  (num1,num2) => num1 + num2


// ******************using parenthisis**************
//  const chai2 =  (num1,num2) => (num1 + num2)



//  ***********to return an object****************

 const chai2 =  (num1,num2) => ({userName:"sayan"})


console.log(chai2(2,2))