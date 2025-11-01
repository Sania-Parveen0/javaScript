function SetUserName(username){
    this.username = username,
    console.log("called");
}

function user(username,email,password) {
    SetUserName.call(this, username)
    this.email = email
    this.password = password
}

const user1 = new user("sayan Patra", "sayan.com","123")
console.log(user1);
