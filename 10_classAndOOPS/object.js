function user(username , price) {
    this.username = username,
    this.price = price
}

user.prototype.increment=function () {
    this.price++
 console.log(`${this.price}`);
 

    
}

const chai = new user("chai",25)
chai.increment()
