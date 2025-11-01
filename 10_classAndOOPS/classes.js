class user {
    constructor(username,email,password) {
        this.username = username
        this.email = email
        this.password = password

    }
        encryptPassword(){
            return `${this.password}.com`
        }

}

const user1 = new user("sania","sania@gmail.com","123")
console.log(user1);

console.log(user1.encryptPassword());
